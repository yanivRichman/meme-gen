'use strict';

// 1. Phase1 – main flow with no design (shall take 1-6 hours):
// a. Done --> Setup git and make sure you can commit and push to the repository.
// b. Done --> Design an initial home page (index.html, main.js, CSS files)
// c. Done --> Commit and Push
// d. Done --> Create gMeme as described above with a single txt line.
// e. Done --> Create a Canvas with a single image – the image shall be taken from gMeme
//             (managed by a memeService)
// f. Done --> Draw a text line on it with IMPACT font at the top of the image.
//             The text shall be taken from gMeme
// g. Done --> Add text input to the HTML and dynamically take the text line value from the input to gMeme
//             and from it to the Canvas
// h. Done --> Make a simple image-gallery with 2 images.
//             Click an image to update gMeme and present it onto the Canvas.
//             Note that to start with – locate the Editor above the Image-Gallery.
// i. Done --> Make sure you can access your project in gitPages

// 2. Phase2 – Basic line operations:
// a. Todo --> Add the button “increase/decrease” font
//             Implement text size increase / decrease
// b. Todo --> Add “up/down” button
//             Implement moving lines up/down

// 3. Phase3 – switch between two lines:
// a. Todo --> Add the button “switch line”
// b. Todo --> Add (to gMeme) a second line and implement switching between the lines (focus) using the button

function onInit() {
    gElCanvas = document.getElementById('my-canvas');
    gCtx = gElCanvas.getContext('2d');
    drawImg(0);
}

function onInputText(text) {
    gCurrText = text;
    gMeme.lines[0].txt = text;
    drawSelectedImg();
}

function onIncreaseFontSize() {
    increaseFontSize();
}

function onDecreaseFontSize() {
    decreaseFontSize();
}

function onUpFontPosition() {
    fontPositionUp();
}

function onDownFontPosition() {
    fontPositionDown();
}

function myPicChoise(idx) {
    var currImgId;
    if (idx === 1) {
        gMeme.selectedImgId = 1;
    } else if (idx === 2) {
        gMeme.selectedImgId = 2;
    }
    currImgId = gMeme.selectedImgId;
    drawImg(currImgId - 1);
}

function renderTxt() {
    var elTxt = document.getElementById('myInput').value;
    drawText(elTxt, 60, gCurrTextHeight);
}

