import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import CardDetails from './components/CardDetails';

function App() {
  let details = CardDetails.map(item =>
      <Card
        key = {item.id}
        coverImg = {item.coverImg}
        rating = {item.stats.rating}
        reviewCount = {item.stats.reviewCount}
        country = {item.country}
        title = {item.title}
        price = {item.price}
        openSpots = {item.openSpots}
      />  
  )
  

  return (
    <div className="App">
        <Header/>
        <Hero/>
        <section className='card-list'>
              {details}
        </section>
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
