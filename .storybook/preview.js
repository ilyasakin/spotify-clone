import { configure, addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import '../src/styles/index.scss';
import '../src/styles/App.scss';

addDecorator(StoryRouter());

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
