// Toast function to show message
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.innerText = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 100); // let CSS apply

  setTimeout(() => {
    toast.classList.remove('show');
    toast.addEventListener('transitionend', () => {
      toast.remove();
    });
  }, 3000);
}

// Handling the blood request form submission
document.addEventListener("DOMContentLoaded", function () {
  const requestForm = document.querySelector("#request-form");
  
  if (requestForm) {
    requestForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent real submission for now

      // You can later replace this with actual submission logic (API, DB, etc.)
      showToast("Blood request submitted successfully!");

      // Reset the form if needed
      requestForm.reset();
    });
  }
});

// Your existing JavaScript code...

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (name === "") {
    alert("Name is required");
    return false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }

  return true;
}
