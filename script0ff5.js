// Modern Loader Logic for Elite Standard Portal Page
document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.getElementById("progress");
  const percentageText = document.getElementById("percentage");
  const statusText = document.getElementById("status-text");

  if (progressBar && percentageText) {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 5) + 2;
      
      if (statusText) {
        if (progress < 35) {
          statusText.textContent = "Connecting to Elite Media Hub...";
        } else if (progress < 75) {
          statusText.textContent = "Verifying Downloader Links...";
        } else if (progress < 100) {
          statusText.textContent = "Loading App Portal...";
        } else {
          statusText.textContent = "Welcome to Elite Standard!";
        }
      }

      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => {
          window.location.href = "dashboard.html";
        }, 400);
      }
      
      progressBar.style.width = `${progress}%`;
      percentageText.textContent = `${progress}%`;
    }, 80);
  }

  // Particle Starfield Background Configuration
  if (document.body.classList.contains("login-page") && typeof tsParticles !== 'undefined') {
    tsParticles.load("tsparticles", {
      particles: {
        number: { value: 70, density: { enable: true, value_area: 800 } },
        color: { value: ["#f4b400", "#ffffff", "#3b82f6"] },
        shape: { type: "circle" },
        opacity: {
          value: 0.6,
          random: true,
          anim: { enable: true, speed: 0.8, opacity_min: 0.2, sync: false }
        },
        size: {
          value: { min: 1, max: 3.5 },
          random: true,
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 0.3 } },
          push: { particles_nb: 3 }
        }
      },
      retina_detect: true
    });
  }
});

// Logout function (redirects back to portal entry page)
function logout() {
  window.location.href = "index.html";
}
