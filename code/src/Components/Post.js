import React, { Component } from 'react';
import cards from '../Assests/cards';
import { Doughnut } from 'react-chartjs-2';

class Post extends Component {
    render() {
        debugger;
        //parsing of the url parameter
        var id = this.props.location.search;
        id = id.split('=');
        var card  = cards[id[1]];
        var post = card.cardPost;

        var title = post.postTitle;
        var img = post.postImageUrl;
        var description = post.postDescription;
        const data = {
            labels: [
                'Red',
                'Green',
                'Yellow'
            ],
            datasets: [{
                data: card.cardGraph.data,
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
            }],
          text: '23%'
        };


        return (
            <div>
                <img src = { img } className="post-img"/>
                <a href="/">Go Back</a>
                <h3> { title } </h3>
                <p> { description } </p> {/*options = { chartOptions }*/ }
                <Doughnut className="post-chart" data = { data }  /> 
            </div>
        );
    }
}

export default Post;