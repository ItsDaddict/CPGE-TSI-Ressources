// Search Functionality
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', function(e) {
    const term = e.target.value.toLowerCase();
    const resources = document.querySelectorAll('.resource-card');

    resources.forEach(function(resource) {
        const link = resource.querySelector('a').innerText.toLowerCase();
        if (link.includes(term)) {
            resource.style.display = 'block';
        } else {
            resource.style.display = 'none';
        }
    });
});
