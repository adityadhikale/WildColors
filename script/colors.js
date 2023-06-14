
const Color = (color) => {
    console.log(color);
    console.log(typeof (color))
    if (color == "Black" || color == "purple") {
        var color_board = document.getElementById("color_board");
        color_board.style.color = 'white'
        color_board.style.backgroundColor = color;
    }
    else {
        var color_board = document.getElementById("color_board");
        color_board.style.backgroundColor = color;
        color_board.style.color = 'black';
    }
}

var input = document.getElementById("color_input");
input.addEventListener('keyup', (event)=> {
    console.log(input.value)
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submit_btn").click();
    }
});

const select_color = () => {

    var color = document.getElementById("color_input").value;
    console.log(color);
    console.log(typeof (color))
    if (color == "Black" || color == "purple") {
        var color_board = document.getElementById("color_board");
        color_board.style.color = 'white'
        color_board.style.backgroundColor = color;
    }
    else {
        var color_board = document.getElementById("color_board");
        color_board.style.backgroundColor = color;
        color_board.style.color = 'black';
    }
}