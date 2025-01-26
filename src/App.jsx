import './App.scss';
import Card from './components/Card/Card';
import cardData from './data/cardData';
import { useHourlyStatuses } from './context/HourlyStatusContext';

function App() {
  const { loading } = useHourlyStatuses(cardData);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page">
      <main>
        <div className="cards">
          {cardData.map((card) => (
            <Card
            {...card} key={card.id}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
