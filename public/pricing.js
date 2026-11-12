window.Pricing = (() => {
  const SHIPPING_FEE = 5;
  const FREE_SHIPPING_MIN = 50;

  const round2 = (n) => Math.round(n * 100) / 100;

  function quote(items, catalog) {
    const lines = [];
    for (const { id, qty } of items) {
      const product = catalog.find((p) => p.id === id);
      const n = Math.max(0, Math.floor(Number(qty) || 0));
      if (!product || n === 0) continue;
      lines.push({ id, name: product.name, price: product.price, qty: n, lineTotal: round2(product.price * n) });
    }

    const subtotal = round2(lines.reduce((sum, l) => sum + l.lineTotal, 0));
    const shipping = lines.length === 0 || subtotal >= FREE_SHIPPING_MIN ? 0 : SHIPPING_FEE;
    const total = round2(subtotal + shipping);

    return { lines, subtotal, shipping, total };
  }

  return { quote, SHIPPING_FEE, FREE_SHIPPING_MIN };
})();
