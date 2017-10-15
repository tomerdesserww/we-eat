import React from 'react';

export default function ReviewLine ({review}) {
  return (
    <p>
      Name:<span>{review.reviewer}</span><br/>
      Rating: <span>{review.rating}</span><br/>
      Description:<span>{review.comment}</span>
    </p>
  );
}
