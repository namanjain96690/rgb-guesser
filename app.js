let boxes = document.querySelectorAll(".cards");
let s = document.querySelector('span');
let colors = generateRandomColor(6);
let pickedColor = colors[Math.floor(Math.random() * 6)];
s.textContent = pickedColor;
let playbtn = document.querySelector("#playagain");
let easyBtn = document.querySelector("#easybtn");
let hardBtn = document.querySelector(".hardbtn");
let boxCount = 6;
let statusText = document.querySelector("#status");
statusText.innerHTML = "Let's Play!!";

function win() {
    for (let i = 0; i < colors.length; i++) {
        boxes[i].style.background = pickedColor;
    }
    document.querySelector("h1").style.background = pickedColor;

    statusText.textContent = "Correct!!";
}


function loose(a) {
    a.style.background = "#2f2f2f"
    statusText.textContent = "Try Again!";
}


function generateRandomColor(num) {
    let arr = []
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}


function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

for (let i = 0; i < colors.length; i++) {
    boxes[i].style.background = colors[i];
    boxes[i].addEventListener('click', function() {
        let selectedColor = this.style.background;
        if (selectedColor === pickedColor) {
            win();

        } else {
            loose(this);
        }
    });
}

easyBtn.addEventListener("click", function() {
    statusText.textContent = "Let's Play !!";
    boxCount = 3;
    this.style.background = "rgb(233, 119, 119)";
    this.style.color = "white";
    hardBtn.style.background = "white";
    hardBtn.style.color = "rgb(233, 119, 119)";

    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random() * 3)];
    s.textContent = pickedColor;

    for (var i = 0; i < boxes.length; i++) {
        if (colors[i]) {
            boxes[i].style.background = colors[i];
        } else {
            boxes[i].style.display = "none";
        }
    }
});


hardBtn.addEventListener("click", function() {
    statusText.textContent = "Let's Play !!";
    this.style.background = "rgb(233, 119, 119)"
    this.style.color = "white"
    easyBtn.style.background = "white";
    easyBtn.style.color = "rgb(233, 119, 119)";

    boxCount = 6;
    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random() * 6)];
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.background = colors[i];
        boxes[i].style.display = "block";

    }
});


playbtn.addEventListener("click", function() {
    statusText.textContent = "Let's Play !!";
    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random() * boxCount)];
    s.textContent = pickedColor;
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.background = colors[i];
    }
});



