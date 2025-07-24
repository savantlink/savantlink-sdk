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



*You are welcome 🚀*