import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'

import CommentDetail from './components/CommentDetail'
import ApprovalCard from './components/ApprovalCard';


const App = () => {
    return (
        

        <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail 
            author="Alex"
            commentTime="Today at 4:45PM" 
            comment="Nice blog post"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
          <ApprovalCard>
          <CommentDetail 
            author="Alex"
            commentTime="Today at 4:45PM" 
            comment="Nice blog post"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))