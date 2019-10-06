import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" />
      <CommentDetail author="Ivan" />
      <CommentDetail author="John" />
      <CommentDetail author="Radka" />
      <CommentDetail author="Kostya" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
