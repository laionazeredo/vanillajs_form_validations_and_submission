// Validation massages generator
function produceMessage(message, elementlocation) {
    document.getElementById(elementlocation).innerHTML = message;
}


//Validating Name - Needs to be filled and have at least one surname
function validateName() {
    var name = document.getElementById("name").value;

    if (name.length == 0) {
        produceMessage("Dica: O nome é obrigatório", "name-error-prompt");
        return false;
    }
    if (!name.match(/^(\D)*\s{1}/)) {
        produceMessage("Dica: É necessário preencher nome e sobrenome", "name-error-prompt");
        return false;
    }
    produceMessage("", "name-error-prompt");
    return true;
}

//Validating Phone number - Needs to have only numbers and exactly 11 digits and the forma dd - ddddddddd
function validatePhone() {
    var phone = document.getElementById("phone").value;

    if (phone.length == 0) {
        produceMessage("Dica: O número de telefone deve ter 11 dígitos", "phone-error-prompt");
        return false;
    }
    if (!phone.match(/(^\d{2})\s\-\s(\d){9}$/)) {
        produceMessage("Dica: O número de telefone deve ter 11 dígitos, com o DDD separado do número por um traço e espaços, como neste exemplo: 11 - 999999999", "phone-error-prompt");
        return false;
    }
    produceMessage("", "phone-error-prompt");
    return true;
}


//Hidding social media if user don't have one
function hideSocialMedia(state) {
    if (state == "0") {
        document.getElementById("ithassocial").style.display = "none";
        document.getElementById("spfacebook").checked = false;
        document.getElementById("splinkedin").checked = false;
        document.getElementById("spinstagram").checked = false;
    } else {
        document.getElementById("ithassocial").style.display = "block";
    }
}



//Submit Form as Json

const addData = () => {
    let formfields = []; //stores the data
    var socialprofileslist = [document.getElementById("spfacebook"), document.getElementById("splinkedin"), document.getElementById("spinstagram")];
    var socialprofilesvalues = [];

    for (var i = 0, size = socialprofileslist.length; i < size; i++) {
        var item = socialprofileslist[i];
        if (item.checked == true) {
            socialprofilesvalues.push(item.value);
        }
    }
    // JSON file example: id:' ' , nome: 'José', telefone: '11 - 999999999', origemcontato: 'TV', tenmidiasocial: 'Sim', perfissociai: {'Facebook, Instagram}
    let formfield = {
        id: Date.now(),
        nome: document.getElementById("name").value,
        telefone: document.getElementById("phone").value,
        origemcontato: document.getElementById("whereyoufrom-select").value,
        tenmidiasocial: document.getElementById("social").value,
        perfissocial: socialprofilesvalues
    }

    formfields.push(formfield); // Bulds the base array to JSON file generation    
    document.querySelector("form").reset(); // Clear the form

    // Saving localhost API using json-server
    json = JSON.stringify(formfields)
    console.log(json)
    var url = "http://localhost:8080/formsubmissions/";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function() {
        var submissions = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "201") {
            console.table(submissions);
        } else {
            console.error(submissions);
        }
    }
    xhr.send(json);
}

//On Submit Routine
function onSubmitRoutine() {
    // Validate fields
    if (validateName() && validatePhone()) {
        // Send data as JSON
        addData();

        // Hide submit button after submission
        document.getElementById("send-btn").style.display = "none";
        // Display thankyou box after submission
        document.getElementById("msg-post-submit").style.display = "block";
        // HDisplay thankyou message after submission
        document.getElementById("msg-post-submit").innerHTML = "Obrigado por enviar as informações. Trataremos com o maior carinho."
    } else {
        alert("Verifique os campos preenchidos. Possivelmente há erros.") // Warns about validation issues
    }
}