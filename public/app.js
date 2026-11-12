// Tiny Shop storefront. Prices come from pricing.js, products from products.js.

const storage = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage unavailable */ }
  },
};

const state = {
  cart: storage.get('cart', []),
  coupon: storage.get('coupon', ''),
  order: null,
};

function save() {
  storage.set('cart', state.cart);
  storage.set('coupon', state.coupon);
}

function currentQuote() {
  return Pricing.quote(state.cart, CATALOG, state.coupon);
}

// ----- helpers -----

const $ = (id) => document.getElementById(id);
const money = (n) => `$${Number(n).toFixed(2)}`;

// ----- product list -----

function renderProducts() {
  $('products').innerHTML = CATALOG.map((p) => `
    <article class="card" data-testid="product-${p.id}">
      <div class="art">${ART[p.id] || ''}</div>
      <h3>${p.name}</h3>
      <div class="price">
        <span>${money(p.price)}</span>
        ${p.compareAtPrice && p.compareAtPrice > p.price ? `<span class="was">${money(p.compareAtPrice)}</span> <span class="tag">Sale</span>` : ''}
      </div>
      <button type="button" data-add="${p.id}">Add to cart</button>
    </article>`).join('');
}

function render() {
  renderCart();
}

// ----- cart -----

function addToCart(id) {
  state.order = null;
  const line = state.cart.find((l) => l.id === id);
  if (line) line.qty += 1;
  else state.cart.push({ id, qty: 1 });
  save();
  render();
}

function setQty(id, qty) {
  state.cart = qty <= 0
    ? state.cart.filter((l) => l.id !== id)
    : state.cart.map((l) => (l.id === id ? { ...l, qty } : l));
  save();
  render();
}

function renderCart() {
  const count = state.cart.reduce((n, l) => n + l.qty, 0);
  $('cart-count').textContent = `Cart (${count})`;

  if (state.order) {
    $('cart-body').innerHTML = `
      <div class="confirmation" data-testid="confirmation">
        <strong>Order ${state.order.id} is confirmed.</strong>
        <span>Total charged: <span data-testid="charged">${money(state.order.total)}</span></span>
        <button type="button" class="secondary" id="continue-shopping">Continue shopping</button>
      </div>`;
    return;
  }

  const q = currentQuote();
  if (q.lines.length === 0) {
    $('cart-body').innerHTML = '<p class="empty">Your cart is empty.</p>';
    return;
  }

  const saleSavings = q.lines.reduce((sum, l) => {
    const p = CATALOG.find((x) => x.id === l.id);
    return sum + (p && p.compareAtPrice && p.compareAtPrice > p.price
      ? (p.compareAtPrice - p.price) * l.qty
      : 0);
  }, 0);

  $('cart-body').innerHTML = `
    ${saleSavings > 0 ? `<p class="savings" data-testid="savings-banner">● You're saving ${money(saleSavings)} with sale prices</p>` : ''}
    ${q.lines.map((l) => `
      <div class="line" data-testid="line-${l.id}">
        <span class="line-name">${l.name}</span>
        <span class="line-total">${money(l.lineTotal)}</span>
        <span class="qty">
          <button type="button" class="secondary" data-qty="${l.id}" data-delta="-1" aria-label="Decrease ${l.name}">−</button>
          <span>Qty ${l.qty}</span>
          <button type="button" class="secondary" data-qty="${l.id}" data-delta="1" aria-label="Increase ${l.name}">+</button>
        </span>
        <button type="button" class="link" data-remove="${l.id}">Remove</button>
      </div>`).join('')}

    <div class="coupon">
      <label class="sr-only" for="coupon-code">Coupon code</label>
      <input id="coupon-code" data-testid="coupon-code" type="text" placeholder="Coupon code" value="${q.couponCode}" autocomplete="off">
      <button type="button" class="secondary" id="apply-coupon" data-testid="apply-coupon">Apply</button>
    </div>
    <p class="coupon-msg ${q.couponCode ? 'ok' : ''}" id="coupon-msg" data-testid="coupon-message">${q.couponCode ? `${q.couponCode} applied. <button type="button" class="link" id="remove-coupon" data-testid="remove-coupon">Remove</button>` : ''}</p>

    <table class="totals">
      <tr><td>Subtotal</td><td data-testid="subtotal">${money(q.subtotal)}</td></tr>
      ${q.couponCode ? `<tr><td>Coupon (${q.couponCode})</td><td data-testid="coupon-discount">-${money(q.couponDiscount)}</td></tr>` : ''}
      <tr><td>Shipping</td><td data-testid="shipping">${q.shipping === 0 ? 'Free' : money(q.shipping)}</td></tr>
      <tr class="total"><td>Total</td><td data-testid="total">${money(q.total)}</td></tr>
    </table>

    <button type="button" class="checkout" id="checkout">Checkout</button>`;
}

function applyCoupon() {
  const input = $('coupon-code');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (!Pricing.isValidCoupon(code)) {
    const message = $('coupon-msg');
    if (message) {
      message.textContent = 'Invalid code';
      message.className = 'coupon-msg error';
    }
    return;
  }

  state.coupon = code;
  save();
  render();
}

function removeCoupon() {
  state.coupon = '';
  save();
  render();
}

function checkout() {
  const q = currentQuote();
  if (q.lines.length === 0) return;
  const n = storage.get('orderCount', 0) + 1;
  storage.set('orderCount', n);
  state.order = { id: `TS-${1000 + n}`, total: q.total };
  state.cart = [];
  state.coupon = '';
  save();
  render();
}

document.addEventListener('click', (e) => {
  const t = e.target.closest('button');
  if (!t) return;
  if (t.dataset.add) addToCart(t.dataset.add);
  else if (t.dataset.qty) {
    const line = state.cart.find((l) => l.id === t.dataset.qty);
    setQty(t.dataset.qty, (line ? line.qty : 0) + Number(t.dataset.delta));
  } else if (t.dataset.remove) setQty(t.dataset.remove, 0);
  else if (t.id === 'apply-coupon') applyCoupon();
  else if (t.id === 'remove-coupon') removeCoupon();
  else if (t.id === 'checkout') checkout();
  else if (t.id === 'continue-shopping') { state.order = null; render(); }
});

renderProducts();
render();

document.addEventListener('keydown', (e) => {
  if (e.target && e.target.id === 'coupon-code' && e.key === 'Enter') {
    e.preventDefault();
    applyCoupon();
  }
});
