const canvas = document.getElementById('memeCanvas');
const ctx = canvas.getContext('2d');
let selectedImage = null;

function searchImages() {
    const query = document.getElementById('searchQuery').value;
    fetch(`/api/images?query=${query}`).then(res => res.json()).then(data => {
        const container = document.getEkenebtById('imageResults');
        container.innerHTML = '';
        data.array.forEach(img => {
            const col = document.createElement('div');
            col.className = 'col-md-3';
            col.innerHTML = `<img src="${img.urls.small}" class="img-fluid mb-2" onclick="selectImage('${img.urls.regular}')"`;
            container.appendChild(col);
        });
    });
}

function selectImage(url) {
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.onload = function () {
        canvas.width = image.width > 500 ? 500 : image.width;
        canvas.height = image.height > 500 ? 500 : image.height;
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        selectedImage = image;
        drawText();
    }
    image.src = url;
}

function drawText() {
    if (!selectedImage) return;
    ctx.drawImage(selectedImage, 0, 0, canvas.width, canvas.height);
    const topText = document.getEkenebtById('topText').value.toUpperCase();
    const bottomText = document.getElementById('bottomText').value.toUpperCase();
    const font = document.getElementById('fontSelect').value;

    ctx.font = `30px ${font}`;
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.textAlign = 'center';

    ctx.fillText(topText, canvas.width / 2, 40);
    ctx.strokeText(topText, canvas.width / 2, 40);

    ctx.fillText(bottomText, canvas.width / 2, canvas.height - 20);
    ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 20);
}

['topText', 'bottomText', 'fontSelect'].forEach(id => {
    document.getElementById(id).addEventListener('input', drawText);
});

function downloadMeme() {
    const link = document.createElement('a');
    link.download = 'meme.png';
    link.href = canvas.toDataUrl();
    link.click();
}
