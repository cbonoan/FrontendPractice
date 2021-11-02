import React, {useState, useEffect} from 'react';

import '../styles/ProductImages.scss';
function ProductImages(props) {
    const [imgPreview, setImgPreview] = useState(props.images[0]);
    const [activeImg, setActiveImg] = useState();

    useEffect(() => {
        const initialActiveImg = document.querySelector('#img-row span.active');
        setActiveImg(initialActiveImg);
    }, [])
    const changeSpotlight = (event, img) => {
        setImgPreview(img);
        const newActiveImg = event.target.parentElement;
        if(newActiveImg.classList.contains('.active') === false) {
            activeImg.classList.remove('active');
            newActiveImg.classList.add('active');
            setActiveImg(newActiveImg);
        }
    }
    
    return(
        <div id="carousel-content">
            <div id="img-carousel" className="carousel slide" data-bs-interval="false">
                <div className="carousel-inner">
                    {/* {props.images.map((image, index) => 
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={image} alt={"Image" + index+1}></img>
                        </div>
                    )
                    } */}
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={props.images[0]} alt="Image1"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={props.images[1]} alt="Image2"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={props.images[2]} alt="Image3"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={props.images[3]} alt="Image4"></img>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#img-carousel" data-bs-slide="prev">
                    <span class="carousel-prev-icon" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                    </span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#img-carousel" data-bs-slide="next">
                    <span class="carousel-next-icon" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div id="img-spotlight">
                <span><img src={imgPreview} alt="Spotlight"></img></span>
            </div>
            <div id="img-row">
                <span className="active" onClick={(event) => changeSpotlight(event, props.images[0])}><img src={props.images[0]} alt="Image1"></img></span>
                <span className="" onClick={(event) => changeSpotlight(event, props.images[1])}><img src={props.images[1]} alt="Image2"></img></span>
                <span className="" onClick={(event) => changeSpotlight(event, props.images[2])}><img src={props.images[2]} alt="Image3"></img></span>
                <span className="" onClick={(event) => changeSpotlight(event, props.images[3])}><img src={props.images[3]} alt="Image4"></img></span>
            </div>
        </div>
        
    );
}

export default ProductImages;