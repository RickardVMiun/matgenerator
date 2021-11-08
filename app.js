const weekfood = [
{
    "dish": "Korv och makaroner"
},
{
    "dish": "Spaghetti och köttfärsås"
},
{
    "dish": "Gulashsoppa"
},
{
    "dish": "Lasagne"
},
{
    "dish": "Korvstroganoff"
},
{
    "dish": "Baconpasta"
},
{
    "dish": "Lax med potatis"
},
{
    "dish": "Köttbullar med makaroner"
},
{
    "dish": "Tacos"
},
{
    "dish": "Korv med stuvade makaroner"
},
{
    "dish": "Potatisbullar"
},
{
    "dish": "Krämig carbonara"
},
{
    "dish": "Raggmunk med fläsk"
},
{
    "dish": "Flygande Jacob"
},
{
    "dish": "Fläskpannkaka"
},
{
    "dish": "Baconlindad kycklingfilé i ugn"
},
{
    "dish": "Köttfärsbiffar med gräddsås"
},
{
    "dish": "Makaronipudding med falukorv"
},
{
    "dish": "Klassisk makaronipudding"
},
{
    "dish": "Kyckling i paprikasås"
},
{
    "dish": "Pannkaka"
},
{
    "dish": "Kasslergratäng"
},
{
    "dish": "Hamburgare"
},
{
    "dish": "Broccolisoppa"
},
{
    "dish": "Hemgjort pizza"
},
{
    "dish": "Omelett med ost och skinka"
},
{
    "dish": "Köttfärsbiffar i timjansås"
},
{
    "dish": "Crepes med räkfyllning"
},
{
    "dish": "Chili con carne"
}
]

const weekendfood = [
{
    "dish": "Fläskfilé med potatis",
},
{
    "dish": "Kyckling med mögelostsås"
},
{
    "dish": "Biffar med ris och tzatziki"
},
{
    "dish": "Köttfärslimpa med potatis"
},
{
    "dish": "Fläskfilégryta med champinjoner"
}
]

document.addEventListener("DOMContentLoaded", function(){
    generateFood();
});


document.querySelector('#generatebutton').onclick = function() {generateFood()};

function generateFood() {

    // Loop för att randomisera 5 vardagsmåltider
var weekarr = [];
while(weekarr.length < 7){
    var r = Math.floor(Math.random() * weekfood.length);
    if(weekarr.indexOf(r) === -1) weekarr.push(r);
}
console.log(weekarr);

// Loop för att randomisera 2 helgmåltider
var weekendarr = [];
while(weekendarr.length < 2){
    var r = Math.floor(Math.random() * weekendfood.length);
    if(weekendarr.indexOf(r) === -1) weekendarr.push(r);
}
console.log(weekendarr);
    document.querySelector('#mondaydish').innerHTML = weekfood[weekarr[0]].dish;
    document.querySelector('#tuesdaydish').innerHTML = weekfood[weekarr[1]].dish;
    document.querySelector('#wednesdaydish').innerHTML = weekfood[weekarr[2]].dish;
    document.querySelector('#thursdaydish').innerHTML = weekfood[weekarr[3]].dish;
    document.querySelector('#fridaydish').innerHTML = weekfood[weekarr[4]].dish;
    document.querySelector('#saturdaydish').innerHTML = weekendfood[weekendarr[0]].dish;
    document.querySelector('#sundaydish').innerHTML = weekendfood[weekendarr[1]].dish;
  }

  console.log("js found");