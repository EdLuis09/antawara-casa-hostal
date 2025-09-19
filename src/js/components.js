// Components for dynamic content generation
console.log('✅ window.components.js loaded');
const components = {
    
    // Pagination configuration
    pagination: {
        tours: {
            itemsPerPage: { mobile: 2, tablet: 3, desktop: 4 },
            currentPage: 0,
            totalItems: 0
        },
        places: {
            itemsPerPage: { mobile: 2, tablet: 4, desktop: 6 },
            currentPage: 0,
            totalItems: 0
        },
        gallery: {
            itemsPerPage: { mobile: 4, tablet: 6, desktop: 9 },
            currentPage: 0,
            totalItems: 0
        }
    },
    
    // Room card component
    roomCard: (room) => {
        // Obtener idioma actual desde utils
        const currentLang = window.utils?.language?.currentLanguage || 'es';
        
        // Traducir características usando el mapeo de roomFeatures
        const featuresHTML = room.features.map(feature => {
            let displayFeature = feature; // Por defecto mostrar en español
            
            // Si el idioma es inglés, traducir usando el mapeo español->inglés
            if (currentLang === 'en' && window.translations?.es?.roomFeatures?.[feature]) {
                displayFeature = window.translations.es.roomFeatures[feature];
            }
            
            return `<span class="feature-tag">
                <i class="fas fa-check"></i>
                ${displayFeature}
            </span>`;
        }).join('');
        
        const sliderId = `slider-${room.id}`;
        const imagesHTML = room.images.map((image, index) => 
            `<img src="${image}" alt="${room.name} - Imagen ${index + 1}" class="slider-image clickable-image" data-room-id="${room.id}" data-image-index="${index}" style="cursor: pointer;">`
        ).join('');
        
        const dotsHTML = room.images.map((_, index) => 
            `<span class="slider-dot ${index === 0 ? 'active' : ''}" onclick="window.components.slider.goToSlide('${sliderId}', ${index})"></span>`
        ).join('');

        // Determine if we need smart indicators for many images
        const manyImages = room.images.length > 8;
        const indicatorsClass = manyImages ? 'slider-indicators many-images' : 'slider-indicators';
        const counterHTML = manyImages ? `<div class="slider-counter" id="counter-${sliderId}">1 / ${room.images.length}</div>` : '';

        // Obtener traducciones específicas de la habitación
        const roomTranslations = window.translations?.[currentLang]?.rooms?.[room.id] || {};
        const roomName = roomTranslations.name || room.name;
        const roomDescription = roomTranslations.description || room.description;

        return `
            <div class="room-card card" data-room-id="${room.id}">
                <div class="room-image-slider" id="${sliderId}">
                    <div class="slider-container">
                        ${imagesHTML}
                    </div>
                    <button class="slider-controls slider-prev" onclick="window.components.slider.prevSlide('${sliderId}')">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button class="slider-controls slider-next" onclick="window.components.slider.nextSlide('${sliderId}')">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                    <div class="${indicatorsClass}" id="indicators-${sliderId}">
                        ${dotsHTML}
                    </div>
                    ${counterHTML}
                </div>
                <div class="card-content">
                    <h3 class="card-title">${roomName}</h3>
                    <p class="card-description">${roomDescription}</p>
                    <div class="card-features">
                        ${featuresHTML}
                    </div>
                    <div class="card-info">
                        <div class="room-info">
                            <span><i class="fas fa-users"></i> ${room.capacity} <span>${window.translations?.[currentLang]?.common?.[room.capacity > 1 ? 'people' : 'person'] || (room.capacity > 1 ? 'personas' : 'persona')}</span></span>
                        </div>
                    </div>
                    <div class="card-price">
                        <div class="price">
                            ${window.utils.format.currency(room.price)}
                            <span class="price-unit">${window.translations?.[currentLang]?.common?.[room.priceUnit] || room.priceUnit}</span>
                        </div>
                        <button class="btn btn-primary" onclick="window.components.actions.contactForReservation('${roomName}')">
                            ${window.translations?.[currentLang]?.common?.bookBtn || 'Reservar'}
                        </button>
                    </div>
                </div>
            </div>
        `;
    },
    
    // Service card component
    serviceCard: (service) => {
        // Obtener idioma actual desde utils
        const currentLang = window.utils?.language?.currentLanguage || 'es';
        
        // Obtener traducciones específicas del servicio
        const serviceTranslations = window.translations?.[currentLang]?.services?.[service.id] || {};
        const serviceName = serviceTranslations.name || service.name;
        const serviceDescription = serviceTranslations.description || service.description;
        
        return `
            <div class="service-card card" data-service-id="${service.id}">
                <div class="card-content text-center">
                    <div class="service-icon">
                        <i class="${service.icon}"></i>
                    </div>
                    <h3 class="card-title">${serviceName}</h3>
                    <p class="card-description">${serviceDescription}</p>
                </div>
            </div>
        `;
    },
    
    // Tour card component
    tourCard: (tour) => {
        // Obtener idioma actual desde utils
        const currentLang = window.utils?.language?.currentLanguage || 'es';
        
        // Obtener traducciones específicas del tour
        const tourTranslations = window.translations?.[currentLang]?.tours?.[tour.id] || {};
        const tourName = tourTranslations.name || tour.name;
        const tourDescription = tourTranslations.description || tour.description;
        const tourDuration = tourTranslations.duration || tour.duration;
        const tourGroupSize = tourTranslations.groupSize || tour.groupSize;
        
        // Traducir lista de includes
        const tourIncludes = tourTranslations.includes || tour.includes;
        const includesHTML = tourIncludes.map(item => 
            `<li><i class="fas fa-check"></i> ${item}</li>`
        ).join('');
        
        // Traducir dificultad
        const tourDifficulty = window.translations?.[currentLang]?.common?.[tour.difficulty] || tour.difficulty;
        
        const difficultyClass = {
            'Fácil': 'success',
            'Easy': 'success',
            'Moderado': 'warning',
            'Moderate': 'warning',
            'Difícil': 'danger',
            'Difficult': 'danger'
        };
        
        const sliderId = `tour-slider-${tour.id}`;
        const imagesHTML = tour.images.map((image, index) => 
            `<img src="${image}" alt="${tourName} - Imagen ${index + 1}" class="slider-image clickable-image" data-tour-id="${tour.id}" data-image-index="${index}" style="cursor: pointer;">`
        ).join('');
        
        const dotsHTML = tour.images.map((_, index) => 
            `<span class="slider-dot ${index === 0 ? 'active' : ''}" onclick="window.components.slider.goToSlide('${sliderId}', ${index})"></span>`
        ).join('');

        // Determine if we need smart indicators for many images
        const manyImages = tour.images.length > 8;
        const indicatorsClass = manyImages ? 'slider-indicators many-images' : 'slider-indicators';
        const counterHTML = manyImages ? `<div class="slider-counter" id="counter-${sliderId}">1 / ${tour.images.length}</div>` : '';

        return `
            <div class="tour-card card" data-tour-id="${tour.id}">
                <div class="tour-image-slider" id="${sliderId}">
                    <div class="slider-container">
                        ${imagesHTML}
                    </div>
                    <button class="slider-controls slider-prev" onclick="window.components.slider.prevSlide('${sliderId}')">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button class="slider-controls slider-next" onclick="window.components.slider.nextSlide('${sliderId}')">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                    <div class="${indicatorsClass}" id="indicators-${sliderId}">
                        ${dotsHTML}
                    </div>
                    ${counterHTML}
                </div>
                <div class="card-content">
                    <h3 class="card-title">${tourName}</h3>
                    <p class="card-description">${tourDescription}</p>
                    <div class="tour-details">
                        <div class="tour-info">
                            <span><i class="fas fa-clock"></i> ${tourDuration}</span>
                            <span><i class="fas fa-users"></i> ${tourGroupSize}</span>
                            <span class="difficulty-badge badge-${difficultyClass[tourDifficulty] || 'secondary'}">
                                <i class="fas fa-mountain"></i> ${tourDifficulty}
                            </span>
                        </div>
                        <div class="tour-includes">
                            <h4>${window.translations?.[currentLang]?.common?.includes || 'Incluye:'}</h4>
                            <ul>${includesHTML}</ul>
                        </div>
                    </div>
                    <div class="card-price">
                        <div class="price">
                            ${window.utils.format.currency(tour.price)}
                            <span class="price-unit">${window.translations?.[currentLang]?.common?.[tour.priceUnit] || tour.priceUnit}</span>
                        </div>
                        <button class="btn btn-primary" onclick="window.components.actions.contactForTour('${tourName}')">
                            ${window.translations?.[currentLang]?.common?.bookTourBtn || 'Reservar Tour'}
                        </button>
                    </div>
                </div>
            </div>
        `;
    },
    
    // Place card component
    placeCard: (place) => {
        // Get current language and translations
        const currentLang = window.utils.language.currentLanguage;
        const t = window.translations[currentLang];
        
        // Get specific place translations or fallback to original
        const placeTranslations = t.places[place.id] || {};
        const placeName = placeTranslations.name || place.name;
        const placeDescription = placeTranslations.description || place.description;
        const placeDistance = placeTranslations.distance || place.distance;
        
        // Translate activities if available, otherwise use original
        const translatedActivities = placeTranslations.activities || place.activities;
        
        const starsHTML = Array.from({length: 5}, (_, i) => 
            `<i class="fas fa-star${i < Math.floor(place.rating) ? '' : '-o'}"></i>`
        ).join('');
        
        const activitiesHTML = translatedActivities.map(activity => 
            `<span class="feature-tag">${activity}</span>`
        ).join('');
        
        const sliderId = `place-slider-${place.id}`;
        const imagesHTML = place.images.map((image, index) => 
            `<img src="${image}" alt="${placeName} - ${currentLang === 'es' ? 'Imagen' : 'Image'} ${index + 1}" class="slider-image clickable-image" data-place-id="${place.id}" data-image-index="${index}" style="cursor: pointer;">`
        ).join('');
        
        const dotsHTML = place.images.map((_, index) => 
            `<span class="slider-dot ${index === 0 ? 'active' : ''}" onclick="window.components.slider.goToSlide('${sliderId}', ${index})"></span>`
        ).join('');

        // Determine if we need smart indicators for many images
        const manyImages = place.images.length > 8;
        const indicatorsClass = manyImages ? 'slider-indicators many-images' : 'slider-indicators';
        const counterHTML = manyImages ? `<div class="slider-counter" id="counter-${sliderId}">1 / ${place.images.length}</div>` : '';

        return `
            <div class="place-card card" data-place-id="${place.id}">
                <div class="place-image-slider" id="${sliderId}">
                    <div class="slider-container">
                        ${imagesHTML}
                    </div>
                    <button class="slider-controls slider-prev" onclick="window.components.slider.prevSlide('${sliderId}')">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button class="slider-controls slider-next" onclick="window.components.slider.nextSlide('${sliderId}')">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                    <div class="${indicatorsClass}" id="indicators-${sliderId}">
                        ${dotsHTML}
                    </div>
                    ${counterHTML}
                </div>
                <div class="card-content">
                    <h3 class="card-title">${placeName}</h3>
                    <p class="card-description">${placeDescription}</p>
                    <div class="place-rating">
                        <div class="stars">${starsHTML}</div>
                        <span class="rating-number">${place.rating}</span>
                    </div>
                    <div class="place-info">
                        <span class="distance"><i class="fas fa-map-marker-alt"></i> ${placeDistance}</span>
                    </div>
                    <div class="place-activities">
                        ${activitiesHTML}
                    </div>
                </div>
            </div>
        `;
    },
    
    // Gallery item component
    galleryItem: (item, index) => {
        // Get current language and translations
        const currentLang = window.utils.language.currentLanguage;
        const t = window.translations[currentLang];
        
        // Get specific gallery item translations or fallback to original
        const galleryTranslations = t.gallery[item.id] || {};
        const itemTitle = galleryTranslations.title || item.title;
        
        // Translate category using existing translations
        const categoryTranslation = item.category === 'areas-comunes' 
            ? t.gallery.filterCommon 
            : item.category === 'exterior' 
            ? t.gallery.filterExterior 
            : item.category;
        
        return `
            <div class="gallery-item" data-index="${index}" data-category="${item.category}" onclick="window.components.actions.openGallery(${index})">
                <img src="${item.image}" alt="${itemTitle}" loading="lazy">
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                    <div class="gallery-item-info">
                        <h4>${itemTitle}</h4>
                        <span class="gallery-category">${categoryTranslation}</span>
                    </div>
                </div>
            </div>
        `;
    },
    
    // Review card component
    reviewCard: (review) => {
        // Get current language and translations
        const currentLang = window.utils.language.currentLanguage;
        const t = window.translations[currentLang];
        
        // Get specific review translations or fallback to original
        const reviewTranslations = t.reviews[review.id] || {};
        const reviewText = reviewTranslations.text || review.text;
        
        const starsHTML = Array.from({length: 5}, (_, i) => 
            `<i class="fas fa-star${i < review.rating ? '' : '-o'}"></i>`
        ).join('');
        
        const avatarHTML = review.avatar === 'user-icon' 
            ? `<div class="review-avatar user-icon-avatar"><i class="fas fa-user"></i></div>`
            : `<img src="${review.avatar}" alt="${review.name}" class="review-avatar">`;
        
        return `
            <div class="review-card">
                <div class="review-content">
                    <p class="review-text">"${reviewText}"</p>
                    <div class="review-rating">
                        ${starsHTML}
                    </div>
                </div>
                <div class="review-author">
                    ${avatarHTML}
                    <div class="review-info">
                        <h4>${review.name}</h4>
                        <p>${review.country} • ${window.utils.format.date(review.date)}</p>
                    </div>
                </div>
            </div>
        `;
    },
    
    // Navigation component
    navigation: {
        // Generate mobile menu
        mobileMenu: () => {
            const navItems = [
                { href: '#inicio', text: 'Inicio' },
                { href: '#habitaciones', text: 'Habitaciones' },
                { href: '#servicios', text: 'Servicios' },
                { href: '#tours', text: 'Tours' },
                { href: '#lugares', text: 'Lugares' },
                { href: '#galeria', text: 'Galería' },
                { href: '#resenas', text: 'Reseñas' },
                { href: '#contacto', text: 'Contacto' }
            ];
            
            return navItems.map(item => 
                `<li><a href="${item.href}" class="nav-link">${item.text}</a></li>`
            ).join('');
        }
    },
    
    // Form components
    forms: {
        // Contact form
        contactForm: () => {
            return `
                <form id="contact-form" class="contact-form">
                    <div class="form-row">
                        <div class="form-group">
                            <input type="text" id="name" name="name" required placeholder=" ">
                            <label for="name">Nombre completo *</label>
                        </div>
                        <div class="form-group">
                            <input type="email" id="email" name="email" required placeholder=" ">
                            <label for="email">Email *</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <input type="tel" id="phone" name="phone" placeholder=" ">
                        <label for="phone">Teléfono</label>
                    </div>
                    <div class="form-group">
                        <select id="subject" name="subject" required>
                            <option value="">Selecciona un tema</option>
                            <option value="reserva">Consulta de reserva</option>
                            <option value="informacion">Información general</option>
                            <option value="tour">Consulta de tours</option>
                            <option value="sugerencia">Sugerencia</option>
                            <option value="queja">Queja o reclamo</option>
                            <option value="otro">Otro</option>
                        </select>
                        <label for="subject">Asunto *</label>
                    </div>
                    <div class="form-group">
                        <textarea id="message" name="message" rows="5" required placeholder=" "></textarea>
                        <label for="message">Mensaje *</label>
                    </div>
                    <button type="submit" class="btn btn-primary">
                        <span class="btn-text">Enviar Mensaje</span>
                        <div class="loading hidden"></div>
                    </button>
                </form>
            `;
        }
    },
    
    // Action handlers
    actions: {
        // Contact for reservation
        contactForReservation: (roomName) => {
            const message = `Hola! Me interesa hacer una reserva para la ${roomName}. ¿Podrían proporcionarme más información sobre disponibilidad y precios?`;
            const whatsappUrl = `https://wa.me/${window.appData.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
            
            // Track analytics
            window.utils.analytics.trackEvent('reservation_inquiry', { room: roomName });
        },
        
        // Contact for tour
        contactForTour: (tourName) => {
            const message = `Hola! Me interesa el tour "${tourName}". ¿Podrían darme más información sobre fechas disponibles y hacer una reserva?`;
            
            // Define números específicos por tour
            const tourContacts = {
                "Cabalgata Playa Los Naranjos": "+573218372736",
                "Visita Pueblito Taykú": "+573218372736", 
                "Visita Comunidad Kogui - Duanamake": "+573218372736",
                "Tour del Cacao": "+573217373186"
            };
            
            // Usar número específico del tour o número general como fallback
            const phoneNumber = tourContacts[tourName] || window.appData.contact.whatsapp;
            const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
            
            console.log(`📞 Contactando tour "${tourName}" via WhatsApp: ${phoneNumber}`);
            window.open(whatsappUrl, '_blank');
            
            // Track analytics
            window.utils.analytics.trackEvent('tour_inquiry', { tour: tourName, phone: phoneNumber });
        },
        
        // Open gallery modal
        openGallery: (index) => {
            const modal = window.utils.dom.get('gallery-modal');
            const modalImage = window.utils.dom.get('gallery-modal-image');
            
            if (modal && modalImage) {
                modalImage.src = window.appData.gallery[index].image;
                modalImage.alt = window.appData.gallery[index].title;
                modal.dataset.currentIndex = index;
                window.utils.dom.addClass(modal, 'active');
                
                // Prevent body scroll
                document.body.style.overflow = 'hidden';
            }
        },
        
        // Close gallery modal
        closeGallery: () => {
            const modal = window.utils.dom.get('gallery-modal');
            if (modal) {
                window.utils.dom.removeClass(modal, 'active');
                document.body.style.overflow = '';
            }
        },
        
        // Navigate gallery
        navigateGallery: (direction) => {
            const modal = window.utils.dom.get('gallery-modal');
            const modalImage = window.utils.dom.get('gallery-modal-image');
            
            if (!modal || !modalImage) return;
            
            let currentIndex = parseInt(modal.dataset.currentIndex) || 0;
            const totalImages = window.appData.gallery.length;
            
            if (direction === 'next') {
                currentIndex = (currentIndex + 1) % totalImages;
            } else {
                currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            }
            
            modalImage.src = window.appData.gallery[currentIndex].image;
            modalImage.alt = window.appData.gallery[currentIndex].title;
            modal.dataset.currentIndex = currentIndex;
        },
        
        // Filter gallery by category
        filterGallery: (category) => {
            const galleryItems = document.querySelectorAll('.gallery-item');
            const filterButtons = document.querySelectorAll('.filter-btn');
            
            // Update active button
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.filter === category) {
                    btn.classList.add('active');
                }
            });
            
            // Filter items
            galleryItems.forEach(item => {
                const itemCategory = item.dataset.category;
                if (category === 'all' || itemCategory === category) {
                    item.style.display = 'block';
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.opacity = '1';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
            
            // Track analytics
            window.utils.analytics.trackEvent('gallery_filter', { category: category });
        },

        // Contact directly via WhatsApp
        contactWhatsApp: (message = null) => {
            const defaultMessage = message || `¡Hola! Me interesa obtener más información sobre Casa Hostal Antawara. ¿Podrían ayudarme?`;
            const whatsappUrl = `https://wa.me/${window.appData.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(defaultMessage)}`;
            window.open(whatsappUrl, '_blank');
            
            // Track analytics
            window.utils.analytics.trackEvent('whatsapp_contact');
        },

        // Contact directly via Email
        contactEmail: (subject = null, body = null) => {
            try {
                const defaultSubject = subject || 'Consulta sobre Casa Hostal Antawara';
                const defaultBody = body || `Hola,

Me interesa obtener más información sobre Casa Hostal Antawara. ¿Podrían ayudarme con disponibilidad y precios?

Gracias,`;
                
                const email = window.appData?.contact?.email || 'antawaracasahostal@gmail.com';
                const emailUrl = `mailto:${email}?subject=${encodeURIComponent(defaultSubject)}&body=${encodeURIComponent(defaultBody)}`;
                
                // Try window.open first, then fallback to window.location
                const opened = window.open(emailUrl, '_self');
                if (!opened) {
                    window.location.href = emailUrl;
                }
                
                // Track analytics
                window.utils.analytics.trackEvent('email_contact');
            } catch (error) {
                console.error('Error opening email client:', error);
                // Fallback: copy email to clipboard or show alert
                const email = 'antawaracasahostal@gmail.com';
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(email).then(() => {
                        alert(`Email copiado al portapapeles: ${email}`);
                    });
                } else {
                    alert(`Email de contacto: ${email}`);
                }
            }
        },

        // Contact form submission
        submitContactForm: (formData) => {
            // Construct WhatsApp message from form data
            const message = `🏨 *Consulta Casa Hostal Antawara*

👤 *Nombre:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Teléfono:* ${formData.phone || 'No proporcionado'}
📋 *Asunto:* ${formData.subject}

💬 *Mensaje:*
${formData.message}

---
Enviado desde el formulario web`;

            // Send via WhatsApp
            window.components.actions.contactWhatsApp(message);
        }
    },
    
    // Render methods
    render: {
        // Render all rooms
        rooms: () => {
            const container = window.utils.dom.query('.rooms-grid');
            console.log('rooms container found:', !!container);
            console.log('rooms data length:', window.appData.rooms ? window.appData.rooms.length : 'undefined');
            if (container) {
                container.innerHTML = window.appData.rooms.map(room => window.components.roomCard(room)).join('');
                console.log('rooms HTML updated');
            }
        },
        
        // Render all services
        services: () => {
            const container = window.utils.dom.query('.services-grid');
            if (container) {
                container.innerHTML = window.appData.services.map(service => window.components.serviceCard(service)).join('');
            }
        },
        
        // Render tours with pagination
        tours: () => {
            const container = window.utils.dom.query('.tours-grid');
            if (!container) return;
            
            // Get all visible items (accumulated from page 0 to current page)
            const visibleItems = window.components.paginate.getPageItems('tours', window.appData.tours);
            const hasMore = window.components.paginate.hasMoreItems('tours', window.appData.tours.length);
            
            // Clear container and render all visible items
            container.innerHTML = '';
            
            visibleItems.forEach(tour => {
                const tourElement = document.createElement('div');
                tourElement.innerHTML = window.components.tourCard(tour);
                const tourItem = tourElement.firstElementChild;
                
                // Add visible class if it has opacity: 0 CSS rule
                if (tourItem.classList.contains('gallery-item') || tourItem.style.opacity === '0') {
                    tourItem.classList.add('visible');
                }
                
                container.appendChild(tourItem);
            });
            
            // Add or update load more button
            window.components.paginate.updateLoadMoreButton('tours', hasMore);
        },
        
        // Render places with pagination
        places: () => {
            const container = window.utils.dom.query('.places-grid');
            if (!container) return;
            
            // Get all visible items (accumulated from page 0 to current page)
            const visibleItems = window.components.paginate.getPageItems('places', window.appData.places);
            const hasMore = window.components.paginate.hasMoreItems('places', window.appData.places.length);
            
            // Clear container and render all visible items
            container.innerHTML = '';
            
            visibleItems.forEach(place => {
                const placeElement = document.createElement('div');
                placeElement.innerHTML = window.components.placeCard(place);
                const placeItem = placeElement.firstElementChild;
                
                // Add visible class if it has opacity: 0 CSS rule
                if (placeItem.classList.contains('gallery-item') || placeItem.style.opacity === '0') {
                    placeItem.classList.add('visible');
                }
                
                container.appendChild(placeItem);
            });
            
            // Add or update load more button
            window.components.paginate.updateLoadMoreButton('places', hasMore);
        },
        
        // Render gallery with pagination
        gallery: () => {
            console.log(`📸 Gallery render called`);
            const container = window.utils.dom.query('.gallery-grid');
            if (!container) {
                console.log('❌ Gallery container not found');
                return;
            }
            
            console.log(`Gallery data length:`, window.appData.gallery ? window.appData.gallery.length : 'undefined');
            const visibleItems = window.components.paginate.getPageItems('gallery', window.appData.gallery);
            const hasMore = window.components.paginate.hasMoreItems('gallery', window.appData.gallery.length);
            console.log(`Visible items:`, visibleItems.length, `Has more:`, hasMore);
            
            // Always clear and re-render all visible items (accumulated)
            container.innerHTML = '';
            console.log(`🧹 Container cleared, re-rendering all ${visibleItems.length} items`);
            
            // Render all visible items (accumulated from page 0 to current page)
            visibleItems.forEach((item, index) => {
                const galleryElement = document.createElement('div');
                galleryElement.innerHTML = window.components.galleryItem(item, index);
                const galleryItem = galleryElement.firstElementChild;
                
                container.appendChild(galleryItem);
                
                // Add visible class with slight delay for progressive animation
                setTimeout(() => {
                    galleryItem.classList.add('visible');
                }, index * 50); // 50ms delay between each item
            });
            
            // Add or update load more button
            console.log(`🔘 Updating load more button, hasMore:`, hasMore);
            window.components.paginate.updateLoadMoreButton('gallery', hasMore);
            
            // Force update translations for gallery buttons after a brief delay
            setTimeout(() => {
                console.log(`🌍 Force updating translations for gallery buttons...`);
                if (window.utils && window.utils.language && window.utils.language.updateLoadMoreButtons) {
                    window.utils.language.updateLoadMoreButtons();
                }
            }, 50);
        },
        
        // Render reviews carousel
        reviews: () => {
            const container = window.utils.dom.query('.reviews-container');
            if (container) {
                container.innerHTML = window.appData.reviews.map(review => window.components.reviewCard(review)).join('');
            }
        },
        
        // Render all dynamic content
        all: () => {
            console.log('🏠 Rendering rooms...');
            window.components.render.rooms();
            console.log('🛎️ Rendering services...');
            window.components.render.services();
            console.log('🗺️ Rendering tours...');
            window.components.render.tours();
            console.log('📍 Rendering places...');
            window.components.render.places();
            console.log('🖼️ Rendering gallery...');
            window.components.render.gallery();
            console.log('⭐ Rendering reviews...');
            window.components.render.reviews();
            console.log('✅ All sections rendered');
        }
    },
    
    // Slider functionality
    slider: {
        currentSlides: {},
        
        initSlider: (sliderId, totalImages) => {
            window.components.slider.currentSlides[sliderId] = 0;
        },
        
        nextSlide: (sliderId) => {
            const slider = document.getElementById(sliderId);
            const container = slider.querySelector('.slider-container');
            const totalImages = slider.querySelectorAll('.slider-image').length;
            
            if (!window.components.slider.currentSlides[sliderId]) {
                window.components.slider.currentSlides[sliderId] = 0;
            }
            
            window.components.slider.currentSlides[sliderId] = (window.components.slider.currentSlides[sliderId] + 1) % totalImages;
            window.components.slider.updateSlider(sliderId);
        },
        
        prevSlide: (sliderId) => {
            const slider = document.getElementById(sliderId);
            const totalImages = slider.querySelectorAll('.slider-image').length;
            
            if (!window.components.slider.currentSlides[sliderId]) {
                window.components.slider.currentSlides[sliderId] = 0;
            }
            
            window.components.slider.currentSlides[sliderId] = window.components.slider.currentSlides[sliderId] === 0 
                ? totalImages - 1 
                : window.components.slider.currentSlides[sliderId] - 1;
            window.components.slider.updateSlider(sliderId);
        },
        
        goToSlide: (sliderId, slideIndex) => {
            window.components.slider.currentSlides[sliderId] = slideIndex;
            window.components.slider.updateSlider(sliderId);
        },
        
        updateSlider: (sliderId) => {
            const slider = document.getElementById(sliderId);
            const container = slider.querySelector('.slider-container');
            const dots = slider.querySelectorAll('.slider-dot');
            const indicators = slider.querySelector('.slider-indicators');
            const counter = slider.querySelector('.slider-counter');
            const currentIndex = window.components.slider.currentSlides[sliderId];
            const totalImages = dots.length;
            
            // Update slider position
            container.style.transform = `translateX(-${currentIndex * 33.333}%)`;
            
            // Update counter if it exists
            if (counter) {
                counter.textContent = `${currentIndex + 1} / ${totalImages}`;
                counter.classList.add('show');
            }
            
            // Smart indicators logic for many images
            if (indicators && indicators.classList.contains('many-images')) {
                dots.forEach((dot, index) => {
                    const isActive = index === currentIndex;
                    const isNearby = Math.abs(index - currentIndex) <= 2; // Show 2 dots on each side
                    
                    dot.classList.toggle('active', isActive);
                    dot.classList.toggle('nearby', isNearby && !isActive);
                });
            } else {
                // Regular behavior for sliders with few images
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentIndex);
                    // Remove any smart indicator classes that might exist
                    dot.classList.remove('nearby');
                });
            }
        }
    },
    
    // Pagination utility functions
    paginate: {
        
        // Get current items per page based on screen size
        getItemsPerPage: (section) => {
            const width = window.innerWidth;
            const config = window.components.pagination[section].itemsPerPage;
            if (width <= 767) return config.mobile;
            if (width <= 991) return config.tablet;
            return config.desktop;
        },
        
        // Get items for current page
        getPageItems: (section, items) => {
            const itemsPerPage = window.components.paginate.getItemsPerPage(section);
            const currentPage = window.components.pagination[section].currentPage;
            const startIndex = 0; // Always start from beginning to show accumulated items
            const endIndex = (currentPage + 1) * itemsPerPage; // Show all items up to current page
            console.log(`📄 getPageItems for ${section}: showing items ${startIndex} to ${endIndex-1} (total ${endIndex})`);
            return items.slice(startIndex, endIndex);
        },
        
        // Check if there are more items to load
        hasMoreItems: (section, totalItems) => {
            const itemsPerPage = window.components.paginate.getItemsPerPage(section);
            const currentPage = window.components.pagination[section].currentPage;
            const hasMore = (currentPage + 1) * itemsPerPage < totalItems;
            console.log(`📊 hasMoreItems for ${section}: itemsPerPage=${itemsPerPage}, currentPage=${currentPage}, totalItems=${totalItems}, hasMore=${hasMore}`);
            return hasMore;
        },
        
        // Load more items
        loadMore: (section) => {
            console.log(`🔄 Loading more ${section}...`);
            console.log(`Current page before increment:`, window.components.pagination[section].currentPage);
            window.components.pagination[section].currentPage++;
            console.log(`Current page after increment:`, window.components.pagination[section].currentPage);
            
            if (section === 'tours') {
                window.components.render.tours();
            } else if (section === 'places') {
                window.components.render.places();
            } else if (section === 'gallery') {
                console.log(`📸 Rendering more gallery items...`);
                window.components.render.gallery();
            }
        },
        
        // Reset pagination
        reset: (section) => {
            window.components.pagination[section].currentPage = 0;
        },
        
        // Update load more button
        updateLoadMoreButton: (section, hasMore) => {
            console.log(`🔘 updateLoadMoreButton called for ${section}, hasMore:`, hasMore);
            const containerSelector = section === 'tours' ? '.tours-grid' : 
                                    section === 'places' ? '.places-grid' : '.gallery-grid';
            const container = window.utils.dom.query(containerSelector);
            const parent = container.parentElement;
            
            // Remove existing button
            const existingBtn = parent.querySelector('.load-more-btn');
            if (existingBtn) {
                console.log(`🗑️ Removing existing button`);
                existingBtn.remove();
            }
            
            // Add new button if there are more items
            if (hasMore) {
                console.log(`➕ Adding new load more button for ${section}`);
                const loadMoreBtn = document.createElement('div');
                loadMoreBtn.className = 'load-more-container';
                
                // Get current language and translations
                const currentLang = localStorage.getItem('selectedLanguage') || 'es';
                const translations = window.translations[currentLang];
                
                // Get the appropriate translation key based on section
                const translationKeys = {
                    'tours': 'loadMoreTours',
                    'places': 'loadMorePlaces',
                    'gallery': 'loadMorePhotos'
                };
                
                const translationKey = translationKeys[section] || 'loadMore';
                const loadMoreText = translations.common[translationKey] || translations.common.loadMore;
                
                console.log(`🔍 Section: ${section}, Key: ${translationKey}, Text: "${loadMoreText}", Lang: ${currentLang}`);
                
                loadMoreBtn.innerHTML = `
                    <button class="load-more-btn" onclick="window.components.paginate.loadMore('${section}')" data-translate="common.${translationKey}">
                        <span class="btn-text">${loadMoreText}</span>
                        <i class="fas fa-arrow-down"></i>
                    </button>
                `;
                parent.appendChild(loadMoreBtn);
                console.log(`✅ Load more button added successfully with text: ${loadMoreText}`);
            } else {
                console.log(`❌ No more items, button not added`);
            }
        }
    },

    // Image Modal functionality
    modal: {
        currentImages: [],
        currentIndex: 0,
        currentTitle: '',

        open: (images, index, title) => {
            window.components.modal.currentImages = images;
            window.components.modal.currentIndex = index;
            window.components.modal.currentTitle = title;
            
            const modal = document.getElementById('imageModal');
            const modalImage = document.getElementById('modalImage');
            const modalTitle = document.getElementById('modalTitle');
            
            modalImage.src = images[index];
            modalTitle.textContent = title;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        },

        close: () => {
            const modal = document.getElementById('imageModal');
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
                
                // Clear modal content for better performance
                const modalImage = document.getElementById('modalImage');
                const modalTitle = document.getElementById('modalTitle');
                const modalDescription = document.getElementById('modalDescription');
                
                if (modalImage) modalImage.src = '';
                if (modalTitle) modalTitle.textContent = '';
                if (modalDescription) modalDescription.textContent = '';
                
                // Reset modal state
                window.components.modal.currentImages = [];
                window.components.modal.currentIndex = 0;
                window.components.modal.currentTitle = '';
                
                // Track analytics
                if (window.utils && window.utils.analytics) {
                    window.utils.analytics.trackEvent('modal_close');
                }
            }
        },

        next: () => {
            window.components.modal.currentIndex = (window.components.modal.currentIndex + 1) % window.components.modal.currentImages.length;
            document.getElementById('modalImage').src = window.components.modal.currentImages[window.components.modal.currentIndex];
        },

        prev: () => {
            window.components.modal.currentIndex = (window.components.modal.currentIndex - 1 + window.components.modal.currentImages.length) % window.components.modal.currentImages.length;
            document.getElementById('modalImage').src = window.components.modal.currentImages[window.components.modal.currentIndex];
        }
    },

    // Enhanced Slider with Auto-play
    autoSlider: {
        intervals: {},

        start: (sliderId, duration = 4000) => {
            if (window.components.autoSlider.intervals[sliderId]) {
                clearInterval(window.components.autoSlider.intervals[sliderId]);
            }
            
            window.components.autoSlider.intervals[sliderId] = setInterval(() => {
                window.components.slider.nextSlide(sliderId);
            }, duration);
        },

        stop: (sliderId) => {
            if (window.components.autoSlider.intervals[sliderId]) {
                clearInterval(window.components.autoSlider.intervals[sliderId]);
                delete window.components.autoSlider.intervals[sliderId];
            }
        },

        pauseOnHover: (sliderId) => {
            const slider = document.getElementById(sliderId);
            if (slider) {
                slider.addEventListener('mouseenter', () => {
                    window.components.autoSlider.stop(sliderId);
                });
                
                slider.addEventListener('mouseleave', () => {
                    window.components.autoSlider.start(sliderId);
                });
            }
        }
    },

    // About Slider functionality
    aboutSlider: {
        currentSlide: 0,
        totalSlides: 0,
        interval: null,
        autoPlayDuration: 4000,

        init: () => {
            const slider = document.getElementById('about-slider');
            if (!slider) return;

            const slides = slider.querySelectorAll('.about-slide');
            window.components.aboutSlider.totalSlides = slides.length;

            // Start autoplay
            window.components.aboutSlider.startAutoPlay();

            // Pause on hover
            slider.addEventListener('mouseenter', () => {
                window.components.aboutSlider.pauseAutoPlay();
            });

            slider.addEventListener('mouseleave', () => {
                window.components.aboutSlider.startAutoPlay();
            });

            // Pause on focus/visibility change
            document.addEventListener('visibilitychange', () => {
                if (document.hidden) {
                    window.components.aboutSlider.pauseAutoPlay();
                } else {
                    window.components.aboutSlider.startAutoPlay();
                }
            });
        },

        goToSlide: (slideIndex) => {
            const slider = document.getElementById('about-slider');
            if (!slider) return;

            const slides = slider.querySelectorAll('.about-slide');

            // Remove active class from current slide
            slides[window.components.aboutSlider.currentSlide].classList.remove('active');

            // Set new current slide
            window.components.aboutSlider.currentSlide = slideIndex;

            // Add active class to new slide
            slides[slideIndex].classList.add('active');
        },

        nextSlide: () => {
            const nextIndex = (window.components.aboutSlider.currentSlide + 1) % window.components.aboutSlider.totalSlides;
            window.components.aboutSlider.goToSlide(nextIndex);
        },

        startAutoPlay: () => {
            window.components.aboutSlider.pauseAutoPlay(); // Clear any existing interval
            window.components.aboutSlider.interval = setInterval(() => {
                window.components.aboutSlider.nextSlide();
            }, window.components.aboutSlider.autoPlayDuration);
        },

        pauseAutoPlay: () => {
            if (window.components.aboutSlider.interval) {
                clearInterval(window.components.aboutSlider.interval);
                window.components.aboutSlider.interval = null;
            }
        }
    },

    // Hero Video Management - Simplified Version
    heroVideo: {
        init: () => {
            console.log('🎬 Initializing Hero Video (Simple Version)');
            
            const video = document.querySelector('.hero-video');
            const placeholder = document.querySelector('.hero-video-placeholder');
            const loadingIndicator = document.querySelector('.video-loading-indicator');

            if (!video) {
                console.warn('❌ Hero video element not found');
                return;
            }

            console.log('✅ Hero video found, setting up...');

            // Simple configuration
            video.muted = true;
            video.setAttribute('playsinline', '');
            video.setAttribute('webkit-playsinline', '');

            // Handle video loading
            video.addEventListener('loadstart', () => {
                console.log('🚀 Video loading started');
                if (loadingIndicator) {
                    loadingIndicator.style.display = 'flex';
                }
            });

            video.addEventListener('canplaythrough', () => {
                console.log('✅ Video ready to play');
                video.classList.add('loaded');
                if (placeholder) placeholder.classList.add('hidden');
                if (loadingIndicator) {
                    loadingIndicator.style.display = 'none';
                }

                // Try to play automatically
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        console.log('✅ Video playing automatically');
                    }).catch(error => {
                        console.log('⚠️ Autoplay blocked - waiting for user interaction');
                    });
                }
            });

            // Handle video errors
            video.addEventListener('error', () => {
                console.warn('❌ Video failed to load');
                if (placeholder) placeholder.classList.add('hidden');
                if (loadingIndicator) {
                    loadingIndicator.style.display = 'none';
                }
            });

            // Simple user interaction handler
            const playOnInteraction = () => {
                console.log('👆 User interaction - attempting to play video');
                video.muted = true;
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        console.log('✅ Video playing after user interaction');
                        // Remove listeners after successful play
                        document.removeEventListener('touchstart', playOnInteraction);
                        document.removeEventListener('click', playOnInteraction);
                    }).catch(error => {
                        console.warn('⚠️ Video play failed:', error);
                    });
                }
            };

            // Add interaction listeners
            document.addEventListener('touchstart', playOnInteraction, { once: true });
            document.addEventListener('click', playOnInteraction, { once: true });

            // Start loading
            video.load();
        }
    }
};

// Make components available globally for browser use
window.components = components;