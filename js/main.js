document.addEventListener('DOMContentLoaded', function () {
  fetch('nav.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('nav-placeholder').innerHTML = data;
      document.querySelector('nav ul li a').classList.add('selected'); // Ensure Home is selected by default
    })
    .catch((error) => {
      console.error(error);
    });
  fetch('footer.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch((error) => {
      console.error(error);
    });
  loadContent('home');
});

function loadContent(page) {
  const mainContent = document.getElementById('main-content');
  fetch(`${page}.html`)
    .then((response) => response.text())
    .then((data) => {
      mainContent.innerHTML = data;
    })
    .catch((error) => {
      mainContent.innerHTML = '<p>Page not found.</p>';
      console.error(error);
    });
}

function loadProfiles() {
  const profiles = ['girija', 'munish', 'rachana', 'bill', 'yarrow'];
  profiles.forEach((profile) => {
    fetch(`profiles/${profile}.txt`)
      .then((response) => response.text())
      .then((data) => {
        const profileElement = document.getElementById(`${profile}-profile`);
        profileElement.innerHTML = data;
      })
      .catch((error) => {
        console.error(`Error loading profile for ${profile}:`, error);
      });
  });
}

function selectTab(element) {
  const tabs = document.querySelectorAll('nav ul li a');
  tabs.forEach(tab => tab.classList.remove('selected'));
  element.classList.add('selected');
}

function toggleTheme() {
  const themeStylesheet = document.getElementById('theme-stylesheet');
  const currentTheme = themeStylesheet.getAttribute('href');
  if (currentTheme === 'css/light.css') {
    themeStylesheet.setAttribute('href', 'css/dark.css');
  } else {
    themeStylesheet.setAttribute('href', 'css/light.css');
  }
}
