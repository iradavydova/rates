import './App.css';
import Tariff from './components/Tariff';


  

function App() {
  const rates = [
    { name: "Безлимитный 300", price: "300", speed: "До 10 Мбит/сек", priceColor: "rgba(44,193,213,255)", nameColor:"rgba(34,156,171,255)"},
    { name: "Безлимитный 450", price: "450", speed: "До 50 Мбит/сек", priceColor: "rgba(36,174,141,255)", nameColor: "rgba(32,135,114,255)" },
    { name: "Безлимитный 550", price: "550", speed: "До 100 Мбит/сек", isBigger:true, priceColor: "rgba(244,106,95,255)", nameColor: "rgba(196,85,78,255)"},
    { name: "Безлимитный 1000", price: "1000", speed: "До 200 Мбит/сек", priceColor: "rgba(51,58,68,255)", nameColor: "rgba(40,47,55,255)"},
   ]

  return (
    <div className="App">
      {rates.map((rate) =>
      <Tariff name={rate.name} price={rate.price} speed={rate.speed} isBigger={rate.isBigger} priceColor={rate.priceColor} nameColor={rate.nameColor}/>
      )
      }
         
      
    </div>
  );
}

export default App;
