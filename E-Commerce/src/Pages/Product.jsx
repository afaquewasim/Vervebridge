import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import BreadCrums from '../Components/BreadCrums/BreadCrums';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';

const Product = () => {
    const { allProducts } = useContext(ShopContext);
    const { productId } = useParams();
    const product = allProducts.find((e)=> e.id === Number(productId));
    return (
        <div className="product-page">
            <BreadCrums product={product} />
            <ProductDisplay product={product} /> 
            <DescriptionBox /> 
            <RelatedProduct /> 
        </div>
    );
}

export default Product;
