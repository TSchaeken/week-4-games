var Char = {
    totalHealth: 300
}







$(document).ready(function () {
    $('body').hide().fadeIn(1000);
});



function firstSwitch() {
    $("#first-direction").fadeIn(1000);
}



$("#object-container").on("click", "#weaponHammer", function(){
    Char.attack = 130;
    Char.criticalStrike = 0.17;
    $("#object-container").fadeOut(1000, firstSwitch);
})
$("#object-container").on("click", "#weaponShovel", function(){
    Char.attack = 110;
    Char.criticalStrike = 0.24;
    $("#object-container").fadeOut(1000, firstSwitch);
})
$("#object-container").on("click", "#weaponBillhook", function(){
    Char.attack = 90;
    Char.criticalStrike = 0.4;
    $("#object-container").fadeOut(1000, firstSwitch);
})