// FORTEX Website JavaScript

// Global variables
let isMenuOpen = false;
let activeSection = 'home';

// Services data
const services = [
    {
        icon: 'home',
        title: "Plafonnage & Cimentage",
        description: "Travaux de plafonnage professionnel et cimentage de qualité pour tous vos projets de construction."
    },
    {
        icon: 'hammer',
        title: "Carrelage & Marbre",
        description: "Installation de carrelage et pose de marbre avec finition impeccable pour vos espaces intérieurs et extérieurs."
    },
    {
        icon: 'shield',
        title: "Toiture & Étanchéité",
        description: "Services complets de toiture et d'étanchéité pour protéger votre bâtiment contre les intempéries."
    },
    {
        icon: 'wrench',
        title: "Menuiserie & Vitrerie",
        description: "Travaux de menuiserie sur mesure et installation de vitrerie pour tous types de bâtiments."
    },
    {
        icon: 'zap',
        title: "Chauffage & Climatisation",
        description: "Installation et maintenance de systèmes de chauffage, climatisation et ventilation."
    },
    {
        icon: 'users',
        title: "Sanitaire & Gaz",
        description: "Installation complète de systèmes sanitaires et raccordements gaz selon les normes en vigueur."
    }
];

// images (better we use Unsplash construction images)
const galleryImages = [
    { src: "https://images.unsplash.com/photo-1632143697508-2c49aadff5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Rénovation Complète" },
    { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Extension Moderne" },
    { src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Rénovation Culturelle" },
    { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Transformation Résidentielle" },
    { src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Rénovation Commerciale" },
    { src: "https://images.unsplash.com/photo-1604589977707-d161da2edb0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Revêtement Sol" }
];
// Initialize the website when the dom is loaded
document.addEventListener('DOMContentLoaded', function() {
    populateServices();
    populateGallery();
    setupScrollListener();
    setupIntersectionObserver();
});

// Create the icons
function createIcon(iconName, className = '') {
    const icons = {
        hammer: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>',
        home: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>',
        shield: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>',
        wrench: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.370a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.350a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.370.996.608 2.296.07 2.572-1.065z"></path>',
        zap: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>',
        users: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>'
    };
    
    return `<svg class="${className}" fill="none" stroke="currentColor" viewBox="0 0 24 24">${icons[iconName] || icons.home}</svg>`;
}

