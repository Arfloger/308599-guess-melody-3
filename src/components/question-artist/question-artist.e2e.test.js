import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuestionArtist from './question-artist.jsx';

configure({
  adapter: new Adapter(),
});

it(`Click on user answer should pass to the callback data-object from which this answer was created`, () => {
  const onAnswer = jest.fn();
  const question = {
    type: `artist`,
    answers: [{
      picture: ``,
      artist: ``,
    }],
  };
  const userAnswer = {
    artist: ``,
    picture: ``,
  };

  const questionArtist = shallow(
      <QuestionArtist
        question={question}
        onAnswer={onAnswer}
      />
  );

  const artistInputs = questionArtist.find(`input`);
  const answerOne = artistInputs.at(0);

  answerOne.simulate(`change`, {preventDefault() {}});

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
});
