// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-primary', 'font-semibold');
        link.classList.add('text-gray-700');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.remove('text-gray-700');
            link.classList.add('text-primary', 'font-semibold');
        }
    });
});

// Form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.nome || !data.email || !data.telefone || !data.servico) {
        showNotification('Por favor, preencha todos os campos obrigatórios.', 'error');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Por favor, insira um e-mail válido.', 'error');
        return;
    }

    // Phone validation (Brazilian format)
    const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$|^\d{10,11}$/;
    if (!phoneRegex.test(data.telefone.replace(/\D/g, ''))) {
        showNotification('Por favor, insira um telefone válido.', 'error');
        return;
    }

    // Show loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-24 right-6 p-4 rounded-lg shadow-lg z-50 max-w-md ${
        type === 'success' ? 'bg-green-500 text-white' :
        type === 'error' ? 'bg-red-500 text-white' :
        'bg-blue-500 text-white'
    }`;
    
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas ${
                type === 'success' ? 'fa-check-circle' :
                type === 'error' ? 'fa-exclamation-circle' :
                'fa-info-circle'
            } mr-3"></i>
            <span>${message}</span>
            <button class="ml-4 text-xl hover:opacity-70" onclick="this.parentElement.parentElement.remove()">
                &times;
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Phone number formatting
document.getElementById('telefone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 11) {
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (value.length >= 10) {
        value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else if (value.length >= 6) {
        value = value.replace(/(\d{2})(\d{4})/, '($1) $2');
    } else if (value.length >= 2) {
        value = value.replace(/(\d{2})/, '($1) ');
    }
    e.target.value = value;
});

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll:not(.animate-fade-in)');
    const windowHeight = window.innerHeight;
    
    elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible && elementTop > -element.offsetHeight) {
            setTimeout(() => {
                element.classList.add('animate-fade-in');
            }, index * 150); // Staggered animation
        }
    });
}

// Add animation classes to elements
document.addEventListener('DOMContentLoaded', function() {
    // Add animation to specific elements with custom classes
    const animationSelectors = [
        '.animate-title',
        '.animate-content', 
        '.animate-cards',
        '.animate-section',
        '.bg-white.p-8.rounded-lg',
        '.bg-gray-50.p-8.rounded-lg'
    ];
    
    // Add animation to hero section elements
    const heroSelectors = [
        '.animate-hero',
        '.animate-profile',
        '.animate-subtitle', 
        '.animate-description',
        '.animate-buttons'
    ];
    
    // Apply animation classes only to elements not in hero section initially
    animationSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            // Only add animation class if not in hero section
            if (!element.closest('#inicio')) {
                element.classList.add('animate-on-scroll');
            }
        });
    });
    
    // Apply animation classes to hero elements
    heroSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.classList.add('animate-on-scroll');
        });
    });
    
    // Animate hero section immediately
    setTimeout(() => {
        animateHeroSection();
    }, 100);
    
    // Animate other visible elements immediately 
    setTimeout(() => {
        animateAllVisibleElements();
    }, 500);
    
    // Throttled scroll listener for better performance
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                animateOnScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
});

// Function to animate ALL visible elements on page load (not just hero)
function animateAllVisibleElements() {
    const elements = document.querySelectorAll('.animate-on-scroll:not(.animate-fade-in)');
    
    elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 1.2 && rect.bottom > -100;
        
        if (isVisible) {
            setTimeout(() => {
                element.classList.add('animate-fade-in');
            }, index * 100); // Faster staggered animation
        }
    });
}

// Function to animate hero section on page load
function animateHeroSection() {
    const heroElements = [
        '.animate-profile',
        '.animate-hero .animate-title',
        '.animate-subtitle',
        '.animate-description', 
        '.animate-buttons'
    ];
    
    heroElements.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
            setTimeout(() => {
                element.classList.add('animate-fade-in');
            }, index * 200); // Faster sequential animation
        }
    });
}

// WhatsApp integration
function openWhatsApp() {
    const phone = '556384911618'; // Correct WhatsApp number
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta.');
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
}

// Navigation integration for location
function openNavigation() {
    console.log('Opening navigation...'); // Debug log
    const address = 'Palmas Business Center, Q. 106 Norte Alameda 2, 4 - Sala 206 - Plano Diretor Norte, Palmas - TO, 77006-054';
    const encodedAddress = encodeURIComponent(address);
    
    // Detect if mobile device
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // For mobile devices, try to open native maps app
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            // iOS - Apple Maps
            const appleMapsUrl = `http://maps.apple.com/?q=${encodedAddress}`;
            window.open(appleMapsUrl, '_blank');
        } else if (/Android/i.test(navigator.userAgent)) {
            // Android - Google Maps app
            const googleMapsUrl = `google.navigation:q=${encodedAddress}`;
            const fallbackUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
            
            // Try to open Google Maps app, fallback to web
            window.location.href = googleMapsUrl;
            setTimeout(() => {
                window.open(fallbackUrl, '_blank');
            }, 500);
        } else {
            // Other mobile devices - Google Maps web
            const googleMapsWeb = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
            window.open(googleMapsWeb, '_blank');
        }
    } else {
        // For desktop, open Google Maps web with directions
        const googleMapsWeb = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
        window.open(googleMapsWeb, '_blank');
    }
}

// Add WhatsApp click handler
document.addEventListener('DOMContentLoaded', function() {
    // WhatsApp links
    const whatsappLinks = document.querySelectorAll('.fab.fa-whatsapp');
    whatsappLinks.forEach(link => {
        link.parentElement.addEventListener('click', function(e) {
            e.preventDefault();
            openWhatsApp();
        });
    });
    
    // Navigation click handlers for location elements
    const locationElements = document.querySelectorAll('[data-location="true"]');
    locationElements.forEach(element => {
        element.style.cursor = 'pointer';
        element.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Location clicked!'); // Debug log
            openNavigation();
        });
    });
    
    // Also add listeners to map marker icons specifically
    const mapIcons = document.querySelectorAll('.fas.fa-map-marker-alt');
    mapIcons.forEach(icon => {
        const parentCard = icon.closest('div');
        if (parentCard && parentCard.hasAttribute('data-location')) {
            parentCard.style.cursor = 'pointer';
            parentCard.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Map icon clicked!'); // Debug log
                openNavigation();
            });
        }
    });

    // Service type selection (Online/Presencial) - Removed toggle functionality
    // Both services are now always visible
});

// Floating WhatsApp button
function createFloatingWhatsApp() {
    const floatingBtn = document.createElement('div');
    floatingBtn.innerHTML = `
        <div class="fixed bottom-6 right-6 z-50">
            <button onclick="openWhatsApp()" class="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 animate-pulse">
                <i class="fab fa-whatsapp text-2xl"></i>
            </button>
        </div>
    `;
    document.body.appendChild(floatingBtn);
}

// Initialize floating WhatsApp button
document.addEventListener('DOMContentLoaded', function() {
    createFloatingWhatsApp();
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    /* Default state - elements start invisible */
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(40px);
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    /* Animated state - elements become visible */
    .animate-fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    /* Hero section - elements visible immediately, just animate in */
    #inicio .animate-on-scroll {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease-out;
    }
    
    /* Hero section specific animations */
    .animate-profile.animate-on-scroll {
        opacity: 0;
        transform: translateY(30px) scale(0.9);
        transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    
    .animate-profile.animate-fade-in {
        opacity: 1 !important;
        transform: translateY(0) scale(1) !important;
    }
    
    .animate-hero .animate-title.animate-on-scroll {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .animate-subtitle.animate-on-scroll {
        opacity: 0;
        transform: translateX(-20px);
        transition: all 0.6s ease-out;
    }
    
    .animate-subtitle.animate-fade-in {
        opacity: 1 !important;
        transform: translateX(0) !important;
    }
    
    .animate-description.animate-on-scroll {
        opacity: 0;
        transform: translateX(20px);
        transition: all 0.6s ease-out;
    }
    
    .animate-description.animate-fade-in {
        opacity: 1 !important;
        transform: translateX(0) !important;
    }
    
    .animate-buttons.animate-on-scroll {
        opacity: 0;
        transform: translateY(20px) scale(0.95);
        transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    
    .animate-buttons.animate-fade-in {
        opacity: 1 !important;
        transform: translateY(0) scale(1) !important;
    }
    
    /* Section titles */
    .animate-title.animate-on-scroll {
        transform: translateY(30px) scale(0.95);
        transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    
    .animate-title.animate-fade-in {
        transform: translateY(0) scale(1) !important;
    }
    
    .animate-cards .animate-on-scroll {
        transform: translateY(50px);
        transition: all 0.6s ease-out;
    }
    
    .animate-content.animate-on-scroll {
        transform: translateX(-30px);
        transition: all 0.8s ease-out;
    }
    
    .animate-content.animate-fade-in {
        transform: translateX(0) !important;
    }
    
    /* Card hover effects */
    .bg-white.p-8.rounded-lg, .bg-gray-50.p-8.rounded-lg {
        transition: all 0.3s ease, opacity 0.8s ease, transform 0.8s ease;
    }
    
    .bg-white.p-8.rounded-lg:hover, .bg-gray-50.p-8.rounded-lg:hover {
        transform: translateY(-5px) !important;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(40px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
    }
`;
document.head.appendChild(style);
