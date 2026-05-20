import { defineStore } from "pinia";


export const useDarkModeStore = defineStore('darkmode',{
    state:()=>({
        darkMode: false
    })
    ,
    actions:{
        toggleDarkMode(){
            this.darkMode = !this.darkMode;
        }
    }
})