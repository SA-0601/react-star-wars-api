import {useState, useEffect} from 'react';
import {getAllStarships} from './services/sw-api';
import StarshipCard from './components/StarshipCard';
import './App.css';
import Container from 'react-bootstrap/Container';
import {Row,Col} from "react-bootstrap";

function App() {

  const [starships, setStarships] = useState([]);

 
  // console.log(starship);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllStarships();
      setStarships(data.results);
    };
    fetchData();
  }, []);


  // console.log(starship.results);
  // const starships = starship.results;
  // console.log(starships);
  // const cards = starships.map((ele,i) => {
  //   return (
  //   <StarShipCard {...ele}/>
  // )})

  return (
    <div className="App">
      <h2 className='text-white mt-2 bg-black'>STARSHIPS FROM STARWARS</h2>
    <Container className='mt-5'>
      <Row className='justify-content-center' xs={1} sm={2} md={3} lg={3} xl={4}>
        {starships.map((starship,i) => (
          <Col key={i} className='mb-3'>
            <StarshipCard {...starship} />
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
}

export default App;
