# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

Types of changes are:
1. Added - For newly added folders, files, code-block, features, etc
2. Changed - For modification to existing folders, files, code-block, features, etc
3. Deprecated - For soon to be removed features
4. Removed - For removed features
5. Fixed - For any bug fixes
6. Security - For security features

## Unreleased
### Added
- Added new component: `Validation Error`

## 2.1.0 - 2026-05-03
### Changed
- Removed sourcemaps, stories from build file

## 2.0.16 - 2026-05-03
### Changed
- `Modal` component: fixed `showDefaultClose` prop default from string `'false'` (always truthy) to boolean `false`
- `Select` component: removed identity `useMemo` wrapping options (no-op optimisation)
- `Select` component: fixed layout at non-full widths — icons (chevron, clear, tag-remove) no longer cropped
- `Select` component: added `selectClearAll` style class to the clear-all button
- `RadioGroup` & `Radio` components: removed redundant disabled guard in `onChange` handler; simplified class composition with `clsx`
- `Textarea` component: replaced string-template class composition with `clsx`
- `Dropdown` component: removed redundant search-reset comment; added missing `displayName`
- `PhoneInput` component: replaced `onCountryCodeChange && onCountryCodeChange(code)` with optional chaining `onCountryCodeChange?.(code)`
- `Pagination` component: removed redundant `typeof pageNumber === 'number'` check and unnecessary `clsx` wrapper on ellipsis
- `Table` component: inlined trivial `handleSort` wrapper; fixed unnecessary optional chain on confirmed non-null `sortConfig`; replaced string-template class with `clsx`
- `IconFactory` component: migrated to named React imports (`FC`, `SVGProps`)
- `Breadcrumbs` component: migrated to named React imports; added missing `displayName`
- `OTPInput` component: replaced string-template class composition with `clsx`
- `FileUpload` component: moved static `MIME_TYPES` / `EXTENSIONS` constants outside component; renamed `validateExcelFile` → `validateFile`; added missing `displayName`
- `NumberKeypad` component: fixed `any` typed row array; removed large commented-out dead code; inlined pass-through callback
- `Tooltip` component: inlined trivial mouse event handlers; replaced string-template class with `clsx`; added missing `displayName`

## 2.0.15 - 2025-10-20
### Fixed
- `Select`: Fix responsiveness and added clearable icon to clear option

## 2.0.14 - 2025-10-07
### Added
- New system icons (cloud-upload)
- `FileUpload` component

### Fixed
- `Modal` component: close button was always rendered due to `showDefaultClose = 'false'` (string) being truthy

## 2.0.13 - 2025-09-26
### Added
- New system icons

## 2.0.12 - 2025-09-22
### Added
- New system icon (download)

### Fixed
- `Button Component`: fix outline skin hover text color.

## 2.0.11 - 2025-09-21
### Added
- `Dropdown Component`: Added fullwidth feature to dropdown style and search functionality to dropdown options
- New system icon (long-arrow-right)

### Fixed
- `Input Component`: fix the hover and active state color.
- `Textarea Component`: fix the hover and active state color.

## 2.0.10 - 2025-09-19
### Added
- New mono-color icons (single-product, composite-product, bulk-product and add-product)

## 2.0.9 - 2025-09-16
### Fixed
- `Button component`: fix the hover and active state.

## 2.0.8 - 2025-09-09
### Added
- `Table component`: add horizontal column paging via `visibleColumns` and pager controls

## 2.0.7 - 2025-09-03
### Fixed
- Fixed hidden content in the `Drawer component` by setting overflow to auto

## 2.0.6 - 2025-09-02
### Added
- Add WithCustomLabel story with custom option labels to `Dropdown component` stories

### Changed
- Change `Dropdown component` label option type from string to ReactNode

### Fixed
- Update expired SDK token to fix release workflow failure

## 2.0.5 - 2025-08-25
### Removed
- Remove analyze script from package.json

## 2.0.4 - 2025-08-18
### Added
- `Dropdown` component
- `IconFactory` component stories

## 2.0.3 - 2025-08-18
### Added
- `IconFactory` component

### Changed
- Removed `asset/` from exported files

## 2.0.2 - 2025-08-18
### Fixed
- Move `icons/` into asset/ folder
- Removed `@rollup/plugin-image` transforming svg to image

## 2.0.1 - 2025-08-17
### Fixed
- Rollback asset folder changes to fix broken icons

## 2.0.0 - 2025-08-17
### Added
- New system icons (ellipsis, export)
- Created `assets/` folder at root
- New image asset (placeholder)
- `ImageLoader` component

### Changed
- `Select` component - make label optional
- `Table` component - Fix header border radius
- `Pagination` component - Fix range value
- Move `icons/` into asset/ folder

## 1.0.51 - 2025-08-17
### Added
- New component `IconFactory`

### Changed
- `Select` component option label props from `string` to `string | number`

## 1.0.50 - 2025-08-01
### Added
- New theme color (color-warning)

### Fixed
- Removed `Tabs` component (Temporarily)

## 1.0.49 - 2025-07-26
### Changed
- `Toast` component message props from string to ReactNode

## 1.0.48 - 2025-07-25
### Fixed
- `Tooltip` component styling
- `Input, Select & PhoneInput` component props name (isError & errorMessage)
- `Tooltip` component styling

## 1.0.46 - 2025-07-24
### Fixed
- `Select` component styling

## 1.0.45 - 2025-07-24
### Fixed
- `Select, Input & PhoneInput` component styling
- `Input & PhoneInput` component props name (error & errorMessage)

## 1.0.44 - 2025-07-23
### Fixed
- `Select` Component styling

## 1.0.43 - 2025-07-23
### Added
- New custom css classes (padding)
- SDK doucmentation

## 1.0.42 - 2025-07-22
### Changed
- Exported all component to default index

## 1.0.41 - 2025-03-27
### Fixed
- Fix scss deprecation warnins

## 1.0.40 - 2025-03-20
### Added
- id and name props to `PhoneInput` component

## 1.0.39 - 2025-03-18
### Fixed
- `Select` component height

## 1.0.38 - 2025-03-17
### Changed
- Updated Input components' label to accept type `string | ReactNode`

### Fixed
- `Tooltip` component width

## 1.0.37 - 2025-03-17
### Added
- New system icons (card, medal, note, peope, receipt, setting, user-circle-add)

## 1.0.36 - 2025-03-16
### Added
- Created `Tooltip` component
- Added arrow-down icon to `Select` component

## 1.0.35 - 2025-03-14
### Fixed
- Extended `HTMLTextAreaProps` on `TextArea` component

## 1.0.34 - 2025-03-14
### Changed
- Added missing displayName to `PhoneInput`, `RadioGroup`, `Select`, `Textarea` and `Toast`  components

## 1.0.33 - 2025-03-14
### Added
- Created `RadioGroup` and `Radio` component
- Created `Select` component

### Changed
- Added missing displayName to affected components

## 1.0.32 - 2025-03-13
### Changed
- `Drawer` & `Modal` added className props

## 1.0.31 - 2025-03-13
### Fixed
- `Pagination` range value

## 1.0.30 - 2025-03-13
### Added
- Created `Textarea` component

## 1.0.29 - 2025-03-12
### Added
- `className` styles props to Table

### Fixed
- Table typing warning

## 1.0.28 - 2025-03-12
### Added
- New system icons (plus, search, trash, edit, data, close)
- New mono-color icon (check)
- `_custom.scss` css theme file

### Changed
- Added icons props to `Toast` component
- Added icons props to `Button` component
- Added icons props to `Input` component

## 1.0.27 - 2025-03-12
### Added
- Created dom.ts with `breakpoints`, `isClient`
- Added `scroll lock` to drawer and modal component

### Fixed
- Updated `Paganiation` resposiveness

## 1.0.26 - 2025-03-12
### Added
- Created `Modal` component
- Created `Drawer` component

## 1.0.25 - 2025-03-11
### Added
- Created `Table` component

### Changed
- Refactored `Pagination` component

## 1.0.24 - 2025-03-10
### Added
- Created `Breadcrumbs` component
- New system icon (notification)

## 1.0.23 - 2025-03-10
### Added
- New system icons (chevron-left, chevron-right, chevron-up, chevron-down, home, shot-cart)
- New primary color (color-primary-lightest-1, color-primary-lightest-2 )

## 1.0.22 - 2025-03-10
### Fixed
- Removed Invalid value from `z-index.scss`

## 1.0.21 - 2025-03-09
### Fixed
- Exported `Toast` component

## 1.0.20 - 2025-03-09
### Fixed
- Storybook SVG icon loading error

## 1.0.19 - 2025-03-09
### Added
- Created `Toast` component
- Created `PhoneInput` component
- New system icon (eye-closed)

### Fixed
- SVG icons loading

## 1.0.18 - 2025-03-09
### Changed
- Changed `Spinner` filled color to --color-primary
- Changed `OTPInput` focus color --color-primary-lighter

## 1.0.17 - 2025-03-08
### Added
- created `OTPInput` component

### Removed
- `axiosClient` handler

## 1.0.16 - 2025-03-04
### Added
- Created reusable `axiosClient` handler for API calls

## 1.0.15 - 2025-03-03
### Added
- Created `Spinner` component

### Fixed
- Fixed `Input` scss bug (style conflict with Select component)

## 1.0.14 - 2025-03-03
### Fixed
- Fixed style-inject bug by extracting components styles to index.css file in dist folder

## 1.0.13 - 2025-03-02
### Added
- CHANGELOG.md file, config and ci/cd setup
- Github action workflow for sdk package release
- Husky workflow for prepush and pre-commit

## 1.0.0 - 2025-02-23
### Added
- Initial release with core functionality.
