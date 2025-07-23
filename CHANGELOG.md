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
