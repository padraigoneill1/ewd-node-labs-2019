import React, { Component } from 'react';
import NewsItem from '../newsItem';
import './newsList.css'

export default class NewsList extends Component {
    render() {
        let displayedNewsItems =  this.props.posts.map( 
            (newsItem) => <NewsItem key={newsItem.id} post={newsItem} upvoteHandler={this.props.upvoteHandler}/>
         ) ; 
        return (
          <div className="col-md-10">
            <ul className="posts">
                {displayedNewsItems}
            </ul>
          </div>
        );
    }
}