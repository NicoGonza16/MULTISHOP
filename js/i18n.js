// Selector de idioma ES/EN.
// Las páginas están escritas en español; este script cambia los textos a inglés
// (y de vuelta) con el diccionario EN y recuerda la elección en el navegador.
// Los elementos con translate="no" (por ejemplo, el logo) no se traducen.
(function () {
    "use strict";

    // Español -> inglés. Un texto que no esté aquí se queda igual en ambos idiomas.
    var EN = {
        "MultiShop - Inicio": "MultiShop - Home",
        "MultiShop - Tienda": "MultiShop - Shop",
        "MultiShop - Detalle del producto": "MultiShop - Product Detail",
        "MultiShop - Carrito": "MultiShop - Shopping Cart",
        "MultiShop - Finalizar compra": "MultiShop - Checkout",
        "MultiShop - Contacto": "MultiShop - Contact",

        "Acerca de": "About",
        "Contacto": "Contact",
        "Ayuda": "Help",
        "Preguntas frecuentes": "FAQs",
        "Mi cuenta": "My Account",
        "Iniciar sesión": "Sign in",
        "Registrarse": "Sign up",
        "Buscar productos": "Search for products",
        "Servicio al cliente": "Customer Service",

        "Categorías": "Categories",
        "Vestidos": "Dresses",
        "Vestidos para hombre": "Men's Dresses",
        "Vestidos para mujer": "Women's Dresses",
        "Vestidos para bebé": "Baby's Dresses",
        "Camisas": "Shirts",
        "Trajes de baño": "Swimwear",
        "Pijamas": "Sleepwear",
        "Ropa deportiva": "Sportswear",
        "Enterizos": "Jumpsuits",
        "Chaquetas": "Jackets",
        "Zapatos": "Shoes",
        "Inicio": "Home",
        "Tienda": "Shop",
        "Detalle": "Shop Detail",
        "Páginas": "Pages",
        "Carrito": "Shopping Cart",
        "Finalizar compra": "Checkout",

        "Moda para hombres": "Men Fashion",
        "Moda para mujeres": "Women Fashion",
        "Moda infantil": "Kids Fashion",
        "Comprar ahora": "Shop Now",
        "Ahorra 20%": "Save 20%",
        "Oferta especial": "Special Offer",
        "Producto de calidad": "Quality Product",
        "Envío gratis": "Free Shipping",
        "Devolución en 14 días": "14-Day Return",
        "Soporte 24/7": "24/7 Support",
        "Nombre de la categoría": "Category Name",
        "100 productos": "100 Products",
        "Productos destacados": "Featured Products",
        "Aquí va el nombre del producto": "Product Name Goes Here",
        "Productos recientes": "Recent Products",

        "Lista de productos": "Shop List",
        "Filtrar por precio": "Filter by price",
        "Todos los precios": "All Price",
        "Filtrar por color": "Filter by color",
        "Todos los colores": "All Color",
        "Negro": "Black",
        "Blanco": "White",
        "Rojo": "Red",
        "Azul": "Blue",
        "Verde": "Green",
        "Filtrar por talla": "Filter by size",
        "Todas las tallas": "All Size",
        "Ordenar": "Sorting",
        "Más recientes": "Latest",
        "Popularidad": "Popularity",
        "Mejor calificados": "Best Rating",
        "Mostrar": "Showing",
        "Anterior": "Previous",
        "Siguiente": "Next",

        "(99 reseñas)": "(99 Reviews)",
        "Tallas:": "Sizes:",
        "Colores:": "Colors:",
        "Agregar al carrito": "Add To Cart",
        "Compartir en:": "Share on:",
        "Descripción": "Description",
        "Información": "Information",
        "Reseñas (0)": "Reviews (0)",
        "Descripción del producto": "Product Description",
        "Información adicional": "Additional Information",
        "1 reseña de \"Nombre del producto\"": "1 review for \"Product Name\"",
        "01 ene 2045": "01 Jan 2045",
        "Deja una reseña": "Leave a review",
        "Tu correo no será publicado. Los campos obligatorios están marcados con *": "Your email address will not be published. Required fields are marked *",
        "Tu calificación * :": "Your Rating * :",
        "Tu reseña *": "Your Review *",
        "Tu nombre *": "Your Name *",
        "Tu correo *": "Your Email *",
        "Publicar reseña": "Leave Your Review",
        "También te puede gustar": "You May Also Like",
        "Imagen": "Image",

        "Productos": "Products",
        "Precio": "Price",
        "Cantidad": "Quantity",
        "Eliminar": "Remove",
        "Nombre del producto": "Product Name",
        "Código de cupón": "Coupon Code",
        "Aplicar cupón": "Apply Coupon",
        "Resumen del carrito": "Cart Summary",
        "Envío": "Shipping",
        "Continuar con la compra": "Proceed To Checkout",

        "Dirección de facturación": "Billing Address",
        "Nombre": "First Name",
        "Apellido": "Last Name",
        "Correo electrónico": "E-mail",
        "Celular": "Mobile No",
        "Dirección línea 1": "Address Line 1",
        "Dirección línea 2": "Address Line 2",
        "País": "Country",
        "Estados Unidos": "United States",
        "Afganistán": "Afghanistan",
        "Argelia": "Algeria",
        "Ciudad": "City",
        "Estado": "State",
        "Código postal": "ZIP Code",
        "Calle 123": "123 Street",
        "Nueva York": "New York",
        "Crear una cuenta": "Create an account",
        "Enviar a otra dirección": "Ship to different address",
        "Dirección de envío": "Shipping Address",
        "Total del pedido": "Order Total",
        "Nombre del producto 1": "Product Name 1",
        "Nombre del producto 2": "Product Name 2",
        "Nombre del producto 3": "Product Name 3",
        "Pago": "Payment",
        "Cheque": "Direct Check",
        "Transferencia bancaria": "Bank Transfer",
        "Realizar pedido": "Place Order",

        "Contáctenos": "Contact Us",
        "Nombres y Apellidos": "Full Name",
        "Asunto": "Subject",
        "Mensaje": "Message",
        "Enviar mensaje": "Send Message",
        "Formulario de demostración": "Demo form",
        "Demostración académica: este formulario no envía mensajes.": "Academic demo: this form does not send messages.",

        "Ponte en contacto": "Get In Touch",
        "Compra rápida": "Quick Shop",
        "Nuestra tienda": "Our Shop",
        "Boletín": "Newsletter",
        "Tu correo electrónico": "Your Email Address",
        "Suscribirse": "Sign Up",
        "Síguenos": "Follow Us",
        ". Todos los derechos reservados. Diseñado por": ". All Rights Reserved. Designed by"
    };

    // Inglés -> español, para volver al idioma original sin recargar.
    var ES = {};
    Object.keys(EN).forEach(function (es) {
        ES[EN[es]] = es;
    });

    var STORAGE_KEY = "multishop-lang";
    var ATTRIBUTES = ["placeholder", "alt", "value"];
    var ATTRIBUTE_SELECTOR = "[placeholder], [alt], input[type='submit'][value], input[type='button'][value]";
    var current = "es";

    function translate(text, lang) {
        var dictionary = lang === "en" ? EN : ES;
        var key = text.replace(/\s+/g, " ").trim();
        if (!key || !Object.prototype.hasOwnProperty.call(dictionary, key)) return text;
        // Se conservan los espacios de los bordes para no pegar el texto a los iconos
        return text.match(/^\s*/)[0] + dictionary[key] + text.match(/\s*$/)[0];
    }

    function isExcluded(element) {
        return !element || element.closest("script, style, [translate='no']") !== null;
    }

    function translateNode(root, lang) {
        if (root.nodeType === Node.TEXT_NODE) {
            if (!isExcluded(root.parentElement)) {
                var text = translate(root.nodeValue, lang);
                if (text !== root.nodeValue) root.nodeValue = text;
            }
            return;
        }
        if (root.nodeType !== Node.ELEMENT_NODE || isExcluded(root)) return;

        var walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
            acceptNode: function (node) {
                if (node.nodeType === Node.TEXT_NODE) return NodeFilter.FILTER_ACCEPT;
                return node.matches("script, style, [translate='no']") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_SKIP;
            }
        });
        var node;
        while ((node = walker.nextNode())) {
            var translated = translate(node.nodeValue, lang);
            if (translated !== node.nodeValue) node.nodeValue = translated;
        }

        var elements = Array.prototype.slice.call(root.querySelectorAll(ATTRIBUTE_SELECTOR));
        if (root.matches(ATTRIBUTE_SELECTOR)) elements.push(root);
        elements.forEach(function (element) {
            if (isExcluded(element)) return;
            ATTRIBUTES.forEach(function (attribute) {
                var value = element.getAttribute(attribute);
                if (value === null) return;
                var translated = translate(value, lang);
                if (translated !== value) element.setAttribute(attribute, translated);
            });
        });
    }

    function updateSelector() {
        document.querySelectorAll("[data-lang-label]").forEach(function (label) {
            label.textContent = current.toUpperCase();
        });
        document.querySelectorAll("[data-lang]").forEach(function (option) {
            option.classList.toggle("active", option.getAttribute("data-lang") === current);
        });
    }

    function setLanguage(lang) {
        current = lang === "en" ? "en" : "es";
        document.documentElement.lang = current;
        document.title = translate(document.title, current);
        translateNode(document.body, current);
        updateSelector();
        observer.takeRecords();
        try {
            localStorage.setItem(STORAGE_KEY, current);
        } catch (error) {
            // Sin almacenamiento (modo privado, etc.) el idioma dura hasta recargar
        }
    }

    // Traduce también el contenido que otros scripts agregan después (contact.js, carruseles)
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type === "characterData") {
                translateNode(mutation.target, current);
            } else {
                mutation.addedNodes.forEach(function (node) {
                    translateNode(node, current);
                });
            }
        });
    });
    observer.observe(document.body, { childList: true, characterData: true, subtree: true });

    document.addEventListener("click", function (event) {
        var option = event.target.closest ? event.target.closest("[data-lang]") : null;
        if (option) setLanguage(option.getAttribute("data-lang"));
    });

    var saved = null;
    try {
        saved = localStorage.getItem(STORAGE_KEY);
    } catch (error) {
        saved = null;
    }
    setLanguage(saved);
})();
