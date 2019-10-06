import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        avatar={faker.image.avatar()}
        comment={faker.hacker.phrase()} />
      <CommentDetail
        author="Ivan"
        timeAgo="Today at 2:15PM"
        avatar={faker.image.avatar()}
        comment={faker.hacker.phrase()} />
      <CommentDetail
        author="John"
        timeAgo="Yesterday at 12:35PM"
        avatar={faker.image.avatar()}
        comment={faker.hacker.phrase()} />
      <CommentDetail
        author="Radka"
        timeAgo="Monday at 5:00PM"
        avatar={faker.image.avatar()}
        comment={faker.hacker.phrase()} />
      <CommentDetail
        author="Kostya"
        timeAgo="Friday at 6:05PM"
        avatar={faker.image.avatar()}
        comment={faker.hacker.phrase()} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
