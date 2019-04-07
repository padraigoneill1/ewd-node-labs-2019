import React, {
    Component
} from 'react';
import NewsList from './components/newsList';
import Form from './components/newsForm';
import * as api from './api';
import _ from 'lodash';

export default class App extends Component {

    state = {posts: [{}]};

    componentDidMount() {
        api.getAll().then(resp => {
            this.setState({
                posts: resp.posts
            });
        }).catch(console.error);
    };

    addNewsItem = (title, link) => {
        api.add(title,link)
        .then(resp => {
                      const newPost = {"id":resp.id,"title":title,"link":link,"upvotes":0, "comments":[]};
                      this.setState({posts: this.state.posts.concat([newPost])});
        }).catch(console.error)
      };

      incrementUpvote = (id) => {
        api.upvote(id).then(resp=> {
               var upvotedPost = _.find(this.state.posts, post=>post.id === id);
               upvotedPost.upvotes++;  
               this.setState({})
             }) ;
      };

    render() {
        const posts = _.sortBy(this.state.posts, post =>
            post.upvotes);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-md-offset-1">
                        <NewsList posts={posts} 
                        upvoteHandler={this.incrementUpvote} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9 col-md-offset-1">
                        <Form handleAdd={ this.addNewsItem } />
                    </div>
                </div>
            </div>
        );
    }
}