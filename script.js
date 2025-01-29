let currentPage = 1;
const totalPages = document.querySelectorAll('.page').length;

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


