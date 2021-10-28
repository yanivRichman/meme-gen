var gKeywords = { happy: 12, 'funny puk': 1 };

var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['movie'] },
    { id: 2, url: 'img/2.jpg', keywords: ['pets'] },
];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        { txt: '', size: 30, align: 'left', color: 'white' },
        { txt: '', size: 30, align: 'left', color: 'white' },
    ],
};

var gElCanvas;
var gCtx;
var gCurrText;
var gCurrImgId;
var gCurrUpTextHeight = 50;
var gCurrDownTextHeight = 250;
var gCurrLine = 0;

function drawImg(idx) {
    console.log(gMeme);
    var img = new Image();
    var currImg = gImgs[idx].url;
    img.src = currImg;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        renderTxt();
    };
}

function drawText(text, x, y) {
    var currTextSize = gMeme.lines[gCurrLine].size;
    gCurrUpTextHeight = y;
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
    gMeme.lines[gCurrLine].size++;
    drawSelectedImg();
}

function decreaseFontSize() {
    gMeme.lines[gCurrLine].size--;
    drawSelectedImg();
}

function fontPositionUp() {
    gCurrUpTextHeight--;
    drawSelectedImg();
}

function fontPositionDown() {
    gCurrUpTextHeight++;
    drawSelectedImg();
}

function switchLine() {
    if (gCurrLine === 0) {
        gCurrLine = 1;
    } else if (gCurrLine === 1) {
        gCurrLine = 0;
    }
}
