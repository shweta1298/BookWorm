import {
	Container,
	Box,
	Typography,
	FormGroup,
	FormControlLabel,
	Checkbox,
	Pagination,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material";
import React, { Component } from "react";
import Products from "./products";
class ProductPage extends Component {
	render() {
		return (
			<Container
				sx={{ maxWidth: "100%", display: "flex", justifyContent: "center" }}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						padding: "50px",
						height: "100",
						width: "25%",
						// bgcolor: "blue",
					}}>
					<Typography variant='h5' sx={{ padding: "10px" }}>
						Filter
					</Typography>

					<Accordion>
						<AccordionSummary
							// expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1a-content'
							id='panel1a-header'>
							<Typography variant='p'> Book Type</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<FormGroup>
								<FormControlLabel control={<Checkbox />} label='Ebook' />
								<FormControlLabel control={<Checkbox />} label='Audiobook' />
							</FormGroup>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							// expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1a-content'
							id='panel1a-header'>
							<Typography variant='p'>Language</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<FormGroup>
								<FormControlLabel control={<Checkbox />} label='English' />
								<FormControlLabel control={<Checkbox />} label='Hindi' />
							</FormGroup>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							// expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1a-content'
							id='panel1a-header'>
							<Typography variant='p'>Genre</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<FormGroup>
								<FormControlLabel control={<Checkbox />} label='Horror' />
								<FormControlLabel control={<Checkbox />} label='Thriller' />
							</FormGroup>
						</AccordionDetails>
					</Accordion>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						width: "75%",
						height: "100%",
						padding: "50px",
					}}>
					<Products></Products>
					<Pagination count={10} />
				</Box>
			</Container>
		);
	}
}

export default ProductPage;
