# Tiny Shop: product requirements

1. The home page lists every product with its name and price. Products that are on sale show a "Sale" tag.
2. "Add to cart" adds one unit of that product. The cart shows each product, its quantity and its line total, and the quantity can be changed or the product removed.
3. Coupon code SAVE10 takes 10% off the price of every eligible item in the cart.
4. Items on sale are not eligible for coupons. A coupon never reduces the price of a sale item.
5. An unknown coupon code shows "Invalid code" and leaves the total unchanged.
6. Shipping costs $5.00. Orders of $50.00 or more ship free. The $50.00 threshold is checked after the coupon discount.
7. Total = subtotal − coupon discount + shipping.
8. Checkout places the order and shows a confirmation with an order number and the total charged.
9. The total charged on the confirmation equals the total shown in the cart just before checkout.
10. The cart and an applied coupon survive a page reload.
