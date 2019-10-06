import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Segment from './Segment';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
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
      <Segment>
        <div className="ui placeholder segment">
          <div className="ui icon header">
            <i className="pdf file outline icon"></i>
            No documents are listed for this customer.
                    </div>
          <div className="ui primary button">Add Document</div>
        </div>
      </Segment>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
