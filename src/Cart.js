import React from 'react';
import CartItem from './CartItem';
const Cart =(props)=>{
   
        const { products } = props ;
        return (
            <div className="cart">
            {products.map((product)=>{
                   return(
                       <CartItem
                       product={product}
                       key={product.id}
                       onIncreasingQuantity={props.onIncreasingQuantity}
                       onDecreasingQuantity={props.onDecreasingQuantity}
                       onDelete={props.onDelete}

                       />
                   )

               })}
            </div>
          );
  }
export default Cart;