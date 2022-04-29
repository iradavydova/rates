import './App.css';
import Tariff from './components/Tariff';


  

function App() {
  const rates = [
    { name: "Безлимитный 300", price: "300", speed: "До 10 Мбит/сек"},
    { name: "Безлимитный 450", price: "450", speed: "До 50 Мбит/сек"},
    { name: "Безлимитный 550", price: "550", speed: "До 100 Мбит/сек", isBigger:true},
    { name: "Безлимитный 1000", price: "1000", speed: "До 200 Мбит/сек"},
   ]

  return (
    <div className="App">
      {rates.map((rate) =>
      <Tariff name={rate.name} price={rate.price} speed={rate.speed} isBigger={rate.isBigger}/>
      )
      }
         
      
    </div>
  );
}

export default App;
