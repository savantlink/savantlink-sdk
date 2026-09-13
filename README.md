# SavantLink SDK
The SavantLink SDK provides reusable React components, SCSS-based theming, and services for SavantLink frontend projects.
Table of Contents

## Tools
- React: JavaScript library for building user interfaces.
- SCSS: CSS preprocessor for modular and maintainable styles.
- Storybook: UI component explorer for developing and testing components in isolation.

## Getting Started
- Install Dependencies: To set up the SDK, install its dependencies:
```
yarn install
```
- View Components in Storybook: To explore the SDK's components in Storybook, run:
```
yarn storybook
```
This launches Storybook, typically accessible at http://localhost:6006.

## Linking the SDK Locally with Yalc
To test the SDK in a consumer application during development, link it locally using yalc:

- Ensure yalc is installed globally:
```
npm install -g yalc
```

- In the SDK's root directory, publish the SDK:
```
yalc publish
```

- In the consumer application's root directory, link the SDK:
```
yalc link @savantlink/sdk
```

OR

```
yalc link @savantlink/sdk
```


The SDK is now linked to the consumer application for local development.

## Publishing to the Public npm Registry

Authenticate with npm from the SDK root directory:

```bash
npm login
```

Increment the package version before publishing. For a backward-compatible fix, use a patch release:

```bash
npm version patch
```

Publish the scoped package to the public npm registry:

```bash
npm publish --access public
```

After upgrading the SDK in a Vite application, clear Vite's dependency cache and restart the development server when the old bundle is still being used:

```bash
rm -rf node_modules/.vite
yarn dev --force
```



*You are welcome 🚀*

### Table bulk selection

Pass `rowSelection` to show row checkboxes and a selected-count footer. Selection is controlled: store `selectedRowKeys` in your app and update it through `onChange`. Keys must be unique and stable across sorting and pagination.

```tsx
const [selectedRowKeys, setSelectedRowKeys] = useState<Array<string | number>>([])

<Table
  columns={columns}
  data={products}
  emptyState={{}}
  rowSelection={{
    getRowKey: (product) => product.id,
    getRowLabel: (product) => product.name,
    selectedRowKeys,
    onChange: setSelectedRowKeys,
    isRowSelectable: (product) => !product.locked,
    renderActions: (keys) => (
      <Button disabled={!keys.length} onClick={() => publishProducts(keys)}>
        Publish
      </Button>
    ),
  }}
/>
```

Select-all toggles eligible rows in the supplied `data` only, preserving keys from other pages. The header and footer checkboxes show a mixed state when some eligible rows are selected. `renderActions` receives all selected keys; the app handles bulk operations and clears selection after deletion or a dataset change when appropriate. Omitting `rowSelection` preserves the existing table behavior.
