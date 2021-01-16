function showHeroName() {
    let team;
    let universe;
    let race;
    let eyeColor;
    let hairColor;
    let prt = prompt("Which team?");
    let pru = prompt("Which universe?");
    let prr = prompt("Which race");
    let preC = prompt("Which eye color?");
    let prhC = prompt("Which hair color?");
    let WidowTeam = "Avengers" || "S.H.I.E.L.D.";
    let SupRobTeam = "Justice League Of America" || "Teen Titans";
    let SupRobRace = "human" || "kryptonian";

    if ((WidowTeam == prt) && 
        (universe = "Marvel", universe == pru) && 
        (race = "human", race == prr) &&
        (eyeColor = "green", eyeColor == preC) &&
        (hairColor = "lightBrown/green", hairColor == prhC)) {
        alert("This is Black Widow!");
    } 
    
    else if ((SupRobTeam == prt) && 
        (universe = "DC Comics", universe == pru) && 
        (SupRobRace == prr) &&
        (eyeColor = "blue", eyeColor == preC) &&
        (hairColor = "black", hairColor == prhC)) {
        alert("This is a Superman or Robin!");
    }
    
    else {
        alert("Didn't recognize!");
    }
}

showHeroName();