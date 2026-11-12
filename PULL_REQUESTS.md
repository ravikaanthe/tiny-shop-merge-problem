# Pull requests

Open both into `main`. Paste the title and the description.

## Pull request 1

**Branch:** `pr-1-coupons`

**Title:** Add coupon codes

**Description:**

Adds coupon codes at checkout. SAVE10 takes 10% off every regular item in the cart. Sale items are skipped, as PRD.md item 4 requires: the coupon checks each product's `onSale` flag. An unknown code shows "Invalid code" and leaves the total unchanged.

## Pull request 2

**Branch:** `pr-2-sale-prices`

**Title:** Add sale prices

**Description:**

Sale items show their original price crossed out next to the sale price, and the cart shows how much the customer saves. Products now carry `compareAtPrice` (the original price) instead of the `onSale` flag. The savings banner stays hidden when nothing in the cart is on sale.
