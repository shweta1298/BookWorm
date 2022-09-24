
import "./Page.css";

import { useNavigate } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { Component, useState, useRef, useEffect } from "react";

let tempid = 1;
export default function Description(props) {
	const navigate = useNavigate();

	const [cartadd, setCartadd] = useState(false);

	//const handleAddToCart = () => { };
	const ref = useRef();

	const addtoCart = () => {

		const CustomerId = localStorage.getItem("CustomerId")
		if (CustomerId == null) {
			navigate('/FetchDiscription');
			alert("please login")
			//localStorage.setItem("openlogin",true);
		}
		else {

			setCartadd(!cartadd)
			if (cartadd === false) {
				fetch('https://localhost:44356/api/AddtoCart', {
					method: 'POST',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						BookId: tempid,
						CustomerId: CustomerId,
						PurchaseTypeId: 2
					})
				}).then(res => res.json()).then((result) => {
					//console.warn("result", result);
					console.log(result);
				})
				ref.current.textContent = "Added To Cart"
			}
			else {

				fetch('https://localhost:44356/api/RemoveFromCart/?CustomerId=' + CustomerId + '&BookId=' + tempid,
					{ method: 'Delete' })
					.then(response => response.json())
					.then(response => {

						//console.warn("response", response);
						console.log(response);
					});
				ref.current.textContent = "Add To Cart"
			}





		}
	}


	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='body ' width='40%' height='150'>
					<div className='row g-0' width='60%' height='250'>
						<div className='col-md-3'>
							<img
								src={props.object.Path?.BookPath + props.object?.Cover}
								id='img1'
								alt='abc'
								className='img-fluid rounded-start'
								width='75%'
								height='330'
							/>
						</div>
						<div className='col-md-5'>
							<div className='card-body col-md-12'>
								<h3
									className='card-title'
									style={{
										fontWeight: "600",
										fontSize: "30px",
										fontFamily: "Raleway",
									}}>
									{props.object.Title}
								</h3>

								<h3
									className='card-title'
									style={{
										fontWeight: "500",
										fontSize: "20px",
										fontFamily: "Raleway",
									}}>
									{props.object?.Author?.Author_Name}
								</h3>

								<h3
									className='card-title'
									style={{
										fontWeight: "500",
										fontSize: "15px",
										fontFamily: "Raleway",
									}}>
									{props.object.TotalPages}
								</h3>

								<h3
									className='card-title'
									style={{
										fontWeight: "500",
										fontSize: "15px",
										fontFamily: "Raleway",
									}}>
									Price: ₹{props.object.SalePrice}
								</h3>

								<h3
									className='card-title'
									style={{
										fontWeight: "500",
										fontSize: "15px",
										color: "#ff3b3f",
										fontFamily: "Raleway",
									}}>
									Rent Price: ₹{props.object.RentPrice} per/day
								</h3>

								<div
									style={{
										marginLeft: "280px",
										marginTop: "130px",
									}}>
									{/* <div>
											<tr>
												<td align='left'>
													<input type='radio' value='15 Days' name='rd' />
													<span> 15 Days &nbsp;</span>
													<input type='radio' value='30 Days' name='rd' />
													<span> 30 Days &nbsp; </span>
												</td>
											</tr>
										</div> */}

									<FormControl sx={{marginRight:"240px", marginBottom:"20px"}} >
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
														navigate('/FetchDiscription');
														alert("please login")
														//localStorage.setItem("openlogin",true);
													}
													else {
														localStorage.setItem("Bookid", props.object.Id);
														localStorage.setItem("purchaseType", 15)
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
														navigate('/FetchDiscription');
														alert("please login")
														//localStorage.setItem("openlogin",true);
													}
													else {
														localStorage.setItem("Bookid", props.object.Id);
														localStorage.setItem("purchaseType", 30)
														navigate('/InvoiceTable');
													}
												}}
											>Rent (30 days)</MenuItem>
										</Select>

									</FormControl>

									<div
										className='btn-toolbar'
										role='toolbar'
										aria-label='Toolbar with button groups'>
										{/* <div
												className='btn-group me-2 '
												role='group'
												aria-label='First group'>
												<button
													type='button'
													className='btn btncolor '
												// onClick={() => {
												// 	tempid = props.object.Id;
												// 	gotoinvoice(product);

												// 	localStorage.setItem("Bookid", props.object.Id);
												// 	localStorage.setItem("purchaseType", 15);
												// 	navigate("/InvoiceTable");
												// }}


												>
													RENT NOW
												</button>
											</div> */}


										<div
											className='btn-group me-2 '
											role='group'
											aria-label='Second group'>
											<button
												type='button'
												className='btn btncolor'

												onClick={() => {
													//tempid = product.Id;
													//gotoinvoice(product)
													const CustomerId = localStorage.getItem("CustomerId")
													if (CustomerId == null) {
														navigate('/FetchDiscription');
														alert("please login")
														//localStorage.setItem("openlogin",true);
													}
													else {

														localStorage.setItem("Bookid", props.object.Id);

														navigate('/InvoiceTable');
													}
												}}

											>
												Buy Now
											</button>
										</div>
									</div>
									<br></br>
									<div
										className='btn-group me-2 '
										role='group'
										aria-label='Third group'>
										<button
											type='button'
											class='btn btncolor btn-lg'
											style={{marginRight:"240px"}}
											ref={ref}
											onClick={() => {
												tempid = props.object.Id;
												addtoCart()

											}}>
											Add To Cart
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='card text-center' style={{ textAlign: "justify" }}>
				<h4>Description</h4>
				<div>{props.object.Description}</div>
			</div>
		</div>
	);
}

