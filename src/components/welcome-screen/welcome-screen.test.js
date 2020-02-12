import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen';

const errors = 5;

it(`<WelcomeScreen/> should render errors`, () => {
  const tree = renderer
  .create(<WelcomeScreen
    errors={errors}
    onWelcomeButtonClick={() => {}}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
