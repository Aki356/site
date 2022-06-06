import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Card from 'react-bootstrap/Card'


function App() {
  return (
    
    <div className="App">
      <h1>Bread</h1>
      <Card border="danger" style={{ width: '18rem' }}>
    <Card.Header>Loaf</Card.Header>
    <Card.Body>
      <Card.Title>Danger Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card border="danger" style={{ width: '18rem' }}>
    <Card.Header>Baguette</Card.Header>
    <Card.Body>
      <Card.Title>Danger Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
    <Card.Img variant="top" src="https://e2.edimdoma.ru/data/recipes/0013/3367/133367-ed4_wide.jpg?1628767164" />
  </Card>
    </div>
      
  );
} 
export default App;