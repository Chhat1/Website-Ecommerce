
import Home from '../components/views/Home.vue'
import Shop from '../components/views/Shop.vue'
import About from '../components/views/About.vue'
import Contact from '../components/views/Contact.vue'
import ProductDetails from '../components/views/ProductDetails.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ExploreTech from '../components/views/ExploreTech.vue'
import CheckSummery from '../components/views/CheckSummery.vue'
import Register from '../components/views/Register.vue'
import Login from '../components/views/Login.vue'


const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/shop",
        component: Shop
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/contact",
        component: Contact
    },
    {
        path: "/productdetails/:id",
        component: ProductDetails
    },
    {
        path: "/exploretech",
        component: ExploreTech
    },
    {
        path: '/checksummery',
        component: CheckSummery
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/login',
        component: Login
    }
]



export const router = createRouter({
    history: createWebHistory(),
    routes
})