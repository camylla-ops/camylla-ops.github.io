// Controle do Menu Mobile
document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('ativo');
    this.querySelector('i').classList.toggle('fa-times');
});

// Rolagem suave para âncoras internas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Seletor do destino
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;

        // Altura real do menu
        const headerHeight = document.querySelector('nav').offsetHeight;
        
        // Ajuste adicional (pode aumentar ou diminuir conforme seu layout)
        const extraOffset = 90; 
        // Se quiser incluir a margem/padding do header, pode colocar um valor maior
        
        // Calcula a posição exata para onde rolar
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - (headerHeight + extraOffset);

        // Rolagem suave até o ponto calculado
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});


// Controle do botão "Voltar ao Topo"
const topoBtn = document.getElementById('topoBtn');
topoBtn.style.opacity = '0';
topoBtn.style.transition = 'opacity 0.3s ease-in-out';

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        topoBtn.style.opacity = '1';
        topoBtn.style.display = 'block';
    } else {
        topoBtn.style.opacity = '0';
        setTimeout(() => {
            if (window.scrollY <= 500) topoBtn.style.display = 'none';
        }, 300);
    }
});

topoBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Atualização automática do ano
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Animação de revelação ao scroll
window.addEventListener('scroll', revealOnScroll);

function revealOnScroll() {
    document.querySelectorAll('.tool-item, .projeto-card').forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        }
    });
}

revealOnScroll();