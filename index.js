function newImage(imgSrc,imgLeft,imgBottom) {
    let imgName = document.createElement('img')
    imgName.src = imgSrc;
    imgName.style.position = 'fixed'
    imgName.style.left = imgLeft;
    imgName.style.bottom = imgBottom;
    document.body.append(imgName)
    return(imgName);
}

function newItem(imgSrc,imgLeft,imgBottom) {
    let itemName = newImage(imgSrc,imgLeft,imgBottom);
    itemName.addEventListener('dblclick', function(){
        itemName.remove()
    })
}

function tile(imgSrc, posLeftStart, posBottomStart, numImagesWide, numImagesHigh) {
    for (let h = 0; h < numImagesHigh; h++) {
        for (let w = 0; w < numImagesWide; w++) {
            let imgLeft = (posLeftStart + (w * 100)) + 'px';
            let imgBottom = (posBottomStart + (h * 100)) + 'px';
            newImage(imgSrc, imgLeft, imgBottom)
        }
    }
}

let horizon = (window.innerHeight / 1.75); // Establishes horizon at about 4/7 from the bottom of the viewport
let heightOfSky = window.innerHeight - horizon;
let heightOfGrass = horizon;
let tileSize = 100;

tile('assets/sky.png', 0, horizon, window.innerWidth/tileSize, heightOfSky/tileSize);
tile('assets/grass.png', 0, 0, window.innerWidth/tileSize, heightOfGrass/tileSize);
newImage('assets/green-character.gif','100px','100px');
newImage('assets/pine-tree.png','450px','200px');
newImage('assets/tree.png','200px','300px');
newImage('assets/pillar.png','350px','100px');
newImage('assets/crate.png','150px','200px');
newImage('assets/well.png','500px','425px');
newItem('assets/sword.png','500px','405px');
newItem('assets/sheild.png','165px','185px');
newItem('assets/staff.png','600px','100px');