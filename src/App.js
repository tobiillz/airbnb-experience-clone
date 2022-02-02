import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import image12 from './images/image12.png';
import CardDetails from './components/CardDetails';


function App() {
  let details = CardDetails.map(item =>
      <Card
        img = {item.img}
        rating = {item.rating}
        number = {item.number}
        country = {item.country}
        description = {item.description}
        price = {item.price}
      />
  )
  
  console.log(details)

  return (
    <div className="App">
        <Header/>
        <Hero/>
        {details}
        {/* <Card
          img = {image12}
          rating = {5.0}
          number = {6}
          country = "USA"
          description = "Life Lesson from Katie Zafereys"
          price = {136}
        /> */}

    </div>
  );
}

export default App;
