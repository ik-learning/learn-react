import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo="Today at 4:45PM"
          avatar={faker.image.avatar()}
          comment={faker.hacker.phrase()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo="Today at 2:15PM"
          avatar={faker.image.avatar()}
          comment={faker.hacker.phrase()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo="Yesterday at 12:35PM"
          avatar={faker.image.avatar()}
          comment={faker.hacker.phrase()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo="Monday at 5:00PM"
          avatar={faker.image.avatar()}
          comment={faker.hacker.phrase()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo="Friday at 6:05PM"
          avatar={faker.image.avatar()}
          comment={faker.hacker.phrase()} />
      </ApprovalCard>

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
