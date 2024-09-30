import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An eCommerce website serves as a digital 
                platform where customers can browse, purchase, 
                and manage products or services online. It typically 
                includes features such as product catalogs, secure 
                payment gateways, user-friendly navigation, and
                 shopping carts. With the rise of mobile devices, 
                 responsive design and seamless user experiences are 
                 key to retaining customers. Modern eCommerce websites also integrate tools for personalized
                  recommendations and customer support.</p>
                  <p>
                  Shopper is a dynamic eCommerce platform specializing in a wide variety of clothing for all ages and styles. From trendy fashion to timeless classics, 
                  Shopper offers a seamless shopping experience with easy navigation, secure payment options, and fast delivery. Whether you're looking for casual wear, formal attire, or seasonal collections, 
                  Shopper ensures top-quality products to elevate your wardrobe.
                  </p>
        </div>
    </div>
  )
}

export default DescriptionBox