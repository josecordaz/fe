const Http = new XMLHttpRequest();
const url="http://localhost:8283";
Http.open("GET", url);
Http.send();

function addInfo(person){
    var div = document.createElement("h2");
    div.textContent = person.name + ", " + person.email;
    document.body.append(div);
};

Http.onreadystatechange = (e) => {
    if(Http.readyState === 4 && Http.status === 200) {
        const response = Http.responseText;
        var person = JSON.parse(response);
        addInfo(person);
    }
}
