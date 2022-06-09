
fetch("./students.json")
.then(response => {
   return response.json();
})
.then(jsondata => console.log(jsondata));