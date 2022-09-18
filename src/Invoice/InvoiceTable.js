import { DataGrid } from '@mui/x-data-grid';
import Button from '@material-ui/core/Button';
import { Container, Row, Col } from 'react-bootstrap';
import './InvoiceTable.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import React from 'react';
//import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
//import {AccountBalanceWalletIcon, PlaylistRemoveIcon ,CurrencyRupeeIcon} from '@mui/icons-material';
import PayNowButton from './Payments';
import { Navigate } from 'react-router-dom';

const columns = [

    { field: 'id', headerName: 'Sr no.', width: 90 },
    { field: 'Title', headerName: 'BookName', width: 250 },
    { field: 'RentalPackage', headerName: 'Rental Package', width: 200 },
    { field: 'Price', headerName: 'Price (in Rs)', width: 200 }
];
let tempList = [];
let PurchaseList = [];
//let temp1=[];


const InvoiceTable = () => {
    const [Books, setBooks] = useState([]);
    const [postBooks, setPostBooks] = useState([]);
    const [Total, setTotal] = useState(0);
    const [errorMsg, seterrorMsg] = useState("");
  

    function calTotal() {
        let tempTotal = 0;
        Books.forEach((item) => {
            tempTotal = tempTotal + item.Price;
        })
        console.log(tempTotal)
        setTotal(tempTotal)
    }

    function addListItem(list, purchaseType) {
        for (let i = 0; i < list.length; i++) {
            console.log(list[i].Book.SalePrice)
            tempList.push({
                id: (i + 1),
                Id: list[i].Book.Id,
                Title: list[i].Book.Title,
                RentalPackage: null, // purchaseTypes[i].rentalPackage,  //expairy date
                Price: list[i].Book.SalePrice  // item.purchaseType[i].purchaseType==="Rent"? item[i].Book.RentPrice*purchaseType.rentalPackage : item[i].SalePrice
            });
        }
        setBooks(tempList);
    }

    useEffect(() => {
        if (localStorage.getItem("Bookdata") !== null) {
            let book = localStorage.getItem("Bookdata");
            let purchaseType = localStorage.getItem("purchaseType")
            tempList.push({
                id: 1,
                Id: book.Id,
                Title: book.Title,
                RentalPackage: null,//purchaseType[i].rentalPackage,  //expairy date
                Price: book.SalePrice  // purchaseType.purchaseType==="Rent"? book.RentPrice*purchaseType.rentalPackage : book.SalePrice
            });
            setBooks(tempList);
            setPostBooks(book);
        }
        else {
            if (localStorage.getItem("CustomerId") == null) {
                //  navigate("/")
            }
            const CustomerId = 1;//localStorage.getItem("CustomerId")
            fetch("https://localhost:44356/api/GetFromCart/" + CustomerId)
                .then(res => res.json())
                .then((result) => {
                    //result.record.forEach(addListItem);
                    console.log(result)
                    let purchaseTypes = localStorage.getItem("purchaseType");
                    addListItem(result, purchaseTypes);
                    setPostBooks(result);
                })
        }
        calTotal();
    }, [Books]);


    const onBuyHandler = () => {
        if (localStorage.getItem("CustomerId") == null) {
            //  navigate("/")
        }
        const arrIndex = Books.map(element => element.Id);
        const temp = postBooks.filter((postItem) => arrIndex.indexOf(postItem.Id) !== -1)
        setPostBooks(temp);
        let Sales = [];
        let tempdate = new Date();
        let Expiry_date = 0;
        let purchaseType = localStorage.getItem("purchaseType");
        for (let i = 0; i < temp.length; i++) {
            if (purchaseType[i].purchaseType === "Rent") {
                if (purchaseType[i].rentalPackage === 15)
                    Expiry_date = tempdate.getDate() + 15;
                else
                    Expiry_date = tempdate.getDate() + 30;

                tempdate.setDate(Expiry_date);
            }
            else if (purchaseType[i].purchaseType === "Buy") {
                tempdate = null;
            }
            
            Sales.push({
                Purchase_date: new Date(),
                Expiry_date: tempdate,
                BookId: temp[i].BookId,
                PurchaseTypeId: purchaseType[i].purchaseType==="Rent"?8:7
            })
        }
       let Order = {
            TotalPayableAmt : Total,
            Status: true,
            CustomerId : localStorage.getItem("CustomerId"),
            Sale : Sales
        }
        console.log(temp)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Order)
        };
        fetch('https://reqres.in/api/posts', requestOptions)
            .then(response => response.json())
            .then(data => data);
    }
    const OnRemoveHandler = () => {
        if (PurchaseList.length >= 1) {
            PurchaseList = PurchaseList.map((obj, index) => {
                obj.id = index + 1;
                return obj;
            })
            setBooks(PurchaseList);
            seterrorMsg("")
        }
        if (Books.length === 1 || PurchaseList.length === 0) {
            seterrorMsg("list should contain at least one item");
        }
    }

    return (

        <div className=' mt-4 ' style={{ height: 400 }}>
            <h3>Invoice</h3>
            <DataGrid
                className='alcenter'
                getRowId={(row) => row.Id}  // to give unique id to each row
                rows={Books}
                columns={columns}
                pageSize={10}
                checkboxSelection
                /*  onSelectionModelChange={(arr) => { console.log(arr); onRowsSelectionHandler(arr) }} */
                onSelectionModelChange={(ids) => {
                    const selectedIDs = new Set(ids);
                    console.log(selectedIDs);
                    PurchaseList = Books.filter((row) =>
                        !selectedIDs.has(row.Id)
                    );
                    // console.log(PurchaseList);
                }}
            />
            <div>
                <p style={{ color: '#2866a4' }}>
                    <i>select checkbox of item which you want to remove from list</i>
                </p>
                <Button
                    size="small"
                    onClick={OnRemoveHandler}
                    style={{ paddingLeft: "10px", paddingRight: "10px", fontSize: "12px" }}
                    className='btncolor'>
                    <PlaylistRemoveIcon /> Remove selected
                </Button>
                <p className='text-danger'> {errorMsg}</p>
            </div>
            <div className='mt-4 pt-3 square border '>
                <Container >
                    <Row className="justify-content-md-center" >
                        <Col sm={7} > <b style={{ fontSize: "20px" }}> Total amount to pay =<CurrencyRupeeIcon fontSize='small' />{Total} </b>
                            <p> <i style={{ color: '#2866a4' }}>(include all *Taxes.)</i></p>
                        </Col>
                        <Col >
                            {/* <Button
                                size="large"
                                className='btncolor '
                                onClick={onBuyHandler}>
                                <AccountBalanceWalletIcon fontSize="small" className='me-2' />
                                Pay Now  
                            </Button> */}
                            <PayNowButton onBuyHandlerCall={onBuyHandler} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
export default InvoiceTable;
  //  rowsPerPageOptions={[5]}
  //  pageSize={5}

  //dependency
  //npm install @material-ui/core --legacy-peer-deps
  //npm install @mui/x-data-grid --legacy-peer-deps
  //npm install @mui/material @emotion/react @emotion/styled --legacy-peer-deps
  //npm install bootstrap --legacy-peer-deps