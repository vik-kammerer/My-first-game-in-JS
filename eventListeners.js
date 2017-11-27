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

 $("#drinkButton").hover(function () {
 
    $(this).toggleClass("drinkButtonHover");
    
 });