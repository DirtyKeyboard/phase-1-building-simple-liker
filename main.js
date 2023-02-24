// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.getElementById('modal')
const errorMsg = document.getElementById('modal-message')
errorModal.setAttribute('class', 'hidden');
const likeButtons = document.querySelectorAll('span.like-glyph');
likeButtons.forEach((el) => {
el.addEventListener('click', (e) => {
  const buttonClicked = e.target;
    mimicServerCall()
    .then(() => {
      /*
      When a user clicks on a full heart:
      Change the heart back to an empty heart
      Remove the .activated-heart class
      */
      if (buttonClicked.className == 'activated-heart')
      {
          console.log("Un-liking")
          buttonClicked.setAttribute('class', 'like-glyph')
          buttonClicked.textContent = '♡';
      }
      else
      {
        console.log("Liking")
        buttonClicked.textContent = '♥';
        buttonClicked.setAttribute('class', 'activated-heart')
      }
    })
    .catch((e) => {
      errorMsg.textContent = e;
      errorModal.removeAttribute('class')
      setTimeout(() => {errorModal.setAttribute('class', 'hidden');errorMsg.textContent = '';}, 3000)
    })
})
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
