var Char = {
    totalHealth: 300
}

var gameFunction = {
    firstSwitch() {
        $("#story-status-2").fadeIn(1000);
    },
    secondSwitch() {
        $("#story-status-3").fadeIn(1000);
    }
}

$("#object-container").on("click", "#weaponHammer", function(){
    Char.attack = 130;
    Char.criticalStrike = 0.17;
    $("#story-status").fadeOut(1000, gameFunction.firstSwitch);
})
$("#object-container").on("click", "#weaponShovel", function(){
    Char.attack = 110;
    Char.criticalStrike = 0.24;
    $("#story-status").fadeOut(1000, gameFunction.firstSwitch);
})
$("#object-container").on("click", "#weaponBillhook", function(){
    Char.attack = 90;
    Char.criticalStrike = 0.4;
    $("#story-status").fadeOut(1000, gameFunction.firstSwitch);
})
$("#object-container").on("click", "#left", function(){
    $("#story-status-2").fadeOut(1000, gameFunction.secondSwitch)
})

$(document).ready(function () {
    $('body').hide().fadeIn(1000);
});

