import React, { Component, useState } from "react";
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
import { Navigate } from "react-router-dom";
import { createStackNavigator } from 'react-navigation';

//import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

class ProductCard extends Component {
	state = {
		text: "ADD TO CART",
	};

	changeText = (text) => {
		this.setState({ text });
	};

	render() {
		//const navigate = useNavigate();
		const { text } = this.state;
		return (
			<Card
				variant='outlined'
				sx={{
					width: "580px",
					height: "180px",
					display: "flex",
					margin: "6px",

					border: "none",
					boxShadow: "0px 10px 12px -12px rgba(0.4,0.4,0.4,0.4)",
				}}>
				<CardMedia
					component='img'
					slot=''
					image={this.props.product?.Path?.BookPath + this.props.product?.Cover}
					alt='bookcover'
					sx={{ width: "auto", maxHeight: "250px", padding: "5px" }}
				/>

				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<CardContent
						component='div'
						sx={{ flex: "1 0 auto", width: "250px" }}>
						<Typography variant='h5' sx={{ fontWeight: "400" }}>
							{this.props.product.Title}
						</Typography>
						<Typography variant='subtitle1' sx={{ fontWeight: "300" }}>
							{this.props.product.Author.Author_Name}
						</Typography>
						<Grid container spacing={0.5}>
							<Grid item>
								{/* <FontAwesomeIcon icon={solid("indian-rupee-sign")} size='sm' /> */}
							</Grid>
							<Grid item xs={2}>
								<Typography
									variant='subtitle2'
									sx={{ fontSize: "20px", fontWeight: "600" }}>
									{this.props.product.SalePrice}
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
					}}>
					<CardActions component='div'>
						<Stack spacing={1.5}>
							<Button
								className='btncolor'
								onClick={() => {
									this.changeText("ADDED TO CART");
								}}>
								<Grid container spacing={0.5}>
									<Grid item xs={2}>
										<ShoppingCartIcon className='btnIcon me-1' />
									</Grid>
									<Grid item xs={10}>
										<Typography className='btnLabel ms-1'>{text}</Typography>
									</Grid>
								</Grid>
							</Button>
							<Button className='btncolor' onClick={() => {Navigate('/InvoiceTable')}}>
								<Grid container spacing={0.5}>
									<Grid item xs={2}>
										<SellIcon className='btnIcon ' />
									</Grid>
									<Grid item xs={10}>
										<Typography className='btnLabel '>BUY NOW</Typography>
									</Grid>
								</Grid>
							</Button>
							{/* <Button
								className='btncolor'
								variant='contained'
								size='small'
								startIcon={<ShoppingCartIcon className='btnIcon' />}>
								<Typography className='btnLabel'>Add To Cart</Typography>
							</Button>
							<Button
								className='btncolor pe-4'
								//variant='contained'
								size='small'
								startIcon={<SellIcon className='btnIcon me-1 ' />}>
								<Typography className='btnLabel'>Buy Now</Typography>
							</Button> */}
							<SelectRentDuration></SelectRentDuration>
						</Stack>
					</CardActions>
				</Box>
			</Card>
		);
	}
}

export default ProductCard;
