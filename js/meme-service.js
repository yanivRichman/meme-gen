var gKeywords = { happy: 12, 'funny puk': 1 };

var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['movie'] }];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{ txt: 'Toy Story', size: 20, align: 'left', color: 'white' }],
};

var gElCanvas;
var gCtx;

console.log('gMeme:', gMeme);

function drawImg() {
    var img = new Image();
    var currImg = gImgs[0].url;
    img.src = currImg;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        var elText = document.querySelector('text');
        console.log(elText);
        drawText('HOLA!', 10, 50);
    };
}

function drawText(text, x, y) {
    gCtx.font = '48px serif';
    gCtx.fillText(text, x, y);
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'brown';
    gCtx.fillStyle = 'black';
    gCtx.font = '40px Arial';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function drawText(text, x, y) {
    // gCtx.font = '48px serif';
    // gCtx.fillText(text, x, y);
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'brown';
    gCtx.fillStyle = 'black';
    gCtx.font = '40px Arial';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}
