import React, { Component } from 'react';
import Card from './Card';

 class FlexBox extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <div class="d-inline-flex p-2">
        <Card/>
      </div>
      
    );
  }
};

export default FlexBox;