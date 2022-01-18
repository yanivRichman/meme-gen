'use strict';

var gKeywords = { happy: 12, 'funny puk': 1 };

var gImgs = [
    { id: 1, url: 'img/1.JPG', keywords: [''] },
    { id: 2, url: 'img/2.jpg', keywords: [''] },
    { id: 3, url: 'img/3.jpg', keywords: [''] },
    { id: 4, url: 'img/4.jpg', keywords: [''] },
    { id: 5, url: 'img/5.jpg', keywords: [''] },
    { id: 6, url: 'img/6.jpg', keywords: [''] },
    { id: 7, url: 'img/7.jpg', keywords: [''] },
    { id: 8, url: 'img/8.jpg', keywords: [''] },
    { id: 9, url: 'img/9.jpg', keywords: [''] },
    { id: 10, url: 'img/10.jpg', keywords: [''] },
    { id: 11, url: 'img/11.jpg', keywords: [''] },
    { id: 12, url: 'img/12.jpg', keywords: [''] },
    { id: 13, url: 'img/13.jpg', keywords: [''] },
    { id: 14, url: 'img/14.jpg', keywords: [''] },
    { id: 15, url: 'img/15.jpg', keywords: [''] },
    { id: 16, url: 'img/16.jpg', keywords: [''] },
    { id: 17, url: 'img/17.jpg', keywords: [''] },
    { id: 18, url: 'img/18.jpg', keywords: [''] },
];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        { txt: '', size: 30, align: 'center', color: 'red' },
        { txt: '', size: 30, align: 'center', color: 'red' },
    ],
};

var gElCanvas;
var gCtx;
var gCurrText;
var gCurrImgId;
var gCurrTopTextHeight = 50;
var gCurrTopTextWidth = 200;
var gCurrLine = 0;
var gXUpperRect = 0;
var gYUpperRect = 13;
var gXLowerRect = 400;
var gYLowerRect = 50;
var gColor = 'red';

function selectdIdx(idx) {
    var currImgId;
    for (var i = 1; i < 19; i++) {
        if (i === idx) {
            gMeme.selectedImgId = i;
            break;
        }
    }
    currImgId = gMeme.selectedImgId;
    drawImg(currImgId - 1);
}

function updateGmeme(text, idx) {
    gCurrText = text;
    gCurrLine = idx;
    gMeme.lines[gCurrLine].txt = text;
}

function startingPointData() {
    gCtx.textAlign = 'center';
    gMeme.lines[0].txt = '';
    gMeme.lines[0].size = 30;
    gMeme.lines[0].align = 'center';
    gMeme.lines[0].color = 'red';
    gCurrTopTextHeight = 50;
    gCurrTopTextWidth = 200;
    gCurrLine = 0;
    gXUpperRect = 0;
    gYUpperRect = 13;
    gXLowerRect = 400;
    gYLowerRect = 50;
    gColor = 'red';
}

function drawImg(idx) {
    console.log(gMeme);
    var img = new Image();
    var currImg = gImgs[idx].url;
    img.src = currImg;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        // drawRect();
        renderTxt();
    };
}

function drawText(text1, x1, y1) {
    var currTopTextSize = gMeme.lines[0].size;
    gCurrTopTextHeight = y1;
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = gColor;
    gCtx.font = currTopTextSize + 'px impact';
    gCtx.setLineDash([]);
    gCtx.fillText(text1, x1, y1);
    gCtx.strokeText(text1, x1, y1);
}

function deleteLine() {
    console.log('here');
    gMeme.lines[gCurrLine].txt = '';
    clearTxt();
    onInit();
}

function changeFontColor(color) {
    gCtx.beginPath();
    gColor = color;
    gMeme.lines[gCurrLine].color = gColor;
    renderTxt();
}

// function drawRect() {
//     gCtx.beginPath();
//     gCtx.rect(gXUpperRect, gYUpperRect, gXLowerRect, gYLowerRect);
//     gCtx.setLineDash([5, 10]);
//     gCtx.strokeStyle = 'black';
//     gCtx.stroke();
// }

function drawSelectedImg() {
    gCurrImgId = gMeme.selectedImgId - 1;
    console.log('gCurrImgId', gCurrImgId);
    console.log('gMeme.selectedImgId', gMeme.selectedImgId);
    drawImg(gCurrImgId);
}

function increaseFontSize() {
    gMeme.lines[gCurrLine].size++;
    gYUpperRect--;
    gYLowerRect++;
    drawSelectedImg();
}

function decreaseFontSize() {
    gMeme.lines[gCurrLine].size--;
    gYUpperRect++;
    gYLowerRect--;
    drawSelectedImg();
}

function makeLeftAlign() {
    gCurrTopTextWidth = 5;
    gMeme.lines[gCurrLine].align = 'left';
    gCtx.textAlign = 'start';
    drawSelectedImg();
}

function makeCenterAlign() {
    gCurrTopTextWidth = gElCanvas.width / 2;
    gMeme.lines[gCurrLine].align = 'center';
    gCtx.textAlign = 'center';
    drawSelectedImg();
}

function makeRightAlign() {
    gCurrTopTextWidth = 395;
    gMeme.lines[gCurrLine].align = 'right';
    gCtx.textAlign = 'end';
    drawSelectedImg();
}

function fontPositionUp() {
    gCurrTopTextHeight--;
    gYUpperRect--;
    drawSelectedImg();
}

function fontPositionDown() {
    gCurrTopTextHeight++;
    gYUpperRect++;
    drawSelectedImg();
}

function fontPositionRight() {
    gCurrTopTextWidth++;
    gXUpperRect++;
    drawSelectedImg();
}

function fontPositionLeft() {
    gCurrTopTextWidth--;
    gXUpperRect--;
    drawSelectedImg();
}

// -----------------------development switchLine-------------------------
// function switchLine() {
//     if (gCurrLine === 0) {
//         gCurrLine = 1;
//     } else if (gCurrLine === 1) {
//         gCurrLine = 0;
//     }
// }
