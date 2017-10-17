import React from 'react';

export default function ReviewLine ({review}) {
  return (
    <p className='review-line'>
      Name: <span>{review.reviewer}</span><br/>
      Rating: <span>{review.rating}</span><br/>
      Description: <span>{review.comment}</span>
    </p>
  );
}
