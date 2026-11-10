//filter destinasi
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        cards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

//validasi form
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
    }

    form.classList.remove('was-validated');
    formMsg.style.color = '#198754';
    formMsg.textContent = 'Pesan berhasil dikirim! Terima kasih, ' + document.getElementById('nama').value;
    form.reset();
});

//navbar shadow on scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNavbar');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15)';
    } else {
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

//tutup navbar saat link di klik (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navCollapse = document.getElementById('navMenu');
        if (navCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navCollapse).hide();
        }
    });
});
