import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const errorsCount = 5;

it(`<App/> should render with errorCount`, () => {
  const tree = renderer
    .create(<App
      errorsCount={errorsCount}
      onWelcomeButtonClick={() => {}}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
