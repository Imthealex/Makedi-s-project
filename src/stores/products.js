import { defineStore } from 'pinia'

export const productsStore = defineStore('products',
{
  state: ()=>({
    products:[]
  }),
  actions:{
    fetchProductsFromDB(){
      fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log);  
this.products = json.products;         
    }
  }
})
