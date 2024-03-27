import './App.css';
import Accordion from './Accordion';
import faqs from './faqs';
import Card from './Card'

function App() {
  return (
    <div className="App">
      <div className="top-background"></div>
      <Card>
        <div className="title">
          <h1>FAQs</h1>
        </div>
        <Accordion faqs={faqs} />
      </Card>
    </div>
  );
}

export default App;
