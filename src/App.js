import './App.css';
import Card from './components/Card';

function App() {
const img = 'https://www.mr-plintus.ru/images/oboi/brit8008_3-m-1.jpg';

  return (
    <div className="App">
      <Card>
        <img src={img} alt=''/>
      </Card>
    </div>
  );
}

export default App;
