import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import MovieList from "./components/Movie";
import AppStyle from './App.css';

const MOVIES = [
  { key: "00000",
    title: "Avatar (2009)",
    image: "assets/imgs/avatar.jpg",
    overview: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    rating: 0,
    reviews: [
      {key: 1,
      name: "John Smith",
      text: "I really love this movie! Highly recommended!"},
      {key: 2,
        name: "James Daniels",
        text: "One of the best movies I've watched!"}
    ]
  },
  { key: "1111",
  title: "Avengers: Endgame (2019)",
  image: "assets/imgs/avengers_end.jpg",
  overview: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
  rating: 0,
  reviews: [
    {key: 1,
    name: "John101",
    text: "Highly recommended to watch!"},
    {key: 2,
      name: "Anne Smith",
      text: "Such a wonderful movie!"}
  ]
},
{ key: "22222",
  title: "Titanic (1997)",
  image: "assets/imgs/titanic.png",
  overview: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
  rating: 0,
  reviews: [
    {key: 1,
    name: "Denis T",
    text: "This movie is amazing!"},
    {key: 2,
      name: "Aaron Smith",
      text: "Great movie!"}
  ]
},
{ key: "33333",
  title: "Star Wars: Episode VII - The Force Awakens (2015)",
  image: "assets/imgs/starwars.jpg",
  overview: "As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.",
  rating: 0,
  reviews: [
    {key: 1,
    name: "Taylor S.",
    text: "More of a remake than a sequel, it relies on nostalgia and spectacle over actual characters and story."},
    {key: 2,
      name: "Leo Tierney",
      text: "The force is Average with this one!"}
  ]
},
{ key: "44444",
  title: "Avengers: Infinity War (2018)",
  image: "assets/imgs/avengers_infinity.jpg",
  overview: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
  rating: 0,
  reviews: [
    {key: 1,
    name: "RJ",
    text: "Best movie of the MCU, incredible from start to finish."},
    {key: 2,
      name: "Mark S.",
      text: "EMOTIONAL ROLLER COASTER!"}
  ]
},
{ key: "55555",
  title: "Avatar: The Way of Water (2022)",
  image: "assets/imgs/avatar_wayofwater.jpg",
  overview: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
  rating: 0,
  reviews: [
    {key: 1,
    name: "Jason B.",
    text: "Visually stunning and action packed but story is light."},
    {key: 2,
      name: "Natalie F.",
      text: "A beautiful highly entertaining movie, but a bit cheesy and cliche."}
  ]
},
{ key: "66666",
  title: "Spider-Man: No Way Home (2021)",
  image: "assets/imgs/spiderman.jpg",
  overview: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
  rating: 0,
  reviews: [
    {key: 1,
    name: "Laura A.",
    text: "Phenomenal conclusion!"},
    {key: 2,
      name: "Andy Taylor",
      text: "With Great Power Comes Great Responsibility!"}
  ]
},
{ key: "77777",
  title: "Jurassic World (2015)",
  image: "assets/imgs/jurrasic.jpg",
  overview: "A new theme park, built on the original site of Jurassic Park, creates a genetically modified hybrid dinosaur, the Indominus Rex, which escapes containment and goes on a killing spree.",
  rating: 0,
  reviews: [
    {key: 1,
    name: "Adam101",
    text: "Highly entertaining and a true sequel to the original."},
    {key: 2,
      name: "Dennis201",
      text: "Loved it!"}
  ]
},
{ key: "88888",
  title: "The Lion King (2019)",
  image: "assets/imgs/lionking.jpg",
  overview: "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
  rating: 0,
  reviews: [
    {key: 1,
    name: "Kevon S.",
    text: "Good but not great."},
    {key: 2,
      name: "Shannon M.",
      text: "Falls Short."}
  ]
},
{ key: "99999",
  title: "The Avengers (2012)",
  image: "assets/imgs/avengers.jpg",
  overview: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
  rating: 0,
  reviews: [
    {key: 1,
    name: "Carl Smith",
    text: "A Stunning Visual Effects-Driven Spectacle."},
    {key: 2,
      name: "MiaDan112",
      text: "Not 100% perfect but still an outstanding film in so many ways."}
  ]
}
]


function App() {
  return (
    <Container fluid className={AppStyle}>
      <Row>
      <h1> Top 10 Highest Grossing Movies in the World</h1>
      </Row>
      <Row>
        <MovieList movies={MOVIES}/>
      </Row>
    </Container>
  );
}

export default App;
