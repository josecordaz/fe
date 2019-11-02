const Http = new XMLHttpRequest();
const url='http://localhost:8283';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
    if(Http.readyState == 4 && Http.status == 200) {
        const response = Http.responseText
        person = JSON.parse(response)
        addInfo(person)
    }
}

function addInfo(person){
    var div = document.createElement("h2")
    div.innerHTML = person.name + ", " + person.email
    document.body.append(div)
}