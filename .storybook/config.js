import { configure } from '@storybook/react';
import '../src/index.css';

const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(fileName => req(fileName));
}

configure(loadStories, module);
