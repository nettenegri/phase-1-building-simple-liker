// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM CONTENT HAS LOADED");
  const errorModal = document.querySelector("#modal");
  errorModal.classList.add("hidden");

  findLikes();
});

function findLikes() {
  const likeArr = document.querySelectorAll(".like-glyph");
  likeArr.forEach((singularLike) => {
    singularLike.addEventListener("click", () => console.log("YOU FOUND ME"));
    mimicServerCall().then((resp) => console.log(resp));
  });
}

//   clickListener();
// });

// function hideError() {
//   errorModal.classlist.add("hidden");
// }

// function findLikes() {
//   const likeArr = document.querySelectorAll(".like-glyph");

//   likeArr.forEach((singularLike) => {
//     singularLike.addEventListener("click", () =>
//       console.log("YOU FOUND ME! LIKE!")
//     );
//   });
// }

// function clickListener() {
//   document.addEventListener("click", (event) => {
//     if (event.target.classList[0] === "like-glyph") {
//       mimicServerCall()
//         .then((resp) => console.log(resp))
//         .classlist.add("activatrdf")
//         .catch((error) => {
//           errorModal.classList.remove("hidden");
//           setTimeout(() => {
//             hideError();
//           }, 3000);
//         });
//     }
//   });
// }

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
