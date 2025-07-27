// components.js
async function loadComponent(id, url) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

document.addEventListener('DOMContentLoaded', async function() {
  if (document.getElementById('footer')) {
    loadComponent('footer', 'footer.html');
  }
}); 