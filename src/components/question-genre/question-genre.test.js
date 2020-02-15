import React from 'react';
import renderer from 'react-test-renderer';
import QuestionGenre from './question-genre.jsx';

it(`<QuestionGenre/> render correctly`, () => {
  const tree = renderer
  .create(
      <QuestionGenre
        question={{
          answers: [{
            src: ``,
            genre: ``,
          }],
          genre: ``,
          type: `genre`,
        }}
        onAnswer={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
