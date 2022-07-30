# react-slick-styles

[![npm](https://img.shields.io/npm/v/react-slick-styles.svg?maxAge=86400?style=flat-square)](https://www.npmjs.com/package/react-slick-styles) [![npm](https://img.shields.io/npm/dm/react-slick-styles.svg?maxAge=86400?style=flat-square)](https://www.npmjs.com/package/react-slick-styles)

Styles for the react-slick carousel component

#### What is this?

This package is designed to supplement [rect-slick](https://github.com/akiran/react-slick) with the css, less, and scss files from the original [slick](https://github.com/kenwheeler/slick) carousel. It includes both the base styles and theme styles.

#### Files

Base Styles:

- `slick/slick.css`
- `slick/slick.less`
- `slick/slick.scss`

Theme Styles:

- `slick/slick-theme.css`
- `slick/slick-theme.less`
- `slick/slick-theme.scss`

#### Sass Variables

| Variable                 | Type   | Default           | Description                                        |
| ------------------------ | ------ | ----------------- | -------------------------------------------------- |
| \$slick-font-path        | string | "./fonts/"        | Directory path for the slick icon font             |
| \$slick-font-family      | string | "slick"           | Font-family for slick icon font                    |
| \$slick-loader-path      | string | "./"              | Directory path for the loader image                |
| \$slick-arrow-color      | color  | white             | Color of the left/right arrow icons                |
| \$slick-dot-color        | color  | black             | Color of the navigation dots                       |
| \$slick-dot-color-active | color  | \$slick-dot-color | Color of the active navigation dot                 |
| \$slick-prev-character   | string | '\2190'           | Unicode character code for the previous arrow icon |
| \$slick-next-character   | string | '\2192'           | Unicode character code for the next arrow icon     |
| \$slick-dot-character    | string | '\2022'           | Unicode character code for the navigation dot icon |
| \$slick-dot-size         | pixels | 6px               | Size of the navigation dots                        |

#### License

Copyright (c) 2019 Ivo Ilić

Copyright (c) 2017 Ken Wheeler

Licensed under the MIT license.
