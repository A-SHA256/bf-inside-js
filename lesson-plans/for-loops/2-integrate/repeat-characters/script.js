import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  // read user values

  const userText = document.getElementById('user-text').value;
  const manyTimes = document.getElementById('number-of-times').value;

  // repeat the characters in the text
  
  let result = '';
  for (let char = 0; char < userText.length; char++) {
    for (let i = 0; i < manyTimes; i++) {
      result += userText[char]; 
    }
  }

  // display the text with repeated characters

  document.getElementById('repeated-output').innerText = result;
});
