// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const dbr = window.dbr

var fileSelector = document.getElementById('file-selector')

fileSelector.onchange = fileOnChangeHandler

function fileOnChangeHandler(evt) {
    const filepath = evt.target.files[0].path
    console.log(filepath)
    dbr.decodeFileAsync(filepath)
        .then(msg => {
            console.log(msg)
        })
        .catch(err => {
            console.error(err)
        })
}