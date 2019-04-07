import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import NewsForm from '../src/components/newsForm';
import NewsItem from '../src/components/newsItem';
import NewsList from '../src/components/newsList';

const post = {
    id: 1 ,
    title : 'Post 1.',
    link : 'http://www.foo.bar',
    username : 'jbloggs',
    comments : [],
    upvotes: 10
};

storiesOf('Hacker App/News Item', module)
    .add('default', () => <NewsItem post= { post }  />
    )
    .add('No hyperlink', () => <NewsItem post= { { ...post, link: ''} }  />
    )

storiesOf('Hacker App/News Form', module)
   .add('default', () =>  <NewsForm />
   )

   storiesOf('Hacker App/News List', module)
   .add('default', () => { 
     const defaultPosts = [
         { ...post, id: 1, title: 'Post 1', upvotes: 10 },
         { ...post, id: 2, title: 'Post 2', upvotes: 20 },
         { ...post, id: 3, title: 'Post 3', upvotes: 30 },
         { ...post, id: 4, title: 'Post 4', upvotes: 40 }
     ];
     return <NewsList posts= { defaultPosts }  />
 });