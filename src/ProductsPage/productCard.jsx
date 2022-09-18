
import "bootstrap/dist/css/bootstrap.css";
import {
	Card,
	CardMedia,
	Box,
	CardContent,
	Typography,
	CardActions,
	Stack,
	Grid,
} from "@mui/material";
import "./styles.css";
import Button from "react-bootstrap/Button";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SellIcon from "@mui/icons-material/Sell";
import SelectRentDuration from "./selectButton";
import { useNavigate } from 'react-router-dom';
import React, { Component, useState, useRef, useEffect } from "react";
//import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

let tempid = -1;
const ProductCard = ({ product }) => {
	const navigate = useNavigate();
	const [cartadd, setCartadd] = useState(false);
	
	
	

	const ref = useRef();

	const redirectToDiscription = () => {

		//localStorage.setItem("Bookdata",bookobject)
		localStorage.setItem("bookid", tempid)
		navigate('/FetchDiscription');
	}
	

	const addtoCart = () => {

		const CustomerId=localStorage.getItem("CustomerId")
		if(CustomerId==null){
			navigate('/Home');
		}

		setCartadd(!cartadd)
		if (cartadd === false) {
			ref.current.textContent = "ADDED TO CART"
		}
		else {
			ref.current.textContent = "ADD TO CART"
		}

		

		fetch('https://localhost:44356/api/AddtoCart', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				BookId:tempid,
				CustomerId:CustomerId,
				PurchaseTypeId:2
			})
		}).then(res=>res.json()).then((result) => {
			//console.warn("result", result);
			console.log(result);
		})

	}

	return (
		<Card
			variant='outlined'
			sx={{
				width: "800px",
				height: "250px",
				display: "flex",
				margin: "6px",

				border: "none",
				boxShadow: "0px 10px 12px -12px rgba(0.4,0.4,0.4,0.4)",
			}}
			
		>
			<CardMedia
				component='img'
				slot=''
				image={product?.Path?.BookPath + product?.Cover}
				//image={product.Cover}
				//image={this.props.product.Cover}
				alt='bookcover'
				sx={{ width: "160px", maxHeight: "250px", padding: "5px" }}
				onClick={() => {
					tempid = product.Id;
					redirectToDiscription()}}
				
			/>

			<Box sx={{ display: "flex", flexDirection: "column" }}
			onClick={() => {
				tempid = product.Id;
				redirectToDiscription()
			}}>
				<CardContent component='div' sx={{ flex: "1 0 auto", width: "250px" }}>
					<Typography variant='h5' sx={{ fontWeight: "400" }}>
						{product.Title}
					</Typography>
					<Typography variant='subtitle1' sx={{ fontWeight: "300" }}>
						{product.Author.Author_Name}
					</Typography>
					<Grid container spacing={0.5}>
						<Grid item>
							{/* <FontAwesomeIcon icon={solid("indian-rupee-sign")} size='sm' /> */}
						</Grid>
						<Grid item xs={2}>
							<Typography
								variant='subtitle2'
								sx={{ fontSize: "20px", fontWeight: "600", marginLeft: "80px" }}>
								₹{product.SalePrice}
							</Typography>
						</Grid>
					</Grid>
				</CardContent>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					// padding: "20px",
					justifyContent: "center",
					marginLeft: "60px"

				}}>
				<CardActions component='div'>
					<Stack spacing={1.5}>
						<Button
							className='btncolor'
							ref={ref}
							onClick={() => {
								tempid = product.Id;
								addtoCart()

							}}
						// onClick={() => {
						// 	this.changeText("ADDED TO CART");
						// }}
						>
							<Grid container spacing={0.5}>
								<Grid item xs={2}>
									<ShoppingCartIcon className='btnIcon me-1' />
								</Grid>
								<Grid item xs={10}>
									<Typography className='btnLabel ms-1'>ADD TO CART</Typography>
								</Grid>
							</Grid>
						</Button>
						<Button className='btncolor' onClick={() => { navigate('/InvoiceTable'); }}>
							<Grid container spacing={0.5}>
								<Grid item xs={2}>
									<SellIcon className='btnIcon ' />
								</Grid>
								<Grid item xs={10}>
									<Typography className='btnLabel '>BUY NOW</Typography>
								</Grid>
							</Grid>
						</Button>

						<SelectRentDuration></SelectRentDuration>
					</Stack>
				</CardActions>
			</Box>
		</Card>
	);
};
//}

export default ProductCard;
