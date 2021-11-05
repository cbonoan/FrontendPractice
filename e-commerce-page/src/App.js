import React, {useState} from 'react';

import Nav from './components/Nav';
import ProductImages from './components/ProductImages';
import ProductDescription from './components/ProductDescription';
import AddItem from './components/AddItem';
import ItemsModal from './components/ItemsModal';

import image1 from './images/image-product-1.jpg'
import image2 from './images/image-product-2.jpg'
import image3 from './images/image-product-3.jpg'
import image4 from './images/image-product-4.jpg'

import './styles/App.scss';

function App() {
  const productImages = [image1, image2, image3, image4];
  const productDetails = {
    productName: "Fall Limited Edition Sneakers",
    productDescription: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    productPrice: 250,
    onSale: true,
    sale: 50
  };

  const [cartItems, setCartItems] = useState(0);
  const cartHandler = (numItems) => {
    let newCartItems = cartItems+numItems;
    setCartItems(newCartItems);
  }

  const [showCheckout, setShowCheckout] = useState(false);
  const handleModal = () => {
    setShowCheckout(!showCheckout);
  }

  return (
    <div>
      <Nav cartQuantity={cartItems} modalHandle={handleModal}/>
      <ItemsModal show={showCheckout} 
      modalHandle={handleModal} 
      itemQuantity={cartItems} 
      images={productImages} 
      productDetails={productDetails}/>
      <div id="product">
        <ProductImages images={productImages}/>
        <div id="product-info-cart">
          <ProductDescription product={productDetails}/>
          <AddItem updateCart={cartHandler}/>
        </div>
      </div>
    </div>
  );
}

export default App;
