import React, { Component } from 'react';

 class Card extends Component {
  render() {
    return (
        <div class="card">
         <img class="card-img-top" src="https://dummyimage.com/600x400/000/fff" alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
         </div>
    );
  }
};


export default Card;