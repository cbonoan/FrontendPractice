import Nav from './components/Nav';
import ProductImages from './components/ProductImages';
import ProductDescription from './components/ProductDescription';
import AddItem from './components/AddItem';

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
  return (
    <div>
      <Nav/>
      <div id="product">
        <ProductImages images={productImages}/>
        <div id="product-info-cart">
          <ProductDescription product={productDetails}/>
          <AddItem/>
        </div>
      </div>
    </div>
  );
}

export default App;
