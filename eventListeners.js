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

$('#Yes').click(
    () => {
        chooseYes()
    }
);

$('#No').click(
    () => {
        chooseNo()
    }
);

 $("#drinkButton").hover(function () {
 
    $(this).toggleClass("drinkButtonHover");
    
 });