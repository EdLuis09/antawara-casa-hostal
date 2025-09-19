// Utility functions
console.log('✅ utils.js loaded');
const utils = {
    
    // DOM manipulation utilities
    dom: {
        // Get element by ID
        get: (id) => document.getElementById(id),
        
        // Get elements by class name
        getByClass: (className) => document.getElementsByClassName(className),
        
        // Query selector
        query: (selector) => document.querySelector(selector),
        
        // Query all selectors
        queryAll: (selector) => document.querySelectorAll(selector),
        
        // Create element
        create: (tag, className = '', content = '') => {
            const element = document.createElement(tag);
            if (className) element.className = className;
            if (content) element.innerHTML = content;
            return element;
        },
        
        // Add class
        addClass: (element, className) => {
            if (element) element.classList.add(className);
        },
        
        // Remove class
        removeClass: (element, className) => {
            if (element) element.classList.remove(className);
        },
        
        // Toggle class
        toggleClass: (element, className) => {
            if (element) element.classList.toggle(className);
        },
        
        // Check if element has class
        hasClass: (element, className) => {
            return element ? element.classList.contains(className) : false;
        }
    },
    
    // Animation utilities
    animation: {
        // Smooth scroll to element
        scrollTo: (element, offset = 0) => {
            if (!element) return;
            
            const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        },
        
        // Fade in animation
        fadeIn: (element, duration = 300) => {
            if (!element) return;
            
            element.style.opacity = 0;
            element.style.display = 'block';
            
            let start = performance.now();
            
            const fade = (timestamp) => {
                const elapsed = timestamp - start;
                const progress = elapsed / duration;
                
                if (progress < 1) {
                    element.style.opacity = progress;
                    requestAnimationFrame(fade);
                } else {
                    element.style.opacity = 1;
                }
            };
            
            requestAnimationFrame(fade);
        },
        
        // Fade out animation
        fadeOut: (element, duration = 300) => {
            if (!element) return;
            
            let start = performance.now();
            
            const fade = (timestamp) => {
                const elapsed = timestamp - start;
                const progress = elapsed / duration;
                
                if (progress < 1) {
                    element.style.opacity = 1 - progress;
                    requestAnimationFrame(fade);
                } else {
                    element.style.opacity = 0;
                    element.style.display = 'none';
                }
            };
            
            requestAnimationFrame(fade);
        }
    },
    
    // Validation utilities
    validation: {
        // Validate email
        email: (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },
        
        // Validate phone
        phone: (phone) => {
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
            return phoneRegex.test(phone);
        },
        
        // Validate required field
        required: (value) => {
            return value && value.trim().length > 0;
        },
        
        // Validate minimum length
        minLength: (value, min) => {
            return value && value.trim().length >= min;
        },
        
        // Validate maximum length
        maxLength: (value, max) => {
            return value && value.trim().length <= max;
        }
    },
    
    // Format utilities
    format: {
        // Format currency
        currency: (amount, currency = 'PEN') => {
            const formatter = new Intl.NumberFormat('es-PE', {
                style: 'currency',
                currency: currency,
                minimumFractionDigits: 0,
                maximumFractionDigits: 2
            });
            return formatter.format(amount);
        },
        
        // Format date
        date: (date, locale = 'es-PE') => {
            const options = { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            };
            return new Date(date).toLocaleDateString(locale, options);
        },
        
        // Format time
        time: (date, locale = 'es-PE') => {
            const options = { 
                hour: '2-digit', 
                minute: '2-digit' 
            };
            return new Date(date).toLocaleTimeString(locale, options);
        },
        
        // Truncate text
        truncate: (text, length = 100, suffix = '...') => {
            if (!text || text.length <= length) return text;
            return text.substring(0, length).trim() + suffix;
        },
        
        // Capitalize first letter
        capitalize: (text) => {
            if (!text) return '';
            return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        },
        
        // Convert to slug
        slug: (text) => {
            return text
                .toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '');
        }
    },
    
    // Storage utilities
    storage: {
        // Local storage
        set: (key, value) => {
            try {
                localStorage.setItem(key, JSON.stringify(value));
                return true;
            } catch (e) {
                console.error('Error saving to localStorage:', e);
                return false;
            }
        },
        
        get: (key, defaultValue = null) => {
            try {
                const item = localStorage.getItem(key);
                return item ? JSON.parse(item) : defaultValue;
            } catch (e) {
                console.error('Error reading from localStorage:', e);
                return defaultValue;
            }
        },
        
        remove: (key) => {
            try {
                localStorage.removeItem(key);
                return true;
            } catch (e) {
                console.error('Error removing from localStorage:', e);
                return false;
            }
        },
        
        clear: () => {
            try {
                localStorage.clear();
                return true;
            } catch (e) {
                console.error('Error clearing localStorage:', e);
                return false;
            }
        }
    },
    
    // Device and browser detection
    device: {
        // Check if mobile
        isMobile: () => {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        },
        
        // Check if tablet
        isTablet: () => {
            return /iPad|Android/i.test(navigator.userAgent) && window.innerWidth >= 768;
        },
        
        // Check if desktop
        isDesktop: () => {
            return !utils.device.isMobile() && !utils.device.isTablet();
        },
        
        // Get screen size category
        getScreenSize: () => {
            const width = window.innerWidth;
            if (width < 576) return 'xs';
            if (width < 768) return 'sm';
            if (width < 992) return 'md';
            if (width < 1200) return 'lg';
            return 'xl';
        }
    },
    
    // Debounce and throttle utilities
    performance: {
        // Debounce function
        debounce: (func, wait, immediate) => {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    timeout = null;
                    if (!immediate) func(...args);
                };
                const callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func(...args);
            };
        },
        
        // Throttle function
        throttle: (func, limit) => {
            let inThrottle;
            return function(...args) {
                if (!inThrottle) {
                    func.apply(this, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        }
    },
    
    // URL utilities
    url: {
        // Get query parameter
        getParam: (name) => {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name);
        },
        
        // Set query parameter
        setParam: (name, value) => {
            const url = new URL(window.location);
            url.searchParams.set(name, value);
            window.history.pushState({}, '', url);
        },
        
        // Remove query parameter
        removeParam: (name) => {
            const url = new URL(window.location);
            url.searchParams.delete(name);
            window.history.pushState({}, '', url);
        },
        
        // Get hash
        getHash: () => {
            return window.location.hash.substring(1);
        },
        
        // Set hash
        setHash: (hash) => {
            window.location.hash = hash;
        }
    },
    
    // Array utilities
    array: {
        // Shuffle array
        shuffle: (array) => {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        },
        
        // Remove duplicates
        unique: (array) => {
            return [...new Set(array)];
        },
        
        // Group by property
        groupBy: (array, key) => {
            return array.reduce((groups, item) => {
                const group = item[key];
                if (!groups[group]) {
                    groups[group] = [];
                }
                groups[group].push(item);
                return groups;
            }, {});
        },
        
        // Sort by property
        sortBy: (array, key, ascending = true) => {
            return array.sort((a, b) => {
                const aVal = a[key];
                const bVal = b[key];
                if (aVal < bVal) return ascending ? -1 : 1;
                if (aVal > bVal) return ascending ? 1 : -1;
                return 0;
            });
        }
    },
    
    // Loading utilities
    loading: {
        // Show loading spinner
        show: (container) => {
            const loader = utils.dom.create('div', 'loading', '');
            if (container) {
                container.appendChild(loader);
            } else {
                document.body.appendChild(loader);
            }
            return loader;
        },
        
        // Hide loading spinner
        hide: (loader) => {
            if (loader && loader.parentNode) {
                loader.parentNode.removeChild(loader);
            }
        }
    },
    
    // Analytics utilities (placeholder for future implementation)
    analytics: {
        // Track event
        trackEvent: (eventName, properties = {}) => {
            // Implement Google Analytics or other tracking service
            console.log('Event tracked:', eventName, properties);
        },
        
        // Track page view
        trackPageView: (page) => {
            // Implement page view tracking
            console.log('Page view tracked:', page);
        }
    },
    
    // Error handling utilities
    error: {
        // Log error
        log: (error, context = '') => {
            console.error('Error:', error, context);
            // Could send to error reporting service
        },
        
        // Show user-friendly error message
        show: (message, container) => {
            const errorDiv = utils.dom.create('div', 'alert alert-error', message);
            if (container) {
                container.insertBefore(errorDiv, container.firstChild);
            }
            
            // Auto-hide after 5 seconds
            setTimeout(() => {
                if (errorDiv.parentNode) {
                    errorDiv.parentNode.removeChild(errorDiv);
                }
            }, 5000);
            
            return errorDiv;
        }
    },
    
    // Language utilities
    language: {
        // Current language (default: Spanish)
        currentLanguage: 'es',
        
        // Available languages
        availableLanguages: ['es', 'en'],
        
        // Set language
        setLanguage: (lang, translations = null) => {
            if (utils.language.availableLanguages.includes(lang)) {
                utils.language.currentLanguage = lang;
                utils.storage.set('antawara_language', lang);
                document.documentElement.lang = lang;
                
                // Update translations if provided
                if (translations) {
                    utils.language.updateTranslations(translations);
                }
                
                return true;
            }
            return false;
        },
        
        // Get current language
        getCurrentLanguage: () => {
            return utils.language.currentLanguage;
        },
        
        // Initialize language from storage or browser
        initLanguage: () => {
            // Try to get from localStorage first
            let savedLang = utils.storage.get('antawara_language');
            
            // If no saved language, try to detect from browser
            if (!savedLang) {
                const browserLang = navigator.language || navigator.languages[0];
                savedLang = browserLang.startsWith('en') ? 'en' : 'es';
            }
            
            // Set the language
            utils.language.setLanguage(savedLang);
            return savedLang;
        },
        
        // Get text by key path (e.g., 'nav.rooms')
        getText: (keyPath, translations) => {
            if (!translations || !keyPath) return keyPath;
            
            const keys = keyPath.split('.');
            let result = translations[utils.language.currentLanguage];
            
            for (const key of keys) {
                if (result && typeof result === 'object' && key in result) {
                    result = result[key];
                } else {
                    // Fallback to Spanish if key not found in current language
                    result = translations['es'];
                    for (const fallbackKey of keys) {
                        if (result && typeof result === 'object' && fallbackKey in result) {
                            result = result[fallbackKey];
                        } else {
                            return keyPath; // Return original key if not found
                        }
                    }
                    break;
                }
            }
            
            return result || keyPath;
        },
        
        // Update all translatable elements
        updateTranslations: (translations) => {
            // Handle text content translations
            const translatableElements = document.querySelectorAll('[data-translate]');
            
            translatableElements.forEach(element => {
                const keyPath = element.getAttribute('data-translate');
                const translatedText = utils.language.getText(keyPath, translations);
                
                if (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'email')) {
                    element.placeholder = translatedText;
                } else {
                    element.textContent = translatedText;
                }
            });
            
            // Handle alt attribute translations
            const translatableAltElements = document.querySelectorAll('[data-translate-alt]');
            
            translatableAltElements.forEach(element => {
                const keyPath = element.getAttribute('data-translate-alt');
                const translatedText = utils.language.getText(keyPath, translations);
                element.alt = translatedText;
            });
            
            // Handle load more buttons specifically
            utils.language.updateLoadMoreButtons(translations);
        },
        
        // Update existing load more buttons
        updateLoadMoreButtons: (translations) => {
            const loadMoreButtons = document.querySelectorAll('.load-more-btn');
            const currentLang = utils.language.currentLanguage;
            const translationsToUse = translations || window.translations;
            
            console.log(`🔄 Updating ${loadMoreButtons.length} load more buttons for language: ${currentLang}`);
            
            loadMoreButtons.forEach((button, index) => {
                const buttonText = button.querySelector('.btn-text');
                if (buttonText) {
                    const translateKey = button.getAttribute('data-translate');
                    const currentText = buttonText.textContent;
                    console.log(`📝 Button ${index}: translateKey = ${translateKey}, current text = "${currentText}"`);
                    
                    if (translateKey) {
                        let translatedText = null;
                        
                        // Try to get the translation using the key
                        if (translationsToUse && translationsToUse[currentLang]) {
                            translatedText = utils.language.getText(translateKey, translationsToUse);
                            console.log(`🔤 Translation attempt 1: "${translatedText}"`);
                        }
                        
                        // If still no translation, try direct access to common
                        if (!translatedText || translatedText === translateKey) {
                            const keyParts = translateKey.split('.');
                            if (keyParts.length >= 2 && keyParts[0] === 'common') {
                                const commonKey = keyParts[1];
                                if (translationsToUse[currentLang] && translationsToUse[currentLang].common) {
                                    translatedText = translationsToUse[currentLang].common[commonKey];
                                    console.log(`🔤 Translation attempt 2: "${translatedText}"`);
                                }
                            }
                        }
                        
                        if (translatedText && translatedText !== translateKey && translatedText !== currentText) {
                            buttonText.textContent = translatedText;
                            console.log(`✅ Button ${index} updated: "${currentText}" → "${translatedText}"`);
                        } else if (translatedText === currentText) {
                            console.log(`ℹ️ Button ${index} already has correct translation: "${currentText}"`);
                        } else {
                            console.warn(`⚠️ No valid translation found for key: ${translateKey}`);
                        }
                    } else {
                        console.warn(`⚠️ Button ${index} has no data-translate attribute`);
                    }
                } else {
                    console.warn(`⚠️ Button ${index} has no .btn-text element`);
                }
            });
            
            console.log(`✅ Load more buttons update completed`);
        },
        
        // Toggle between available languages
        toggleLanguage: (translations) => {
            const currentIndex = utils.language.availableLanguages.indexOf(utils.language.currentLanguage);
            const nextIndex = (currentIndex + 1) % utils.language.availableLanguages.length;
            const nextLang = utils.language.availableLanguages[nextIndex];
            
            utils.language.setLanguage(nextLang);
            utils.language.updateTranslations(translations);
            
            // Re-render dynamic content to apply translations to components
            if (window.components && window.components.render) {
                console.log('🔄 Re-rendering dynamic content for language change...');
                window.components.render.all();
            }
            
            // Force update of existing load more buttons after a brief delay
            setTimeout(() => {
                console.log('🔄 Force updating load more buttons after re-render...');
                utils.language.updateLoadMoreButtons(translations);
            }, 100);
            
            // Update language switch buttons with flag and code
            const langInfo = translations[nextLang].language;
            const switchContent = `${langInfo.flag}<span class="lang-code">${langInfo.code}</span>`;
            
            const langSwitches = utils.dom.queryAll('.language-switch');
            langSwitches.forEach(langSwitch => {
                langSwitch.innerHTML = switchContent;
            });
            
            return nextLang;
        },
        
        // Get current language info with flag
        getCurrentLanguageInfo: (translations) => {
            if (translations && translations[utils.language.currentLanguage]) {
                return translations[utils.language.currentLanguage].language;
            }
            // Fallback SVG flags
            const fallbackFlags = {
                es: '<svg width="20" height="14" viewBox="0 0 20 14" class="flag-icon"><rect width="20" height="4.67" fill="#FDE047"/><rect y="4.67" width="20" height="4.67" fill="#3B82F6"/><rect y="9.33" width="20" height="4.67" fill="#EF4444"/></svg>',
                en: '<svg width="20" height="14" viewBox="0 0 20 14" class="flag-icon"><rect width="20" height="14" fill="#1E40AF"/><path d="M0 0l20 14M20 0L0 14" stroke="#EF4444" stroke-width="1.5"/><path d="M0 0l20 14M20 0L0 14" stroke="white" stroke-width="1"/><path d="M10 0v14M0 7h20" stroke="#EF4444" stroke-width="2.5"/><path d="M10 0v14M0 7h20" stroke="white" stroke-width="1.5"/></svg>'
            };
            return {
                code: utils.language.currentLanguage.toUpperCase(),
                flag: fallbackFlags[utils.language.currentLanguage] || fallbackFlags.es,
                name: utils.language.currentLanguage === 'es' ? 'Español' : 'English'
            };
        },
        
        getAvailableLanguages: (translations) => {
            const fallbackFlags = {
                es: '<svg width="20" height="14" viewBox="0 0 20 14" class="flag-icon"><rect width="20" height="4.67" fill="#FDE047"/><rect y="4.67" width="20" height="4.67" fill="#3B82F6"/><rect y="9.33" width="20" height="4.67" fill="#EF4444"/></svg>',
                en: '<svg width="20" height="14" viewBox="0 0 20 14" class="flag-icon"><rect width="20" height="14" fill="#1E40AF"/><path d="M0 0l20 14M20 0L0 14" stroke="#EF4444" stroke-width="1.5"/><path d="M0 0l20 14M20 0L0 14" stroke="white" stroke-width="1"/><path d="M10 0v14M0 7h20" stroke="#EF4444" stroke-width="2.5"/><path d="M10 0v14M0 7h20" stroke="white" stroke-width="1.5"/></svg>'
            };
            
            return utils.language.availableLanguages.map(lang => ({
                code: lang.toUpperCase(),
                flag: fallbackFlags[lang] || fallbackFlags.es,
                name: lang === 'es' ? 'Español' : 'English',
                langCode: lang
            }));
        }
    }
};

// Make utils available globally for browser use
window.utils = utils;