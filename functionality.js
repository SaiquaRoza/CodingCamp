var form = document.getElementById("contact-form");

form.addEventListener('submit', function(e){
      e.preventDefault();

      var name = form.elements.name.value;
      var email = form.elements.email.value;
      var message = form.elements.message.value;

var database=firebase.database();

database.ref('contacts').push(
   {
      name: name,
      email: email,
      message: message
   });
form.reset();

alert("Thank you for your message");

});