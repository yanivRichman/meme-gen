var gKeywords = { happy: 12, 'funny puk': 1 };

var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['movie'] },
    { id: 2, url: 'img/2.jpg', keywords: ['pets'] },
];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{ txt: 'Toy Story', size: 30, align: 'left', color: 'white' }],
};

var gElCanvas;
var gCtx;
var gCurrText;
var gCurrImgId;
var gCurrTextHeight = 50;

function drawImg(idx) {
    var img = new Image();
    var currImg = gImgs[idx].url;
    img.src = currImg;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        renderTxt();
    };
}

function drawText(text, x, y) {
    var currTextSize = gMeme.lines[0].size;
    gCurrTextHeight = y;
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white';
    gCtx.font = currTextSize + 'px impact';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
    gCtx;
}
function drawSelectedImg() {
    gCurrImgId = gMeme.selectedImgId - 1;
    drawImg(gCurrImgId);
}

function increaseFontSize() {
    gMeme.lines[0].size++;
    drawSelectedImg();
}

function decreaseFontSize() {
    gMeme.lines[0].size--;
    drawSelectedImg();
}

function fontPositionUp() {
    gCurrTextHeight--;
    drawSelectedImg();
}

function fontPositionDown() {
    gCurrTextHeight++;
    drawSelectedImg();
}

function switchLine() {
    console.log('Here');
}
