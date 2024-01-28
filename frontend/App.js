import { Route, Routes } from 'react-router-dom';
import Quotes from './Page/Quotes';
import Quote from "./Page/Quote";
import Person from "./Page/Person";
import './App.css'

function App() {

  return (
    <div className="container">
      <h1 className="header">Quote.Zip</h1>
      <Routes>
        <Route exact path="/" element={<Quotes />} />
        <Route path="/AllQuotes/:century" element={<Quote />} />
        <Route path="/AllQuotes/:century/AllPerson/:name" element={<Person />} />
      </Routes>
    </div>

  );
}

export default App;