var loadVar;


function language() {
  const x = document.querySelector(".list-language");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

}


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-list');
menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');


}


function updateTime() {
  var now = new Date();
  var time = now.toLocaleTimeString();
  document.getElementById('time').innerHTML = time;
}
setInterval(updateTime, 1000);


// Get the button
var btn = document.getElementById("scroll-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
btn.onclick = function () {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


/*  */


/**
 * Define a function to navigate betweens form steps.
 * It accepts one parameter. That is - step number.
 */
const navigateToFormStep = (stepNumber) => {
  /**
   * Hide all form steps.
   */
  document.querySelectorAll(".form-step").forEach((formStepElement) => {
    formStepElement.classList.add("d-none");
  });
  /**
   * Mark all form steps as unfinished.
   */
  document.querySelectorAll(".form-stepper-list").forEach((formStepHeader) => {
    formStepHeader.classList.add("form-stepper-unfinished");
    formStepHeader.classList.remove("form-stepper-active", "form-stepper-completed");
  });
  /**
   * Show the current form step (as passed to the function).
   */
  document.querySelector("#step-" + stepNumber).classList.remove("d-none");
  /**
   * Select the form step circle (progress bar).
   */
  const formStepCircle = document.querySelector('li[step="' + stepNumber + '"]');
  /**
   * Mark the current form step as active.
   */
  formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-completed");
  formStepCircle.classList.add("form-stepper-active");
  /**
   * Loop through each form step circles.
   * This loop will continue up to the current step number.
   * Example: If the current step is 3,
   * then the loop will perform operations for step 1 and 2.
   */
  for (let index = 0; index < stepNumber; index++) {
    /**
     * Select the form step circle (progress bar).
     */
    const formStepCircle = document.querySelector('li[step="' + index + '"]');
    /**
     * Check if the element exist. If yes, then proceed.
     */
    if (formStepCircle) {
      /**
       * Mark the form step as completed.
       */
      formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-active");
      formStepCircle.classList.add("form-stepper-completed");
    }
  }
};
/**
* Select all form navigation buttons, and loop through them.
*/
document.querySelectorAll(".btn-navigate-form-step").forEach((formNavigationBtn) => {
  /**
   * Add a click event listener to the button.
   */
  formNavigationBtn.addEventListener("click", () => {
    /**
     * Get the value of the step.
     */
    const stepNumber = parseInt(formNavigationBtn.getAttribute("step_number"));
    /**
     * Call the function to navigate to the target form step.
     */
    navigateToFormStep(stepNumber);
  });
});


/* sction loader pages Begin */


function loader() {
  loadVar = setTimeout(showPage, 700);
}

function showPage() {
  document.getElementById("wpf-loader-two").style.display = "none";

}
/* section loader pages ENd */


/*  */

const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

/*  */