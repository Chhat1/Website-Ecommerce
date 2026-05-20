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
                const res = await fetch('https://api.escuelajs.co/api/v1/products');
                const data = await res.json()
                console.log("get all product success!",data);
                this.products = data
            } catch (err) {
                console.error('Error', err);
            } finally {
                this.isLoading = false
            }
        },

        async getIdProduct(id){
            try{
                this.isLoading = true;
                const res = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
                this.productId = res.data
            }catch(err){
                console.error("Error",err)
            } finally {
                this.isLoading = false
            }
        }
        
        
    }

})