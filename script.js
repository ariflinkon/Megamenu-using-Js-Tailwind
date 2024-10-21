document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('nav > ul > li');

    menuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const subMenu = this.querySelector('ul');
            const isOpen = subMenu.classList.contains('opacity-100');

            // Close all submenus
            document.querySelectorAll('nav > ul > li > ul').forEach(ul => {
                ul.classList.remove('opacity-100');
                ul.classList.add('opacity-0');
            });

            // Toggle the clicked submenu
            if (!isOpen) {
                subMenu.classList.remove('opacity-0');
                subMenu.classList.add('opacity-100');
            }
        });
    });
});