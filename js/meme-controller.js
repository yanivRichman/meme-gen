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
// a. Done --> Add the button “increase/decrease” font
//             Implement text size increase / decrease
// b. Done --> Add “up/down” button
//             Implement moving lines up/down

// 3. Phase3 – switch between two lines:
// a. Done --> Add the button “switch line”
// b. Todo --> Add (to gMeme) a second line and implement switching between the lines (focus) using the button

// 4. Phase4 - Basic CSS:
// a. Done --> Build the page layout with header (NavBar), footer and container for the center
// b. Done --> Locate the two images at the center of the Image-Gallery page. Make sure both Images are the same width in CSS
// c. Todo --> Give the Meme-Editor the right proportion between the space allocated for the canvas and the line-controls
// d. Todo --> Implement a basic CSS for mobile (both gallery and Editor)
// e. Todo --> Implement that the Editor is hidden to start with and revealed when an image is clicked

function onInit() {
    gElCanvas = document.getElementById('my-canvas');
    gCtx = gElCanvas.getContext('2d');
    drawImg(0);
}

function onInputText(text) {
    gCurrText = text;
    gMeme.lines[gCurrLine].txt = text;
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

function onSwitchLine() {
    console.log('development')
    // switchLine();
}

function myPicChoise(idx) {
    selectdIdx(idx);
}

function renderTxt() {
    var elUpTxt = document.getElementById('myInput');
    var upTxt=elUpTxt.value;
    var elDownTxt = document.getElementById('myInput');
    var downTxt=elDownTxt.value;
    if (gCurrLine === 0) {
        drawText(upTxt, 100, gCurrUpTextHeight);
    } else if (gCurrLine === 1) {
        drawText(downTxt, 100, gCurrDownTextHeight);
    }
}
