// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})

class Dbr {
  constructor() {
    const dbr = require('./libs/nodejs-barcode/index')
    this.obj = dbr
    this.barcodeTypes = dbr.formats
  }
  decodeFileAsync(filepath) {
    return new Promise((res, rej) => {
      this.obj.decodeFileAsync(filepath, this.barcodeTypes, (err, msg) => {
        if (err)
          rej(err)
        res(msg)
      }, "")
    })
  }
}

window.dbr = new Dbr()