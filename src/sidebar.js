import { ProductGroup, createProduct } from "./selector";

export const createProductWork=(id,name,price)=>{
    let createProductNode=createProduct.content.cloneNode(true)
     let productName=createProductNode.querySelector(".product-name")
 let productPrice=createProductNode.querySelector(".product-price")
 let productCard=createProductNode.querySelector(".productCard")
productCard.id=id
 
productName.innerText=name

productPrice.innerText=price
ProductGroup.append(createProductNode)


   
}