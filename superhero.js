function Superhero(realName, ability, gender, archEnemy, age, weakness){
    this.realName = realName;
    this.ability = ability;
    this.gender = gender;
    this.archEnemy = archEnemy
    this.age = age;
    this.weakness = weakness;

this.talk = function(){
    console.log("Howdy! My name is" + realName);
}

    this.callForHelp = function(call){
        console.log(call);

    }
}

var superMan = new Superhero("Clark Kent", "Dat Money", "Male", "Lex Luther", 30, "Kryptonite");
var wonderWoman = new Superhero("Dianne Prince", "Super Strength", "Female", "Donald Trump", 20, "Guns");

superMan.ability = "Laser Vision";
wonderWoman.archEnemy = superMan
//console.log(superMan);
wonderWoman.callForHelp("I'm booling out!");

superMan.callForHelp("It's not lookin good rn");

console.log(wonderWoman);