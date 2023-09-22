

function generatePassword() {
  const PasswordLength = 8;
  const characterSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
  let password = '';


  for (let i = 0; i < PasswordLength; i++) {
    let randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet.charAt(randomIndex);
  }

  document.getElementById('Password').value = password;

  
}

function Reset() {
   const generate = null;
   document.getElementById("Password").value = generate;
}

function generateSpecialCharacter() {
  const generatedLength = 9;
  const characterLine = '!@#$%^&*()){}[]?/;:\][-0987654321"'
  let p = ''
  
  for (let i = 0; i < generatedLength; i++) {
    let randomIndex = Math.floor(Math.random() * characterLine.length);
    p += characterLine.charAt(randomIndex);
  }

  document.getElementById('Password').value = p;
}