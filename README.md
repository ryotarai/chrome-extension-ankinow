# Ankinow

https://chrome.google.com/webstore/detail/ankinow/jomhaklahjhfpfdimldnnfpnapicgplk

## Supported sites

### English dictionary

- [Cambridge Dictionary](https://dictionary.cambridge.org/dictionary/)

### English-Japanese dictionary

- [英辞郎 on the web](https://eow.alc.co.jp)
- [英辞郎 on the web Pro / Pro Lite](https://eowf.alc.co.jp)

## Building

1.  Clone repo
2.  `npm i`
3.  `npm run dev` to compile once or `npm run watch` to run the dev task in watch mode
4.  `npm run build` to build a production (minified) version

## Installation

1. Install and start Anki app
1. Install AnkiConnect https://ankiweb.net/shared/info/2055492159
1. Complete the steps to build the project above
1. Go to [_chrome://extensions_](chrome://extensions) in Google Chrome
1. With the developer mode checkbox ticked, click **Load unpacked extension...** and select the _dist_ folder from this repo
1. Open options page of this extension and configure deck name
1. Go to supported site such as https://eow.alc.co.jp and search a word
1. You'll find "Add to Anki" links in supported sites.
