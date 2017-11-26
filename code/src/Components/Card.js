import React, { Component } from 'react';

 class Card extends Component {
  render() {
    return (
        <div className="card" id = { this.props.id }>
         <img className="card-img-top" src={this.props.img} alt="pepe"/>
          <div className="card-body">
            <h4 className="card-title">{this.props.title}</h4>
            <p className="card-text">{this.props.description}</p>
          </div>
         </div>
    );
  }
};


export default Card;