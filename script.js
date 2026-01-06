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

