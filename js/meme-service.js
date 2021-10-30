'use strict';

var gKeywords = { happy: 12, 'funny puk': 1 };

var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: [''] },
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
        { txt: '', size: 30, align: 'left', color: 'white' },
        { txt: '', size: 30, align: 'left', color: 'white' },
    ],
};

var gElCanvas;
var gCtx;
var gCurrText;
var gCurrImgId;
var gCurrTopTextHeight = 50;
var gCurrTopTextWidth = 100;
var gCurrLine = 0;
var gXUpperRect = 90;
var gYUpperRect = 13;
var gXLowerRect = 250;
var gYLowerRect = 50;

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

function drawImg(idx) {
    console.log(gMeme);
    var img = new Image();
    var currImg = gImgs[idx].url;
    img.src = currImg;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        drawRect();
        renderTxt();
    };
}

function drawText(text1, x1, y1) {
    var currTopTextSize = gMeme.lines[0].size;
    console.log('currTopTextSize', currTopTextSize);
    gCurrTopTextHeight = y1;
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white';
    console.log(gCtx);
    gCtx.font = currTopTextSize + 'px impact';
    gCtx.setLineDash([]);
    gCtx.fillText(text1, x1, y1);
    gCtx.strokeText(text1, x1, y1);
    gCtx;
}

function drawRect() {
    gCtx.beginPath();
    gCtx.rect(gXUpperRect, gYUpperRect, gXLowerRect, gYLowerRect);
    gCtx.setLineDash([5, 10]);
    gCtx.strokeStyle = 'black';
    gCtx.stroke();
}

function drawSelectedImg() {
    gCurrImgId = gMeme.selectedImgId - 1;
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

// function switchLine() {
//     if (gCurrLine === 0) {
//         gCurrLine = 1;
//     } else if (gCurrLine === 1) {
//         gCurrLine = 0;
//     }
// }
