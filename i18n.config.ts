export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            welcome: 'Welcome to TOP',
            nav: {
                home: 'Home',
                classes: 'Classes',
                booking: 'Booking',
                prices: 'Prices',
                references: 'References',
                contact: 'Contact'
            }
        },
        es: {
            welcome: 'Bienvenido a TOP',
            nav: {
                home: 'Inicio',
                classes: 'Clases',
                booking: 'Reservas',
                prices: 'Precios',
                references: 'Referencias',
                contact: 'Contacto'
            }
        }
    }
}))
