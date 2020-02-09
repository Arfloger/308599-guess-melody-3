import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const Settings = {
  errorCount: 23,
};

ReactDOM.render(<App errorsCount={Settings.errorCount}/>, document.getElementById(`root`));
