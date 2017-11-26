import React, { Component } from 'react';

 class Card extends Component {
  render() {
    return (
        <div className="card">
         <img className="card-img-top" src="https://dummyimage.com/600x400/000/fff" alt="pepe"/>
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
         </div>
    );
  }
};


export default Card;