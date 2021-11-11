import React from 'react';

const CartItem = (props) => {
const { price, title, qty } = props.product;
    const {
        product,
        onDecreasingQuantity,
        onIncreasingQuantity,
        onDelete } = props;
    return (


        <div className='cart-item'>
            <div className='left-block'>
                <img style={styles.image} src= {product.img} />
            </div>
            <div className='right-block'>
                <div style={{ fontSize: '30', color: 'black' }}>{title}</div>
                <div style={{ color: 'blue' }}>Rs:{price}</div>
                <div style={{ color: 'blue' }}>QTY:{qty}</div>
                <div className='cart-action-icons'>
                    <img
                        alt="decrease"
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
                        //we call function to add event listener
                        onClick={() => onDecreasingQuantity(product)} />
                    <img
                        alt="increase"
                        className="action-icons"
                        src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1636410624~hmac=e34ade5652b83b02a0bb94257ace2c78"
                        onClick={() => onIncreasingQuantity(product)} />
                    <img
                        alt="delete"
                        className="action-icons"
                        src="https://cdn-icons.flaticon.com/png/512/2874/premium/2874821.png?token=exp=1636410696~hmac=2e963063f197267feefd7c20d59843c9"
                        onClick={() => onDelete(product.id)} />

                </div>
            </div>
        </div>
    );
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 10,
        background: '#ccc'

    }
}
export default CartItem;