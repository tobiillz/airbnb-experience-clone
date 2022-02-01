import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import image12 from './images/image 12.png';

function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <Card
          img = {image12}
          rating = "5.0"
          number = "6"
          country = "USA"
          description = "Life Lesson from Katie Zafereys"
          price = "136"        
        />

        {/* <Card
          img = {image12}
          rating = "5.0"
          number = "6"
          country = "USA"
          desription = "Life Lesson from Katie Zafereys"
          price = "136"        
        />

        <Card
          img = {image12}
          rating = "5.0"
          number = "6"
          country = "USA"
          desription = "Life Lesson from Katie Zafereys"
          price = "136"        
        /> */}
    </div>
  );
}

export default App;
