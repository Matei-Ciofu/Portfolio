
const skills = [
  { name: "HTML", icon: "fab fa-html5", color: "#E34F26" },
  { name: "CSS", icon: "fab fa-css3-alt", color: "#1572B6" },
  { name: "JavaScript", icon: "fab fa-js-square", color: "#F7DF1E", textColor: "#000" },
  { name: "React", icon: "fab fa-react", color: "#61DAFB", textColor: "#000" },
  { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
  { name: "Java", icon: "fab fa-java", color: "#007396" },
  { name: "Python", icon: "fab fa-python", color: "#3776AB" },
  { name: "C", icon: "fas fa-code", color: "#A8B9CC", textColor: "#000" },
  { name: "Spring Boot", icon: "fas fa-leaf", color: "#6DB33F" },
  { name: "SQL", icon: "fas fa-database", color: "#336791" },
   { name: "PHP", icon: "fab fa-php", color: "#777BB4" }
];
let projects = [
  {
    title: "Portfolio",
    description: "Un sito personale responsive."
  },
  {
    title: "Password Generator",
    description: "Generatore di Password in python",
    link:"https://github.com/Matei-Ciofu/PasswordGen"
  },
  {
    title: "Password Checker",
    description: "Proggramma con semplice interfaccia grafica che controlla quanto una password sia sicura",
    link:"https://github.com/Matei-Ciofu/Common-Password-Checker"
  },
  {
    title: "BookTracker",
    description: "BookTracker è una semplice applicazione REST realizzata con Spring Boot e PostgreSQL, serve per tracciare i libri letti, da leggere o in lettura.",
    link:"https://github.com/Matei-Ciofu/Booktracker"
  },
  {
    title: "bash-encrypt-decrypt",
    description: "Uno script shell per cifrare e decifrare informazioni usando GnuPG (GPG) con cifratura AES256. Questo script permette anche, opzionalmente, di incorporare segreti cifrati nei metadata di un'immagine usando exiftool.",
    link:"https://github.com/Matei-Ciofu/bash-encrypt-decrypt"
  },
];

// Initialize EmailJS using config from config.js
(function(){
  if (typeof emailjs !== 'undefined' && typeof emailjsConfig !== 'undefined' && emailjsConfig.publicKey) {
      emailjs.init(emailjsConfig.publicKey);
  } else {
      console.error("EmailJS config not found or public key is missing. The contact form will not work.");
  }
})();

function handleSubmit(event) {
  event.preventDefault();
  const formStatus = document.getElementById("form-status");
  formStatus.textContent = "Invio in corso...";
  formStatus.classList.remove("form-error");

  if (typeof emailjsConfig === 'undefined') {
    formStatus.textContent = "Errore di configurazione. Impossibile inviare.";
    formStatus.classList.add("form-error");
    return;
  }

  emailjs.sendForm(emailjsConfig.serviceId, emailjsConfig.templateId, event.target)
    .then(() => {
      window.location.href = "grazie.html";
    }, (error) => {
      formStatus.textContent = "Errore nell'invio. Riprova più tardi.";
      formStatus.classList.add("form-error");
      console.error("EmailJS error:", error);
    });
}


const skillsList = document.getElementById("skills-list");
skills.forEach((skill, index) => {
  const li = document.createElement("li");
  li.className = "skill-item fade-in";
  li.style.transitionDelay = `${index * 50}ms`;
  li.style.backgroundColor = skill.color;
  if (skill.textColor) {
    li.style.color = skill.textColor;
  }
  li.innerHTML = `<i class="${skill.icon}"></i> ${skill.name}`;
  skillsList.appendChild(li);
});


const portfolioContainer = document.getElementById("portfolio-container");

projects.forEach(project => {
  const projectDiv = document.createElement("div");
  projectDiv.className = "project fade-in";

  const title = document.createElement("h3");
  const description = document.createElement("p");
  description.textContent = project.description;

  if (project.link) {
    const link = document.createElement("a");
    link.href = project.link;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = project.title;
    title.appendChild(link);
  } else {
    title.textContent = project.title;
  }

  projectDiv.appendChild(title);
  projectDiv.appendChild(description);
  portfolioContainer.appendChild(projectDiv);
});

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); 
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
       
        header.classList.add("header--hidden");
    } else {
        
        header.classList.remove("header--hidden");
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
