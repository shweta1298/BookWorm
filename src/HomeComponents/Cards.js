import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';
import './Card.css';


export class Cards extends Component {
    render() {
        return (
            <React.Fragment>
                <Card style={{ width: "100%", height: "100%" }} >
                    <a href="https://www.ynharari.com/book/sapiens-2/">
                        <CardImg className='CardImg' style={{ width: "100%", height: "100%" }} src={this.props.object.Cover} alt="Card image cap" />
                    </a>

                    <CardBody  >
                        <a href="https://www.ynharari.com/book/sapiens-2/">
                            <CardTitle className='text-truncate'><b>{this.props.object.Title}-{this.props.object.Author.Author_Name}</b></CardTitle>
                        </a>

                        <CardSubtitle><b>₹{this.props.object.BasePrice}</b></CardSubtitle>

                    </CardBody>

                </Card>
            </React.Fragment>
        )
    }
}
export default Cards

//href="https://www.ynharari.com/book/sapiens-2/"
//<button className="card__btn">View Recipe</button>
//style={{ width: "100%", height: "100%" }}