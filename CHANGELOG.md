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
