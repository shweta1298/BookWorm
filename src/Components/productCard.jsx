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
	MenuItem,
	Select,
	FormControl,
	Button,
	InputLabel,
} from "@mui/material";

import UnstyledSelectsMultiple from "./selectOption";
class ProductCard extends Component {
	render() {
		return (
			<Card
				variant='outlined'
				sx={{
					width: "650px",
					height: "200px",
					display: "flex",
					margin: "10px",

					border: "none",
					boxShadow: "0 8px 20px -12px rgba(0,0,0,0.3)",
				}}>
				<CardMedia
					component='img'
					image={this.props.product.Cover}
					alt='bookcover'
					sx={{ maxWidth: "150px", maxHeight: "250px", padding: "5px" }}
				/>
				<Box sx={{ display: "flex", flexDirection: "column", padding: "5px" }}>
					<CardContent
						component='div'
						sx={{ flex: "1 0 auto", width: "200px" }}>
						<Typography variant='h5'>{this.props.product.Title}</Typography>
						<Typography variant='subtitle1'>
							{this.props.product.Author.Author_Name}
						</Typography>
						<Typography variant='subtitle2'>
							{this.props.product.SalePrice}
						</Typography>
					</CardContent>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						padding: "20px",
						justifyContent: "center",
					}}>
					<CardActions component='div'>
						<Stack spacing={1.5}>
							<Button
								variant='contained'
								size='small'
								sx={{ width: "250px", height: "40px" }}>
								Add To Cart
							</Button>
							<Button
								variant='contained'
								size='small'
								sx={{ width: "250px", height: "40px" }}>
								Buy Now
							</Button>
							<UnstyledSelectsMultiple></UnstyledSelectsMultiple>
						</Stack>
					</CardActions>
				</Box>
			</Card>
		);
	}
}

export default ProductCard;
