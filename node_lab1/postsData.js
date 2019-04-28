import postModel from './api/posts/postsModel';

const posts = [
         {id: 1,
           title: 'India - Tiger population sees 30% increase.',
           link: 'http://www.bbc.com/news/world-asia-30896028',
           username: 'jbloggs',
            comments: [],
            upvotes: 10,
          },
         {
            id: 2,
            title: 'The button that is not.',
            link: 'http://blog.nuclearsecrecy.com/2014/12/15/button-isnt/',
            username: 'notme',
            comments: [],
            upvotes: 12,
          },
          {
            id: 3,
            title: 'Google Nears $1B Investment in SpaceX',
            link: null,
            username: 'notme',
            comments: [],
            upvotes: 12,
          },
          {
            id: 4,
            title: 'Coinbase Raises $75M from DFJ Growth, USAA, and More',
            link: 'http://blog.coinbase.com/post/108642362357/coinbase-raises-75m-from-dfj-growth-usaa-nyse',
            username: 'psmith',
            comments: [],
            upvotes: 2,
          },
      ];
export const loadPosts = () => {
postModel.find({}).remove(function() {
    postModel.collection.insert(posts, (err, docs)=>{
    if (err) {
      console.log(`failed to Load Post Data`);
    } else {
      console.info(`${posts.length} posts were successfully stored.`);
    }
  });
});
};
