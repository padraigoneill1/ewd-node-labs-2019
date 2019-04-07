import React, { Component } from 'react';
import './newsItem.css';
import { Link } from 'react-router-dom';

export default class NewsItem extends Component {
    handleVote = () =>  this.props.upvoteHandler(this.props.post.id);

render() {
    let line ;
    if (this.props.post.link ) {
        line = <a href={this.props.post.link} >
                {this.props.post.title} </a> ;
    } else {
        line = <span>{this.props.post.title} </span> ;
    }
    return (
        <div >
        <span className="glyphicon glyphicon-thumbs-up ptr" onClick={this.handleVote}/>
            {this.props.post.upvotes}
        <span className="newsitem" >{line}
            <span>
            <Link to={'/posts/' + this.props.post.id }>Comments</Link>
            </span>
        </span>
        </div>  
        );
    }
} 