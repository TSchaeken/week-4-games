var Char = {
    totalHealth: 350
}

var Enemies = {

    Spider: {
        Health: 800,
        counterPower: 25,
    },

    Golem: {
        health: 4000,
        counterPower:50
    },

    Dragon: {
        health: 20000,
        counterPower:100
    }
}

var gameFunction = {
    firstSwitch() {
        $("#story-status-2").fadeIn(500);
    },
    secondSwitch() {
        $("#story-left-1").fadeIn(500);
        $("#health").text("The cave spider has " + Enemies.Spider.Health + "/800 health remaining!");
    },
    thirdSwitch(){
        $("#story-left-2").fadeIn(500);
    },
    criticalStrike(crit, attack) {
        if(Math.random() < Char.criticalStrike) {
            console.log("You crit!")
            return Char.attack;
        }
        else {
            return 0;
        }
    }
}


//weapon select logic
$(".object-container").on("click", "#weaponHammer", function(){
    Char.attack = 80;
    Char.criticalStrike = 0.2;
    console.log(Char)
    $("#story-status").fadeOut(500, gameFunction.firstSwitch);
})
$(".object-container").on("click", "#weaponShovel", function(){
    Char.attack = 60;
    Char.criticalStrike = 0.24;
    $("#story-status").fadeOut(500, gameFunction.firstSwitch);
})
$(".object-container").on("click", "#weaponBillhook", function(){
    Char.attack = 50;
    Char.criticalStrike = 0.32;
    $("#story-status").fadeOut(500, gameFunction.firstSwitch);
})


//direction select logic, choose wisely!
$(".object-container").on("click", "#left", function(){
    $("#story-status-2").fadeOut(500, gameFunction.secondSwitch)
})
$(".object-container").on("click", "#straight", function(){
    $("#story-status-2").fadeOut(500, gameFunction.secondSwitch)
})
$(".object-container").on("click", "#right", function(){
    $("#story-status-2").fadeOut(500, gameFunction.secondSwitch)
})

//combat!
$(".object-container").on("click", "#spiderEnemy", function(){
    var remainingHealth = Enemies.Spider.Health;
    console.log(remainingHealth)
    var bonus = gameFunction.criticalStrike(Char.criticalStrike, Char.attack);
    var totalAttack = bonus + Char.attack;
    console.log(bonus);
    Enemies.Spider.Health = remainingHealth - totalAttack;
    Char.attack = Char.attack + Char.attack + bonus;
    if (Enemies.Spider.Health < 0){
        $("#story-left-1").fadeOut(500, gameFunction.thirdSwitch);
    }
    $("#enemyHealth").text("The cave spider has " + Enemies.Spider.Health + "/800 health remaining!");
    if (bonus > 0) {
        $("#combatLog").text("You hit a critical strike! The spider takes a massive " + totalAttack + " damage!")
    }
    else {
        $("#combatLog").text("You hit! The spider takes " + totalAttack + " damage!")
    }



});

$(document).ready(function () {
    $('body').hide().fadeIn(500);
    $('#story-status').fadeIn(500);
})