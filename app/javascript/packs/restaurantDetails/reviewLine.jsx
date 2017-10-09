import React from 'react';

export default class ReviewLine extends React.Component {
  render () {
    var review = this.props.review;
    return (
      <p>
        Name:<span>{review.reviewer}</span><br/>
        Rating: <span>{review.rating}</span><br/>
        Description:<span>{review.comment}</span>
      </p>
    );
  }
}
