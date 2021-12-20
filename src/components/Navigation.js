import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { productContext } from '../App';


const Navigation = () => {
	const alaab = useContext(productContext)
	
	// console.log("alaab", alaab)
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{alaab.length}</span>
			</NavLink>
		// </div>
	);
};

export default Navigation;
