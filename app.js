const weekfood = [
{
    "dish": "Korv och makaroner",
    "image": "https://i.imgur.com/5lyTCoV.jpg"
},
{
    "dish": "Spaghetti och köttfärsås",
    "image": "https://i.imgur.com/5MnJ3iE.jpg"
},
{
    "dish": "Gulashsoppa",
    "image": "https://i.imgur.com/i8QgWwr.jpg"
},
{
    "dish": "Lasagne",
    "image": "https://i.imgur.com/9ukynfp.jpg"
},
{
    "dish": "Korvstroganoff",
    "image": "https://i.imgur.com/uUxwXWK.jpg"
},
{
    "dish": "Baconpasta",
    "image": "https://i.imgur.com/6HghI5O.jpg"
},
{
    "dish": "Lax med potatis",
    "image": "https://i.imgur.com/BgRZnx2.jpg"
},
{
    "dish": "Köttbullar med makaroner",
    "image": "https://i.imgur.com/JfwiTIa.jpg"
},
{
    "dish": "Tacos",
    "image": "https://i.imgur.com/AKYyxKG.jpg"
},
{
    "dish": "Korv med stuvade makaroner",
    "image": "https://i.imgur.com/5lyTCoV.jpg"
},
{
    "dish": "Potatisbullar",
    "image": "https://i.imgur.com/9zaViHm.jpg"
},
{
    "dish": "Krämig carbonara",
    "image": "https://i.imgur.com/aghtRXK.jpg"
},
{
    "dish": "Raggmunk med fläsk",
    "image": "https://i.imgur.com/FFQVYXY.jpg"
},
{
    "dish": "Flygande Jacob",
    "image": "https://i.imgur.com/WbDqrzf.jpeg"
},
{
    "dish": "Fläskpannkaka",
    "image": "https://i.imgur.com/hJ7XmeP.jpg"
},
{
    "dish": "Baconlindad kycklingfilé i ugn",
    "image": "https://i.imgur.com/SLIH4MT.jpg"
},
{
    "dish": "Köttfärsbiffar med gräddsås",
    "image": "https://i.imgur.com/TEPcdwc.jpg"
},
{
    "dish": "Makaronipudding med falukorv",
    "image": "https://i.imgur.com/vbW8THN.jpg"
},
{
    "dish": "Klassisk makaronipudding",
    "image": "https://i.imgur.com/vbW8THN.jpg"
},
{
    "dish": "Kyckling i paprikasås",
    "image": "https://i.imgur.com/xbfy9fq.jpg"
},
{
    "dish": "Pannkaka",
    "image": "https://i.imgur.com/08Tg5Q8.jpg"
},
{
    "dish": "Kasslergratäng",
    "image": "https://i.imgur.com/B2UwFnb.jpg"
},
{
    "dish": "Hamburgare",
    "image": "https://i.imgur.com/DZKAvOn.jpg"
},
{
    "dish": "Broccolisoppa",
    "image": "https://i.imgur.com/QFgcp8D.jpg"
},
{
    "dish": "Hemgjord pizza",
    "image": "https://i.imgur.com/lKodFX0.jpg"
},
{
    "dish": "Omelett med ost och skinka",
    "image": "https://i.imgur.com/I7czfFY.jpg"
},
{
    "dish": "Köttfärsbiffar i timjansås",
    "image": "https://i.imgur.com/gCwRpi2.jpg"
},
{
    "dish": "Crepes med räkfyllning",
    "image": "https://i.imgur.com/yGetYmt.jpg"
},
{
    "dish": "Chili con carne",
    "image": "https://i.imgur.com/2OhGWh4.jpg"
}
]

const weekendfood = [
{
    "dish": "Fläskfilé med potatis",
    "image": "https://i.imgur.com/IV9Dzah.jpg"
},
{
    "dish": "Kyckling med mögelostsås",
    "image": "https://i.imgur.com/QMyHvJM.jpeg"
},
{
    "dish": "Biffar med ris och tzatziki",
    "image": "https://i.imgur.com/P7pVEwu.jpg"
},
{
    "dish": "Köttfärslimpa med potatis",
    "image": "https://i.imgur.com/NCyeUHr.jpg"
},
{
    "dish": "Fläskfilégryta med champinjoner",
    "image": "https://i.imgur.com/NSdEjkm.jpg"
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
    document.querySelector('#mondayimage').src = weekfood[weekarr[0]].image;

    document.querySelector('#tuesdaydish').innerHTML = weekfood[weekarr[1]].dish;
    document.querySelector('#tuesdayimage').src = weekfood[weekarr[1]].image

    document.querySelector('#wednesdaydish').innerHTML = weekfood[weekarr[2]].dish;
    document.querySelector('#wednesdayimage').src = weekfood[weekarr[2]].image

    document.querySelector('#thursdaydish').innerHTML = weekfood[weekarr[3]].dish;
    document.querySelector('#thursdayimage').src = weekfood[weekarr[3]].image

    document.querySelector('#fridaydish').innerHTML = weekfood[weekarr[4]].dish;
    document.querySelector('#fridayimage').src = weekfood[weekarr[4]].image

    document.querySelector('#saturdaydish').innerHTML = weekendfood[weekendarr[0]].dish;
    document.querySelector('#saturdayimage').src = weekendfood[weekendarr[0]].image

    document.querySelector('#sundaydish').innerHTML = weekendfood[weekendarr[1]].dish;
    document.querySelector('#sundayimage').src = weekendfood[weekendarr[1]].image
  }

  console.log("js found");