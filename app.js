const name = document.getElementById("name");
const email = document.getElementById("email");
const comment = document.getElementById("comment");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

// to prevent page from submitting null
form.addEventListener("submit", (e) => {
  let messages = [];
  if (name.value === "" || name.value == null) {
    messages.push("Name is REQUIRED");
  }
  if (comment.value === "" || comment.value == null) {
    messages.push("Comment is REQUIRED");
  }
  if (email.value === "" || email.value == null) {
    messages.push("Email is REQUIRED");
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});
