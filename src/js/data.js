// Data for the website
console.log('✅ data.js loaded');
const appData = {
    // Rooms data
    rooms: [
        {
            id: 1,
            name: "Habitación Doble - Girasol",
            description: "Acogedora habitación doble con vista panorámica al jardín y la piscina. Perfecta para parejas que buscan confort y tranquilidad, con todas las comodidades modernas incluyendo aire acondicionado y un ambiente tropical relajante.",
            images: [
                "src/assets/images/hostal/habitaciones/girasol-01.jpg",
                "src/assets/images/hostal/habitaciones/girasol-02.jpg",
                "src/assets/images/hostal/habitaciones/girasol-03.jpg",
                "src/assets/images/hostal/habitaciones/girasol-04.jpg",
                "src/assets/images/hostal/habitaciones/girasol-05.jpg",
                "src/assets/images/hostal/habitaciones/girasol-06.jpg",
                "src/assets/images/hostal/habitaciones/girasol-07.jpg",
                "src/assets/images/hostal/habitaciones/girasol-baño-01.jpg",
                "src/assets/images/hostal/habitaciones/girasol-baño-02.jpg",
                "src/assets/images/hostal/habitaciones/girasol-baño-03.jpg",
                "src/assets/images/hostal/habitaciones/girasol-baño-04.jpg",
                "src/assets/images/hostal/habitaciones/girasol-entrada.jpg"
            ],
            price: 140000,
            priceUnit: "COP por pareja",
            features: ["Cama doble", "Tocador", "Aire acondicionado", "Ventilador", "TV", "WiFi", "Servicio de limpieza", "Baño privado", "Vista al jardín", "Vista a la piscina"],
            capacity: 2
        },
        {
            id: 2,
            name: "Habitación Doble - Cayena",
            description: "Encantadora habitación doble inspirada en la vibrante flor de cayena. Ofrece un ambiente cálido y acogedor con vistas espectaculares al jardín tropical y la refrescante piscina, ideal para una escapada romántica.",
            images: [
                "src/assets/images/hostal/habitaciones/cayena-01.jpg",
                "src/assets/images/hostal/habitaciones/cayena-02.jpg",
                "src/assets/images/hostal/habitaciones/cayena-03.jpg",
                "src/assets/images/hostal/habitaciones/cayena-04.jpg",
                "src/assets/images/hostal/habitaciones/cayena-05.jpg",
                "src/assets/images/hostal/habitaciones/cayena-06.jpg",
                "src/assets/images/hostal/habitaciones/cayena-07.jpg",
                "src/assets/images/hostal/habitaciones/cayena-08.jpg",
                "src/assets/images/hostal/habitaciones/cayena-baño-01.jpg",
                "src/assets/images/hostal/habitaciones/cayena-baño-02.jpg",
                "src/assets/images/hostal/habitaciones/cayena-baño-03.jpg",
                "src/assets/images/hostal/habitaciones/cayena-baño-04.jpg",
                "src/assets/images/hostal/habitaciones/cayena-baño-05.jpg",
                "src/assets/images/hostal/habitaciones/cayena-baño-06.jpg",
                "src/assets/images/hostal/habitaciones/cayena-entrada.jpg"
            ],
            price: 140000,
            priceUnit: "COP por pareja",
            features: ["Cama doble", "Tocador", "Aire acondicionado", "Ventilador", "TV", "WiFi", "Servicio de limpieza", "Baño privado", "Vista al jardín", "Vista a la piscina"],
            capacity: 2
        },
        {
            id: 3,
            name: "Habitación Familiar - Heliconia",
            description: "Espaciosa habitación familiar con balcón privado y hamaca para disfrutar del ambiente tropical. Combina una cama doble y una King size, perfecta para familias que desean comodidad, espacio y hermosas vistas al jardín y la piscina.",
            images: [
                "src/assets/images/hostal/habitaciones/heliconia-01.jpg",
                "src/assets/images/hostal/habitaciones/heliconia-02.jpg",
                "src/assets/images/hostal/habitaciones/heliconia-03.jpg",
                "src/assets/images/hostal/habitaciones/heliconia-04.jpg",
                "src/assets/images/hostal/habitaciones/heliconia-05.jpg",
                "src/assets/images/hostal/habitaciones/heliconia-06.jpg",
                "src/assets/images/hostal/habitaciones/heliconia-07.jpg",
                "src/assets/images/hostal/habitaciones/heliconia-08.jpg",
                "src/assets/images/hostal/habitaciones/heliconia-09.jpg",
                "src/assets/images/hostal/habitaciones/heliconia-balcon-01.jpg",
                "src/assets/images/hostal/habitaciones/heliconia-balcon-02.jpg",
                "src/assets/images/hostal/habitaciones/heliconia-balcon-03.jpg",
                "src/assets/images/hostal/habitaciones/heliconia-balcon-04.jpg",
                "src/assets/images/hostal/habitaciones/heliconia-balcon-05.jpg",
                "src/assets/images/hostal/habitaciones/heliconia-baño-01.jpg",
                "src/assets/images/hostal/habitaciones/heliconia-baño-02.jpg",
                "src/assets/images/hostal/habitaciones/heliconia-baño-03.jpg",
                "src/assets/images/hostal/habitaciones/heliconia-baño-04.jpg",
                "src/assets/images/hostal/habitaciones/heliconia-baño-05.jpg",
                "src/assets/images/hostal/habitaciones/heliconia-baño-06.jpg",
                "src/assets/images/hostal/habitaciones/heliconia-entrada.jpg"
            ],
            price: 220000,
            priceUnit: "COP por familia",
            features: ["1 cama doble", "1 cama King", "Tocador", "Aire acondicionado", "Ventilador", "TV", "WiFi", "Servicio de limpieza", "Baño privado", "Balcón", "Hamaca", "Vista al jardín", "Vista a la piscina"],
            capacity: 4
        },
        {
            id: 4,
            name: "Habitación Triple - Orquídea",
            description: "Elegante habitación triple con balcón, hamaca y vistas privilegiadas al jardín, piscina y montañas. Cuenta con una cama Queen y una cama doble desplegable, ofreciendo flexibilidad y confort para grupos pequeños o familias.",
            images: [
                "src/assets/images/hostal/habitaciones/orquidea-01.jpg",
                "src/assets/images/hostal/habitaciones/orquidea-02.jpg",
                "src/assets/images/hostal/habitaciones/orquidea-03.jpg",
                "src/assets/images/hostal/habitaciones/orquidea-04.jpg",
                "src/assets/images/hostal/habitaciones/orquidea-05.jpg",
                "src/assets/images/hostal/habitaciones/orquidea-06.jpg",
                "src/assets/images/hostal/habitaciones/orquidea-07.jpg",
                "src/assets/images/hostal/habitaciones/orquidea-08.jpg",
                "src/assets/images/hostal/habitaciones/orquidea-09.jpg",
                "src/assets/images/hostal/habitaciones/orquidea-10.jpg",
                "src/assets/images/hostal/habitaciones/orquidea-11.jpg",
                "src/assets/images/hostal/habitaciones/orquidea-12.jpg",
                "src/assets/images/hostal/habitaciones/orquidea-13.jpg",
                "src/assets/images/hostal/habitaciones/orquidea-14.jpg",
                "src/assets/images/hostal/habitaciones/orquidea-15.jpg",
                "src/assets/images/hostal/habitaciones/orquidea-16.jpg",
                "src/assets/images/hostal/habitaciones/orquidea-balcon-01.jpg",
                "src/assets/images/hostal/habitaciones/orquidea-balcon-02.jpg",
                "src/assets/images/hostal/habitaciones/orquidea-balcon-03.jpg",
                "src/assets/images/hostal/habitaciones/orquidea-baño-01.jpg",
                "src/assets/images/hostal/habitaciones/orquidea-baño-02.jpg",
                "src/assets/images/hostal/habitaciones/orquidea-baño-03.jpg",
                "src/assets/images/hostal/habitaciones/orquidea-baño-04.jpg",
                "src/assets/images/hostal/habitaciones/orquidea-baño-05.jpg",
                "src/assets/images/hostal/habitaciones/orquidea-entrada.jpg"
            ],
            price: 180000,
            priceUnit: "COP por grupo",
            features: ["1 cama Queen", "1 cama de un cuerpo desplegable", "Tocador", "Aire acondicionado", "Ventilador", "TV", "WiFi", "Servicio de limpieza", "Baño privado", "Balcón", "Hamaca", "Vista al jardín", "Vista a la piscina", "Vista a la montaña"],
            capacity: 3
        },
        {
            id: 5,
            name: "Habitación Triple - Ave del Paraíso",
            description: "La habitación triple más exclusiva con terraza privada, balcón y hamaca. Disfruta de vistas panorámicas al jardín, piscina y montañas desde tu propio espacio exterior. Perfecta para quienes buscan privacidad y conexión con la naturaleza.",
            images: [
                "src/assets/images/hostal/habitaciones/ave-01.jpg",
                "src/assets/images/hostal/habitaciones/ave-02.jpg",
                "src/assets/images/hostal/habitaciones/ave-03.jpg",
                "src/assets/images/hostal/habitaciones/ave-04.jpg",
                "src/assets/images/hostal/habitaciones/ave-05.jpg",
                "src/assets/images/hostal/habitaciones/ave-06.jpg",
                "src/assets/images/hostal/habitaciones/ave-baño-01.jpg",
                "src/assets/images/hostal/habitaciones/ave-baño-02.jpg",
                "src/assets/images/hostal/habitaciones/ave-baño-03.jpg",
                "src/assets/images/hostal/habitaciones/ave-terraza-01.jpg",
                "src/assets/images/hostal/habitaciones/ave-terraza-02.jpg",
                "src/assets/images/hostal/habitaciones/ave-terraza-03.jpg",
                "src/assets/images/hostal/habitaciones/ave-entrada-01.jpg",
                "src/assets/images/hostal/habitaciones/ave-entrada-02.jpg",
                "src/assets/images/hostal/habitaciones/ave-entrada-03.jpg",
                "src/assets/images/hostal/habitaciones/ave-entrada-04.jpg",
                "src/assets/images/hostal/habitaciones/ave-entrada-05.jpg",
                "src/assets/images/hostal/habitaciones/ave-entrada-06.jpg",
                "src/assets/images/hostal/habitaciones/ave-entrada-07.jpg"
            ],
            price: 180000,
            priceUnit: "COP por grupo",
            features: ["1 cama Queen", "1 cama de un cuerpo desplegable", "Tocador", "Aire acondicionado", "Ventilador", "TV", "WiFi", "Servicio de limpieza", "Baño privado", "Terraza", "Balcón", "Hamaca", "Vista al jardín", "Vista a la piscina", "Vista a la montaña"],
            capacity: 3
        }
    ],

    // Services data
    services: [
        {
            id: 1,
            name: "WiFi Gratuito",
            description: "Internet de alta velocidad disponible en todas las áreas del hostal.",
            icon: "fas fa-wifi",
            category: "tecnologia"
        },
        {
            id: 2,
            name: "Desayuno Incluido",
            description: "Desayuno continental completo incluido en todas nuestras tarifas.",
            icon: "fas fa-coffee",
            category: "alimentacion"
        },
        {
            id: 3,
            name: "Recepción 24h",
            description: "Personal disponible las 24 horas para asistirte en lo que necesites.",
            icon: "fas fa-clock",
            category: "servicio"
        },
        {
            id: 4,
            name: "Lavandería",
            description: "Servicio de lavandería disponible para tu comodidad.",
            icon: "fas fa-tshirt",
            category: "servicio"
        },
        {
            id: 5,
            name: "Área Común",
            description: "Espacios compartidos perfectos para socializar y relajarse.",
            icon: "fas fa-users",
            category: "espacios"
        },
        {
            id: 6,
            name: "Equipaje Gratuito",
            description: "Guardamos tu equipaje sin costo adicional antes del check-in y después del check-out.",
            icon: "fas fa-suitcase",
            category: "servicio"
        }
    ],

    // Tours data
    tours: [
        {
            id: 1,
            name: "Cabalgata Playa Los Naranjos",
            description: "Disfruta de una cabalgata de 1 hora bordeando el Bosque Tayrona y el río Piedras, rodeado de fauna, flora y plantas curativas. Vive la emoción de cabalgar en la playa y relájate con 2 horas de río y mar en Playa Los Naranjos. Experiencia completa de 4 horas, con salidas diarias de 8:00 am a 12:00 pm y de 3:00 pm a 6:00 pm.",
            images: [
                "src/assets/images/tours/cabalgata-naranjos/cabalgata-01.jpg",
                "src/assets/images/tours/cabalgata-naranjos/cabalgata-02.jpg",
                "src/assets/images/tours/cabalgata-naranjos/cabalgata-03.jpg",
                "src/assets/images/tours/cabalgata-naranjos/cabalgata-04.jpg",
                "src/assets/images/tours/cabalgata-naranjos/cabalgata-05.jpg",
                "src/assets/images/tours/cabalgata-naranjos/cabalgata-06.jpg",
                "src/assets/images/tours/cabalgata-naranjos/cabalgata-07.jpg",
                "src/assets/images/tours/cabalgata-naranjos/cabalgata-08.jpg",
                "src/assets/images/tours/cabalgata-naranjos/cabalgata-09.jpg",
                "src/assets/images/tours/cabalgata-naranjos/cabalgata-10.jpg",
                "src/assets/images/tours/cabalgata-naranjos/cabalgata-11.jpg"
            ],
            duration: "4 horas",
            price: 320000,
            priceUnit: "COP por persona",
            includes: ["Seguro de viajes", "Caballo", "Guía", "Transporte (si se hospeda cerca al Parque Tayrona)"],
            difficulty: "Fácil",
            groupSize: "2-10 personas"
        },
        {
            id: 2,
            name: "Visita Pueblito Taykú",
            description: "Vive una experiencia única con una excursión de 1.5 horas hasta un auténtico poblado Kogui, ubicado a 450 msnm. Disfruta de impresionantes paisajes, explora ruinas arqueológicas, conoce casas tradicionales construidas con materiales naturales e interactúa con la comunidad. La experiencia incluye una limpieza espiritual en su sitio sagrado. Salidas diarias a las 8:00 y 9:00 am.",
            images: [
                "src/assets/images/tours/pueblito-tayku/tayku-01.jpg",
                "src/assets/images/tours/pueblito-tayku/tayku-02.jpg",
                "src/assets/images/tours/pueblito-tayku/tayku-03.jpg",
                "src/assets/images/tours/pueblito-tayku/tayku-04.jpg",
                "src/assets/images/tours/pueblito-tayku/tayku-05.jpg",
                "src/assets/images/tours/pueblito-tayku/tayku-06.jpg",
                "src/assets/images/tours/pueblito-tayku/tayku-07.jpg",
                "src/assets/images/tours/pueblito-tayku/tayku-08.jpg",
                "src/assets/images/tours/pueblito-tayku/tayku-09.jpg",
                "src/assets/images/tours/pueblito-tayku/tayku-10.jpg"
            ],
            duration: "7 horas",
            price: 460000,
            priceUnit: "COP por persona",
            includes: ["Seguro de viajes", "Almuerzo típico", "Guía nativo", "Frutas", "Entrada al pueblito Kogui", "Transporte (si se hospeda cerca al Parque Tayrona)"],
            difficulty: "Moderado",
            groupSize: "2-20 personas"
        },
        {
            id: 3,
            name: "Visita Comunidad Kogui - Duanamake",
            description: "Caminata de 2 horas por bosques y montañas, aprendizaje de medicina natural y visita al pueblo Kogui para conocer sus viviendas, bañarte en la quebrada y reunirte con el mamo. Finaliza con almuerzo de pescados o mariscos en la playa. ¡Cultura, naturaleza y mar en un solo día!",
            images: [
                "src/assets/images/tours/comunidad-duanamake/duanamake-01.jpg",
                "src/assets/images/tours/comunidad-duanamake/duanamake-02.jpg",
                "src/assets/images/tours/comunidad-duanamake/duanamake-03.jpg",
                "src/assets/images/tours/comunidad-duanamake/duanamake-04.jpg",
                "src/assets/images/tours/comunidad-duanamake/duanamake-05.jpg",
                "src/assets/images/tours/comunidad-duanamake/duanamake-06.jpg",
                "src/assets/images/tours/comunidad-duanamake/duanamake-07.jpg",
                "src/assets/images/tours/comunidad-duanamake/duanamake-08.jpg",
                "src/assets/images/tours/comunidad-duanamake/duanamake-10.jpg",
                "src/assets/images/tours/comunidad-duanamake/duanamake-11.jpg",
                "src/assets/images/tours/comunidad-duanamake/duanamake-12.jpg",
                "src/assets/images/tours/comunidad-duanamake/duanamake-13.jpg",
                "src/assets/images/tours/comunidad-duanamake/duanamake-14.jpg",
                "src/assets/images/tours/comunidad-duanamake/duanamake-15.jpg",
                "src/assets/images/tours/comunidad-duanamake/duanamake-16.jpg",
                "src/assets/images/tours/comunidad-duanamake/duanamake-17.jpg",
                "src/assets/images/tours/comunidad-duanamake/duanamake-18.jpg"
            ],
            duration: "7 horas",
            price: 420000,
            priceUnit: "COP por persona",
            includes: ["Seguro de viajes", "Almuerzo típico", "Guía nativo", "Frutas", "Entrada al pueblito Kogui", "Transporte (si se hospeda cerca al Parque Tayrona)"],
            difficulty: "Moderado",
            groupSize: "2-20 personas"
        },
        {
            id: 4,
            name: "Tour del Cacao",
            description: "Cacao De La Sierra ofrece un tour de 2 a 3 horas en la Finca La Fortuna, cerca del Parque Tayrona. Vive una experiencia inmersiva en el mundo del cacao: recorre los cultivos, aprende su proceso desde el origen hasta el producto final y participa en actividades interactivas como recolección y elaboración artesanal de derivados.",
            images: [
                "src/assets/images/tours/tour-cacao/cacao-01.jpg",
                "src/assets/images/tours/tour-cacao/cacao-02.jpg",
                "src/assets/images/tours/tour-cacao/cacao-03.jpg"
            ],
            duration: "2-3 horas",
            price: 80000,
            priceUnit: "COP por persona",
            includes: ["Guía local experto", "Refrigerio", "Souvenir especial", "Seguro de asistencia médica", "Degustación exclusiva de chocolate artesanal"],
            difficulty: "Fácil",
            groupSize: "2-15 personas"
        }
    ],

    // Places data - Lugares de interés cerca de Antawara Casa Hostal
    places: [
        {
            id: 1,
            name: "Cabo San Juan del Guía",
            description: "Descubre Cabo San Juan del Guía, la joya más icónica del Parque Nacional Natural Tayrona en Santa Marta. Aquí la selva tropical se funde con el mar Caribe en un espectáculo único: arenas doradas, aguas que cambian del azul profundo al verde esmeralda y la famosa formación rocosa que roba miradas en cada fotografía. Disfruta de senderos entre la selva, miradores con vistas que quitan el aliento y espacios ideales para descansar, acampar y conectar con la naturaleza. Vive la experiencia que todos sueñan y que solo tú puedes hacer realidad: ¡tu próxima aventura te espera en Cabo San Juan!",
            images: [
                "src/assets/images/places/cabo-san-juan/cabo-01.jpg",
                "src/assets/images/places/cabo-san-juan/cabo-02.jpg",
                "src/assets/images/places/cabo-san-juan/cabo-03.jpg",
                "src/assets/images/places/cabo-san-juan/cabo-04.jpg",
                "src/assets/images/places/cabo-san-juan/cabo-05.jpg",
                "src/assets/images/places/cabo-san-juan/cabo-06.jpg"
            ],
            distance: "2 horas y media desde el hostal",
            type: "Playa - Parque Nacional",
            rating: 5.0,
            activities: ["Senderismo ecológico", "Natación", "Naturaleza", "Snorkel", "Fotografía", "Camping", "Relajación"]
        },
        {
            id: 2,
            name: "Palomino",
            description: "Palomino, en la mágica Guajira colombiana, es un paraíso donde el río se entrega al mar Caribe bajo la mirada imponente de la Sierra Nevada. Sus playas de arena suave, rodeadas de palmeras y bosque tropical, son el escenario perfecto para desconectarte del ruido y entregarte a la tranquilidad. Imagina hamacas frente al mar, el murmullo del río y las olas, sabores locales sencillos pero auténticos, y un ambiente bohemio que atrae a viajeros de todo el mundo. Palomino no es solo un destino, es un estilo de vida que invita a relajarte, explorar y vivir la esencia del Caribe en su máxima expresión.",
            images: [
                "src/assets/images/places/palomino/palomino-01.jpg",
                "src/assets/images/places/palomino/palomino-02.jpg",
                "src/assets/images/places/palomino/palomino-03.jpg",
                "src/assets/images/places/palomino/palomino-04.jpg",
                "src/assets/images/places/palomino/palomino-05.jpg",
                "src/assets/images/places/palomino/palomino-06.jpg"
            ],
            distance: "1 hora desde el hostal",
            type: "Playa - Pueblo Bohemio",
            rating: 4.3,
            activities: ["Tubing", "Surf", "Senderismo", "Tours", "Observación de aves", "Relajación"]
        },
        {
            id: 3,
            name: "Río Don Diego",
            description: "El Río Don Diego, en el corazón del Magdalena, es una experiencia ecoturística que te conecta con la magia de la Sierra Nevada desde sus picos nevados hasta el Mar Caribe. Navega o desciende por sus aguas cristalinas rodeado de selvas exuberantes, escucha el canto de aves exóticas y descubre playas vírgenes donde río y mar se encuentran en perfecta armonía. Aquí, montañas, selva y océano se unen para regalarte un escenario natural único, ideal para aventureros, amantes de la naturaleza y viajeros que buscan un destino auténtico y lleno de vida. ¡Atrévete a vivirlo!",
            images: [
                "src/assets/images/places/rio-don-diego/don-diego-01.jpg",
                "src/assets/images/places/rio-don-diego/don-diego-02.jpg",
                "src/assets/images/places/rio-don-diego/don-diego-03.jpg",
                "src/assets/images/places/rio-don-diego/don-diego-04.jpg",
                "src/assets/images/places/rio-don-diego/don-diego-05.jpg",
                "src/assets/images/places/rio-don-diego/don-diego-06.jpg"
            ],
            distance: "45 minutos desde el hostal",
            type: "Río - Ecoturismo",
            rating: 4.5,
            activities: ["Tubing", "Surf de remo", "Kayac", "Pesca artesanal", "Caminatas", "Observación de fauna y flora", "Relajación", "Experiencias culturales"]
        },
        {
            id: 4,
            name: "Playa Costeño",
            description: "Playa Costeño, también conocida como Guachaca o Mendihuaca, es un rincón del Caribe a solo 39 km de Santa Marta donde la selva tropical, los ríos y la imponente Sierra Nevada se funden con el mar. Su atmósfera bohemia y relajada lo convierte en el refugio perfecto para desconectarte del bullicio urbano: surf, hamacas frente al mar, música al atardecer y la energía vibrante de una comunidad mochilera que celebra la vida simple. Aquí la naturaleza es protagonista y cada ola, cada puesta de sol y cada noche estrellada invitan a vivir una experiencia auténtica, libre y llena de espíritu aventurero.",
            images: [
                "src/assets/images/places/playa-costeno/costeno-01.jpg",
                "src/assets/images/places/playa-costeno/costeno-02.jpg",
                "src/assets/images/places/playa-costeno/costeno-03.jpg",
                "src/assets/images/places/playa-costeno/costeno-04.jpg",
                "src/assets/images/places/playa-costeno/costeno-05.jpg",
                "src/assets/images/places/playa-costeno/costeno-06.jpg"
            ],
            distance: "15 minutos desde el hostal",
            type: "Playa - Surf",
            rating: 4.5,
            activities: ["Navegar", "Yoga en la playa", "Relajación", "Caminar", "Nadar", "Festejos sencillos"]
        }
    ],

    // Gallery data - Imágenes organizadas de Antawara Casa Hostal
    gallery: [
        // EXTERIORES
        {
            id: 1,
            image: "src/assets/images/hostal/galeria/optimizadas/exteriores/antawara-exterior-01-piscina-principal.jpg",
            title: "Piscina Principal",
            category: "exterior",
            description: "Amplia piscina rodeada de vegetación tropical, perfecta para relajarse"
        },
        {
            id: 2,
            image: "src/assets/images/hostal/galeria/optimizadas/exteriores/antawara-exterior-02-jardin-tropical.jpg",
            title: "Jardín Tropical",
            category: "exterior",
            description: "Exuberante jardín con plantas tropicales nativas de la región"
        },
        {
            id: 3,
            image: "src/assets/images/hostal/galeria/optimizadas/exteriores/antawara-exterior-03-area-verde-relajacion.jpg",
            title: "Área Verde de Relajación",
            category: "exterior",
            description: "Espacios verdes ideales para descansar y conectar con la naturaleza"
        },
        {
            id: 4,
            image: "src/assets/images/hostal/galeria/optimizadas/exteriores/antawara-exterior-04-vista-panoramica.jpg",
            title: "Vista Panorámica",
            category: "exterior",
            description: "Hermosa vista panorámica de las instalaciones del hostal"
        },
        {
            id: 5,
            image: "src/assets/images/hostal/galeria/optimizadas/exteriores/antawara-exterior-05-zona-piscina-jardin.jpg",
            title: "Zona Piscina y Jardín",
            category: "exterior",
            description: "Perfecta combinación entre piscina y áreas verdes"
        },
        {
            id: 6,
            image: "src/assets/images/hostal/galeria/optimizadas/exteriores/antawara-exterior-06-paisaje-hostal.jpg",
            title: "Paisaje del Hostal",
            category: "exterior",
            description: "Vista general del entorno natural que rodea el hostal"
        },
        {
            id: 7,
            image: "src/assets/images/hostal/galeria/optimizadas/exteriores/antawara-exterior-07-ambiente-tropical.jpg",
            title: "Ambiente Tropical",
            category: "exterior",
            description: "Ambiente tropical único con vegetación exuberante"
        },
        {
            id: 8,
            image: "src/assets/images/hostal/galeria/optimizadas/exteriores/antawara-exterior-08-instalaciones-generales.jpg",
            title: "Instalaciones Generales",
            category: "exterior",
            description: "Vista completa de las instalaciones exteriores del hostal"
        },
        {
            id: 9,
            image: "src/assets/images/hostal/galeria/optimizadas/exteriores/antawara-exterior-09-fachada-principal.jpg",
            title: "Fachada Principal",
            category: "exterior",
            description: "Entrada principal del hostal con arquitectura tropical"
        },
        
        // ÁREAS COMUNES
        {
            id: 10,
            image: "src/assets/images/hostal/galeria/optimizadas/areas-comunes/antawara-areas-01-zona-descanso.jpg",
            title: "Zona de Descanso",
            category: "areas-comunes",
            description: "Cómoda área de descanso para socializar con otros huéspedes"
        },
        {
            id: 11,
            image: "src/assets/images/hostal/galeria/optimizadas/areas-comunes/antawara-areas-02-espacio-social.jpg",
            title: "Espacio Social",
            category: "areas-comunes",
            description: "Amplio espacio social para compartir experiencias de viaje"
        },
        {
            id: 12,
            image: "src/assets/images/hostal/galeria/optimizadas/areas-comunes/antawara-areas-03-area-entretenimiento.jpg",
            title: "Área de Entretenimiento",
            category: "areas-comunes",
            description: "Zona dedicada al entretenimiento y actividades grupales"
        },
        {
            id: 13,
            image: "src/assets/images/hostal/galeria/optimizadas/areas-comunes/antawara-areas-04-zona-hamacas.jpg",
            title: "Zona de Hamacas",
            category: "areas-comunes",
            description: "Relajantes hamacas para disfrutar del clima tropical"
        },
        {
            id: 14,
            image: "src/assets/images/hostal/galeria/optimizadas/areas-comunes/antawara-areas-05-espacio-relajacion.jpg",
            title: "Espacio de Relajación",
            category: "areas-comunes",
            description: "Tranquilo espacio diseñado para el descanso y meditación"
        },
        {
            id: 15,
            image: "src/assets/images/hostal/galeria/optimizadas/areas-comunes/antawara-areas-06-area-comun-principal.jpg",
            title: "Área Común Principal",
            category: "areas-comunes",
            description: "Principal área común donde se reúnen los viajeros"
        },
        {
            id: 16,
            image: "src/assets/images/hostal/galeria/optimizadas/areas-comunes/antawara-areas-07-salon-estar.jpg",
            title: "Salón de Estar",
            category: "areas-comunes",
            description: "Acogedor salón de estar con ambiente familiar"
        },
        {
            id: 17,
            image: "src/assets/images/hostal/galeria/optimizadas/areas-comunes/antawara-areas-08-terraza-social.jpg",
            title: "Terraza Social",
            category: "areas-comunes",
            description: "Terraza abierta perfecta para socializar al aire libre"
        },
        {
            id: 18,
            image: "src/assets/images/hostal/galeria/optimizadas/areas-comunes/antawara-areas-09-lobby-recepcion.jpg",
            title: "Lobby y Recepción",
            category: "areas-comunes",
            description: "Área de recepción con ambiente cálido y acogedor"
        }
    ],

    // Reviews data - Reseñas reales de huéspedes de Antawara Casa Hostal
    reviews: [
        {
            id: 1,
            name: "Escobar Serna",
            avatar: "user-icon",
            country: "Colombia",
            rating: 5,
            date: "2025-08-26",
            text: "Todo estuvo perfecto, gracias Isabel.",
            platform: "Booking.com"
        },
        {
            id: 2,
            name: "Candef",
            avatar: "user-icon",
            country: "Argentina",
            rating: 4,
            date: "2025-08-23",
            text: "El personal es muy amable y brinda asesoramiento si lo necesitan. El desayuno está muy bien, es variado. El patio y pileta son muy bonitos para disfrutar. La ubicación es muy buena. Los espacios son cómodos. Todos los días pasan a limpiar habitación.",
            platform: "Booking.com"
        },
        {
            id: 3,
            name: "Elena",
            avatar: "user-icon",
            country: "Italia",
            rating: 5,
            date: "2025-08-23",
            text: "Una estructura muy bonita, con habitaciones amplias y camas cómodas. Piscina muy bien cuidada. Buen desayuno. Personal muy amable y servicial. Nos guardaron las maletas mientras visitábamos el parque. Se puede llegar al parque en pocos minutos en autobús.",
            platform: "Booking.com"
        },
        {
            id: 4,
            name: "Miriam",
            avatar: "user-icon",
            country: "España",
            rating: 5,
            date: "2025-08-14",
            text: "Un lugar con mucho encanto y muy tranquilo. Desayuno súper rico y la piscina está genial. Nos guardaron las maletas la noche que estuvimos dentro del parque Tayrona.",
            platform: "Booking.com"
        },
        {
            id: 5,
            name: "Joan",
            avatar: "user-icon",
            country: "España",
            rating: 4,
            date: "2025-08-12",
            text: "La piscina y el patio son muy agradables y están bien mantenidos. Está situado en medio de las dos entradas principales del parque natural de Tayrona.",
            platform: "Booking.com"
        },
        {
            id: 6,
            name: "Valérie",
            avatar: "user-icon",
            country: "Canadá",
            rating: 5,
            date: "2025-08-08",
            text: "¡Todo! El personal es fantástico, el entorno es hermoso. La piscina🤩, el gato, las camas cómodas, las hamacas, las opciones de almuerzo. ¡En resumen, fue perfecto!",
            platform: "Booking.com"
        }
    ],

    // Contact information
    contact: {
        address: "Vereda Guachaca, Km 39 Vía Riohacha, Santa Marta, Magdalena, Colombia",
        phone: "+573187520630",
        email: "antawaracasahostal@gmail.com",
        whatsapp: "+573187520630",
        coordinates: {
            lat: 11.3161,
            lng: -74.1197
        },
        socialMedia: {
            facebook: "https://www.facebook.com/share/1AHF4DPZPS/",
            instagram: "https://www.instagram.com/casa_hostal_antawara?igsh=MXhpd2JjMWpjNGhweQ==",
            threads: "https://www.threads.com/@casa_hostal_antawara",
            tiktok: "https://www.tiktok.com/@hostal.antawara/video/7502151090155064582?is_from_webapp=1&sender_device=pc&web_id=7542891467413603846",
            tripadvisor: "https://www.tripadvisor.co/Hotel_Review-g12654697-d11881668-Reviews-Casa_Hostal_Antawara-La_Esmeralda_Santa_Marta_Municipality_Magdalena_Department.html?m=19905",
            booking: "https://www.booking.com/Share-V8m89aj"
        },
        hours: {
            checkin: "14:00 - 22:00",
            checkout: "08:00 - 12:00",
            reception: "24 horas"
        }
    },

    // General information
    info: {
        name: "Antawara Casa Hostal",
        tagline: "Tu hogar lejos de casa",
        established: 2018,
        totalRooms: 12,
        maxCapacity: 30,
        languages: ["Español", "English", "Português", "Français"],
        facilities: ["WiFi", "Desayuno", "Cocina", "Terraza", "Área común", "Lavandería"],
        policies: {
            checkIn: "14:00",
            checkOut: "12:00",
            cancellation: "Gratuita hasta 24h antes",
            pets: "No permitidas",
            smoking: "Solo en áreas designadas"
        }
    }
};

// Make data available globally for browser use
window.appData = appData;
