import React, { Component } from 'react';

 class Card extends Component {
  render() {
    return (
        <div className="card" id = { this.props.id }>
         <img className="card-img-top" src={this.props.img} alt="img-not-found" id = { this.props.id }/>
          <div className="card-body" id = { this.props.id }>
            <h4 className="card-title" id = { this.props.id }>{this.props.title}</h4>
            <p className="card-text" id = { this.props.id }>{this.props.description}</p>
          </div>
         </div>
    );
  }
};


export default Card;