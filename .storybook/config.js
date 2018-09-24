import { configure } from '@storybook/react';
import '../src/index.css';
import 'storybook-chromatic/storybook-addon';

const req = require.context('../src/components', true, /\.stories\.js$/);

// Chromatic: ./node_modules/.bin/chromatic test --storybook-addon --app-code="" --do-not-start

function loadStories() {
  //require('../src/stories');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
