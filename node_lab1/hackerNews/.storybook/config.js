import { configure, addDecorator } from '@storybook/react';

function loadStories() {
  require('../stories/hackerNews.js');
}

configure(loadStories, module);