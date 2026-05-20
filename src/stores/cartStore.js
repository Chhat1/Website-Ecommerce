import { defineStore } from "pinia";


export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: JSON.parse(localStorage.getItem('my_cart') || '[]')
    }),

    actions: {

        addToCart(product, qty = 1) {

            const item = this.cart.find(
                item => item.id === product.id
            );

            if (!item) {
                this.cart.push({
                    ...product,
                    qty
                });
            } else {
                item.qty += qty;
            }

            this.saveCart();
        },
        

        updateQty(id, change) {

            const item = this.cart.find(item => item.id === id);

            if (!item) return;

            item.qty += change;

            if (item.qty <= 0) {
                this.removeFromCart(id);
            }

            this.saveCart();
        },

        removeFromCart(id) {
            this.cart = this.cart.filter(item => item.id !== id)
            this.saveCart()
        },

        saveCart() {
            localStorage.setItem('my_cart', JSON.stringify(this.cart))
        }
    },
    getters: {

        cartCount() {
            return this.cart.reduce((total, item) => total + item.qty, 0)
        },
        totalPrice() {
            return this.cart.reduce((total, item) => total + item.price * item.qty, 0)
        }

    }

})