import { configure } from '@storybook/react';
import 'storybook-chromatic/storybook-addon';

import '../src/index.css';

const req = require.context('../src/components', true, /\.stories\.js$/);

// Chromatic: ./node_modules/.bin/chromatic test --storybook-addon --app-code="" --do-not-start

function loadStories() {
  //require('../src/stories');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
