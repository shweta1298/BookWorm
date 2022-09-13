import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from "./products";
import Pages from "./Pages";
import { Box, Grid } from "@mui/material";

import FilterProducts from "./filterProducts";
const ProductList = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage] = useState(2);
	const [category, setCategory] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			setLoading(true);
			const result = await axios.get(
				"https://api.jsonbin.io/v3/b/6319970de13e6063dc9fbf80"
			);
			setProducts(result.data.record);
			setLoading(false);
		};
		fetchProducts();
	}, []);
	// console.log(category);
	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

	let currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
	// currentProducts = currentProducts.filter(
	// 	(product) => product.Language.language === "Hindi"
	// );
	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};
	const handleFiltering = (categoryValues) => {
		// console.log("in handle category", categoryValues);
		// // this.setState = { category: categoryValues };
		// //const res = categoryValues;
		// setCategory(categoryValues);
		// for (let i = 0; i < categoryValues.length; i++) {
		// 	currentProducts = currentProducts.filter(
		// 		(product) => product.BookCategory.Category === categoryValues[i]
		// 	);
		// 	//console.log("filter", filter);
		// }
		// console.log(currentProducts);
		// // filterCategoryFunction(category);
		// //console.log(category);
	};

	return (
		<Box
			sx={{
				flexGrow: 1,
				size: "50%",
			}}>
			{/* {console.log(category)} */}

			<Grid
				container
				// spacing={1}
				direction='row'
				sx={{ marginBlockStart: "30px" }}>
				<Grid
					item
					container
					justifyContent='flex-end'
					alignItems='flex-start'
					xs={4}
					sx={{
						// bgcolor: "blue",
						paddingRight: "80px",
					}}>
					<FilterProducts onSelectCategory={handleFiltering}></FilterProducts>
				</Grid>
				<Grid
					item
					container
					direction='column'
					alignItems='flex-start'
					xs={8}
					sx={
						{
							// bgcolor: "red",
						}
					}>
					<Products products={currentProducts} loading={loading} />
					<Pages
						className='pagination'
						productsPerPage={productsPerPage}
						totalProducts={products.length}
						currentPage={currentPage}
						paginate={paginate}></Pages>
				</Grid>
			</Grid>
		</Box>
	);
};
export default ProductList;
