import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from './Card';

class DashBoard extends Component {
    render() {
        var cols = [];
        var sizeCards = 10;
       
        for (var i = 0; i <sizeCards; i++){
            cols.push(<Col xs className="box" key={i}> <Card /> </Col>);
        }

        return (
            <Grid fluid className="wrapper-flex" >
                <Row>
                    { cols }
                </Row>
            </Grid>
        );
    }
}

export default DashBoard;