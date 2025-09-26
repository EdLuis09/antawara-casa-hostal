// translations.js - Sistema de traducciones español/inglés
console.log('✅ translations.js loaded');

const translations = {
    es: {
        // Language info
        language: {
            code: "ES",
            flag: '<svg width="20" height="14" viewBox="0 0 20 14" class="flag-icon"><rect width="20" height="4.67" fill="#FDE047"/><rect y="4.67" width="20" height="4.67" fill="#3B82F6"/><rect y="9.33" width="20" height="4.67" fill="#EF4444"/></svg>',
            name: "Español"
        },
        
        // Navegación
        nav: {
            home: "Inicio",
            rooms: "Habitaciones",
            services: "Servicios", 
            tours: "Tours",
            places: "Lugares",
            gallery: "Galería",
            reviews: "Reseñas",
            location: "Ubicación",
            contact: "Contacto"
        },
        
        // Hero Section
        hero: {
            title: "Bienvenido a Casa Hostal Antawara",
            subtitle: "Tu hogar en el corazón del Caribe colombiano",
            description: "Vive la auténtica hospitalidad caribeña a solo 1 km de la entrada del Parque Tayrona. Ofrecemos alojamiento cómodo con atención personalizada para amantes de la naturaleza y aventureros.",
            cta1: "Ver Habitaciones",
            cta2: "Contáctanos"
        },
        
        // About Section
        about: {
            title: "Sobre Antawara",
            subtitle: "Conoce nuestra historia y filosofía",
            historyTitle: "Nuestra Historia",
            historyText: "Antawara Casa Hostal nació con la visión de crear un espacio acogedor donde los viajeros puedan sentirse como en casa. Con años de experiencia en hospitalidad, nos dedicamos a brindar un servicio personalizado y de calidad.",
            missionTitle: "Nuestra Misión",
            missionText: "Proporcionar alojamiento cómodo, seguro y accesible, creando experiencias memorables para nuestros huéspedes, promoviendo el turismo local y sostenible.",
            feature1Title: "Ambiente Familiar",
            feature1Text: "Trato personalizado y ambiente acogedor",
            feature2Title: "Ubicación Privilegiada", 
            feature2Text: "Cerca al parque Tayrona",
            feature3Title: "Turismo Sostenible",
            feature3Text: "Comprometidos con el medio ambiente",
            img1Alt: "Antawara Casa Hostal - Vista principal",
            img2Alt: "Antawara - Piscina principal",
            img3Alt: "Antawara - Área social", 
            img4Alt: "Antawara - Jardín tropical",
            img5Alt: "Antawara - Zona de hamacas",
            img6Alt: "Antawara - Zona piscina y jardín"
        },
        
        // Rooms Section
        rooms: {
            title: "Nuestras Habitaciones",
            subtitle: "Comodidad y confort para tu estadía",
            private: {
                name: "Habitación Privada",
                description: "Cómoda habitación privada con baño completo, ideal para parejas o viajeros que buscan privacidad.",
                price: "desde $50/noche"
            },
            shared: {
                name: "Habitación Compartida",
                description: "Encantadora habitación doble inspirada en la vibrante flor de cayena. Ofrece un ambiente cálido y acogedor con vistas espectaculares al jardín tropical y la refrescante piscina, ideal para una escapada romántica.",
                price: "desde $25/noche"
            },
            family: {
                name: "Habitación Familiar",
                description: "Amplia habitación para familias con hasta 4 personas, incluye área de estar.",
                price: "desde $80/noche"
            },
            
            // Habitaciones específicas
            1: {
                name: "Habitación Doble - Girasol",
                description: "Acogedora habitación doble con vista panorámica al jardín y la piscina. Perfecta para parejas que buscan confort y tranquilidad, con todas las comodidades modernas incluyendo aire acondicionado y un ambiente tropical relajante."
            },
            2: {
                name: "Habitación Doble - Cayena", 
                description: "Encantadora habitación doble inspirada en la vibrante flor de cayena. Ofrece un ambiente cálido y acogedor con vistas espectaculares al jardín tropical y la refrescante piscina, ideal para una escapada romántica."
            },
            3: {
                name: "Habitación Familiar - Heliconia",
                description: "Espaciosa habitación familiar con balcón privado y hamaca para disfrutar del ambiente tropical. Combina una cama doble y una King size, perfecta para familias que desean comodidad, espacio y hermosas vistas al jardín y la piscina."
            },
            4: {
                name: "Habitación Triple - Orquídea",
                description: "Elegante habitación triple con balcón, hamaca y vistas privilegiadas al jardín, piscina y montañas. Cuenta con una cama Queen y una cama de un cuerpo desplegable, ofreciendo flexibilidad y confort para grupos pequeños o familias."
            },
            5: {
                name: "Habitación Triple - Ave del Paraíso",
                description: "La habitación triple más exclusiva con terraza privada, balcón y hamaca. Disfruta de vistas panorámicas al jardín, piscina y montañas desde tu propio espacio exterior. Perfecta para quienes buscan privacidad y conexión con la naturaleza."
            }
        },
        
        // Services Section
        services: {
            title: "Nuestros Servicios",
            subtitle: "Todo lo que necesitas para una estadía perfecta",
            wifi: {
                name: "WiFi Gratuito",
                description: "Internet de alta velocidad en todas las áreas"
            },
            breakfast: {
                name: "Desayuno Incluido",
                description: "Desayuno continental todos los días"
            },
            laundry: {
                name: "Lavandería",
                description: "Servicio de lavado y secado disponible"
            },
            tours: {
                name: "Tours Guiados",
                description: "Excursiones organizadas a lugares de interés"
            },
            
            // Servicios específicos por ID
            1: {
                name: "WiFi Gratuito",
                description: "Internet de alta velocidad disponible en todas las áreas del hostal."
            },
            2: {
                name: "Desayuno Incluido", 
                description: "Desayuno continental completo incluido en todas nuestras tarifas."
            },
            3: {
                name: "Recepción 24h",
                description: "Personal disponible las 24 horas para asistirte en lo que necesites."
            },
            4: {
                name: "Lavandería",
                description: "Servicio de lavandería disponible para tu comodidad."
            },
            5: {
                name: "Área Común",
                description: "Espacios compartidos perfectos para socializar y relajarse."
            },
            6: {
                name: "Equipaje Gratuito",
                description: "Guardamos tu equipaje sin costo adicional antes del check-in y después del check-out."
            }
        },
        
        // Tours Section
        tours: {
            title: "Tours y Actividades",
            subtitle: "Explora y vive experiencias únicas",
            city: {
                name: "Tour por la Ciudad",
                description: "Descubre los lugares más emblemáticos de la ciudad con nuestros guías locales."
            },
            nature: {
                name: "Tour de Naturaleza",
                description: "Explora los paisajes naturales y la biodiversidad de la región."
            },
            culture: {
                name: "Tour Cultural",
                description: "Sumérgete en la rica historia y tradiciones locales."
            },
            
            // Tours específicos por ID
            1: {
                name: "Cabalgata Playa Los Naranjos",
                description: "Disfruta de una cabalgata de 1 hora bordeando el Bosque Tayrona y el río Piedras, rodeado de fauna, flora y plantas curativas. Vive la emoción de cabalgar en la playa y relájate con 2 horas de río y mar en Playa Los Naranjos. Experiencia completa de 4 horas, con salidas diarias de 8:00 am a 12:00 pm y de 3:00 pm a 6:00 pm.",
                duration: "4 horas",
                difficulty: "Fácil",
                groupSize: "2-10 personas",
                includes: ["Seguro de viajes", "Caballo", "Guía", "Transporte (si se hospeda cerca al Parque Tayrona)"]
            },
            2: {
                name: "Visita Pueblito Taykú",
                description: "Vive una experiencia única con una excursión de 1.5 horas hasta un auténtico poblado Kogui, ubicado a 450 msnm. Disfruta de impresionantes paisajes, explora ruinas arqueológicas, conoce casas tradicionales construidas con materiales naturales e interactúa con la comunidad. La experiencia incluye una limpieza espiritual en su sitio sagrado. Salidas diarias a las 8:00 y 9:00 am.",
                duration: "7 horas",
                difficulty: "Moderado",
                groupSize: "2-20 personas",
                includes: ["Seguro de viajes", "Almuerzo típico", "Guía nativo", "Frutas", "Entrada al pueblito Kogui", "Transporte (si se hospeda cerca al Parque Tayrona)"]
            },
            3: {
                name: "Visita Comunidad Kogui - Duanamake",
                description: "Caminata de 2 horas por bosques y montañas, aprendizaje de medicina natural y visita al pueblo Kogui para conocer sus viviendas, bañarte en la quebrada y reunirte con el mamo. Finaliza con almuerzo de pescados o mariscos en la playa. ¡Cultura, naturaleza y mar en un solo día!",
                duration: "7 horas",
                difficulty: "Moderado",
                groupSize: "2-20 personas",
                includes: ["Seguro de viajes", "Almuerzo típico", "Guía nativo", "Frutas", "Entrada al pueblito Kogui", "Transporte (si se hospeda cerca al Parque Tayrona)"]
            },
            4: {
                name: "Tour del Cacao",
                description: "Cacao De La Sierra ofrece un tour de 2 a 3 horas en la Finca La Fortuna, cerca del Parque Tayrona. Vive una experiencia inmersiva en el mundo del cacao: recorre los cultivos, aprende su proceso desde el origen hasta el producto final y participa en actividades interactivas como recolección y elaboración artesanal de derivados.",
                duration: "2-3 horas",
                difficulty: "Fácil",
                groupSize: "2-15 personas",
                includes: ["Guía local experto", "Refrigerio", "Souvenir especial", "Seguro de asistencia médica", "Degustación exclusiva de chocolate artesanal"]
            }
        },
        
        // Places Section
        places: {
            title: "Lugares de Interés",
            subtitle: "Descubre los mejores sitios cerca de nosotros",
            caboSanJuan: {
                name: "Cabo San Juan",
                description: "La playa más icónica de Tayrona con aguas cristalinas y atardeceres espectaculares."
            },
            playaCosteno: {
                name: "Playa Costeño",
                description: "Playa virgen perfecta para relajarse y disfrutar de la naturaleza caribeña."
            },
            rioDonDiego: {
                name: "Río Don Diego",
                description: "Río tropical donde puedes hacer tubing y disfrutar de la selva tropical."
            },
            palomino: {
                name: "Palomino",
                description: "Pueblo costero bohemio con playas vírgenes y ambiente relajado."
            },
            
            // Lugares específicos por ID
            1: {
                name: "Cabo San Juan del Guía",
                description: "Descubre Cabo San Juan del Guía, la joya más icónica del Parque Nacional Natural Tayrona en Santa Marta. Aquí la selva tropical se funde con el mar Caribe en un espectáculo único: arenas doradas, aguas que cambian del azul profundo al verde esmeralda y la famosa formación rocosa que roba miradas en cada fotografía. Disfruta de senderos entre la selva, miradores con vistas que quitan el aliento y espacios ideales para descansar, acampar y conectar con la naturaleza. Vive la experiencia que todos sueñan y que solo tú puedes hacer realidad: ¡tu próxima aventura te espera en Cabo San Juan!",
                distance: "2 horas y media desde el hostal",
                type: "Playa - Parque Nacional",
                activities: ["Senderismo ecológico", "Natación", "Naturaleza", "Snorkel", "Fotografía", "Camping", "Relajación"]
            },
            2: {
                name: "Palomino",
                description: "Palomino, en la mágica Guajira colombiana, es un paraíso donde el río se entrega al mar Caribe bajo la mirada imponente de la Sierra Nevada. Sus playas de arena suave, rodeadas de palmeras y bosque tropical, son el escenario perfecto para desconectarte del ruido y entregarte a la tranquilidad. Imagina hamacas frente al mar, el murmullo del río y las olas, sabores locales sencillos pero auténticos, y un ambiente bohemio que atrae a viajeros de todo el mundo. Palomino no es solo un destino, es un estilo de vida que invita a relajarte, explorar y vivir la esencia del Caribe en su máxima expresión.",
                distance: "1 hora desde el hostal",
                type: "Playa - Pueblo Bohemio",
                activities: ["Tubing", "Surf", "Senderismo", "Tours", "Observación de aves", "Relajación"]
            },
            3: {
                name: "Río Don Diego",
                description: "El Río Don Diego, en el corazón del Magdalena, es una experiencia ecoturística que te conecta con la magia de la Sierra Nevada desde sus picos nevados hasta el Mar Caribe. Navega o desciende por sus aguas cristalinas rodeado de selvas exuberantes, escucha el canto de aves exóticas y descubre playas vírgenes donde río y mar se encuentran en perfecta armonía. Aquí, montañas, selva y océano se unen para regalarte un escenario natural único, ideal para aventureros, amantes de la naturaleza y viajeros que buscan un destino auténtico y lleno de vida. ¡Atrévete a vivirlo!",
                distance: "45 minutos desde el hostal",
                type: "Río - Ecoturismo",
                activities: ["Tubing", "Surf de remo", "Kayac", "Pesca artesanal", "Caminatas", "Observación de fauna y flora", "Relajación", "Experiencias culturales"]
            },
            4: {
                name: "Playa Costeño",
                description: "Playa Costeño, también conocida como Guachaca o Mendihuaca, es un rincón del Caribe a solo 39 km de Santa Marta donde la selva tropical, los ríos y la imponente Sierra Nevada se funden con el mar. Su atmósfera bohemia y relajada lo convierte en el refugio perfecto para desconectarte del bullicio urbano: surf, hamacas frente al mar, música al atardecer y la energía vibrante de una comunidad mochilera que celebra la vida simple. Aquí la naturaleza es protagonista y cada ola, cada puesta de sol y cada noche estrellada invitan a vivir una experiencia auténtica, libre y llena de espíritu aventurero.",
                distance: "15 minutos desde el hostal",
                type: "Playa - Surf",
                activities: ["Navegar", "Yoga en la playa", "Relajación", "Caminar", "Nadar", "Festejos sencillos"]
            }
        },
        
        // Room Details
        roomDetails: {
            features: "Características",
            capacity: "Capacidad",
            price: "Precio",
            bookNow: "Reservar Ahora",
            viewGallery: "Ver Galería",
            guests: "huéspedes",
            night: "noche",
            couple: "pareja"
        },
        
        // Form Labels
        form: {
            name: "Nombre completo",
            email: "Email",
            phone: "Teléfono (opcional)",
            subject: "Asunto",
            message: "Mensaje",
            send: "Enviar Mensaje",
            sending: "Enviando...",
            required: "Campo requerido",
            invalidEmail: "Email inválido",
            success: "¡Mensaje enviado exitosamente!",
            error: "Error al enviar el mensaje",
            selectSubject: "Selecciona un tema",
            reservation: "Reserva",
            information: "Información",
            suggestion: "Sugerencia",
            complaint: "Queja"
        },
        
        // Gallery Section
        gallery: {
            title: "Galería",
            subtitle: "Imágenes de nuestras instalaciones",
            filterAll: "Todas",
            filterExterior: "Exteriores",
            filterCommon: "Áreas Comunes",
            enlargedImage: "Imagen ampliada",
            
            // Traducciones específicas por ID
            1: {
                title: "Piscina Principal",
                description: "Amplia piscina rodeada de vegetación tropical, perfecta para relajarse"
            },
            2: {
                title: "Jardín Tropical",
                description: "Exuberante jardín con plantas tropicales nativas de la región"
            },
            3: {
                title: "Área Verde de Relajación",
                description: "Espacios verdes ideales para descansar y conectar con la naturaleza"
            },
            4: {
                title: "Vista Panorámica",
                description: "Hermosa vista panorámica de las instalaciones del hostal"
            },
            5: {
                title: "Zona Piscina y Jardín",
                description: "Perfecta combinación entre piscina y áreas verdes"
            },
            6: {
                title: "Paisaje del Hostal",
                description: "Vista general del entorno natural que rodea el hostal"
            },
            7: {
                title: "Ambiente Tropical",
                description: "Ambiente tropical único con vegetación exuberante"
            },
            8: {
                title: "Instalaciones Generales",
                description: "Vista completa de las instalaciones exteriores del hostal"
            },
            9: {
                title: "Fachada Principal",
                description: "Entrada principal del hostal con arquitectura tropical"
            },
            10: {
                title: "Zona de Descanso",
                description: "Cómoda área de descanso para socializar con otros huéspedes"
            },
            11: {
                title: "Espacio Social",
                description: "Amplio espacio social para compartir experiencias de viaje"
            },
            12: {
                title: "Área de Entretenimiento",
                description: "Zona dedicada al entretenimiento y actividades grupales"
            },
            13: {
                title: "Zona de Hamacas",
                description: "Relajantes hamacas para disfrutar del clima tropical"
            },
            14: {
                title: "Espacio de Relajación",
                description: "Tranquilo espacio diseñado para el descanso y meditación"
            },
            15: {
                title: "Área Común Principal",
                description: "Principal área común donde se reúnen los viajeros"
            },
            16: {
                title: "Salón de Estar",
                description: "Acogedor salón de estar con ambiente familiar"
            },
            17: {
                title: "Terraza Social",
                description: "Terraza abierta perfecta para socializar al aire libre"
            },
            18: {
                title: "Lobby y Recepción",
                description: "Área de recepción con ambiente cálido y acogedor"
            }
        },
        
        // Reviews Section
        reviews: {
            title: "Reseñas de Huéspedes",
            subtitle: "Lo que dicen nuestros visitantes",
            
            // Traducciones específicas por ID
            1: {
                text: "Todo estuvo perfecto, gracias Isabel."
            },
            2: {
                text: "El personal es muy amable y brinda asesoramiento si lo necesitan. El desayuno está muy bien, es variado. El patio y pileta son muy bonitos para disfrutar. La ubicación es muy buena. Los espacios son cómodos. Todos los días pasan a limpiar habitación."
            },
            3: {
                text: "Una estructura muy bonita, con habitaciones amplias y camas cómodas. Piscina muy bien cuidada. Buen desayuno. Personal muy amable y servicial. Nos guardaron las maletas mientras visitábamos el parque. Se puede llegar al parque en pocos minutos en autobús."
            },
            4: {
                text: "Un lugar con mucho encanto y muy tranquilo. Desayuno súper rico y la piscina está genial. Nos guardaron las maletas la noche que estuvimos dentro del parque Tayrona."
            },
            5: {
                text: "La piscina y el patio son muy agradables y están bien mantenidos. Está situado en medio de las dos entradas principales del parque natural de Tayrona."
            },
            6: {
                text: "¡Todo! El personal es fantástico, el entorno es hermoso. La piscina🤩, el gato, las camas cómodas, las hamacas, las opciones de almuerzo. ¡En resumen, fue perfecto!"
            }
        },
        
        // Location Section
        location: {
            title: "Nuestra Ubicación",
            subtitle: "Fácil acceso y excelente conectividad",
            address: "Troncal del Caribe km 28 vía Santa Marta Riohacha Vereda El Trompito Bajo",
            description: "Ubicados estratégicamente en la Troncal del Caribe, ofrecemos fácil acceso a las principales atracciones del Tayrona.",
            airport: {
                title: "Aeropuerto",
                description: "50 minutos en taxi"
            },
            transport: {
                title: "Transporte Público", 
                description: "1 hora desde el mercado, parada en la vereda El Trompito Bajo"
            },
            restaurants: {
                title: "Restaurantes",
                description: "Variedad gastronómica en la zona"
            },
            mapTitle: "Ubicación Casa Hostal Antawara"
        },
        
        // Contact Section
        contact: {
            title: "Contáctanos",
            subtitle: "Estamos aquí para ayudarte",
            phone: "Teléfono",
            email: "Email",
            address: "Dirección",
            hours: "Horarios de Atención",
            hoursValue: "24 horas - Recepción disponible",
            whatsapp: "WhatsApp",
            followUs: "Síguenos",
            form: {
                title: "Envíanos un mensaje",
                name: "Nombre completo",
                nameRequired: "El nombre es requerido",
                email: "Correo electrónico",
                emailRequired: "Email requerido",
                emailInvalid: "Email inválido",
                phone: "Teléfono",
                phoneRequired: "Teléfono requerido",
                subject: "Asunto",
                subjectRequired: "Selecciona un asunto",
                subjectOptions: {
                    reservation: "Reservación",
                    info: "Información general",
                    tours: "Tours y actividades",
                    services: "Servicios adicionales"
                },
                message: "Mensaje",
                messageRequired: "El mensaje es requerido",
                send: "Enviar mensaje"
            }
        },
        
        // Footer
        footer: {
            copyright: "© 2025 Casa Hostal Antawara. Todos los derechos reservados.",
            privacy: "Política de Privacidad",
            terms: "Términos y Condiciones",
            brand: {
                name: "Antawara Casa Hostal",
                tagline: "Tu hogar lejos de casa"
            },
            quickLinks: "Enlaces Rápidos",
            contact: "Contacto",
            followUs: "Síguenos",
            links: {
                rooms: "Habitaciones",
                services: "Servicios", 
                tours: "Tours",
                gallery: "Galería"
            }
        },
        
        // Common elements for dynamic content
        common: {
            bookBtn: "Reservar",
            bookTourBtn: "Reservar Tour",
            includes: "Incluye:",
            person: "persona",
            people: "personas",
            from: "desde",
            perNight: "por noche",
            perPerson: "por persona",
            perCouple: "por pareja",
            duration: "Duración",
            groupSize: "Tamaño del grupo",
            difficulty: "Dificultad",
            location: "Ubicación",
            distance: "Distancia",
            loadMore: "Descubre Más",
            loadMoreTours: "Descubre Más Tours",
            loadMorePlaces: "Descubre Más Lugares", 
            loadMorePhotos: "Descubre Más Fotos",
            viewMore: "Ver más",
            close: "Cerrar",
            // Price units
            "COP por pareja": "COP por pareja",
            "COP por familia": "COP por familia", 
            "COP por grupo": "COP por grupo",
            "COP por persona": "COP por persona",
            "COP por persona (desde)": "COP por persona (desde)",
            // Difficulty levels
            "Fácil": "Fácil",
            "Moderado": "Moderado", 
            "Difícil": "Difícil"
        },
        
        // Room features translations
        roomFeatures: {
            "Cama doble": "Double bed",
            "1 cama doble": "1 double bed", 
            "1 cama King": "1 King bed",
            "1 cama Queen": "1 Queen bed",
            "1 cama de un cuerpo desplegable": "1 single sofa bed",
            "Tocador": "Dresser",
            "Aire acondicionado": "Air conditioning",
            "Ventilador": "Fan",
            "TV": "TV",
            "WiFi": "WiFi",
            "Servicio de limpieza": "Cleaning service",
            "Baño privado": "Private bathroom",
            "Vista al jardín": "Garden view",
            "Vista a la piscina": "Pool view",
            "Vista a la montaña": "Mountain view",
            "Balcón": "Balcony",
            "Terraza": "Terrace",
            "Hamaca": "Hammock"
        },
        
        // Test page translations
        test_title: "🧪 Prueba del Botón de Idioma",
        test_instructions_title: "Instrucciones:",
        test_step1: "Haz clic en el botón de idioma abajo",
        test_step2: "Observa si el contenido cambia de idioma",
        test_step3: "Verifica que las banderas y códigos se actualicen",
        sample_content_title: "Contenido de Ejemplo:",
        sample_text: "Este es un texto de prueba que debería cambiar al inglés cuando hagas clic en el botón de idioma.",
        current_lang: "Idioma actual:",
        test_ready: "✅ Listo para probar - Haz clic en el botón de idioma",
        test_success: "✅ ¡Éxito! Idioma cambiado a"
    },
    
    en: {
        // Language info
        language: {
            code: "EN",
            flag: '<svg width="20" height="14" viewBox="0 0 20 14" class="flag-icon"><rect width="20" height="14" fill="#1E40AF"/><path d="M0 0l20 14M20 0L0 14" stroke="#EF4444" stroke-width="1.5"/><path d="M0 0l20 14M20 0L0 14" stroke="white" stroke-width="1"/><path d="M10 0v14M0 7h20" stroke="#EF4444" stroke-width="2.5"/><path d="M10 0v14M0 7h20" stroke="white" stroke-width="1.5"/></svg>',
            name: "English"
        },
        
        // Navigation
        nav: {
            home: "Home",
            rooms: "Rooms",
            services: "Services",
            tours: "Tours", 
            places: "Places",
            gallery: "Gallery",
            reviews: "Reviews",
            location: "Location",
            contact: "Contact"
        },
        
        // Hero Section
        hero: {
            title: "Welcome to Casa Hostal Antawara",
            subtitle: "Your home away from home in Tayrona",
            description: "Experience the authentic charm of Colombian Caribbean coast. Located just 1 km from Tayrona National Park entrance, we offer comfortable accommodations with personalized service for nature lovers and adventure seekers.",
            cta1: "View Rooms",
            cta2: "Contact Us"
        },
        
        // About Section
        about: {
            title: "About Antawara",
            subtitle: "Learn about our history and philosophy",
            historyTitle: "Our History",
            historyText: "Antawara Casa Hostal was born with the vision of creating a welcoming space where travelers can feel at home. With years of experience in hospitality, we are dedicated to providing personalized and quality service.",
            missionTitle: "Our Mission",
            missionText: "To provide comfortable, safe and accessible accommodation, creating memorable experiences for our guests while promoting local and sustainable tourism.",
            feature1Title: "Family Atmosphere",
            feature1Text: "Personalized service and welcoming environment",
            feature2Title: "Privileged Location",
            feature2Text: "Close to Tayrona Park",
            feature3Title: "Sustainable Tourism",
            feature3Text: "Committed to the environment",
            img1Alt: "Antawara Casa Hostel - Main view",
            img2Alt: "Antawara - Main pool",
            img3Alt: "Antawara - Social area",
            img4Alt: "Antawara - Tropical garden",
            img5Alt: "Antawara - Hammock area",
            img6Alt: "Antawara - Pool and garden area"
        },
        
        // Rooms Section
        rooms: {
            title: "Our Accommodations",
            subtitle: "Comfortable rooms designed for your Tayrona adventure",
            private: {
                name: "Ave del Paraíso Room",
                description: "Private room with AC, private bathroom, and garden view. Perfect for couples seeking comfort and tranquility.",
                price: "Starting from COP $150,000/night"
            },
            shared: {
                name: "Cayena Room", 
                description: "Charming double room inspired by the vibrant hibiscus flower. It offers a warm and inviting atmosphere with stunning views of the tropical garden and refreshing pool - perfect for a romantic getaway.",
                price: "Starting from COP $80,000/night"
            },
            family: {
                name: "Girasol Family Room",
                description: "Spacious family room accommodating up to 4 guests with private bathroom and terrace access.",
                price: "Starting from COP $200,000/night"
            },
            
            // Specific rooms
            1: {
                name: "Double Room - Girasol",
                description: "Cozy double room with panoramic views of the garden and pool. Perfect for couples seeking comfort and tranquility, featuring all modern amenities including air conditioning and a relaxing tropical atmosphere."
            },
            2: {
                name: "Double Room - Cayena", 
                description: "Charming double room inspired by the vibrant hibiscus flower. It offers a warm and inviting atmosphere with stunning views of the tropical garden and refreshing pool - perfect for a romantic getaway."
            },
            3: {
                name: "Family Room - Heliconia",
                description: "Spacious family room with a private balcony and hammock to enjoy the tropical atmosphere. Features both a double bed and a king-size bed, making it perfect for families seeking comfort, space, and beautiful views of the garden and pool."
            },
            4: {
                name: "Triple Room - Orquídea",
                description: "Elegant triple room with a balcony, hammock, and privileged views of the garden, pool, and mountains. Equipped with a queen bed and a fold-out single bed, it offers both flexibility and comfort for small groups or families."
            },
            5: {
                name: "Triple Room - Ave del Paraíso",
                description: "The most exclusive triple room featuring a private terrace, balcony, and hammock. Enjoy panoramic views of the garden, pool, and mountains from your own outdoor space. Perfect for those seeking privacy and a close connection with nature."
            }
        },
        
        // Services Section
        services: {
            title: "Our Services",
            subtitle: "Everything you need for an amazing Tayrona experience",
            wifi: {
                name: "Free WiFi",
                description: "High-speed internet throughout the property"
            },
            breakfast: {
                name: "Colombian Breakfast",
                description: "Traditional breakfast with fresh tropical fruits"
            },
            laundry: {
                name: "Laundry Service",
                description: "Washing and drying service available"
            },
            tours: {
                name: "Tayrona Tours",
                description: "Guided excursions to Tayrona Park and nearby attractions"
            },
            
            // Specific services by ID
            1: {
                name: "Free WiFi",
                description: "High-speed internet available throughout the hostel."
            },
            2: {
                name: "Breakfast Included", 
                description: "Complete continental breakfast included in all our rates."
            },
            3: {
                name: "24h Reception",
                description: "Staff available 24 hours to assist you with whatever you need."
            },
            4: {
                name: "Laundry Service",
                description: "Laundry service available for your convenience."
            },
            5: {
                name: "Common Area",
                description: "Shared spaces perfect for socializing and relaxing."
            },
            6: {
                name: "Free Luggage Storage",
                description: "We store your luggage at no additional cost before check-in and after check-out."
            }
        },
        
        // Tours Section
        tours: {
            title: "Tours & Activities",
            subtitle: "Discover the magic of Tayrona and the Caribbean coast",
            city: {
                name: "Tayrona National Park",
                description: "Full day guided tour through pristine beaches, crystal clear waters and tropical rainforest trails."
            },
            nature: {
                name: "Cabo San Juan Trek", 
                description: "Hiking adventure to the most beautiful beach in Colombia with spectacular sunset views."
            },
            culture: {
                name: "Indigenous Community Visit",
                description: "Cultural immersion with the Kogui people, learning about their ancestral traditions and worldview."
            },
            
            // Specific tours by ID
            1: {
                name: "Horseback Riding Los Naranjos Beach",
                description: "Enjoy a 1-hour horseback ride along the Tayrona Forest and Piedras River, surrounded by fauna, flora and healing plants. Experience the thrill of riding on the beach and relax with 2 hours of river and sea at Los Naranjos Beach. Complete 4-hour experience, with daily departures from 8:00 am to 12:00 pm and 3:00 pm to 6:00 pm.",
                duration: "4 hours",
                difficulty: "Easy",
                groupSize: "2-10 people",
                includes: ["Travel insurance", "Horse", "Guide", "Transportation (if staying near Tayrona Park)"]
            },
            2: {
                name: "Taykú Village Visit",
                description: "Live a unique experience with a 1.5-hour excursion to an authentic Kogui village, located at 450 meters above sea level. Enjoy breathtaking landscapes, explore archaeological ruins, discover traditional houses built with natural materials and interact with the community. The experience includes a spiritual cleansing at their sacred site. Daily departures at 8:00 and 9:00 am.",
                duration: "7 hours",
                difficulty: "Moderate",
                groupSize: "2-20 people",
                includes: ["Travel insurance", "Traditional lunch", "Native guide", "Fruits", "Kogui village entrance", "Transportation (if staying near Tayrona Park)"]
            },
            3: {
                name: "Kogui Community Visit - Duanamake",
                description: "2-hour hike through forests and mountains, learning about natural medicine and visiting the Kogui village to see their homes, bathe in the stream and meet with the mamo. Ends with lunch of fish or seafood on the beach. Culture, nature and sea in one day!",
                duration: "7 hours",
                difficulty: "Moderate",
                groupSize: "2-20 people",
                includes: ["Travel insurance", "Traditional lunch", "Native guide", "Fruits", "Kogui village entrance", "Transportation (if staying near Tayrona Park)"]
            },
            4: {
                name: "Cacao Tour",
                description: "Cacao De La Sierra offers a 2 to 3-hour tour at La Fortuna Farm, near Tayrona Park. Live an immersive experience in the world of cacao: tour the crops, learn its process from origin to final product and participate in interactive activities such as harvesting and artisanal elaboration of derivatives.",
                duration: "2-3 hours",
                difficulty: "Easy",
                groupSize: "2-15 people",
                includes: ["Expert local guide", "Refreshments", "Special souvenir", "Medical assistance insurance", "Exclusive artisanal chocolate tasting"]
            }
        },
        
        // Places Section
        places: {
            title: "Places of Interest",
            subtitle: "Discover the most beautiful places near Tayrona",
            caboSanJuan: {
                name: "Cabo San Juan",
                description: "Tayrona's most iconic beach with crystal clear waters and spectacular sunsets."
            },
            playaCosteno: {
                name: "Playa Costeño",
                description: "Virgin beach perfect for relaxing and enjoying the Caribbean nature."
            },
            rioDonDiego: {
                name: "Don Diego River",
                description: "Tropical river where you can go tubing and enjoy the tropical rainforest."
            },
            palomino: {
                name: "Palomino",
                description: "Bohemian coastal town with pristine beaches and a relaxed atmosphere."
            },
            
            // Specific places by ID
            1: {
                name: "Cabo San Juan del Guía",
                description: "Discover Cabo San Juan del Guía, the most iconic gem of Tayrona National Natural Park in Santa Marta. Here, the tropical jungle meets the Caribbean Sea in a one-of-a-kind spectacle: golden sands, waters shifting from deep blue to emerald green, and the famous rock formation that steals the spotlight in every photo. Enjoy jungle trails, breathtaking viewpoints, and perfect spots to relax, camp, and connect with nature. Live the experience everyone dreams of—but only you can make real: your next adventure awaits at Cabo San Juan!",
                distance: "2 and a half hours from the hostel",
                type: "Beach - National Park",
                activities: ["Ecological hiking", "Swimming", "Nature", "Snorkeling", "Photography", "Camping", "Relaxation"]
            },
            2: {
                name: "Palomino",
                description: "Palomino, in Colombia’s magical Guajira region, is a paradise where the river meets the Caribbean Sea under the majestic gaze of the Sierra Nevada. Its soft-sand beaches, framed by palm trees and tropical forest, create the perfect setting to disconnect from the noise and surrender to tranquility. Picture hammocks by the sea, the soothing sound of the river and waves, simple yet authentic local flavors, and a bohemian vibe that draws travelers from around the world. Palomino is more than a destination - it’s a lifestyle that invites you to relax, explore, and experience the very essence of the Caribbean at its finest.",
                distance: "1 hour from the hostel",
                type: "Beach - Bohemian Town",
                activities: ["Tubing", "Surfing", "Hiking", "Tours", "Bird watching", "Relaxation"]
            },
            3: {
                name: "Don Diego River",
                description: "The Don Diego River, in the heart of Magdalena, offers an ecotourism experience that connects you with the magic of the Sierra Nevada—from its snow-capped peaks to the Caribbean Sea. Paddle or float down its crystal-clear waters surrounded by lush jungle, listen to the songs of exotic birds, and discover untouched beaches where river and sea meet in perfect harmony. Here, mountains, jungle, and ocean come together to create a truly unique natural setting - ideal for adventurers, nature lovers, and travelers in search of an authentic, vibrant destination. Dare to live it!",
                distance: "45 minutes from the hostel",
                type: "River - Ecotourism",
                activities: ["Tubing", "Stand-up paddling", "Kayaking", "Artisanal fishing", "Hiking", "Wildlife and flora observation", "Relaxation", "Cultural experiences"]
            },
            4: {
                name: "Playa Costeño",
                description: "Costeño Beach, also known as Guachaca or Mendihuaca, is a Caribbean hideaway just 39 km from Santa Marta where the tropical jungle, rivers, and the majestic Sierra Nevada merge with the sea. Its bohemian, laid-back vibe makes it the perfect retreat to disconnect from city noise: surfing, hammocks by the sea, sunset music, and the vibrant energy of a backpacker community that celebrates the simple life. Here, nature takes center stage, and every wave, every sunset, and every starlit night invite you to embrace an authentic experience - free-spirited and full of adventure.",
                distance: "15 minutes from the hostel",
                type: "Beach - Surf",
                activities: ["Surfing", "Beach yoga", "Relaxation", "Walking", "Swimming", "Simple celebrations"]
            }
        },
        
        // Room Details
        roomDetails: {
            features: "Features",
            capacity: "Capacity",
            price: "Price",
            bookNow: "Book Now",
            viewGallery: "View Gallery",
            guests: "guests",
            night: "night",
            couple: "couple"
        },
        
        // Form Labels
        form: {
            name: "Full name",
            email: "Email",
            phone: "Phone (optional)",
            subject: "Subject",
            message: "Message",
            send: "Send Message",
            sending: "Sending...",
            required: "Required field",
            invalidEmail: "Invalid email",
            success: "Message sent successfully!",
            error: "Error sending message",
            selectSubject: "Select a subject",
            reservation: "Reservation",
            information: "Information",
            suggestion: "Suggestion",
            complaint: "Complaint"
        },
        
        // Gallery Section
        gallery: {
            title: "Gallery",
            subtitle: "Images of our facilities",
            filterAll: "All",
            filterExterior: "Exterior",
            filterCommon: "Common Areas",
            enlargedImage: "Enlarged image",
            
            // Specific translations by ID
            1: {
                title: "Main Pool",
                description: "Large pool surrounded by tropical vegetation, perfect for relaxing"
            },
            2: {
                title: "Tropical Garden",
                description: "Lush garden with native tropical plants from the region"
            },
            3: {
                title: "Green Relaxation Area",
                description: "Green spaces ideal for resting and connecting with nature"
            },
            4: {
                title: "Panoramic View",
                description: "Beautiful panoramic view of the hostel facilities"
            },
            5: {
                title: "Pool and Garden Area",
                description: "Perfect combination between pool and green areas"
            },
            6: {
                title: "Hostel Landscape",
                description: "General view of the natural environment surrounding the hostel"
            },
            7: {
                title: "Tropical Atmosphere",
                description: "Unique tropical atmosphere with lush vegetation"
            },
            8: {
                title: "General Facilities",
                description: "Complete view of the hostel's exterior facilities"
            },
            9: {
                title: "Main Facade",
                description: "Main entrance of the hostel with tropical architecture"
            },
            10: {
                title: "Rest Area",
                description: "Comfortable rest area for socializing with other guests"
            },
            11: {
                title: "Social Space",
                description: "Large social space for sharing travel experiences"
            },
            12: {
                title: "Entertainment Area",
                description: "Area dedicated to entertainment and group activities"
            },
            13: {
                title: "Hammock Area",
                description: "Relaxing hammocks to enjoy the tropical climate"
            },
            14: {
                title: "Relaxation Space",
                description: "Quiet space designed for rest and meditation"
            },
            15: {
                title: "Main Common Area",
                description: "Main common area where travelers gather"
            },
            16: {
                title: "Living Room",
                description: "Cozy living room with family atmosphere"
            },
            17: {
                title: "Social Terrace",
                description: "Open terrace perfect for outdoor socializing"
            },
            18: {
                title: "Lobby and Reception",
                description: "Reception area with warm and welcoming atmosphere"
            }
        },
        
        // Reviews Section
        reviews: {
            title: "Guest Reviews",
            subtitle: "What our visitors say",
            
            // Specific translations by ID
            1: {
                text: "Everything was perfect, thank you Isabel."
            },
            2: {
                text: "The staff is very friendly and provides advice if you need it. The breakfast is very good, it's varied. The patio and pool are very beautiful to enjoy. The location is very good. The spaces are comfortable. They come to clean the room every day."
            },
            3: {
                text: "A very beautiful structure, with spacious rooms and comfortable beds. Very well-maintained pool. Good breakfast. Very friendly and helpful staff. They kept our luggage while we visited the park. You can reach the park in a few minutes by bus."
            },
            4: {
                text: "A place with a lot of charm and very quiet. Super delicious breakfast and the pool is great. They kept our luggage the night we were inside Tayrona park."
            },
            5: {
                text: "The pool and patio are very nice and well maintained. It is located between the two main entrances to Tayrona natural park."
            },
            6: {
                text: "Everything! The staff is fantastic, the environment is beautiful. The pool🤩, the cat, the comfortable beds, the hammocks, the lunch options. In short, it was perfect!"
            }
        },
        
        // Location Section
        location: {
            title: "Our Location",
            subtitle: "Easy access and excellent connectivity",
            address: "Troncal del Caribe km 28 vía Santa Marta Riohacha Vereda El Trompito Bajo",
            description: "Strategically located on the Troncal del Caribe, we offer easy access to the main Tayrona attractions.",
            airport: {
                title: "Airport",
                description: "50 minutes by taxi"
            },
            transport: {
                title: "Public Transport",
                description: "1 hour from the market, stop at El Trompito Bajo village"
            },
            restaurants: {
                title: "Restaurants",
                description: "Gastronomic variety in the area"
            },
            mapTitle: "Casa Hostal Antawara Location"
        },
        
        // Contact Section
        contact: {
            title: "Contact Us",
            subtitle: "We're here to make your Tayrona experience unforgettable",
            phone: "Phone",
            email: "Email", 
            address: "Address",
            hours: "Reception Hours",
            hoursValue: "24/7 - Always available for our guests",
            whatsapp: "WhatsApp",
            followUs: "Follow Us",
            form: {
                title: "Send us a message",
                name: "Full name",
                nameRequired: "Name is required",
                email: "Email address",
                emailRequired: "Email is required",
                emailInvalid: "Invalid email",
                phone: "Phone number",
                phoneRequired: "Phone is required",
                subject: "Subject",
                subjectRequired: "Please select a subject",
                subjectOptions: {
                    reservation: "Reservation",
                    info: "General information",
                    tours: "Tours and activities",
                    services: "Additional services"
                },
                message: "Message",
                messageRequired: "Message is required",
                send: "Send message"
            }
        },
        
        // Footer
        footer: {
            copyright: "© 2025 Casa Hostal Antawara. All rights reserved.",
            privacy: "Privacy Policy", 
            terms: "Terms and Conditions",
            brand: {
                name: "Antawara Casa Hostal",
                tagline: "Your home away from home"
            },
            quickLinks: "Quick Links",
            contact: "Contact",
            followUs: "Follow Us",
            links: {
                rooms: "Rooms",
                services: "Services",
                tours: "Tours", 
                gallery: "Gallery"
            }
        },
        
        // Common elements for dynamic content
        common: {
            bookBtn: "Book Now",
            bookTourBtn: "Book Tour",
            includes: "Includes:",
            person: "person",
            people: "people",
            from: "from",
            perNight: "per night",
            perPerson: "per person",
            perCouple: "per couple",
            duration: "Duration",
            groupSize: "Group Size",
            difficulty: "Difficulty",
            location: "Location",
            distance: "Distance",
            loadMore: "Discover More",
            loadMoreTours: "Discover More Tours",
            loadMorePlaces: "Discover More Places",
            loadMorePhotos: "Discover More Photos",
            viewMore: "View More",
            close: "Close",
            // Price units
            "COP por pareja": "COP per couple",
            "COP por familia": "COP per family", 
            "COP por grupo": "COP per group",
            "COP por persona": "COP per person",
            "COP por persona (desde)": "COP per person (from)",
            // Difficulty levels
            "Fácil": "Easy",
            "Moderado": "Moderate", 
            "Difícil": "Difficult"
        },
        
        // Test page translations
        test_title: "🧪 Language Button Test",
        test_instructions_title: "Instructions:",
        test_step1: "Click the language button below",
        test_step2: "Watch if the content changes language",
        test_step3: "Verify that flags and codes are updated",
        sample_content_title: "Sample Content:",
        sample_text: "This is test text that should change to English when you click the language button.",
        current_lang: "Current language:",
        test_ready: "✅ Ready to test - Click the language button",
        test_success: "✅ Success! Language changed to"
    }
};

// Hacer disponible globalmente
window.translations = translations;
