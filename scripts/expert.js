var experts = [
    {
        "name": "Diane Fischer",
        "description":"Knows every nook and cranny of our solar system, with a PHD in aerospacial engineering, Diane will surely blow your mind.",
        "planetary" : "yes",
        "interstellar": "no",
        "galactic": "no"
    },
    {
        "name": "Keanu Ewing",
        "description":"If you need random facts about space, Keanu is your guy. Being an astronaut for 10 years, he quite knows his way between planets.",
        "planetary" : "no",
        "interstellar": "yes",
        "galactic": "no"
    },
    {
        "name": "Alishba Horn",
        "description":"Alishba not only is a scientist, she is also one of our buddies that accompanies you through the galaxies.",
        "planetary" : "no",
        "interstellar": "no",
        "galactic": "yes"
    },
    {
        "name": "Isis Padilla",
        "description":"Isis is one of our oldest and most knowledgeable experts. He has been working with us since our launch, and he can tell you all about it.",
        "planetary" : "yes",
        "interstellar": "no",
        "galactic": "no"
    },
    {
        "name": "Tayler Nicholson",
        "description":"Tayler is our newest recruit, but he has already proved himself as a valuable part of the team. His knowledge our other solar systems is mind-blowing.",
        "planetary" : "no",
        "interstellar": "yes",
        "galactic": "no"
    },
    {
        "name": "Samera Barnes",
        "description":"Although blind, Samera can quite literally guide you through other galaxies without any issue.",
        "planetary" : "no",
        "interstellar": "no",
        "galactic": "yes"
    },
    {
        "name": "Rikesh Stott",
        "description":"Our team leader, Rikesh, is knowledgeable in all our fields, but he specializes in our Milky Way more than anyone else.",
        "planetary" : "yes",
        "interstellar": "no",
        "galactic": "no"
    },
    {
        "name": "Otto Mcdowell",
        "description":"Otto is also an astronaut and a buddy for interstellar trips. He has been in over 20 journeys with us.",
        "planetary" : "no",
        "interstellar": "yes",
        "galactic": "no"
    },
    {
        "name": "Mckenzie Blankenship",
        "description":"She may look young, but she knows about the other galaxies quite a bit, and in addition, has been in a lot of them.",
        "planetary" : "no",
        "interstellar": "no",
        "galactic": "yes"
    }
];

var imgw1 = document.createElement("img");
imgw1.src = "../images/remove.png";
imgw1.style ="height:24px; width:24px;"

var imgr1 = document.createElement("img");
imgr1.src = "../images/correct (1).png"
imgr1.style ="height:24px; width:24px;"





for (let i = 0; i < experts.length; i++) {
    let expert = Object.values(experts[i]);
    let x = i+1;
    document.getElementById("expert" + x + "-name").innerHTML = expert[0];
    document.getElementById("expert"+ x +"-desc").innerHTML = expert[1];
    console.log(x);
    let r1 = expert[2] == "no" ? document.getElementById("expert" + x + "-planet").appendChild(imgw1.cloneNode(true)) : document.getElementById("expert" + x + "-planet").appendChild(imgr1.cloneNode(true));
    let r2 = expert[3] == "no" ? document.getElementById("expert" + x + "-inter").appendChild(imgw1.cloneNode(true)) : document.getElementById("expert" + x + "-inter").appendChild(imgr1.cloneNode(true));
    let r3 = expert[4] == "no" ? document.getElementById("expert" + x + "-galaxy").appendChild(imgw1.cloneNode(true)) : document.getElementById("expert" + x + "-galaxy").appendChild(imgr1.cloneNode(true));
}

