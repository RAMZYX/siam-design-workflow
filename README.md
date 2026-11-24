# Product Design Systems

This branch holds the brand books and design systems for Siam's products. It contains only product design systems; the workflow templates live on `main`.

| Folder | Product | Open |
| --- | --- | --- |
| [`cura42/`](cura42/) | Cura42 | `cura42/index.html` |
| [`koach/`](koach/) | Koach (Kauvery Hospital learning platform) | `koach/index.html` |
| [`qcs/`](qcs/) | QCS (white-labelled product in the CareBrain admin panel) | `qcs/index.html` |

Each folder is that product's single source of truth: brand, foundations, components, patterns, tokens and change history. See the README inside each folder for its structure and how to update it.

## Using it

Get the latest design systems:

```bash
git clone -b product-design-systems https://github.com/RAMZYX/siam-design-workflow.git
```

Or, in an existing clone:

```bash
git fetch origin
git checkout product-design-systems
git pull
```

To get only one product (for example Koach):

```bash
git clone -b product-design-systems --filter=blob:none --sparse https://github.com/RAMZYX/siam-design-workflow.git
cd siam-design-workflow
git sparse-checkout set koach
```

## Adding a product

Add a new top-level folder named after the product, with its own `README.md` and `index.html`, and add a row to the table above.
