var gKeywords = { happy: 12, 'funny puk': 1 };

var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['movie'] },
    { id: 2, url: 'img/2.jpg', keywords: ['pets'] },
];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{ txt: 'Toy Story', size: 20, align: 'left', color: 'white' }],
};

var gElCanvas;
var gCtx;

function drawImg(idx) {
    var img = new Image();
    var currImg = gImgs[idx].url;
    img.src = currImg;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        realTimeTextDraw();
    };
}

function realTimeTextDraw() {
    var elTxt = document.getElementById('myInput').value;
    gMeme.lines[0].txt = elTxt;
    drawText(elTxt, 50, 50);
}

function drawText(text, x, y) {
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white';
    gCtx.font = '30px impact';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
    gCtx;
}

function myPicChoise(idx) {
    var currImgId;
    if (idx === 1) {
        gMeme.selectedImgId=1;
    } else if (idx ===2) {
        gMeme.selectedImgId=2;
    }
    currImgId=gMeme.selectedImgId;
    // console.log(gMeme.selectedImgId);
    drawImg(currImgId-1);
}
