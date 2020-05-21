// Validation massages generator
function produceMessage(message, elementlocation) {
    document.getElementById(elementlocation).innerHTML = message;
}

//Validating Name - Needs to be filled and have at least one surname
function validateName() {
    var name = document.getElementById("name").value;

    if (name.length == 0) {
        produceMessage("Hint: The name is required.", "name-error-prompt");
        return false;
    }
    if (!name.match(/^(\D)*\s{1}/)) {
        produceMessage("Hint: A surname is required alongside the name", "name-error-prompt");
        return false;
    }
    produceMessage("", "name-error-prompt");
    return true;
}

//Validating Phone number - Needs to have only numbers and exactly 11 digits and the forma dd - ddddddddd
function validatePhone() {
    var phone = document.getElementById("phone").value;

    if (phone.length == 0) {
        produceMessage("Hint: Phone number needs to have 11 digits", "phone-error-prompt");
        return false;
    }
    if (!phone.match(/(^\d{2})\s\-\s(\d){9}$/)) {
        produceMessage("Hint: Phone number needs to have 11 digits, with area code (of 2 digits) separated by the core number by an hifen and spaces, like in this example: 11 - 999999999", "phone-error-prompt");
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
    // JSON file example: id:' ' , name: 'José', phone: '11 - 999999999', contactsource: 'TV', gotsocial: 'Sim', socialprofile: {'Facebook, Instagram}
    let formfield = {
        id: Date.now(),
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        contactsource: document.getElementById("whereyoufrom-select").value,
        gotsocial: document.getElementById("social").value,
        socialprofile: socialprofilesvalues
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
        document.getElementById("msg-post-submit").innerHTML = "Thank you for sharing. We will make contact soon."
    } else {
        alert("Check the fields. Possibly you got some errors.") // Warns about validation issues
    }
}