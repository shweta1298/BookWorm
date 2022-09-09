import React, { Component } from "react";

import ProductCard from "./productCard";
class Products extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Books: [],
		};
	}

	componentDidMount() {
		fetch("https://api.jsonbin.io/v3/b/6319970de13e6063dc9fbf80")
			.then((response) => response.json())
			.then((data) => {
				this.setState({ Books: data.record });
			});
	}
	render() {
		return (
			<React.Fragment>
				{this.state.Books.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</React.Fragment>
		);
	}
}

export default Products;
