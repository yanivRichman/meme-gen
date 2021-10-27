'use strict';

// 1. Phase1 – main flow with no design (shall take 1-6 hours):
// a. Done --> Setup git and make sure you can commit and push to the repository.
// b. Done --> Design an initial home page (index.html, main.js, CSS files)
// c. Done --> Commit and Push
// d. Done --> Create gMeme as described above with a single txt line.
// e. Todo --> Create a Canvas with a single image – the image shall be taken from gMeme
//             (managed by a memeService)
// f. Todo --> Draw a text line on it with IMPACT font at the top of the image.
//             The text shall be taken from gMeme
// g. Todo --> Add text input to the HTML and dynamically take the text line value from the input to gMeme
//             and from it to the Canvas
// h. Todo --> Make a simple image-gallery with 2 images.
//             Click an image to update gMeme and present it onto the Canvas.
//             Note that to start with – locate the Editor above the Image-Gallery.
// i. Todo --> Make sure you can access your project in gitPages


function onInit() {
    gElCanvas = document.getElementById('my-canvas');
    gCtx = gElCanvas.getContext('2d');
    drawImg();
}