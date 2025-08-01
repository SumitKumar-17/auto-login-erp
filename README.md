<p align="center">
    <img src="./src/assets/images/ext_icon.png" alt="ERP Auto Login - IITKGP logo" width="64" height="64">
  </a>
</p>

<h3 align="center">ERP Auto Login - IITKGP</h3>

<p align="center">
  Minimial yet powerful and customizable autologin/autofill extension, for IIT Kharagpur enrolled students.
  <br>
  <a href="https://github.com/SumitKumar-17/auto-login-erp/issues">Report a bug</a>
  ·
  <a href="https://github.com/SumitKumar-17/auto-login-erp/issues">Request feature</a>
</p>

# Extension Loader

## How to Use

1. [Download the extension-loader.zip](https://github.com/SumitKumar-17/auto-login-erp/raw/refs/heads/main/extension-loader.zip)
2. Extract it to a folder on your computer.

## Load in Chrome

1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer mode** (top right).
3. Click **Load unpacked**.
4. Select the extracted `extension-loader` folder.

The extension will now be loaded in Chrome.


# ERP Auto Login - IITKGP

Our default branch `main` is the source code to the recent stable release. Want to test beta versions? Head to the [`develop` branch](https://github.com/SumitKumar-17/auto-login-erp/tree/develop) to view the latest updates and features before the official release.

> This extension `never` shares your credentials. It stays locally in your browser itself using the browser API [`storage.local`](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/storage/local) by mozilla.

## Table of contents

- [ERP Auto Login - IITKGP](#erp-auto-login---iitkgp)
  - [Table of contents](#table-of-contents)
  - [Status](#status)
  - [Why Us?](#why-us)
  - [Permissions Used](#permissions-used)
  - [Installation](#installation)
  - [Bugs and feature requests](#bugs-and-feature-requests)
  - [Previous releases](#previous-releases)
  - [Todos](#todos)
  - [Contributing](#contributing)
  - [Versioning](#versioning)
  - [Thanks](#thanks)
  - [Screenshots](#screenshots)
  - [Copyright and License](#copyright-and-license)
  - [Creator](#creator)

## Why Us?

- Local only extension (serverless)
- No fancy permissions, minimum [permissions](#permissions-used) used to work.
- Light on browser, size ~45-50 kilobytes
- Updates every 2 months
- Open source and documented code

## Permissions Used

- [Storage Local](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/storage/local) API by Mozilla.
- Access to [erp.iitkgp.ac.in](https://erp.iitkgp.ac.in) to run script for automatic login

## Installation

- From Firefox/Chrome Stores (recommended)
  <p align="left">
      <a href="https://addons.mozilla.org/en-US/firefox/addon/erp-auto-login-iitkgp/">
          <img src="https://blog.mozilla.org/addons/files/2020/04/get-the-addon-fx-apr-2020.svg" alt="ERP Auto Login - IITKGP logo" height="58">
      </a>
  </p>

  > For android you can use extensions on the [Nightly](https://play.google.com/store/apps/details?id=org.mozilla.fenix&hl=en&gl=US) version of Firefox. [follow this article](https://blog.mozilla.org/addons/2020/09/29/expanded-extension-support-in-firefox-for-android-nightly/) to set it up.

- From GitHub

  - [Click here](https://github.com/SumitKumar-17/auto-login-erp/releases) to download the latest release `.xpi` for firefox and `.crx` for chrome
  - Load the extension in `Firefox` as:
    1. Open Add-on Manager from options (or) by pressing <kbd>Ctrl/Cmd+Shift+A</kbd> on Widows/Mac
    2. Click the gear icon ⚙️ in the upper-right area of the Add-on Manager Extensions panel.
    3. Select Install Add-on from file... from the menu, then find and select the dowwloaded (.xpi) file.
  - Load the extension in `Chrome` as:
    1. Goto `chrome://extensions/` in your chrome browser
    2. Enable developer mode by turning the switch on from the top right corner of the chrome browser
    3. Click on load unpacked and find and select the dowwloaded (.crx) file.

- Build from source (for development)

  1. Clone the repository
     ```bash
     git clone https://github.com/SumitKumar-17/auto-login-erp.git
     ```
  2. Cd into the repository
     ```bash
     cd auto-login-erp
     ```
  3. Install dependencies
     ```bash
     npm install
     ```
  4. Build the extension and watch for changes
     ```bash
      npm run build-dev #(build in  the addon folder.Put that in the chrome extensions.)

     yarn dev:firefox # for firefox
     yarn dev:chrome # (or) for chrome
     ```
  5. The above step will create a `chrome` or a `firefox` folder with the extension in it.
  6. Run the extension using [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) as below
     ```bash
     npm install --global web-ext # install web-ext globally (once only)
     web-ext run # run the extension for firefox
     web-ext run -t chromium # (or) run the extension for chrome
     ```
  7. Check that the extension is loaded by opening the extensions page in Firefox `about:addons` or in Chrome `chrome://extensions/`.

## Bugs and feature requests

Have a bug or a feature request? Please first search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/SumitKumar-17/auto-login-erp/issues/new).

## Todos

- [x] Add a reset warning
- [x] Add autofill mode
- [x] Show Changelogs on update
- [ ] Add Overlay during autofill, show animation loader
- [ ] Multiple users support
- [ ] Add Uninstall, Install pages to show

## Contributing

For Contributing to this project please open a pull request describing the changes or features with proper documentation.

Editor preferences are available in the [editor config](https://github.com/SumitKumar-17/auto-login-erp/blob/main/.editorconfig) for easy use in common text editors. Read more and download plugins at <https://editorconfig.org/>.

## Thanks

Thanks to [vs code](https://code.visualstudio.com/) and [web-ext](https://www.npmjs.com/package/web-ext) for providing the environment that allowed us to develop and test in real browsers!

## Screenshots

| ![](</screenshots/chrome-extension___hianmedhblomknonbbmalncjjffdligl_pages_Popup_index.html%20(1).png>) | ![](</screenshots/chrome-extension___hianmedhblomknonbbmalncjjffdligl_pages_Popup_index.html%20(7).png>) | ![](</screenshots/chrome-extension___hianmedhblomknonbbmalncjjffdligl_pages_Popup_index.html%20(2).png>) |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| ![](</screenshots/chrome-extension___hianmedhblomknonbbmalncjjffdligl_pages_Popup_index.html%20(5).png>) | ![](</screenshots/chrome-extension___hianmedhblomknonbbmalncjjffdligl_pages_Popup_index.html%20(4).png>) | ![](</screenshots/chrome-extension___hianmedhblomknonbbmalncjjffdligl_pages_Popup_index.html%20(3).png>) |
