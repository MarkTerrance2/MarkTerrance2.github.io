function populateTextBox() {
  let label = document.getElementById('inputBox');
  label.textContent = 'Order Number';
  let input = label.appendChild(document.createElement('input'));
  input.type = 'number';
}

function depopulateTextBox() {
  /*Removes entire grid from existance because we want to make a new one*/
  let box = document.getElementById('inputBox');
  box.childNodes.forEach(node => {
    box.remove(node);
  });

  let newBox = document.getElementById('textBox').appendChild(document.createElement('div'));
  newBox.id = 'inputBox';
}

function validateInput() {
  /*document.formID.submitButton.value.trim();*/
  let validateName = document.formOne.name.value.trim();
  let validateEmail = document.formOne.mail.value.trim();
  let validateStreet = document.formOne.street.value.trim();
  let validateCity = document.formOne.cities.value.trim();

  let errors = document.getElementById('error');
  if (validateName == '') {
    errors.innerHTML = 'Please provide your name!';
    return false;
  }
  if (validateEmail == '') {
    errors.innerHTML = 'Please provide your Email!';
    return false;
  }
  if (validateStreet == '') {
    errors.innerHTML = 'Please provide your Street!';
    return false;
  }
  if (validateCity == '') {
    errors.innerHTML = 'Please provide your City!';
    return false;
  }
  return true;
}
