import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

it(`<WelcomeScreen/> should render with errors`, () => {
  const tree = renderer
  .create(<WelcomeScreen
    errors={3}
    onWelcomeButtonClick={() => {}}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
