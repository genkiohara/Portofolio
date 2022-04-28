let menu = document.querySelector('.menu-icon')
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("move")
    navbar.classList.toggle("open-menu");
}

window.onscroll = () => {
  navbar.classList.remove("open-menu");
  menu.classList.remove("move");
};

function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");
  
    sendBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (name.value == "" || email.value == "" || msg.value == "") {
        emptyerror();
      } else {
        sendmail(name.value, email.value, msg.value);
        success();
      }
    });
  }
  validate();
  
  function sendmail(name, email, msg) {
    emailjs.send("service_na1p0ec", "template_0h5nr6o", {
      from_name: email,
      to_name: name,
      message: msg,
    });
  }

  function emptyerror() {
    alert("Fields cannot be empty!");
  }
  function success() {
    alert("Email sent successfully");
  }