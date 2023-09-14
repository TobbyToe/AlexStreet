document
  .getElementById("contact_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("contact_name").value;
    var email = document.getElementById("contact_email").value;
    var message = document.getElementById("contact_message").value;
    
    if (name === '' || email === '') {
        alert('Please Fill Required Fields');
    } else {
        alert("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);
    }

});
