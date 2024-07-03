function validate() {
    let validated = true;
    let ele1 = document.getElementById("name");
    let ele2 = document.getElementById("gener")
    if (ele1.value.length < 0) {
      window.alert("Name can not be empty");
      validated = false;
    } 
    return validated;
    const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

form.addEventListener('submit', function(event) {
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
        event.preventDefault();
        alert('Please fill in all required fields!');
    }
});

  }
  function submitForm() {
    window.alert("Form Submitted");
  }