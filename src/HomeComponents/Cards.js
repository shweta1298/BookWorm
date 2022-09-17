import React, { Component } from 'react'
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button, Row, Col
// } from 'reactstrap';
import './Card.css';

import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    ButtonBase
} from "@mui/material";
import { Navigate } from 'react-router-dom';



let tempid = -1;
export default function Cards(props) {

    const redirectToDiscription = () => {

        localStorage.setItem("bookid")
        ///employee/' + emp.Id
        Navigate('./FetchDiscription')

    }


    return (
        <React.Fragment>
            <ButtonBase>
                <Card 
                onClick={()=>{
                    tempid=props.object.Id;
                    redirectToDiscription()}}
                sx={{ width: "250px", height: "450px", marginBottom: "20px", bgcolor: "#fff6ff",borderColor:"#ff3b3f" }}>
                    <CardMedia
                        sx={{ maxHeight: "350px", maxWidth: "230px", paddingLeft: "20px", marginTop: "10px" }}

                        component="img"
                        //height="300px"
                        image={props.object.Path.BookPath + props.object.Cover}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className='text-truncate' sx={{ fontFamily: 'Raleway', fontSize:"18px" }}>
                            {props.object.Title}-{props.object.Author.Author_Name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{color:"#ff3b3f"}}>
                        <h6><b>₹{props.object.BasePrice}</b></h6>
                        </Typography>
                    </CardContent>

                </Card>
            </ButtonBase>
        </React.Fragment>
    )
}



