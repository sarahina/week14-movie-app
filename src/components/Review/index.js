import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';

function ReviewList({ reviews, setReviews }) {
  const [rev, setReview] = useState("");

  function reviewSubmit() {
    console.log(rev)
    if ( rev !== "" ) {
      let key = reviews.length +1
      setReviews([...reviews, {name: "", key: key, text: rev}])
      setReview("")
    }
  }

  return (
    <div>
      <ListGroup>
        {reviews.map((review) => (
          <Review {...review} />
        ))}
      </ListGroup>

      <div style={{ minHeight: "100%" }}>
        <form onSubmit={reviewSubmit}>
          <textarea value={rev} placeholder="Leave a review" onChange={(e)=>setReview(e.target.value)} />
          <Button as="input" type="button" value="Submit"  onClick={reviewSubmit} />
        </form>
      </div>
    </div>
  );
}

function Review({ name, text }) {
  return (
    <ListGroup.Item>
      <b>{name}</b> {text}
    </ListGroup.Item>
  );
}

export default ReviewList;
