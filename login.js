//log in/account creation variables

const loginBtn = document.getElementById("log_in_btn")
const emailInput = document.querySelector(".email_input")
const passwordInput = document.querySelector(".password_input")

// Login Fetch
loginBtn.addEventListener("click", () => {
    fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_email: emailInput.value,
        user_password: passwordInput.value
      })
    })
    .then(response => {
      if (response.ok) {      
          window.location.href= "index.html"
          alert("Login was successful!")
      } else {
        throw new Error("Login failed, please try again");
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
  });

// Go to account creation
const createAccount = document.getElementById("create_account_btn")
createAccount.addEventListener("click", () => {
  window.location.href = "account_creation.html"
})