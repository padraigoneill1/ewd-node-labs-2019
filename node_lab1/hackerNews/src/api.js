import axios from 'axios';

export const upvote = postId => {
  return axios.post(`/api/posts/${postId}/upvote`)
              .then(resp => resp.data);
};

export const getAll = () => {
   return axios('/api/posts')
              .then(resp => resp.data);
};

export const getPost = postId => {
  return axios.get(`/api/posts/${postId}`)
              .then(resp => resp.data);
};

export const add = (newTitle, newLink) => {
  return axios.post('/api/posts', { title: newTitle, link: newLink })
              .then(resp => resp.data);
};