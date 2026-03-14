/* ===========================
   Mobile Navigation Toggle
   =========================== */

function toggleMenu() {
    const nav = document.querySelector("nav ul");
    nav.classList.toggle("open");
}

const hamburger = document.querySelector(".hamburger");
if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
}

/* ===========================
   Smooth Scrolling
   =========================== */

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

/* ===========================
   Project Filtering
   =========================== */

function filterProjects(category) {
    const projects = document.querySelectorAll("#projects article");

    projects.forEach(project => {
        const type = project.dataset.category;
        project.style.display =
            category === "all" || type === category ? "block" : "none";
    });
}

document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        filterProjects(btn.dataset.filter);
    });
});

/* ===========================
   Lightbox Modal for Images
   =========================== */

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

document.querySelectorAll("#projects img").forEach(img => {
    img.addEventListener("click", () => {
        lightbox.classList.add("active");
        const modalImg = document.createElement("img");
        modalImg.src = img.src;
        lightbox.innerHTML = "";
        lightbox.appendChild(modalImg);
    });
});

lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

/* ===========================
   Contact Form Validation
   =========================== */

const form = document.querySelector("#contact form");

if (form) {
    form.addEventListener("submit", event => {
        event.preventDefault();

        const name = form.querySelector("#name");
        const email = form.querySelector("#email");
        const message = form.querySelector("#message");

        let valid = true;

        [name, email, message].forEach(field => {
            if (!field.value.trim()) {
                field.classList.add("error");
                valid = false;
            } else {
                field.classList.remove("error");
            }
        });

        if (valid) {
            alert("Message sent!");
            form.reset();
        }
    });

    form.querySelectorAll("input, textarea").forEach(field => {
        field.addEventListener("input", () => {
            if (field.value.trim()) {
                field.classList.remove("error");
            }
        });
    });
}

/* ===========================
   Debugging Helpers
   =========================== */

// Example: log when script loads
console.log("script.js loaded successfully");
