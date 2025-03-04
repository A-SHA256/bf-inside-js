import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // read user text
  const userText = document.getElementById('to-pyramid').value;

  // create the pyramid
  let pyramid = '';
  for (let char = 0; char < userText.length; char++) {
    pyramid += userText.substring(char, userText.length) + '\n';
  }

  // display the pyramid
  document.getElementById('pyramided').innerText = pyramid;
});
