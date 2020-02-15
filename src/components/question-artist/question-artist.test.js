import React from 'react';
import renderer from 'react-test-renderer';
import QuestionArtist from './question-artist.jsx';

it(`<QuestionArtist/> should render with question and onAnswer`, () => {
  const tree = renderer
    .create(
        <QuestionArtist
          question={{
            type: `artist`,
            answers: [{
              picture: ``,
              artist: ``,
            }],
          }}
          onAnswer={() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
