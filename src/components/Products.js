import React, { useContext } from 'react';

import { productContext } from '../App';
// Components
import Product from './Product';

const Products = props => {

	const productska = useContext(productContext)
	
	// console.log("productska", productska)

	return (
		<div className="products-container">
			{/* {productska.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={props.addItem}
				/>
			))} */}
		</div>
	);
};

export default Products;
