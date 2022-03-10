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
        // item ={item}
        // or
        {...item}
      />  
  )
  
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <section className='card-list'>
              {details}
        </section>
      

    </div>
  );
}

export default App;
