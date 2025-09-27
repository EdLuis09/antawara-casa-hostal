// Main JavaScript file for Antawara website
class AntawaraApp {
    constructor() {
        this.currentReviewIndex = 0;
        this.isInitialized = false;
        this.translations = window.translations || {};
        
        // Header scroll tracking variables
        this.lastScrollTop = 0;
        this.scrollDirection = 'up';
        this.headerVisible = true;
        this.scrollThreshold = 5; // Minimum scroll distance to trigger hide/show
        
        // Bind methods
        this.init = this.init.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleResize = this.handleResize.bind(this);
        
        // Initialize when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', this.init);
        } else {
            this.init();
        }
    }
    
    init() {
        if (this.isInitialized) return;
        
        console.log('Initializing Antawara website...');
        
        try {
            // Debug: Check if required objects are available
            console.log('Checking required objects...');
            console.log('appData available:', typeof window.appData !== 'undefined');
            console.log('components available:', typeof window.components !== 'undefined');
            console.log('utils available:', typeof window.utils !== 'undefined');
            
            // Verify objects are loaded
            if (typeof window.appData === 'undefined') {
                throw new Error('appData not loaded');
            }
            if (typeof window.components === 'undefined') {
                throw new Error('components not loaded');
            }
            if (typeof window.utils === 'undefined') {
                throw new Error('utils not loaded');
            }
            
            // Initialize language system
            this.initLanguageSystem();
            
            // Render dynamic content
            this.renderContent();
            
            // Setup event listeners
            this.setupEventListeners();
            
            // Initialize components
            this.initNavigation();
            this.initGallery();
            this.initReviewsCarousel();
            this.initAboutSlider();
            this.initHeroVideo();
            this.initContactForm();
            this.initContactEvents();
            this.initMap();
            this.initAnimations();
            
            // Setup smooth scrolling for navigation links
            this.setupSmoothScrolling();
            
            // Initialize lazy loading
            this.initLazyLoading();
            
            // Initialize UX enhancements
            this.initScrollProgress();
            this.initVisibilityAnimations();
            this.initMicrointeractions();
            
            // Initialize MEJORA 3: Instant Feedback System
            this.initInstantFeedback();
            this.initProgressBars();
            this.initRealTimeValidation();
            
            // Initialize MEJORA 4: Accessibility System
            this.initAccessibility();
            
            // Initialize Language Discovery System
            initLanguageDiscovery();
            
            // Initialize Logo Enhancements
            initLogoEnhancements();
            
            this.isInitialized = true;
            console.log('Antawara website initialized successfully!');
            
        } catch (error) {
            console.error('Error initializing website:', error);
        }
    }
    
    renderContent() {
        console.log('ðŸ”„ Starting renderContent...');
        
        // Reset pagination before rendering
        window.components.paginate.reset('tours');
        window.components.paginate.reset('places');
        window.components.paginate.reset('gallery');
        
        console.log('ðŸ“Š Rendering dynamic content...');
        // Render all dynamic content using components with pagination
        window.components.render.all();
        
        console.log('✅ Dynamic content rendered');
        
        // Initialize image sliders after rendering
        this.initImageSliders();
        
        // Initialize modal functionality with delay to ensure DOM is ready
        setTimeout(() => {
            this.initModal();
        }, 100);
        
        // Setup resize listener for responsive pagination
        window.addEventListener('resize', () => {
            console.log('📱 Resize event detected - re-rendering components...');
            
            // Re-render with new screen size configuration
            window.components.paginate.reset('tours');
            window.components.paginate.reset('places');
            window.components.paginate.reset('gallery');
            window.components.render.tours();
            window.components.render.places();
            window.components.render.gallery();
            this.initImageSliders();
            
            // Re-setup image click listeners after re-render
            setTimeout(() => {
                this.setupImageClickListeners();
            }, 100);
            
            // Apply translations to newly created elements after re-render
            setTimeout(() => {
                console.log('🌍 Applying translations after resize re-render...');
                if (window.utils && window.utils.updateTranslations) {
                    window.utils.updateTranslations();
                }
                if (window.utils && window.utils.language && window.utils.language.updateLoadMoreButtons) {
                    window.utils.language.updateLoadMoreButtons();
                }
            }, 150);
        });
    }
    
    initImageSliders() {
        // Initialize sliders for all room cards
        window.appData.rooms.forEach(room => {
            const sliderId = `slider-${room.id}`;
            window.components.slider.initSlider(sliderId, room.images.length);
            // Start auto-play for room sliders
            window.components.autoSlider.start(sliderId, 5000);
            window.components.autoSlider.pauseOnHover(sliderId);
        });
        
        // Initialize sliders for all tour cards
        window.appData.tours.forEach(tour => {
            const sliderId = `tour-slider-${tour.id}`;
            window.components.slider.initSlider(sliderId, tour.images.length);
            // Start auto-play for tour sliders
            window.components.autoSlider.start(sliderId, 6000);
            window.components.autoSlider.pauseOnHover(sliderId);
        });
        
        // Initialize sliders for all place cards
        window.appData.places.forEach(place => {
            const sliderId = `place-slider-${place.id}`;
            window.components.slider.initSlider(sliderId, place.images.length);
            // Start auto-play for place sliders
            window.components.autoSlider.start(sliderId, 5500);
            window.components.autoSlider.pauseOnHover(sliderId);
        });
    }

    initModal() {
        // Modal close button
        const closeBtn = document.getElementsByClassName('modal-close')[0];
        if (closeBtn) {
            closeBtn.onclick = window.components.modal.close;
        }

        // Modal navigation buttons
        const prevBtn = document.getElementById('modalPrev');
        const nextBtn = document.getElementById('modalNext');
        
        if (prevBtn) prevBtn.onclick = window.components.modal.prev;
        if (nextBtn) nextBtn.onclick = window.components.modal.next;

        // Enhanced modal overlay click functionality
        const modal = document.getElementById('imageModal');
        if (modal) {
            // Close modal when clicking on the modal overlay (background)
            modal.addEventListener('click', (event) => {
                // Check if click was on modal background, not on modal content or its children
                if (event.target === modal) {
                    window.components.modal.close();
                }
            });

            // Also handle clicks on the modal content area but outside the image
            const modalContent = modal.querySelector('.modal-content');
            if (modalContent) {
                modalContent.addEventListener('click', (event) => {
                    const modalImage = modal.querySelector('#modalImage');
                    const modalNavigation = modal.querySelector('.modal-navigation');
                    const modalInfo = modal.querySelector('.modal-info');
                    const closeButton = modal.querySelector('.modal-close');
                    
                    // Close modal only if click is on modal content but not on:
                    // - the image itself
                    // - navigation buttons
                    // - modal info area
                    // - close button
                    if (event.target === modalContent && 
                        !modalImage.contains(event.target) &&
                        !modalNavigation.contains(event.target) &&
                        !modalInfo.contains(event.target) &&
                        event.target !== closeButton) {
                        window.components.modal.close();
                    }
                });
            }
        }

        // Add touch support for mobile devices
        if (modal) {
            let touchStartX = 0;
            let touchStartY = 0;
            
            modal.addEventListener('touchstart', (e) => {
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
            }, { passive: true });
            
            modal.addEventListener('touchend', (e) => {
                const touchEndX = e.changedTouches[0].clientX;
                const touchEndY = e.changedTouches[0].clientY;
                const diffX = touchStartX - touchEndX;
                const diffY = touchStartY - touchEndY;
                
                // If it's a tap (not a swipe) and on the background
                if (Math.abs(diffX) < 50 && Math.abs(diffY) < 50 && e.target === modal) {
                    window.components.modal.close();
                }
            }, { passive: true });
        }

        // Add click listeners to all clickable images
        this.setupImageClickListeners();

        // Enhanced keyboard navigation
        document.addEventListener('keydown', (e) => {
            const modal = document.getElementById('imageModal');
            if (modal && modal.style.display === 'block') {
                switch(e.key) {
                    case 'Escape':
                        e.preventDefault();
                        window.components.modal.close();
                        break;
                    case 'ArrowLeft':
                        e.preventDefault();
                        window.components.modal.prev();
                        break;
                    case 'ArrowRight':
                        e.preventDefault();
                        window.components.modal.next();
                        break;
                    case ' ': // Spacebar
                        e.preventDefault();
                        window.components.modal.next();
                        break;
                }
            }
        });
    }

    setupImageClickListeners() {
        // Add event listeners to clickable images (rooms, tours, places)
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('clickable-image')) {
                const imageIndex = parseInt(e.target.getAttribute('data-image-index'));
                
                // Check for room images
                const roomId = e.target.getAttribute('data-room-id');
                if (roomId) {
                    const room = window.appData.rooms.find(r => r.id === parseInt(roomId));
                    if (room) {
                        window.components.modal.open(room.images, imageIndex, room.name);
                        return;
                    }
                }
                
                // Check for tour images
                const tourId = e.target.getAttribute('data-tour-id');
                if (tourId) {
                    const tour = window.appData.tours.find(t => t.id === parseInt(tourId));
                    if (tour) {
                        window.components.modal.open(tour.images, imageIndex, tour.name);
                        return;
                    }
                }
                
                // Check for place images
                const placeId = e.target.getAttribute('data-place-id');
                if (placeId) {
                    const place = window.appData.places.find(p => p.id === parseInt(placeId));
                    if (place) {
                        window.components.modal.open(place.images, imageIndex, place.name);
                        return;
                    }
                }
            }
        });
    }
    
    setupEventListeners() {
        // Scroll event with throttling
        window.addEventListener('scroll', window.utils.performance.throttle(this.handleScroll, 16));
        
        // Resize event with debouncing
        window.addEventListener('resize', window.utils.performance.debounce(this.handleResize, 250));
        
        // Touch events for slider controls
        this.initTouchSliderControls();
        
        // Keyboard events
        document.addEventListener('keydown', (e) => {
            // Close gallery modal with Escape key
            if (e.key === 'Escape') {
                window.components.actions.closeGallery();
            }
            
            // Navigate gallery with arrow keys
            if (window.utils.dom.query('.gallery-modal.active')) {
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    window.components.actions.navigateGallery('prev');
                }
                if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    window.components.actions.navigateGallery('next');
                }
            }
        });
        
        // Gallery filter buttons - Setup after content is rendered
        setTimeout(() => {
            const filterButtons = document.querySelectorAll('.filter-btn');
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const filter = button.dataset.filter;
                    window.components.actions.filterGallery(filter);
                });
            });
        }, 1000);
    }
    
    initNavigation() {
        const navbar = window.utils.dom.get('header');
        const navbarToggle = window.utils.dom.get('navbar-toggle');
        const navbarMenu = window.utils.dom.get('navbar-menu');
        const mobileClose = window.utils.dom.get('mobile-close');
        const navLinks = window.utils.dom.queryAll('.nav-link');
        
        // Mobile menu toggle
        if (navbarToggle && navbarMenu) {
            navbarToggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggleMobileMenu();
            });
        }
        
        // Mobile close button
        if (mobileClose) {
            mobileClose.addEventListener('click', (e) => {
                e.preventDefault();
                this.closeMobileMenu();
            });
        }
        
        // Close mobile menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.utils.dom.hasClass(navbarMenu, 'active')) {
                    this.closeMobileMenu();
                }
            });
        });
        
        // Close mobile menu when clicking outside (only on desktop)
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target) && 
                window.utils.dom.hasClass(navbarMenu, 'active') && 
                !window.utils.device.isMobile()) {
                this.closeMobileMenu();
            }
        });
        
        // Handle escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && window.utils.dom.hasClass(navbarMenu, 'active')) {
                this.closeMobileMenu();
            }
        });
        
        // Prevent scroll when mobile menu is open
        this.setupScrollLock();
        
        // Update active navigation link based on scroll position
        this.updateActiveNavLink();
    }
    
    toggleMobileMenu() {
        const navbarToggle = window.utils.dom.get('navbar-toggle');
        const navbarMenu = window.utils.dom.get('navbar-menu');
        
        if (window.utils.dom.hasClass(navbarMenu, 'active')) {
            this.closeMobileMenu();
        } else {
            this.openMobileMenu();
        }
    }
    
    openMobileMenu() {
    const navbarToggle = window.utils.dom.get('navbar-toggle');
    const navbarMenu = window.utils.dom.get('navbar-menu');
    
    // NO modificar la posición de scroll - solo abrir el menú
    window.utils.dom.addClass(navbarToggle, 'active');
    window.utils.dom.addClass(navbarMenu, 'active');
    window.utils.dom.addClass(document.body, 'menu-open');
    
    // Animate menu items
    const navLinks = window.utils.dom.queryAll('.nav-link');
    navLinks.forEach((link, index) => {
        setTimeout(() => {
            window.utils.dom.addClass(link, 'slide-in-left');
        }, index * 50);
    });
    
    // Track analytics
    window.utils.analytics.trackEvent('mobile_menu_open');
}
    
    closeMobileMenu() {
    const navbarToggle = window.utils.dom.get('navbar-toggle');
    const navbarMenu = window.utils.dom.get('navbar-menu');
    
    // NO restaurar posición - solo cerrar el menú
    window.utils.dom.removeClass(navbarToggle, 'active');
    window.utils.dom.removeClass(navbarMenu, 'active');
    window.utils.dom.removeClass(document.body, 'menu-open');
    
    // Remove animation classes
    const navLinks = window.utils.dom.queryAll('.nav-link');
    navLinks.forEach(link => {
        window.utils.dom.removeClass(link, 'slide-in-left');
    });
}
    
    setupScrollLock() {
    // Prevent body scroll when mobile menu is open
    const style = document.createElement('style');
    style.textContent = `
        body.menu-open {
            overflow: hidden;
        }
        
        @media (min-width: 992px) {
            body.menu-open {
                overflow: auto;
            }
        }
    `;
    document.head.appendChild(style);
}
    
    initGallery() {
        const galleryModal = window.utils.dom.get('gallery-modal');
        const closeBtn = window.utils.dom.query('.gallery-close');
        const prevBtn = window.utils.dom.get('gallery-prev');
        const nextBtn = window.utils.dom.get('gallery-next');
        
        // Close gallery modal
        if (closeBtn) {
            closeBtn.addEventListener('click', window.components.actions.closeGallery);
        }
        
        // Gallery navigation
        if (prevBtn) {
            prevBtn.addEventListener('click', () => window.components.actions.navigateGallery('prev'));
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => window.components.actions.navigateGallery('next'));
        }
        
        // Close modal when clicking on background
        if (galleryModal) {
            galleryModal.addEventListener('click', (e) => {
                if (e.target === galleryModal) {
                    window.components.actions.closeGallery();
                }
            });
        }
    }
    
    initReviewsCarousel() {
        const reviewsContainer = window.utils.dom.query('.reviews-container');
        const prevBtn = window.utils.dom.get('review-prev');
        const nextBtn = window.utils.dom.get('review-next');
        
        if (!reviewsContainer || !window.appData.reviews.length) return;
        
        // Navigation buttons
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.navigateReviews('prev'));
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.navigateReviews('next'));
        }
        
        // Auto-play reviews carousel
        this.startReviewsAutoplay();
        
        // Pause autoplay on hover
        reviewsContainer.addEventListener('mouseenter', () => this.pauseReviewsAutoplay());
        reviewsContainer.addEventListener('mouseleave', () => this.startReviewsAutoplay());
    }
    
    navigateReviews(direction) {
        const reviewsContainer = window.utils.dom.query('.reviews-container');
        const totalReviews = window.appData.reviews.length;
        
        if (!reviewsContainer || totalReviews === 0) return;
        
        if (direction === 'next') {
            this.currentReviewIndex = (this.currentReviewIndex + 1) % totalReviews;
        } else {
            this.currentReviewIndex = (this.currentReviewIndex - 1 + totalReviews) % totalReviews;
        }
        
        const translateX = -this.currentReviewIndex * 100;
        reviewsContainer.style.transform = `translateX(${translateX}%)`;
    }
    
    startReviewsAutoplay() {
        this.reviewsInterval = setInterval(() => {
            this.navigateReviews('next');
        }, 5000);
    }
    
    pauseReviewsAutoplay() {
        if (this.reviewsInterval) {
            clearInterval(this.reviewsInterval);
        }
    }
    
    initContactForm() {
        const contactForm = window.utils.dom.get('contact-form');
        
        if (!contactForm) return;
        
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            // Validate form
            const validation = this.validateContactForm(data);
            if (!validation.isValid) {
                this.showFormErrors(validation.errors);
                return;
            }
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';
            
            try {
                // Send via WhatsApp using components action
                window.components.actions.submitContactForm(data);
                
                // Show success message
                this.showFormSuccess('Â¡Mensaje redirigido a WhatsApp! Completa el envÃ­o desde la app.');
                contactForm.reset();
                
                // Track analytics
                window.utils.analytics.trackEvent('contact_form_submit', {
                    subject: data.subject,
                    hasPhone: !!data.phone
                });
                
            } catch (error) {
                console.error('Error submitting form:', error);
                this.showFormErrors(['Error al procesar el mensaje. Por favor, intenta nuevamente.']);
            } finally {
                // Reset button state
                submitBtn.disabled = false;
                submitBtn.textContent = 'Enviar Mensaje';
            }
        });
    }
    
    validateContactForm(data) {
        const errors = [];
        
        if (!window.utils.validation.required(data.name)) {
            errors.push('El nombre es requerido.');
        }
        
        if (!window.utils.validation.required(data.email)) {
            errors.push('El email es requerido.');
        } else if (!window.utils.validation.email(data.email)) {
            errors.push('Por favor ingresa un email vÃ¡lido.');
        }
        
        if (data.phone && !window.utils.validation.phone(data.phone)) {
            errors.push('Por favor ingresa un telÃ©fono vÃ¡lido.');
        }
        
        if (!window.utils.validation.required(data.subject)) {
            errors.push('Por favor selecciona un asunto.');
        }
        
        if (!window.utils.validation.required(data.message)) {
            errors.push('El mensaje es requerido.');
        } else if (!window.utils.validation.minLength(data.message, 10)) {
            errors.push('El mensaje debe tener al menos 10 caracteres.');
        }
        
        return {
            isValid: errors.length === 0,
            errors
        };
    }
    
    async submitContactForm(data) {
        // Simulate API call delay
        return new Promise((resolve) => {
            setTimeout(resolve, 1500);
        });
        
        // In a real implementation, you would send data to your backend:
        // const response = await fetch('/api/contact', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data)
        // });
        // return response.json();
    }
    
    initContactEvents() {
        // Add event listeners for contact items as backup to onclick attributes
        const contactItems = document.querySelectorAll('.contact-item');
        
        contactItems.forEach(item => {
            const iconClass = item.querySelector('i')?.className || '';
            
            // Email contact item
            if (iconClass.includes('fa-envelope')) {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (window.components?.actions?.contactEmail) {
                        window.components.actions.contactEmail();
                    } else {
                        // Fallback: direct mailto
                        const email = 'antawaracasahostal@gmail.com';
                        const subject = encodeURIComponent('Consulta sobre Casa Hostal Antawara');
                        const body = encodeURIComponent('Hola,\n\nMe interesa obtener mÃ¡s informaciÃ³n sobre Casa Hostal Antawara.\n\nGracias,');
                        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
                    }
                });
                
                // Also add touch events for mobile
                item.addEventListener('touchend', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (window.components?.actions?.contactEmail) {
                        window.components.actions.contactEmail();
                    }
                });
            }
            
            // WhatsApp contact item
            if (iconClass.includes('fa-whatsapp')) {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (window.components?.actions?.contactWhatsApp) {
                        window.components.actions.contactWhatsApp();
                    }
                });
            }
        });
    }
    
    showFormErrors(errors) {
        // Remove existing error messages
        const existingErrors = window.utils.dom.queryAll('.form-error');
        existingErrors.forEach(error => error.remove());
        
        // Show new errors
        const form = window.utils.dom.get('contact-form');
        errors.forEach(error => {
            const errorDiv = window.utils.dom.create('div', 'alert alert-error form-error', error);
            form.insertBefore(errorDiv, form.firstChild);
        });
        
        // Scroll to form
        window.utils.animation.scrollTo(form, 100);
    }
    
    showFormSuccess(message) {
        // Remove existing messages
        const existingMessages = window.utils.dom.queryAll('.form-success, .form-error');
        existingMessages.forEach(msg => msg.remove());
        
        // Show success message
        const form = window.utils.dom.get('contact-form');
        const successDiv = window.utils.dom.create('div', 'alert alert-success form-success', message);
        form.insertBefore(successDiv, form.firstChild);
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            if (successDiv.parentNode) {
                successDiv.remove();
            }
        }, 5000);
    }
    
    initMap() {
        // Placeholder for Google Maps initialization
        // In a real implementation, you would initialize Google Maps here
        const mapContainer = window.utils.dom.get('map');
        if (mapContainer) {
            // For now, show a placeholder
            mapContainer.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #f0f0f0; color: #666;">
                    <div style="text-align: center;">
                        <i class="fas fa-map-marker-alt" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                        <h3>Mapa de UbicaciÃ³n</h3>
                        <p>Calle Principal 123, Centro HistÃ³rico</p>
                        <a href="https://maps.google.com/?q=${window.appData.contact.coordinates.lat},${window.appData.contact.coordinates.lng}" 
                           target="_blank" class="btn btn-primary">Ver en Google Maps</a>
                    </div>
                </div>
            `;
        }
    }
    
    initAboutSlider() {
        console.log('ðŸ–¼ï¸ Initializing About slider...');
        
        // Initialize the about slider with a small delay to ensure DOM is ready
        setTimeout(() => {
            window.components.aboutSlider.init();
            console.log('✅ About slider initialized');
        }, 500);
    }

    initHeroVideo() {
        console.log('ðŸŽ¬ Initializing Hero video...');
        
        // Initialize the hero video with a small delay to ensure DOM is ready
        setTimeout(() => {
            window.components.heroVideo.init();
            console.log('✅ Hero video initialized');
            
            // Ejecutar test de diagnÃ³stico
            setTimeout(() => {
                window.components.heroVideo.testVideo();
            }, 1000);
        }, 300);
    }
    
    initAnimations() {
        // Initialize intersection observer for animations
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        window.utils.dom.addClass(entry.target, 'fade-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });
            
            // Observe elements for animation
            const animatableElements = window.utils.dom.queryAll('.card, .section-header, .about-features .feature');
            animatableElements.forEach(el => observer.observe(el));
        }
    }
    
    setupSmoothScrolling() {
        const navLinks = window.utils.dom.queryAll('a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Solo hacer smooth scroll si no estamos en el menÃº mÃ³vil activo
                const navbarMenu = window.utils.dom.get('navbar-menu');
                const isMobileMenuActive = window.utils.dom.hasClass(navbarMenu, 'active');
                
                // Si el menÃº mÃ³vil estÃ¡ activo, no hacer preventDefault ni scroll automÃ¡tico
                // Dejar que el navegador maneje el scroll naturalmente
                if (!isMobileMenuActive) {
                    e.preventDefault();
                    const targetId = link.getAttribute('href').substring(1);
                    const targetElement = window.utils.dom.get(targetId);
                    
                    if (targetElement) {
                        window.utils.animation.scrollTo(targetElement, 80);
                        
                        // Track navigation
                        window.utils.analytics.trackEvent('navigation_click', { section: targetId });
                    }
                } else {
                    // En mÃ³vil, solo hacer el tracking, el scroll se maneja naturalmente
                    const targetId = link.getAttribute('href').substring(1);
                    window.utils.analytics.trackEvent('navigation_click', { section: targetId });
                }
            });
        });
    }
    
    initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            window.utils.dom.addClass(img, 'loaded');
                        }
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            // Observe images with data-src attribute
            const lazyImages = window.utils.dom.queryAll('img[data-src]');
            lazyImages.forEach(img => imageObserver.observe(img));
        }
    }
    
    handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const header = window.utils.dom.get('header');
        
        // Update header background on scroll
        if (scrollTop > 50) {
            window.utils.dom.addClass(header, 'scrolled');
        } else {
            window.utils.dom.removeClass(header, 'scrolled');
        }
        
        // Handle scroll-based header visibility (mobile/tablet only)
        this.handleScrollBasedHeaderVisibility(scrollTop);
        
        // Hide header when reaching footer (all devices)
        this.handleHeaderVisibilityOnFooter();
        
        // Update active navigation link
        this.updateActiveNavLink();
        
        // Parallax effect for hero section
        const hero = window.utils.dom.query('.hero');
        if (hero) {
            const heroImage = hero.querySelector('.hero-image');
            if (heroImage) {
                const offset = scrollTop * 0.5;
                heroImage.style.transform = `translateY(${offset}px)`;
            }
        }
        
        // Update last scroll position
        this.lastScrollTop = scrollTop;
    }
    
    handleHeaderVisibilityOnFooter() {
        const footer = document.querySelector('footer');
        const header = window.utils.dom.get('header');
        
        if (!footer || !header) return;
        
        // Get footer position and viewport info
        const footerRect = footer.getBoundingClientRect();
        const headerHeight = header.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Calculate distance from top of page to footer
        const footerOffsetTop = footer.offsetTop;
        const documentHeight = document.documentElement.scrollHeight;
        const footerDistanceFromTop = footerOffsetTop;
        
        // Calculate scroll position relative to footer
        const distanceToFooter = footerDistanceFromTop - scrollTop;
        const hideThreshold = windowHeight + headerHeight + 100; // Buffer for smooth transition
        
        // Hide header when getting close to footer
        if (distanceToFooter <= hideThreshold) {
            window.utils.dom.addClass(header, 'hidden-on-footer');
        } else {
            window.utils.dom.removeClass(header, 'hidden-on-footer');
        }
        
        // Also hide if footer is in viewport and overlapping with header area
        const footerInViewport = footerRect.top < windowHeight && footerRect.bottom > 0;
        const footerNearTop = footerRect.top <= headerHeight + 50;
        
        if (footerInViewport && footerNearTop) {
            window.utils.dom.addClass(header, 'hidden-on-footer');
        }
    }
    
    handleScrollBasedHeaderVisibility(currentScrollTop) {
        // Only apply on mobile/tablet devices (screen width <= 991px)
        if (window.innerWidth > 991) return;
        
        const header = window.utils.dom.get('header');
        if (!header) return;
        
        // Don't hide header if we're at the very top of the page
        if (currentScrollTop <= 100) {
            window.utils.dom.removeClass(header, 'hidden-on-scroll');
            this.headerVisible = true;
            return;
        }
        
        // Don't trigger if footer hide is already active
        if (header.classList.contains('hidden-on-footer')) {
            return;
        }
        
        // Calculate scroll direction and distance
        const scrollDifference = currentScrollTop - this.lastScrollTop;
        const scrollDistance = Math.abs(scrollDifference);
        
        // Only trigger if scroll distance is significant enough
        if (scrollDistance < this.scrollThreshold) return;
        
        // Determine scroll direction
        const scrollingDown = scrollDifference > 0;
        const scrollingUp = scrollDifference < 0;
        
        // Hide header when scrolling down
        if (scrollingDown && this.headerVisible) {
            window.utils.dom.addClass(header, 'hidden-on-scroll');
            this.headerVisible = false;
            this.scrollDirection = 'down';
        }
        
        // Show header when scrolling up
        if (scrollingUp && !this.headerVisible) {
            window.utils.dom.removeClass(header, 'hidden-on-scroll');
            this.headerVisible = true;
            this.scrollDirection = 'up';
        }
    }
    
    showHeader() {
        const header = window.utils.dom.query('header');
        if (header && !this.headerVisible) {
            window.utils.dom.removeClass(header, 'hidden-on-scroll');
            this.headerVisible = true;
        }
    }
    
    updateActiveNavLink() {
        const sections = window.utils.dom.queryAll('section[id]');
        const navLinks = window.utils.dom.queryAll('.nav-link');
        
        let currentSection = '';
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const headerHeight = 80;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 50;
            const sectionHeight = section.offsetHeight;
            
            if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                currentSection = section.id;
            }
        });
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentSection}`) {
                window.utils.dom.addClass(link, 'active');
            } else {
                window.utils.dom.removeClass(link, 'active');
            }
        });
    }
    
    handleResize() {
        // Update layout based on screen size
        const screenSize = window.utils.device.getScreenSize();
        
        // Close mobile menu on resize to desktop
        if (screenSize === 'lg' || screenSize === 'xl') {
            const navbarMenu = window.utils.dom.get('navbar-menu');
            
            if (window.utils.dom.hasClass(navbarMenu, 'active')) {
                this.closeMobileMenu();
            }
        }
        
        // Reset reviews carousel on resize
        const reviewsContainer = window.utils.dom.query('.reviews-container');
        if (reviewsContainer) {
            reviewsContainer.style.transform = 'translateX(0)';
            this.currentReviewIndex = 0;
        }
        
        // Update navigation active states
        this.updateActiveNavLink();
    }
    
    // Language system methods
    initLanguageSystem() {
        // Initialize language from storage or browser
        const currentLang = window.utils.language.initLanguage();
        
        // Create language switch button
        this.createLanguageSwitch();
        
        // Apply initial translations
        window.utils.language.updateTranslations(this.translations);
        
        console.log(`Language system initialized with: ${currentLang.toUpperCase()}`);
    }
    
    createLanguageSwitch() {
        // Find navbar actions container (desktop)
        const navbarActions = window.utils.dom.query('.navbar-actions');
        const mobileLanguageContainer = window.utils.dom.query('#mobile-language-container');
        
        if (!navbarActions) {
            console.error('Navbar actions container not found');
            return;
        }

        // Get current language info
        const currentLangInfo = window.utils.language.getCurrentLanguageInfo(this.translations);
        
        // Create desktop language toggle button
        const langButton = window.utils.dom.create('button', 'language-switch');
        langButton.innerHTML = `${currentLangInfo.flag} ${currentLangInfo.code.toUpperCase()}`;
        langButton.setAttribute('aria-label', 'Toggle language / Cambiar idioma');
        langButton.title = `Click to switch to ${currentLangInfo.code === 'es' ? 'English' : 'Español'}`;
        
        // Add direct click handler to toggle language
        langButton.addEventListener('click', () => {
            console.log('Desktop language button clicked');
            window.utils.language.toggleLanguage(this.translations);
        });

        // Add button to desktop navbar
        navbarActions.appendChild(langButton);
        
        // Create mobile language toggle button if container exists
        if (mobileLanguageContainer) {
            const mobileLangButton = window.utils.dom.create('button', 'language-switch mobile-language-switch');
            mobileLangButton.innerHTML = `${currentLangInfo.flag} ${currentLangInfo.code.toUpperCase()}`;
            mobileLangButton.setAttribute('aria-label', 'Toggle language / Cambiar idioma');
            mobileLangButton.title = `Click to switch to ${currentLangInfo.code === 'es' ? 'English' : 'Español'}`;
            
            // Add click handler for mobile button
            mobileLangButton.addEventListener('click', () => {
                console.log('Mobile language button clicked');
                window.utils.language.toggleLanguage(this.translations);
            });
            
            // Add button to mobile menu
            mobileLanguageContainer.appendChild(mobileLangButton);
            console.log('Mobile language toggle button created successfully');
        }
        
        console.log('Language toggle buttons created successfully');
    }

    toggleLanguageDropdown() {
        const dropdown = document.getElementById('language-dropdown-menu');
        if (dropdown) {
            dropdown.classList.toggle('active');
            
            // Update chevron direction
            const button = document.getElementById('main-language-button');
            const chevron = button.querySelector('.fa-chevron-down, .fa-chevron-up');
            if (dropdown.classList.contains('active')) {
                chevron.classList.remove('fa-chevron-down');
                chevron.classList.add('fa-chevron-up');
            } else {
                chevron.classList.remove('fa-chevron-up');
                chevron.classList.add('fa-chevron-down');
            }
        }
    }
    
    closeLanguageDropdown() {
        const dropdown = document.getElementById('language-dropdown-menu');
        if (dropdown) {
            dropdown.classList.remove('active');
            
            // Reset chevron direction
            const button = document.getElementById('main-language-button');
            const chevron = button.querySelector('.fa-chevron-up, .fa-chevron-down');
            if (chevron) {
                chevron.classList.remove('fa-chevron-up');
                chevron.classList.add('fa-chevron-down');
            }
        }
    }
    
    toggleMobileLanguageDropdown() {
        const dropdown = document.getElementById('mobile-language-dropdown-menu');
        if (dropdown) {
            dropdown.classList.toggle('active');
            
            // Update chevron direction
            const button = document.getElementById('mobile-language-button');
            const chevron = button.querySelector('.fa-chevron-down, .fa-chevron-up');
            if (dropdown.classList.contains('active')) {
                chevron.classList.remove('fa-chevron-down');
                chevron.classList.add('fa-chevron-up');
            } else {
                chevron.classList.remove('fa-chevron-up');
                chevron.classList.add('fa-chevron-down');
            }
        }
    }

    initTouchSliderControls() {
        // Show slider controls on touch for mobile/tablet devices
        document.addEventListener('touchstart', (e) => {
            const card = e.target.closest('.room-card, .tour-card, .place-card');
            if (card) {
                const controls = card.querySelectorAll('.slider-controls');
                controls.forEach(control => {
                    control.classList.add('touch-active');
                });
                
                // Hide controls after 3 seconds of no interaction
                clearTimeout(card.touchTimeout);
                card.touchTimeout = setTimeout(() => {
                    controls.forEach(control => {
                        control.classList.remove('touch-active');
                    });
                }, 3000);
            }
        }, { passive: true });

        // Also show controls on any touch interaction within the card
        document.addEventListener('touchmove', (e) => {
            const card = e.target.closest('.room-card, .tour-card, .place-card');
            if (card) {
                const controls = card.querySelectorAll('.slider-controls');
                controls.forEach(control => {
                    control.classList.add('touch-active');
                });
                
                // Reset timeout
                clearTimeout(card.touchTimeout);
                card.touchTimeout = setTimeout(() => {
                    controls.forEach(control => {
                        control.classList.remove('touch-active');
                    });
                }, 3000);
            }
        }, { passive: true });
    }
    
    closeMobileLanguageDropdown() {
        const dropdown = document.getElementById('mobile-language-dropdown-menu');
        if (dropdown) {
            dropdown.classList.remove('active');
            
            // Reset chevron direction
            const button = document.getElementById('mobile-language-button');
            const chevron = button.querySelector('.fa-chevron-up, .fa-chevron-down');
            if (chevron) {
                chevron.classList.remove('fa-chevron-up');
                chevron.classList.add('fa-chevron-down');
            }
        }
    }
    
    selectLanguage(langCode) {
        // Switch to selected language
        window.utils.language.setLanguage(langCode, this.translations);
        this.updateLanguageSwitches();
        console.log(`Language switched to: ${langCode.toUpperCase()}`);
    }
    
    updateLanguageSwitches() {
        const currentLangInfo = window.utils.language.getCurrentLanguageInfo(this.translations);
        
        // Update main dropdown button
        const button = document.getElementById('main-language-button');
        if (button) {
            const buttonContent = `${currentLangInfo.flag}<span class="lang-code">${currentLangInfo.code}</span><i class="fas fa-chevron-down"></i>`;
            button.innerHTML = buttonContent;
            button.title = `Idioma actual: ${currentLangInfo.name}`;
        }
        
        // Update mobile dropdown button
        const mobileButton = document.getElementById('mobile-language-button');
        if (mobileButton) {
            const mobileButtonContent = `${currentLangInfo.flag}<span class="lang-code">${currentLangInfo.code}</span><i class="fas fa-chevron-down"></i>`;
            mobileButton.innerHTML = mobileButtonContent;
            mobileButton.title = `Idioma actual: ${currentLangInfo.name}`;
        }
        
        // Update active state in main dropdown options
        const options = document.querySelectorAll('.language-option');
        options.forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-lang') === currentLangInfo.code) {
                option.classList.add('active');
            }
        });
        
        // Update active state in mobile dropdown options
        const mobileOptions = document.querySelectorAll('.mobile-language-option');
        mobileOptions.forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-lang') === currentLangInfo.code) {
                option.classList.add('active');
            }
        });
    }
    

}

// Initialize the application
const app = new AntawaraApp();

// Global functions for inline event handlers
window.openGallery = window.components.actions.openGallery;
window.closeGallery = window.components.actions.closeGallery;
window.contactForReservation = window.components.actions.contactForReservation;
window.contactForTour = window.components.actions.contactForTour;

// Enhanced UX Methods
app.initScrollProgress = function() {
    // Create progress bar element
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    // Update progress on scroll
    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.pageYOffset / scrollHeight) * 100;
        progressBar.style.width = Math.min(scrolled, 100) + '%';
    });
};

app.initVisibilityAnimations = function() {
    // Create intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    // Observe section headers
    document.querySelectorAll('h2, h3, .section-header').forEach(header => {
        header.classList.add('section-header');
        observer.observe(header);
    });

    // Observe gallery items
    document.querySelectorAll('.gallery-item, .card').forEach(item => {
        observer.observe(item);
    });
};

app.initMicrointeractions = function() {
    // Enhanced card interactions
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Image loading states
    document.querySelectorAll('img').forEach(img => {
        if (!img.complete) {
            img.classList.add('image-loading');
            
            img.addEventListener('load', () => {
                img.classList.remove('image-loading');
            });
        }
    });

    // Enhanced button feedback
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.4);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation if not exists
    if (!document.querySelector('style[data-ripple]')) {
        const style = document.createElement('style');
        style.setAttribute('data-ripple', 'true');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
};





// MEJORA 3: SISTEMA DE FEEDBACK INMEDIATO
app.initInstantFeedback = function() {
    // Sistema de Toast Notifications
    const createToast = (message, type = 'info', duration = 3000) => {
        const toast = document.createElement('div');
        toast.className = `toast-instant ${type}`;
        toast.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 18px;">
                    ${type === 'success' ? '✅' : type === 'error' ? 'âŒ' : 'ℹ️'}
                </span>
                <span>${message}</span>
            </div>
        `;
        
        document.body.appendChild(toast);
        
        // Show toast
        setTimeout(() => toast.classList.add('show'), 100);
        
        // Hide and remove toast
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, duration);
        
        return toast;
    };
    
    // Instant feedback for all buttons - EXCLUDE critical functionality buttons
    document.querySelectorAll('.btn').forEach(btn => {
        // Skip buttons that have critical functionality
        if (btn.classList.contains('load-more-btn') || 
            btn.classList.contains('slider-controls') ||
            btn.classList.contains('gallery-prev') ||
            btn.classList.contains('gallery-next') ||
            btn.onclick || 
            btn.getAttribute('onclick')) {
            return;
        }
        
        btn.classList.add('instant-feedback');
        
        btn.addEventListener('click', function(e) {
            // Add flash effect
            this.classList.add('flash-info');
            setTimeout(() => this.classList.remove('flash-info'), 600);
            
            // If it's a form submit button
            if (this.type === 'submit' || this.classList.contains('submit-btn')) {
                this.classList.add('loading-instant');
                
                // Simulate processing time
                setTimeout(() => {
                    this.classList.remove('loading-instant');
                    this.classList.add('flash-success');
                    createToast('Â¡AcciÃ³n completada con Ã©xito!', 'success');
                    setTimeout(() => this.classList.remove('flash-success'), 600);
                }, 1500);
            }
        });
    });
    
    // Instant feedback for cards
    document.querySelectorAll('.card').forEach(card => {
        card.classList.add('card-instant');
    });
    
    // Instant feedback for navigation links  
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.add('nav-link-instant');
    });
    
    // Instant feedback for form inputs
    document.querySelectorAll('input, textarea, select').forEach(input => {
        input.classList.add('input-instant');
        
        input.addEventListener('focus', function() {
            this.parentElement?.classList.add('input-focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement?.classList.remove('input-focused');
        });
        
        input.addEventListener('input', function() {
            // Real-time validation feedback
            if (this.type === 'email' && this.value) {
                const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value);
                this.style.borderColor = isValid ? '#4caf50' : '#f44336';
            }
            
            if (this.required && this.value) {
                this.style.borderColor = '#4caf50';
            }
        });
    });
    
    // Enhanced scroll feedback
    let scrollProgress = 0;
    const progressBar = document.querySelector('.scroll-progress');
    
    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentProgress = (window.pageYOffset / scrollHeight) * 100;
        
        // Smooth progress animation
        const difference = currentProgress - scrollProgress;
        scrollProgress += difference * 0.1;
        
        if (progressBar) {
            progressBar.style.width = Math.min(scrollProgress, 100) + '%';
            
            // Add glow effect when reaching milestones
            if (Math.floor(scrollProgress) % 25 === 0 && Math.floor(scrollProgress) > 0) {
                progressBar.style.boxShadow = '0 0 10px var(--antawara-orange)';
                setTimeout(() => progressBar.style.boxShadow = 'none', 500);
            }
        }
    });
    
    // Instant feedback for gallery items - Use safer approach
    const applyGalleryHoverEffects = () => {
        document.querySelectorAll('.gallery-item').forEach(item => {
            if (!item.hasAttribute('data-hover-initialized')) {
                item.addEventListener('mouseenter', function() {
                    if (!this.style.transform.includes('scale')) {
                        this.style.transform = 'scale(1.05) rotate(1deg)';
                        this.style.zIndex = '10';
                    }
                });
                
                item.addEventListener('mouseleave', function() {
                    this.style.transform = 'scale(1) rotate(0deg)';
                    this.style.zIndex = '1';
                });
                
                item.setAttribute('data-hover-initialized', 'true');
            }
        });
    };
    
    // Apply initially and after new items are loaded
    applyGalleryHoverEffects();
    
    // Re-apply when new gallery items are loaded
    const observer = new MutationObserver(() => {
        applyGalleryHoverEffects();
    });
    
    const galleryGrid = document.querySelector('.gallery-grid');
    if (galleryGrid) {
        observer.observe(galleryGrid, { childList: true });
    }
    
    // Global click feedback - EXCLUDE gallery load more buttons and slider controls
    document.addEventListener('click', function(e) {
        const target = e.target;
        
        // Skip ripple for load-more buttons, slider controls and their children
        if (target.closest('.load-more-btn') || target.classList.contains('load-more-btn') ||
            target.closest('.slider-controls') || target.classList.contains('slider-controls') ||
            target.closest('.slider-prev') || target.classList.contains('slider-prev') ||
            target.closest('.slider-next') || target.classList.contains('slider-next')) {
            return;
        }
        
        // Add ripple effect to other clickable elements
        if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.classList.contains('clickable')) {
            const ripple = document.createElement('span');
            const rect = target.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(239, 137, 45, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: instant-ripple 0.4s ease-out;
                pointer-events: none;
                z-index: 1000;
            `;
            
            target.style.position = target.style.position || 'relative';
            target.style.overflow = 'hidden';
            target.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 400);
        }
    });
    
    // Add instant ripple animation
    if (!document.querySelector('style[data-instant-ripple]')) {
        const style = document.createElement('style');
        style.setAttribute('data-instant-ripple', 'true');
        style.textContent = `
            @keyframes instant-ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Expose toast function globally
    window.showToast = createToast;
    
    console.log('✅ Sistema de feedback inmediato inicializado');
};

app.initProgressBars = function() {
    // Create progress bars for long operations
    const createProgressBar = (container, initialValue = 0) => {
        const progressContainer = document.createElement('div');
        progressContainer.className = 'progress-instant';
        
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-instant-bar';
        progressBar.style.width = initialValue + '%';
        
        progressContainer.appendChild(progressBar);
        container.appendChild(progressContainer);
        
        return {
            update: (value) => {
                progressBar.style.width = Math.min(Math.max(value, 0), 100) + '%';
            },
            complete: () => {
                progressBar.style.width = '100%';
                setTimeout(() => {
                    progressContainer.style.opacity = '0';
                    setTimeout(() => progressContainer.remove(), 300);
                }, 500);
            }
        };
    };
    
    // Expose globally
    window.createProgressBar = createProgressBar;
};

app.initRealTimeValidation = function() {
    // Enhanced form validation with instant feedback
    document.querySelectorAll('form').forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                validateField(this);
            });
            
            input.addEventListener('blur', function() {
                validateField(this, true);
            });
        });
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            inputs.forEach(input => {
                if (!validateField(input, true)) {
                    isValid = false;
                }
            });
            
            if (isValid) {
                // Show success feedback
                this.classList.add('flash-success');
                window.showToast('Â¡Formulario enviado correctamente!', 'success');
                
                // Simulate form submission
                const submitBtn = this.querySelector('[type="submit"]');
                if (submitBtn) {
                    submitBtn.classList.add('loading-instant');
                    
                    setTimeout(() => {
                        submitBtn.classList.remove('loading-instant');
                        submitBtn.classList.add('flash-success');
                        setTimeout(() => submitBtn.classList.remove('flash-success'), 600);
                    }, 2000);
                }
            } else {
                this.classList.add('flash-error');
                window.showToast('Por favor, corrige los errores del formulario', 'error');
                setTimeout(() => this.classList.remove('flash-error'), 600);
            }
        });
    });
    
    function validateField(field, showError = false) {
        const value = field.value.trim();
        const type = field.type;
        const required = field.required;
        
        let isValid = true;
        let message = '';
        
        if (required && !value) {
            isValid = false;
            message = 'Este campo es obligatorio';
        } else if (value) {
            switch (type) {
                case 'email':
                    isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                    message = isValid ? '' : 'Email no vÃ¡lido';
                    break;
                case 'tel':
                    isValid = /^[\d\s\+\-\(\)]+$/.test(value);
                    message = isValid ? '' : 'TelÃ©fono no vÃ¡lido';
                    break;
                case 'url':
                    isValid = /^https?:\/\/.+/.test(value);
                    message = isValid ? '' : 'URL no vÃ¡lida';
                    break;
            }
        }
        
        // Apply visual feedback
        field.style.borderColor = isValid ? '#4caf50' : (showError ? '#f44336' : '');
        
        // Show/hide error message
        let errorMsg = field.parentElement?.querySelector('.field-error');
        if (!isValid && showError && message) {
            if (!errorMsg) {
                errorMsg = document.createElement('span');
                errorMsg.className = 'field-error';
                errorMsg.style.cssText = 'color: #f44336; font-size: 12px; margin-top: 4px; display: block;';
                field.parentElement?.appendChild(errorMsg);
            }
            errorMsg.textContent = message;
        } else if (errorMsg) {
            errorMsg.remove();
        }
        
        return isValid;
    }
};

// MEJORA 4: SISTEMA DE ACCESIBILIDAD
app.initAccessibility = function() {
    console.log('ðŸ”§ Inicializando sistema de accesibilidad...');
    
    // Detectar preferencias de movimiento reducido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Crear controles de accesibilidad
    const createAccessibilityControls = () => {
        const controlsContainer = document.createElement('div');
        controlsContainer.className = 'accessibility-controls';
        controlsContainer.innerHTML = `
            <button id="toggle-animations" title="Activar/Desactivar animaciones">
                <span aria-hidden="true">🎬</span>
                <span class="sr-only">Alternar animaciones</span>
            </button>
            <button id="high-contrast" title="Modo alto contraste">
                <span aria-hidden="true">🔆</span>
                <span class="sr-only">Alto contraste</span>
            </button>
            <button id="focus-visible" title="Resaltar elementos enfocados">
                <span aria-hidden="true">🎯</span>
                <span class="sr-only">Resaltar foco</span>
            </button>
        `;
        
        document.body.appendChild(controlsContainer);
        
        // Mostrar controles al usar teclado
        document.addEventListener('keydown', () => {
            controlsContainer.classList.add('visible');
        });
        
        // Ocultar controles despuÃ©s de un tiempo sin usar teclado
        let hideTimeout;
        document.addEventListener('mousemove', () => {
            clearTimeout(hideTimeout);
            hideTimeout = setTimeout(() => {
                controlsContainer.classList.remove('visible');
            }, 3000);
        });
        
        // Cerrar panel al hacer clic/touch fuera de Ã©l
        document.addEventListener('click', (event) => {
            // Verificar si el panel estÃ¡ visible
            if (controlsContainer.classList.contains('visible')) {
                // Si el clic fue fuera del panel de controles, cerrarlo
                if (!controlsContainer.contains(event.target)) {
                    controlsContainer.classList.remove('visible');
                }
            }
        });
        
        // Cerrar panel al hacer touch fuera de Ã©l (para dispositivos mÃ³viles)
        document.addEventListener('touchstart', (event) => {
            // Verificar si el panel estÃ¡ visible
            if (controlsContainer.classList.contains('visible')) {
                // Si el touch fue fuera del panel de controles, cerrarlo
                if (!controlsContainer.contains(event.target)) {
                    controlsContainer.classList.remove('visible');
                }
            }
        });
        
        return controlsContainer;
    };
    

    
    // Sistema de notificaciones accesibles
    const createAccessibleToast = (message, type = 'info', duration = 3000) => {
        // Si prefiere movimiento reducido, usar notificaciÃ³n mÃ¡s simple
        if (prefersReducedMotion.matches) {
            const simpleToast = document.createElement('div');
            simpleToast.className = `toast-instant ${type} show`;
            simpleToast.setAttribute('role', 'alert');
            simpleToast.setAttribute('aria-live', 'polite');
            simpleToast.innerHTML = `
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span aria-hidden="true">
                        ${type === 'success' ? '✅' : type === 'error' ? 'âŒ' : 'ℹ️'}
                    </span>
                    <span>${message}</span>
                </div>
            `;
            
            document.body.appendChild(simpleToast);
            
            setTimeout(() => {
                simpleToast.style.opacity = '0';
                setTimeout(() => simpleToast.remove(), 100);
            }, duration);
            
            return simpleToast;
        } else {
            // Usar la funciÃ³n normal con animaciones
            return window.showToast(message, type, duration);
        }
    };
    
    // Manejar cambios en preferencias de movimiento
    const handleMotionPreference = (mediaQuery) => {
        if (mediaQuery.matches) {
            console.log('â™¿ Movimiento reducido detectado - Desactivando animaciones');
            document.body.classList.add('reduced-motion');
            
            // Notificar al usuario
            createAccessibleToast('Animaciones desactivadas por preferencias de accesibilidad', 'info', 5000);
        } else {
            document.body.classList.remove('reduced-motion');
        }
    };
    
    // Escuchar cambios en preferencias
    prefersReducedMotion.addListener(handleMotionPreference);
    handleMotionPreference(prefersReducedMotion);
    
    // Crear controles de accesibilidad
    const controls = createAccessibilityControls();
    
    // Funcionalidad de los controles
    document.getElementById('toggle-animations')?.addEventListener('click', function() {
        const isDisabled = document.body.classList.toggle('accessibility-mode');
        this.classList.toggle('active', isDisabled);
        this.title = isDisabled ? 'Activar animaciones' : 'Desactivar animaciones';
        
        createAccessibleToast(
            isDisabled ? 'Animaciones desactivadas' : 'Animaciones activadas',
            'info'
        );
    });
    
    document.getElementById('high-contrast')?.addEventListener('click', function() {
        const isActive = document.body.classList.toggle('high-contrast');
        this.classList.toggle('active', isActive);
        this.title = isActive ? 'Desactivar alto contraste' : 'Activar alto contraste';
        
        if (isActive) {
            // Aplicar estilos de alto contraste
            const highContrastStyle = document.createElement('style');
            highContrastStyle.id = 'high-contrast-styles';
            highContrastStyle.textContent = `
                .high-contrast {
                    filter: contrast(150%) brightness(110%);
                }
                .high-contrast .btn {
                    border: 2px solid black !important;
                }
                .high-contrast .card {
                    border: 1px solid black !important;
                    background: white !important;
                }
            `;
            document.head.appendChild(highContrastStyle);
        } else {
            document.getElementById('high-contrast-styles')?.remove();
        }
        
        createAccessibleToast(
            isActive ? 'Alto contraste activado' : 'Alto contraste desactivado',
            'info'
        );
    });
    
    document.getElementById('focus-visible')?.addEventListener('click', function() {
        const isActive = document.body.classList.toggle('enhanced-focus');
        this.classList.toggle('active', isActive);
        this.title = isActive ? 'Desactivar resaltado de foco' : 'Activar resaltado de foco';
        
        if (isActive) {
            const focusStyle = document.createElement('style');
            focusStyle.id = 'enhanced-focus-styles';
            focusStyle.textContent = `
                .enhanced-focus *:focus {
                    outline: 4px solid #ff0000 !important;
                    outline-offset: 2px !important;
                    box-shadow: 0 0 0 6px rgba(255, 0, 0, 0.3) !important;
                }
            `;
            document.head.appendChild(focusStyle);
        } else {
            document.getElementById('enhanced-focus-styles')?.remove();
        }
        
        createAccessibleToast(
            isActive ? 'Resaltado de foco mejorado activado' : 'Resaltado de foco normal',
            'info'
        );
    });
    
    // Mejorar navegaciÃ³n por teclado
    document.addEventListener('keydown', (e) => {
        // Esc para cerrar modales/overlays
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal.active, .gallery-overlay.active');
            if (activeModal) {
                activeModal.click(); // Simular click para cerrar
            }
        }
        
        // Enter y Space para activar elementos clicables
        if (e.key === 'Enter' || e.key === ' ') {
            const focused = document.activeElement;
            if (focused && (focused.classList.contains('card') || focused.classList.contains('clickable'))) {
                e.preventDefault();
                focused.click();
            }
        }
    });
    
    // Asegurar que todos los elementos interactivos sean accesibles por teclado
    document.querySelectorAll('.card, .gallery-item, .clickable').forEach(element => {
        if (!element.hasAttribute('tabindex')) {
            element.setAttribute('tabindex', '0');
        }
        
        if (!element.hasAttribute('role')) {
            element.setAttribute('role', 'button');
        }
        
        // Agregar descripciÃ³n si no existe
        if (!element.hasAttribute('aria-label') && !element.hasAttribute('aria-labelledby')) {
            const text = element.textContent?.trim() || element.querySelector('h3, h4, .title')?.textContent?.trim();
            if (text) {
                element.setAttribute('aria-label', text);
            }
        }
    });
    
    // Mejorar formularios para accesibilidad
    document.querySelectorAll('input, textarea, select').forEach(input => {
        const label = document.querySelector(`label[for="${input.id}"]`) || 
                     input.closest('label') ||
                     input.previousElementSibling?.tagName === 'LABEL' ? input.previousElementSibling : null;
        
        if (!label && input.placeholder) {
            input.setAttribute('aria-label', input.placeholder);
        }
        
        if (input.required && !input.getAttribute('aria-required')) {
            input.setAttribute('aria-required', 'true');
        }
    });
    
    // Exponer funciÃ³n accesible globalmente
    window.showAccessibleToast = createAccessibleToast;
    
    console.log('✅ Sistema de accesibilidad inicializado correctamente');
};

// Language Switch Discovery System
const initLanguageDiscovery = () => {
    // Verificar si el usuario ya descubrió la funcionalidad
    const hasDiscovered = localStorage.getItem('language-switch-discovered') === 'true';
    
    const languageSwitches = document.querySelectorAll('.language-switch');
    
    languageSwitches.forEach(switchEl => {
        if (hasDiscovered) {
            switchEl.classList.add('discovered');
        }
        
        // Marcar como descubierto cuando el usuario interactúe
        const markAsDiscovered = () => {
            switchEl.classList.add('discovered');
            localStorage.setItem('language-switch-discovered', 'true');
            
            // Aplicar a todos los switches
            languageSwitches.forEach(el => el.classList.add('discovered'));
        };
        
        // Eventos para marcar como descubierto
        switchEl.addEventListener('click', markAsDiscovered);
        switchEl.addEventListener('mouseenter', markAsDiscovered);
        switchEl.addEventListener('focus', markAsDiscovered);
    });
    
    console.log('🌐 Sistema de descubrimiento de idiomas inicializado');
};

// Logo Enhancement System
const initLogoEnhancements = () => {
    // Smooth scroll to top function
    window.scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Add temporary shine effect
        const headerLogo = document.querySelector('.logo');
        const footerLogo = document.querySelector('.footer-logo');
        
        if (headerLogo) {
            headerLogo.style.animation = 'logoShine 1s ease-in-out';
            setTimeout(() => {
                headerLogo.style.animation = '';
            }, 1000);
        }
        
        if (footerLogo) {
            footerLogo.style.animation = 'footerLogoPulse 1s ease-in-out';
            setTimeout(() => {
                footerLogo.style.animation = '';
            }, 1000);
        }
    };
    
    // Add loaded class for initial animation
    setTimeout(() => {
        const headerLogo = document.querySelector('.logo');
        if (headerLogo) {
            headerLogo.classList.add('loaded');
            setTimeout(() => {
                headerLogo.classList.remove('loaded');
            }, 2000);
        }
    }, 500);
    
    // Keyboard support for logos
    document.querySelectorAll('.logo, .footer-logo').forEach(logo => {
        logo.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                scrollToTop();
            }
        });
    });
    
    console.log('✨ Sistema de mejoras de logo inicializado');
};

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered:', registration);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}








