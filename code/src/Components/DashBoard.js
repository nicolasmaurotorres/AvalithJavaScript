import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from './Card';
import cards from '../Assests/cards';

class DashBoard extends Component {
    constructor(props){
        super(props);

        this._openPost = this._openPost.bind(this);
    }

    _openPost(event){
        event.preventDefault();
        debugger;
        this.props.history.push('/post?id='+event.target.id); //redirect you
    }

    render() {
        var cols = [];
        for (var i = 0; i <cards.length; i++){
            cols.push(  <Col xs  //auto size cards
                             className="box" 
                             onClick = { this._openPost } 
                             key = { cards[i].cardId } 
                            > 
                              <Card img = { cards[i].cardImageUrl } 
                                    title = { cards[i].cardTitle } 
                                    description = { cards[i].cardDescription }
                                    id = { cards[i].cardId - 1} /> 
                        </Col>);
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