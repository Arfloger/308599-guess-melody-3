import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import questions from './mock/question';

ReactDOM.render(
    <App
      questions={questions}
    />, document.getElementById(`root`));
