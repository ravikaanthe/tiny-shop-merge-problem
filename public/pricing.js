window.Pricing = (() => {
  const SHIPPING_FEE = 5;
  const FREE_SHIPPING_MIN = 50;
  const COUPONS = { SAVE10: 0.10 };

  const round2 = (n) => Math.round(n * 100) / 100;
  const normalizeCoupon = (code) => String(code || '').trim().toUpperCase();
  const isValidCoupon = (code) => Object.prototype.hasOwnProperty.call(COUPONS, normalizeCoupon(code));

  function quote(items, catalog, couponCode = '') {
    const lines = [];
    for (const { id, qty } of items) {
      const product = catalog.find((p) => p.id === id);
      const n = Math.max(0, Math.floor(Number(qty) || 0));
      if (!product || n === 0) continue;
      lines.push({
        id,
        name: product.name,
        price: product.price,
        qty: n,
        lineTotal: round2(product.price * n),
        onSale: product.onSale === true,
      });
    }

    const subtotal = round2(lines.reduce((sum, l) => sum + l.lineTotal, 0));
    const appliedCoupon = isValidCoupon(couponCode) ? normalizeCoupon(couponCode) : '';
    const eligibleSubtotal = round2(lines.reduce(
      (sum, l) => sum + (l.onSale ? 0 : l.lineTotal),
      0,
    ));
    const couponDiscount = appliedCoupon
      ? round2(eligibleSubtotal * COUPONS[appliedCoupon])
      : 0;
    const discountedSubtotal = round2(subtotal - couponDiscount);
    const shipping = lines.length === 0 || discountedSubtotal >= FREE_SHIPPING_MIN
      ? 0
      : SHIPPING_FEE;
    const total = round2(discountedSubtotal + shipping);

    return {
      lines,
      subtotal,
      couponCode: appliedCoupon,
      couponDiscount,
      eligibleSubtotal,
      shipping,
      total,
    };
  }

  return { quote, isValidCoupon, SHIPPING_FEE, FREE_SHIPPING_MIN };
})();
