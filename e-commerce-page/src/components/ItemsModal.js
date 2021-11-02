import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import '../styles/ItemsModal.scss'

function ItemsModal(props) {
    const handleClose = () => {
        props.modalHandle();
    }

    let content = "Looks like your cart is empty!";
    return(
        <div>
            <Modal show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title><span id="modal-title">Cart</span></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span id="modal-body">{content}</span>
                </Modal.Body>
            </Modal>
        </div>

    );
}

export default ItemsModal;