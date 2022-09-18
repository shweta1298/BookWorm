import React, { Component } from 'react';
import {
    Row, Col,Container
} from 'reactstrap';

import Cards from './Cards';


class BestSeller extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            Books: []
        };

    }
    componentDidMount() {
        fetch('https://localhost:44356/api/NowTrending/3')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        Books: result
                    });
                }
            );
    }
    render() {
        return(
            <React.Fragment>


                {this.state.Books.map(bookdata=>
                   <Col sm='3'> 
                  <Cards key={bookdata.Id} object={bookdata}/>
                  </Col> 
                  )}
           
           </React.Fragment>

        )
    }
    
}
export default BestSeller;
//npm install bootstrap
//npm install -S react-router-dom