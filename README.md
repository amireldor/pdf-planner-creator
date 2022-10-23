**A PDF Planner creator, created for usage with Supernote A5 X.**

Status: It's a one-evening hack, so don't expect too much.

## Usage and Development

The idea is to build an [Astro][1] website and then render it to PDF using [Puppeteer][2].

Run `npm install` and `npm start` (it's an Astro project), customize to liking (beware of ugly code), and use `node make_pdf.js` to generate the PDF.

Manually change the year in `index.astro`.

You can use Chrome's _print preview_ to make sure things look good and don't overflow to the next page.

[1]: https://astro.build
[2]: https://pptr.dev
