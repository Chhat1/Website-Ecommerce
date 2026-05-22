import axios from "axios";
import { defineStore } from "pinia";



export const useProductStore = defineStore('product',{
    state:()=>({
        products: [],
        isLoading: false,
        productId: null
    }),

    actions:{
        
        async getAllProducts() { //get all products
            try {
                this.isLoading = true;
                const res = await axios.get('https://fakestoreapi.com/products');
               this.products = res.data
               console.log(res.data);
            } catch (err) {
                console.error('Error', err);
            } finally {
                this.isLoading = false
            }
        },

        async getIdProduct(id){
            try{
                this.isLoading = true;
                const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
                this.productId = res.data
            }catch(err){
                console.error("Error",err)
            } finally {
                this.isLoading = false
            }
        }
        
        
    }

})