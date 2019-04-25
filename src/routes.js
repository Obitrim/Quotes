
import Home from './components/Home.vue'
import Quotes from './components/Quotes.vue'

export const routes = [

    // Home route
    {
        path: '',
        component: Home
    },

    // Quotes route
    {
        path: '/quotes',
        component: Quotes
    }
];