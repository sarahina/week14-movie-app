import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

import ReviewList from "../Review";
import Movies from "./style.css";

function MovieList({ movies }) {
  return (
    <ListGroup horizontal className={Movies}>
      {movies.map((movie) => (
        <Movie {...movie} />
      ))}
    </ListGroup>
  );
}

function Movie(props) {
  const { rating, reviews } = props;
  const [panel, setPanel] = useState("details");
  const [rate, setRating] = useState(rating);
  const [reviewList, setReviews] = useState(reviews);

  if (panel === "overview") {
    return <OverviewPanel {...props} setPanel={setPanel} />;
  } else if (panel === "reviews") {
    return <ReviewPanel {...props} reviews={reviewList} setReviews={setReviews} setPanel={setPanel} />;
  } else {
    return (
      <DetailPanel
        {...props}
        rating={rate}
        setPanel={setPanel}
        setRating={setRating}
      />
    );
  }
}

function DetailPanel({ image, rating, overview, title, setPanel, setRating }) {
  return (
    
    <Card className ="movieCard" style={{ width: "20rem", minHeight: "40rem" }}>
      <Card.Img className="logo" variant="top" src={image} /> 
      <Card.Body className="container">
        <Card.Title className="movieTitle">{title}</Card.Title>
        <Card.Text className="description">{overview}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          RATE THIS MOVIE:<ReactStars 
            value={rating}
            count={5}
            onChange={setRating}
            size={24}
            activeColor="#ffd700"
          /> 
        </ListGroup.Item>
      </ListGroup>
      <Card.Footer>
        <Card.Link className="feedback" onClick={() => setPanel("reviews")}> See All Reviews</Card.Link>
      </Card.Footer>
    </Card>
  );
}

function OverviewPanel({ overview, setPanel }) {
  return (
    <Card style={{ width: "20rem", minHeight: "40rem" }}>
      <Card.Header>Overview</Card.Header>
      <Card.Body>{overview}</Card.Body>
      <Card.Footer>
        <Card.Link className="feedback" onClick={() => setPanel("reviews")}>See All Reviews</Card.Link>
        <Card.Link className="feedback" onClick={() => setPanel("details")}>Movie</Card.Link>
      </Card.Footer>
    </Card>
  );
}

function ReviewPanel({ reviews, setReviews, setPanel }) {
  return (
    <Card style={{ width: "20rem", minHeight: "40rem" }}>
      <Card.Header>Reviews</Card.Header>
      <Card.Body>
        <ReviewList reviews={reviews} setReviews={setReviews} />
      </Card.Body>
      <Card.Footer>
        <Card.Link className="feedback" onClick={() => setPanel("overview")}>Overview</Card.Link>
      </Card.Footer>
    </Card>
  );
}

export default MovieList;
