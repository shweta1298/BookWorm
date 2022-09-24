import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { Typography, Box } from "@mui/material";
import "./styles.css";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
// import { LibraryAdd } from "@mui/icons-material";
export default function SelectRentDuration(props) {
	const navigate = useNavigate();
	return (
		// <Dropdown
		// 	//className='btncolor'
		// 	as={ButtonGroup}>
		// 	<Dropdown.Toggle
		// 		split
		// 		className='btncolordropdown'
		// 		id='dropdown-split-basic'
		// 	/>
		// 	<Button className='btncolor2'>
		// 		{/* <LibraryAddIcon
		// 			className='btnIcon ms-1'
		// 			sx={{ width: "22px", height: "20px", justifyContent: "start" }}
		// 		/> */}

		// 		<Typography className='btnLabel'>RENT NOW</Typography>
		// 	</Button>

		// 	<Dropdown.Menu variant='dark'>
		// 		<Dropdown.Item href='#/action-1' value={15}>15 Days</Dropdown.Item>
		// 		<Dropdown.Item href='#/action-2' value={30}>30 Days</Dropdown.Item>
		// 	</Dropdown.Menu>
		// </Dropdown>
		<FormControl >
			<Select
				className="btncolor2"
				defaultValue={15}
				displayEmpty
				size='small'
				
			>
				<MenuItem value={15}
				onClick={() => {
					//tempid = product.Id;
					//gotoinvoice(product)
					const CustomerId = localStorage.getItem("CustomerId")
					if (CustomerId == null) {
						navigate('/ProductPage');
						alert("please login")
						//localStorage.setItem("openlogin",true);
					}
					else{
					localStorage.setItem("Bookid", props.data.Id);
					localStorage.setItem("purchaseType",  15)
					navigate('/InvoiceTable');
					}
				}}
				>Rent (15 days)</MenuItem>

				<MenuItem value={30}
				onClick={() => {
					//tempid = product.Id;
					//gotoinvoice(product)
					const CustomerId = localStorage.getItem("CustomerId")
					if (CustomerId == null) {
						navigate('/ProductPage');
						alert("please login")
						//localStorage.setItem("openlogin",true);
					}
					else{
					localStorage.setItem("Bookid", props.data.Id);
					localStorage.setItem("purchaseType",30 )
					navigate('/InvoiceTable');
					}
				}}
				>Rent (30 days)</MenuItem>
			</Select>

		</FormControl>

	);
};


