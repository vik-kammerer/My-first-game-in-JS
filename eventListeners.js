//noBtn.addEventListener("click", chooseNo);



$('#attack').click(
    () => {
        attack()
    }
);

$('#run').click(
    () => {
        run()
    }
);

$('#keepGoing').click(
    () => {
        keepGoing()
    }
);

$('#tryAgain').click(
    () => {
        location.reload()
    }
);


$('#drinkButton').click(
    () => {
        drinkElixir()
    }
);

$('#yes').click(
    () => {
        chooseYes()
    }
);

$('#no').click(
    () => {
        chooseNo()
    }
);



$("#drinkButton").mouseover(function () {
    drinkButton.style.color = "#66a266";
});

$("#drinkButton").mouseout(function () {
    drinkButton.style.color = "";
});