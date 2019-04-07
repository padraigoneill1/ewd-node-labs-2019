import _ from 'lodash';

class StubAPI {
    constructor() {
        this.posts = [
            {  id: 1 ,
                title : 'India - Tiger population sees 30% increase.',
                link : 'http://www.bbc.com/news/world-asia-30896028',
                username : 'jbloggs',
                comments : [],
                upvotes : 10
            },
            { 
                id: 2,
                title : 'The button that is not.',
                link : 'http://blog.nuclearsecrecy.com/2014/12/15/button-isnt/',
                username : 'notme',
                comments : [],
                upvotes : 12
            },
            { 
                id: 3,
                title : 'Google Nears $1B Investment in SpaceX',
                link : null,
                username : 'notme',
                comments : [],
                upvotes : 12
            },
            { 
                id: 4,
                title : 'Coinbase Raises $75M from DFJ Growth, USAA, and More',
                link : 'http://blog.coinbase.com/post/108642362357/coinbase-raises-75m-from-dfj-growth-usaa-nyse',
                username : 'psmith',  
                comments : [],
                upvotes : 2
            }
        ] ;
    }

    getAll() {
        return this.posts ;
    }

    add(title, link) {
        let id = 1 ;
        let last = _.last(this.posts) ;
        if (last) {
            id = last.id + 1 ;
        }
        let len = this.posts.length ;
        let newLen = this.posts.push({ 
            id, title, link, 
            username: '', 
            comments: [], 
            upvotes: 0 }) ;
        return newLen > len ;
    }

    upvote(id) {
        let index = _.findIndex(this.posts, 
            (post) => post.id === id
        );   
        if (index !== -1) {                 
            this.posts[index].upvotes += 1 ;
            return true ;
        }
        return false ;
    }

    getPost(id) {
        let index = _.findIndex(this.posts, 
            (post) => post.id === id
        )   
        let result = index !== -1 ?                  
            this.posts[index] :
            null ;
        return result;
    }

    addComment(postId,c,n) {
        let post = this.getPost(postId ) ;
        let id = 1 ;
        let last = _.last(post.comments) ;
        if (last) {
            id = last.id + 1 ;
        }
        post.comments.push({ 'id': id,  
            comment: c , author: n, upvotes: 0 } ) ;
    }

    upvoteComment(postId,commentId) {
        let post = this.getPost(postId ) ;
        let index = _.findIndex(post.comments, 
            (c) => c.id === commentId
        );  
        if (index !== -1) {                 
            post.comments[index].upvotes += 1 ;
        }
    }
}

export default (new StubAPI() );