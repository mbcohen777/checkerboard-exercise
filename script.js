var container = document.createElement('div')
document.body.append(container)

function getColor() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);  
    var color = "rgb("+r+","+g+","+b+")"
    return color;
}

for(var i=0;i<81;i++) {
    var div = document.createElement('div');
    div.style.width = '11.1%';
    div.style.float = 'left';
    div.style.paddingBottom = '11.1%';
    div.style.background = getColor();
    // if(i %2 === 0) {
    //     div.style.background = 'red';
    // }
    // else {
    //     div.style.background = 'black';
    // }
    // div.style.border = '1px solid black';
    container.append(div);
}
