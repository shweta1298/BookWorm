import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
	Card,
	CardMedia,
	Box,
	CardContent,
	Typography,
	CardActions,
	Stack,
	Button,
	Grid,
} from "@mui/material";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SellIcon from "@mui/icons-material/Sell";
import SelectRentDuration from "./selectButton";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

class ProductCard extends Component {
	render() {
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
					image={this.props.product.Cover}
					alt='bookcover'
					sx={{ maxWidth: "150px", maxHeight: "250px", padding: "5px" }}
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
								<FontAwesomeIcon icon={solid("indian-rupee-sign")} size='sm' />
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
								variant='contained'
								size='small'
								startIcon={<ShoppingCartIcon className='btnIcon' />}>
								<Typography
									variant='p'
									sx={{ color: "white", fontWeight: "bolder" }}>
									Add To Cart
								</Typography>
							</Button>
							<Button
								className='btncolor'
								variant='contained'
								size='small'
								startIcon={<SellIcon className='btnIcon me-4' />}>
								<Typography
									variant='p'
									sx={{
										color: "white",
										fontWeight: "bolder",
										alignItems: "flex-start",
									}}>
									Buy Now
								</Typography>
							</Button>
							<SelectRentDuration></SelectRentDuration>
						</Stack>
					</CardActions>
				</Box>
			</Card>
		);
	}
}

export default ProductCard;
