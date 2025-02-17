
let currentPage = 1;
const totalPages = document.querySelectorAll('.page').length;

if (location.hash) {
    currentPage = Number(location.hash.slice(1));
}

document.getElementById('page' + currentPage).classList.add('active');

function nextPage() {
    if (currentPage < totalPages) {
        document.getElementById('page' + currentPage).classList.remove('active');
        currentPage++;
        document.getElementById('page' + currentPage).classList.add('active');
    }
}

function previousPage() {
    if (currentPage > 1) {
        document.getElementById('page' + currentPage).classList.remove('active');
        currentPage--;
        document.getElementById('page' + currentPage).classList.add('active');
    }
}

function goToPage(pageNumber) {
    currentPage = parseInt(pageNumber);
    history.pushState(null, null, '#' + pageNumber);
    updateActivePage();
}

function updateActivePage() {
    const pages = document.querySelectorAll('.page');

    pages.forEach((page) => {
        if (page.classList.contains('active')) {
            page.classList.remove('active');
        }
    });

    const selectedPage = document.getElementById('page' + currentPage);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
}

window.onload = function () {
    updateActivePage();
};






