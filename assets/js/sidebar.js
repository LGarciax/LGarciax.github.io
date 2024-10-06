document.getElementById('menu').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    // Toggle the class instead of inline styles
    sidebar.classList.toggle('show-sidebar');
});