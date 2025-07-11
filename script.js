document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerOffset = document.querySelector('header').offsetHeight;
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const welcomeHeading = document.querySelector('#inicio h2');
    const welcomeParagraph = document.querySelector('#inicio p:first-of-type');

    if (welcomeHeading) {
        const date = new Date();
        const hour = date.getHours();
        let greeting;
        const locationDetail = "nuesto local";

        if (hour < 12) {
            greeting = "¡Buenos días!";
        } else if (hour < 18) {
            greeting = "¡Buenas tardes!";
        } else {
            greeting = "¡Buenas noches!";
        }

        const cafeName = "Toc Toc Café Gourmet";

        welcomeHeading.textContent = `${greeting} Bienvenido a ${cafeName}`;

       
        
    }

    const galleryImages = document.querySelectorAll('#galeria .imagenes-galeria img');
    const body = document.body;

    const modal = document.createElement('div');
    modal.classList.add('image-modal');
    modal.innerHTML = `
        <span class="close-button">×</span>
        <img class="modal-content" src="" alt="">
        <div class="modal-caption"></div>
    `;
    body.appendChild(modal);

    const modalContent = modal.querySelector('.modal-content');
    const modalCaption = modal.querySelector('.modal-caption');
    const closeButton = modal.querySelector('.close-button');

    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'flex';
            modalContent.src = this.src;
            modalCaption.textContent = this.alt;
            body.style.overflow = 'hidden';
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        body.style.overflow = 'auto';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            body.style.overflow = 'auto';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
            body.style.overflow = 'auto';
        }
    });
});