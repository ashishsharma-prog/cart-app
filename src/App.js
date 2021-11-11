
import React from 'react';
import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';
class  App extends React.Component{
  
    constructor() {
      super();
      this.state = {
          products: [
              {
                  price: '99',
                  title: 'WATCH',
                  qty: 1,
                  img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
                  id:1
              },
              {
                  price: '999',
                  title: 'MOBILE PHONE',
                  qty: 5,
                  img: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                  id:2
              },
              {
                  price: '9999',
                  title: 'LAPTOP',
                  qty: 10,
                  img: "https://media.istockphoto.com/photos/modern-laptop-with-empty-screen-on-white-background-mockup-design-picture-id1182241805?b=1&k=20&m=1182241805&s=170667a&w=0&h=EDTQE8otN4xNEDfj-r0cFIlMmnLKWcQM_xTesSRKSIc= ",
                  id:3
              }

          ]



      }
  }
  handleIncreaseQuantity=((product)=>{
      console.log('this is product',product)
      const{products}=this.state;
      const index=products.indexOf(product);
      products[index].qty +=1;
      this.setState({
          products:products
      })

  })
  handleDecreaseQuantity=((product)=>{
      
      console.log('this is decrese product',product)
      const{products}=this.state;
      const index=products.indexOf(product);
      if(products[index].qty===0)
      return;
 
      products[index].qty -=1;
      this.setState({
          products:products
      })
  })
  handleDelete=(id)=>{
      const{products}=this.state;
      const items=products.filter((item)=>item.id!==id);
      this.setState({
          products:items
      })

  }
  getCountItem=()=>{
    const{products}=this.state;
    let count=0;
    products.forEach((product)=>{
      count+=product.qty;
    })
    return count;
  }

getTotalPrice=()=>{
  const{products}=this.state;
  let cartTotal=0;
  products.map((product)=>{
    cartTotal+=product.qty*product.price;

  })
  return cartTotal;
}
  
  render(){
    const{products}=this.state
  return (

    <div className="App">
     <Navbar count={this.getCountItem()}  />
     
     <Cart
     products={products}
     onIncreasingQuantity={this.handleIncreaseQuantity}
     onDecreasingQuantity={this.handleDecreaseQuantity}
     onDelete={this.handleDelete}
     />
     <div style={{ padding:10,fontSize:20}}>Total={this.getTotalPrice()}</div>
    </div>
    
  );
}
}
export default App;
