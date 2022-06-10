var experts = [
    {
        "name": "Diane Fischer",
        "description":"Honestly nothing yet but I will add stuff soon",
        "planetary" : "yes",
        "interstellar": "no",
        "galactic": "no"
    },
    {
        "name": "Keanu Ewing",
        "description":"Honestly nothing yet but I will add stuff soon",
        "planetary" : "no",
        "interstellar": "yes",
        "galactic": "no"
    },
    {
        "name": "Alishba Horn",
        "description":"Honestly nothing yet but I will add stuff soon",
        "planetary" : "no",
        "interstellar": "no",
        "galactic": "yes"
    },
    {
        "name": "Isis Padilla",
        "description":"Honestly nothing yet but I will add stuff soon",
        "planetary" : "yes",
        "interstellar": "no",
        "galactic": "no"
    },
    {
        "name": "Tayler Nicholson",
        "description":"Honestly nothing yet but I will add stuff soon",
        "planetary" : "no",
        "interstellar": "yes",
        "galactic": "no"
    },
    {
        "name": "Samera Barnes",
        "description":"Honestly nothing yet but I will add stuff soon",
        "planetary" : "no",
        "interstellar": "no",
        "galactic": "yes"
    },
    {
        "name": "Rikesh Stott",
        "description":"Honestly nothing yet but I will add stuff soon",
        "planetary" : "yes",
        "interstellar": "no",
        "galactic": "no"
    },
    {
        "name": "Otto Mcdowell",
        "description":"Honestly nothing yet but I will add stuff soon",
        "planetary" : "no",
        "interstellar": "yes",
        "galactic": "no"
    },
    {
        "name": "Mckenzie Blankenship",
        "description":"Honestly nothing yet but I will add stuff soon",
        "planetary" : "no",
        "interstellar": "no",
        "galactic": "yes"
    }
];

let all = ["ex1","ex4" ,"ex7","ex2", "ex3","ex6","ex5", "ex8", "ex9"];
let planet = ["ex1","ex4" ,"ex7"];
let interstellar = ["ex2", "ex5","ex8"];
let galactic = ["ex3", "ex6", "ex9"];

$('input[type=radio][name=options]').change(function() {
    if (this.value == 'Planetary Travel') {
        all.forEach(exp => {
            var element = document.getElementById(exp);
            element.classList.add("d-none");
        });
        planet.forEach(exp => {
            var element = document.getElementById(exp);
            element.classList.remove("d-none");
        })
    }
    else if (this.value == 'Interstellar Travel') {
        all.forEach(exp => {
            var element = document.getElementById(exp);
            element.classList.add("d-none");
        });
        interstellar.forEach(exp => {
            var element = document.getElementById(exp);
            element.classList.remove("d-none");
        })
    }
    else {
        all.forEach(exp => {
            var element = document.getElementById(exp);
            element.classList.add("d-none");
        });
        galactic.forEach(exp => {
            var element = document.getElementById(exp);
            element.classList.remove("d-none");
            element.classList.add("m-auto");
        })
    }
});


function hide() {
    if (typeof($('input[name="options"]:checked').val())!=="undefined" && typeof($('input[name="optionsss"]:checked').val())!=="undefined") {
        let category = document.getElementById("category-side");
        category.classList.remove("activated");
        let confirm = document.getElementById("confirmation-side");
        confirm.classList.remove("activated");
        let datee = document.getElementById("date-side");
        datee.classList.add("activated");
        let main = document.getElementById("main-book");
        main.classList.add("d-none");
        let third = document.getElementById("third-book");
        third.classList.add("d-none");
        let secondary = document.getElementById("secondary-book");
        secondary.classList.remove("d-none");
        let btnForward = document.getElementById("btn-forward");
        btnForward.classList.add("d-none");
        let btnBack = document.getElementById("btn-back");
        btnBack.classList.remove("d-none");
    }
    else {
        alert("Please choose a plan and an expert");
    }
}
function show() {
    let category = document.getElementById("category-side");
    category.classList.add("activated");
    let confirm = document.getElementById("confirmation-side");
    confirm.classList.remove("activated");
    let datee = document.getElementById("date-side");
    datee.classList.remove("activated");
    let main = document.getElementById("main-book");
    main.classList.remove("d-none");
    let third = document.getElementById("third-book");
    third.classList.add("d-none");
    let secondary = document.getElementById("secondary-book");
    secondary.classList.add("d-none");
    let btnForward = document.getElementById("btn-forward");
    btnForward.classList.remove("d-none");
    let btnBack = document.getElementById("btn-back");
    btnBack.classList.add("d-none");
}


const wrapper = document.querySelector(".date-picker");
const form = wrapper.querySelectorAll(".form");
const submit = form[0].querySelector('input[type="submit"]');

function showData(e) {
    var formData = new FormData(form[0]);
    if (formData.get("date") != "" && formData.get("fname") != "" && formData.get("lname") != "" && formData.get("email") != "" && formData.get("number") != "") {
        e.preventDefault();
        let confirm = document.getElementById("confirmation-side");
        confirm.classList.add("activated");
        let datee = document.getElementById("date-side");
        datee.classList.remove("activated");
        let main = document.getElementById("main-book");
        main.classList.add("d-none");
        let secondary = document.getElementById("secondary-book");
        secondary.classList.add("d-none");
        let third = document.getElementById("third-book");
        third.classList.remove("d-none");
        let btnBack = document.getElementById("btn-back");
        btnBack.classList.add("d-none");

        document.getElementById("first-name").innerHTML = formData.get("fname") + " " + formData.get("lname");
        document.getElementById("email-address").innerHTML = formData.get("email");
        document.getElementById("phone-number").innerHTML = formData.get("number");
        document.getElementById("date-booking").innerHTML = formData.get("date");
        document.getElementById("plan-booked").innerHTML = $('input[name="options"]:checked').val();
        document.getElementById("expert-booked").innerHTML = $('input[name="optionsss"]:checked').val();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    submit.addEventListener("click", showData, false)
}, false)