import React, { Component } from 'react';

import {
    Row, Col,Container
} from 'reactstrap';
import DemoCarousel from './DemoCarousel';
import NowTrending from './NowTrending'
import BestSeller from './BestSeller'
import NewArrival from './NewArrival'


export class Home extends Component {
    render() {
        return (
            <div>
                <DemoCarousel />
                <br></br>
                <h2><b><i>Now Trading</i></b></h2>
                <br></br>
                <div className='container' >
                    <Container >
                        <Row>
                            <NowTrending />
                        </Row>
                    </Container>
                </div>
                <br></br>
                <br></br>
                <h2><b><i>Best Seller</i></b></h2>
                <br></br>
                <div className='container' >
                    <Container >
                        <Row>
                            <BestSeller />
                        </Row>
                    </Container>
                </div>
                <br></br>
                <br></br>
                <h2><b><i>New Arrival</i></b></h2>
                <br></br>
                <div className='container' >
                    <Container >
                        <Row>
                            <NewArrival />
                        </Row>
                    </Container>
                </div>
                <br></br>
            </div>
        )
    }
}

export default Home
