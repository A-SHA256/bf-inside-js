import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;

  // read user values
  const userText = document.getElementById('user-text').value;
  const numberRepeat = document.getElementById('number-of-times').value;

  // repeat the string
  let repeatedString = '';
  for (let i = 0; i < numberRepeat; i++) {
    repeatedString += userText;
  }

  // display the repeated string
  document.getElementById('repeated-output').innerText = repeatedString;
});
