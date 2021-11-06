import React, {useState, useEffect} from 'react';
import {Modal} from 'react-bootstrap';
import CartItem from './CartItem';

import '../styles/ItemsModal.scss'
function ItemsModal(props) {
    const [checkout, setCheckout] = useState(false);
    const [content, setContent] = useState("Looks like your cart is empty!")

    useEffect(() => {
        if(props.itemQuantity > 0) {
            setCheckout(true);
            setContent(<CartItem items={props.itemQuantity} image={props.images[0]} prodDetails={props.productDetails} updateCart={props.updateCart}/>)
        } else {
            setCheckout(false)
            setContent("Looks like your cart is empty!")
        }
    }, [props.itemQuantity, props.images, props.productDetails, props.updateCart])
    const handleClose = () => {
        props.modalHandle();
    }

    return(
        <div>
            <Modal show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title><span id="modal-title">Cart</span></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div id="modal-body">
                        <div id="modal-checkout-details">
                            <span>{content}</span>
                        </div>
                        <div id="modal-checkout-btn">
                            <button id="modal-btn" type="button" className={`btn ${!checkout && "disabled"}`}>Checkout</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>

    );
}

export default ItemsModal;