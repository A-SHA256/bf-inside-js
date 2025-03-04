import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;

  // read user values
  const userText = document.getElementById('user-text').value;
  const skipSize = document.getElementById('skip-size').value;

  // create a new string with skipped characters
  let skippedText = '';
  for (let i = 0; i < userText.length; i += Number(skipSize)) {
    skippedText += userText[i];
  }
  
  // display the skipped string
  document.getElementById('skipped-output').innerText = skippedText;
});

