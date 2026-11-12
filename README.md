# Tiny Shop

A tiny store with a product list, a cart and checkout. Everything runs in the browser; `server.js` only serves the files in `public/`. No dependencies.

```bash
npm start          # http://localhost:4100
PORT=5000 npm start
```

What the store is supposed to do is written down in [PRD.md](PRD.md).

## Layout

- `public/index.html`: the page
- `public/products.js`: the catalog
- `public/pricing.js`: cart math (line totals, shipping, totals)
- `public/app.js`: the storefront UI (product list, cart, checkout)
- `public/style.css`: styles
- `server.js`: static file server for local development

## The merge experiment

This repo is set up to reproduce one bug: two pull requests that each work on their own, and break the store when they are merged.

| Branch | Pull request title | What it does |
| --- | --- | --- |
| `pr-1-coupons` | Add coupon codes | SAVE10 takes 10% off at checkout and skips sale items. It finds sale items by the `onSale` flag on each product. |
| `pr-2-sale-prices` | Add sale prices | Sale items show their original price crossed out. Products now carry `compareAtPrice` instead of the `onSale` flag. |
| `single-pr-both-halves` | (optional) | Both changes in one branch, for comparison. Its code is identical to the merged result. |

Both branches start from the same `main`, so neither can see the other. Merged, the coupon still looks for `onSale`, finds nothing, and discounts sale items too. [PRD.md](PRD.md) item 4 says it shouldn't. The bug is planted on purpose.

### Reproduce it

1. Push this repo, with all its branches, to your own GitHub account. Open two pull requests into `main`, using the titles and descriptions in [PULL_REQUESTS.md](PULL_REQUESTS.md).
2. In Claude Code, check out each branch and run `/verify`. Each one should pass.
3. Merge the first pull request. On the second, click **Update branch**. GitHub reports no conflicts.
4. Run the updated second branch with `npm start`. Add the Ceramic Mug ($20) and the Canvas Tote ($40, on sale), and apply SAVE10. You'll see $6.00 off and a $54.00 total. PRD.md item 4 means it should be $2.00 off and $58.00.
5. Deploy the `public/` folder of that branch to any static host (Vercel, Netlify or GitHub Pages). Create a TestSprite project for that URL, upload PRD.md as its PRD, and run the tests it plans. In the original run, 27 of 29 passed and the two sale item tests failed.
6. Optional: run `/verify` on `single-pr-both-halves`, or ask it to check the merged code. When it can see both halves, it catches the bug. (Checked on November 9, 2026: it reported FAIL and named item 4.)
