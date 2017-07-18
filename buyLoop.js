var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 
var money = 1000;
var duffleBag = [];

while(money > 100){
console.log("You have $" + money + " left")
var answer = prompt("You can buy yeezy's for 400, gucci flip flops for 200, or ray bans for 100");

        if (answer == "Yeezys "){
            money = money - 400;
            duffleBag.push("Yeezys");
            console.log("You have successfully bought these pairs of Yeezys");
        }
        else if(answer == "Gucci Flip Flops"){
            money = money - 200;
            duffleBag.push("Gucci Flip Flops");
            console.log("You have successfully bought this pair of Gucci Flip Flops");
        }
        else if(answer == "Ray Bans"){
            money - money - 100;
            duffleBag.push("You have successfully bought this pair of Ray Bans");
        }
        else{
            console.log("We do not have this item in stock");
        }
}
console.log("Nah bro, ion sell them shits");