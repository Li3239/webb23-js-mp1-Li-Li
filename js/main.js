// layout width
let layoutWidth = "90vw";
// color lines base height for caculation
const baseHeight = 15;
// color lines base hue for caculation
const baseHue = 130;
const stepupHue = 16;
const saturation = "90%";
const lightness = "84%";
// text color(Rad 1 - Rad 5)
const textColor = "hsl(240, 80%, 69%)";
// text font size
const baseTextFontSize = 15;
const textFontWeight = "bolder";

// ============================
// color lines
// ============================
for(let i=0; i<5; i++) {
    // ------------------------
    // add div element in body
    // ------------------------
    let div = document.createElement("div");
    document.body.appendChild(div);

    div.style.width = layoutWidth;
    div.style.margin = "auto";

    // set div as a Flex layout Flex布局
    div.style.display = "flex";
    // horizontally center 水平居中
    div.style.alignItems = "center";
    // vertical center 纵向居中
    div.style.justifyContent = "center";

    // set height for color lines
    div.style.height = (i+1)*baseHeight+`px`;
    console.log(`div.style.heigh`, (i+1)*baseHeight+`px`);

    // set colors
    let hue = baseHue + i * stepupHue;
    console.log(`hue[${i}] = `, hue);
    div.style.backgroundColor = `hsl(${hue}, ${saturation}, ${lightness}`;
    
    // set white space between color lines
    let whiteHeight = (baseHeight + baseHeight*i/2) + "px";
    console.log("White space height = ", whiteHeight);
    div.style.marginBottom = whiteHeight;

    // ------------------------
    // add P element into div
    // ------------------------
    const p = document.createElement("p");
    div.appendChild(p);
    p.innerText = "Rad " + `${i+1}`;
    p.style.color = textColor;
    p.style.fontSize = (baseTextFontSize + i * 10) + "px";
    p.style.fontWeight = textFontWeight;
}

// ============================================
// under box includes three purple sub boxes
// ============================================
// add div element in body
const box = document.createElement("div");
document.body.appendChild(box);

// box size
box.style.width = layoutWidth;
box.style.height = "500px";
box.style.margin = "auto";
// flex layout
box.style.display = "flex";
// vertical center 纵向居中 space-around
box.style.justifyContent = "space-around";
// horizontally center 水平居中
box.style.alignItems = "center";
// box.style.verticalAlign = "middle";
box.style.border = `3px solid black`;

// add 3 subbox into box
const subBoxWidth = 70;
const subBoxHeight = 300;
const pFontSize = "20px";
const list1 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const list2 = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];
const list3 = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];

for(let i=0; i<3; i++) {
    const subBox = document.createElement("div");
    box.appendChild(subBox);
    subBox.style.width = subBoxWidth + "px";
    subBox.style.height = subBoxHeight + "px";
    subBox.style.display = "flex";
    subBox.style.flexDirection = "column";
    subBox.style.justifyContent = "center";
    subBox.style.alignItems = "center";
    subBox.style.border = "15px solid hsl(240, 62%, 79%)";

    //------------------
    // Add 10 p element
    //------------------
    for(let j=0; j<10; j++) {
        const p = document.createElement("p");
        subBox.appendChild(p);
        if(i==0) {
            p.innerText = list1[j];
            p.style.justifyContent = "left";
        } else if(i==1) {
            p.innerText = list2[j];
            p.style.justifyContent = "center";
        } else {
            p.innerText = list3[j];
            p.style.justifyContent = "right";
        }

        //style setting
        p.style.width = subBoxWidth + "px";
        p.style.height = subBoxHeight/10 + "px";
        p.style.textAlign = "left";
        p.style.display = "flex";
        p.style.alignItems = "center";
        p.style.margin = 0;
        p.style.fontSize = pFontSize;

        // text color & bkground color
        if(i==0 && j==4 || i==1 && j==1) {
            p.style.color = "white";
            p.style.backgroundColor = "hsl(240, 62%, 79%)";
        } else if(i==2 && j==5) {
            p.style.color = "black";
            p.style.backgroundColor = "hsl(240, 62%, 79%)";
        } else if((i==0 || i==2) && j%2==0) {
            //odd lines in the 1t & 3d subBox 
            p.style.color = "white";
            p.style.backgroundColor = "black";
        } else if((i==0 || i==2) && j%2!=0) {
            //even lines in the 1t & 3d subBox 
            p.style.color = "black";
            p.style.backgroundColor = "white";
        }else if(i==1 && j%2==0) {
            //odd lines in the 2d subBox 
            p.style.color = "black";
            p.style.backgroundColor = "white";
        } else if(i==1 && j%2!=0) {
            //even lines in the 2d subBox 
            p.style.color = "white";
            p.style.backgroundColor = "black";
        }
        console.log("=============================================");
        console.log(`[${j}%2] is`, j%2);
        console.log(`p[${i}].[${j}].color =`, p.style.color);
        console.log(`p[${i}].[${j}].bkColor =`, p.style.backgroundColor);
        console.log(`p[${i}].[${j}].text =`, p.innerText);
    }
}