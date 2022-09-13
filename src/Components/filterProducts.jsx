import React from "react";
import {
	Typography,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	FormControl,
	FormGroup,
	FormControlLabel,
	Checkbox,
	Button,
	Stack,
	Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useState } from "react";
import { Co2Sharp } from "@mui/icons-material";

const FilterProducts = ({ onSelectCategory }) => {
	const [category, setCategory] = useState([]);
	const [language, setLanguage] = useState([]);
	const [genres, setGenres] = useState([]);

	// console.log({ category, language, genres });
	const handleResetFilters = (event) => {
		setCategory("");
	};
	const handleCategoryChange = (event) => {
		console.log("in child before" + category);

		const index = category.indexOf(event.target.value);
		if (index === -1) {
			setCategory([...category, event.target.value]);
			console.log("if not in array cond", category);
		} else {
			console.log(
				"filter output" +
					category.filter((category) => category !== event.target.value)
			);
			// setCategory(
			// 	category.filter((category) => category !== event.target.value)
			// );
			console.log("if IS in array cond", category);
		}
		console.log("in child" + category);

		// onSelectCategory(category);
	};

	// const handleLanguageChange = (event) => {
	// 	const index = language.indexOf(event.target.value);
	// 	if (index === -1) {
	// 		setLanguage([...language, event.target.value]);
	// 	} else {
	// 		setLanguage(
	// 			language.filter((language) => language !== event.target.value)
	// 		);
	// 	}
	// };
	// const handleGenreChange = (event) => {
	// 	const index = genres.indexOf(event.target.value);
	// 	if (index === -1) {
	// 		setGenres([...genres, event.target.value]);
	// 	} else {
	// 		setGenres(genres.filter((genre) => genre !== event.target.value));
	// 	}
	// 	// console.log(genres);
	// };

	return (
		<div>
			<Grid container spacing={2}>
				<Grid item xs={2}>
					<FilterAltIcon />
				</Grid>
				<Grid item xs={10}>
					<Typography variant='h5' sx={{ fontWeight: "500" }}>
						Filter
					</Typography>
				</Grid>
			</Grid>

			<Accordion
				sx={{
					marginBlock: "8px",

					width: "150px",
					boxShadow: "0px 15px 15px -12px rgba(0,0,0,0.2)",
				}}>
				<AccordionSummary
					sx={{ bgcolor: "#FF3B3F" }}
					expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
					aria-controls='panel1a-content'
					id='panel1a-header'>
					<Typography variant='p' sx={{ color: "white", fontWeight: "500" }}>
						Book Type
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<FormControl>
						<FormGroup>
							<FormControlLabel
								control={
									<Checkbox
										checked={category.includes("E-Book")}
										onChange={handleCategoryChange}
										name='E-Book'
										value='E-Book'
									/>
								}
								label='E-Book'
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={category.includes("Audiobook")}
										onChange={handleCategoryChange}
										name='Audiobook'
										value='Audiobook'
									/>
								}
								label='Audiobook'
							/>
						</FormGroup>
					</FormControl>
				</AccordionDetails>
			</Accordion>
			<Accordion
				sx={{
					width: "150px",
					marginBlock: "8px",
					boxShadow: "0px 15px 15px -12px rgba(0,0,0,0.2)",
				}}>
				<AccordionSummary
					sx={{ bgcolor: "#FF3B3F" }}
					expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
					aria-controls='panel1a-content'
					id='panel1a-header'>
					<Typography variant='p' sx={{ color: "white", fontWeight: "500" }}>
						Language
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<FormControl>
						<FormGroup>
							<FormControlLabel
								control={
									<Checkbox
										checked={language.includes("English")}
										// onChange={handleLanguageChange}
										name='English'
										value='English'
									/>
								}
								label='English'
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={language.includes("Hindi")}
										// onChange={handleLanguageChange}
										name='Hindi'
										value='Hindi'
									/>
								}
								label='Hindi'
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={language.includes("Marathi")}
										// onChange={handleLanguageChange}
										name='Marathi'
										value='Marathi'
									/>
								}
								label='Marathi'
							/>
						</FormGroup>
					</FormControl>
				</AccordionDetails>
			</Accordion>
			<Accordion
				sx={{
					width: "150px",
					marginBlock: "8px",
					boxShadow: "0px 15px 15px -12px rgba(0,0,0,0.2)",
				}}>
				<AccordionSummary
					sx={{ bgcolor: "#FF3B3F" }}
					expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
					aria-controls='panel1a-content'
					id='panel1a-header'>
					<Typography variant='p' sx={{ color: "white", fontWeight: "500" }}>
						Genre
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<FormControl>
						<FormGroup>
							<FormControlLabel
								control={
									<Checkbox
										checked={genres.includes("Horror")}
										// onChange={handleGenreChange}
										name='Horror'
										value='Horror'
									/>
								}
								label='Horror'
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={genres.includes("Sci-Fi")}
										// onChange={handleGenreChange}
										name='Sci-Fi'
										value='Sci-Fi'
									/>
								}
								label='Sci-Fi'
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={genres.includes("Thriller")}
										// onChange={handleGenreChange}
										name='Thriller'
										value='Thriller'
									/>
								}
								label='Thriller'
							/>
						</FormGroup>
					</FormControl>
				</AccordionDetails>
			</Accordion>
			<Stack>
				<Button
					sx={{ width: "150px", marginTop: "20px" }}
					className='btncolor me-3'
					onClick={(event) => onSelectCategory(category)}>
					Apply Filters
				</Button>
				<Button
					variant='outlined'
					sx={{ width: "150px", marginTop: "10px" }}
					className='btncolor2 me-3'
					onClick={handleResetFilters}>
					Reset Filters
				</Button>
			</Stack>
		</div>
	);
};

export default FilterProducts;
