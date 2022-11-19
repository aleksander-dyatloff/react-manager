import { lightTheme } from '@styles/theme.css';
import '@styles/global.css';
import { Args, ReactFramework } from '@storybook/react';
import { DecoratorFunction, Parameters } from '@storybook/csf';
import React from 'react';

export const parameters: Parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators: DecoratorFunction<ReactFramework, Args>[] = [
  (Story) => (
    <div className={lightTheme}>
      <Story /> 
    </div>
  ),
];