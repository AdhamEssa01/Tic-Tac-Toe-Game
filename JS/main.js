let title = document.querySelector(".board");
let turn = 'X';
function game (id) {
    let element = document.getElementById(id);
    if(turn === 'X' && element.innerHTML === "") {
        let sp = document.createElement("span");
        element.innerHTML = turn;
        // element.appendChild(sp);
        element.nodeValue = turn;
        title.innerHTML = "O";
        title.style = "color: yellow; font-weight: bold;";
        turn = 'O';
    }else if (element.innerHTML === "") {
        let sp = document.createElement("span");
        element.innerHTML = turn;
        // element.appendChild(sp);
        element.nodeValue = turn;
        title.innerHTML = "X";
        title.style = "color: yellow; font-weight: bold;";
        turn = 'X';
    }
    check();
}
let squires = document.querySelectorAll(".squire");
function check () {
    if (squires[0].innerHTML === squires[1].innerHTML && squires[1].innerHTML === squires[2].innerHTML && squires[0].innerHTML != "") {
        winner(0,1,2);
    }else if(squires[3].innerHTML === squires[4].innerHTML && squires[4].innerHTML === squires[5].innerHTML && squires[4].innerHTML != "") {
        winner(3,4,5);
    }else if(squires[6].innerHTML === squires[7].innerHTML && squires[7].innerHTML === squires[8].innerHTML && squires[8].innerHTML != "") {
        winner(6,7,8);
    }else if(squires[0].innerHTML === squires[3].innerHTML && squires[3].innerHTML === squires[6].innerHTML && squires[0].innerHTML != "") {
        winner(0,3,6);
    }else if(squires[1].innerHTML === squires[4].innerHTML && squires[4].innerHTML === squires[7].innerHTML && squires[1].innerHTML != "") {
        winner(1,4,7);
    }else if(squires[2].innerHTML === squires[5].innerHTML && squires[5].innerHTML === squires[8].innerHTML && squires[2].innerHTML != "") {
        winner(2,5,8);
    }else if(squires[0].innerHTML === squires[4].innerHTML && squires[4].innerHTML === squires[8].innerHTML && squires[0].innerHTML != "") {
        winner(0,4,8);
    }else if(squires[2].innerHTML === squires[4].innerHTML && squires[4].innerHTML === squires[6].innerHTML && squires[2].innerHTML != "") {
        winner(2,4,6);
    }
    if(full()) {
        title.innerHTML =" No winner";
        title.style = "color: yellow";
        setInterval(function () {
            title.innerHTML += '.';
        }, 1000);
        setTimeout(function () {
            location.reload();
        },4000);
    }
}
function winner (a, b, c) {
    title.innerHTML = squires[a].innerHTML + " is winner";
    title.style = "color: yellow";
    squires[a].style = "background-color: #AFE1AF";
    squires[b].style = "background-color: #AFE1AF";
    squires[c].style = "background-color: #AFE1AF";
    setInterval(function () {
        title.innerHTML += '.';
    }, 1000);
    setTimeout(function () {
        location.reload();
    },4000);
}
function full () {
    for (let i = 0 ; i< 9 ; i++) {
        if(squires[i].innerHTML === "") {
            return false;
        }
    }
    return true;
}