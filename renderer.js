// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { webFrame } = require('electron')
webFrame.setSpellCheckProvider('en-US', true, {
  spellCheck(text) {
    return false
  }
})

window.setTimeout(() => {
  const frame = document.createElement('iframe');
  frame.src = 'frame.html';
  document.querySelector('body').appendChild(frame);
}, 5000);