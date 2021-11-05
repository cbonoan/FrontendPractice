import React, {useState, useEffect} from 'react';

import '../styles/CartItem.scss';
function CartItem(props) {
    const [total, setTotal] = useState(0)
    useEffect(() => {
        let tmpTotal = 0;
        if(props.prodDetails["onSale"]) {
            tmpTotal = props.items*(props.prodDetails["productPrice"]*(props.prodDetails["sale"]/100));
        } else {
            tmpTotal = props.items*props.prodDetails["productPrice"];
        }
        tmpTotal = tmpTotal.toFixed(2)
        console.log(tmpTotal);
        setTotal(tmpTotal);
    }, [props.items, props.prodDetails])
    return(
        <div id="cart-item-details">
            <img src={props.image} alt="product"></img>
            <span id="cart-product-details">
                <p>{props.prodDetails["productName"]}</p>
                <p id="total-price-info">$125.00 x {props.items} <span>${total}</span></p>
            </span>
            <span id="delete-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
            </span>
        </div>
    )
}

export default CartItem;