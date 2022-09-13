import ProductList from "./ProductList";
import React, { Component } from "react";
import NavigationBar from "./NavigationBar";

class ProductPage extends Component {
	render() {
		return (
			<div>
				<NavigationBar></NavigationBar>
				<ProductList></ProductList>
			</div>
		);
	}
}

export default ProductPage;
