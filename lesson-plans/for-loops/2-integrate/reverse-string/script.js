import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById(__).addEventListener('click', () => {
  debugger;

  // read user text
  const userText = document.getElementById('user-text').value;

  // use a for loop that counts down (i--) to reverse the input
  for (let i = userText.length - 1; i >= 0; i--) {
    userText = userText[i];
  }
  // display the reversed string
  document.getElementById('reversed-output').innerText = userText;
});
