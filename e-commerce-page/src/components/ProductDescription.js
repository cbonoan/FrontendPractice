import React, {useState} from 'react';

import '../styles/ProductDescription.scss'

function ProductDescription(props) {
    const [onSale, setOnSale] = useState(props.product.onSale);
    var salePrice = 0;
    const orginalPrice = props.product.productPrice.toFixed(2);
    if(onSale === true) {
        salePrice = props.product.productPrice * (props.product.sale/100);
        salePrice = salePrice.toFixed(2);
    }
    return(
        <div id="product-description">
            <h4>SNEAKER COMPANY</h4>
            <br/>
            <h1>{props.product.productName}</h1>
            <br/>
            <p>
                {props.product.productDescription}
            </p>
            <div className="price-section">
                <span id="price-tag">{onSale ? 
                    <span id="sale-price">
                        ${salePrice}
                        <span id="sale-tag">{props.product.sale}%</span>
                    </span> 
                    : 
                    orginalPrice
                    }
                </span>
                <span id="original-price">
                {onSale &&
                   "$"+orginalPrice 
                }
                </span>
            </div>
        </div>
    );
}

export default ProductDescription;