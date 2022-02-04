//select elements from the DOM
const signInBtn = document.querySelector("div.sign :first-child"),
  signUpBtn = document.querySelector("div.sign :last-child"),
  formHeader = document.querySelector("h2.form-header"),
  emailInput = document.querySelector("#email"),
  submitBtn = document.querySelector("button[type='submit']"),
  alreadyBtn = document.querySelector("p.sign-in"),
  miniBtn = document.querySelector("p.sign-in > a");

//Sign In
const signIn = (e) => {
  e.preventDefault();
  formHeader.textContent = "SIGN IN";
  emailInput.style.display = "none";
  submitBtn.textContent = "Log In";
  miniBtn.textContent = `signup`;
};

//Sign Up
const signUp = (e) => {
  e.preventDefault();
  formHeader.textContent = "SIGN UP";
  emailInput.style.display = "block";
  submitBtn.textContent = "Register";
  miniBtn.textContent = `signin`;
};

signInBtn.addEventListener("click", (e) => signIn(e));
signUpBtn.addEventListener("click", (e) => signUp(e));

miniBtn.addEventListener("click", (e) =>
  miniBtn.textContent === "signup" ? signUp(e) : signIn(e)
);
