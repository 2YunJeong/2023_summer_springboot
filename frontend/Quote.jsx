import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Quote = () => {
  const { century } = useParams();
  const [quotes, setQuotes] = useState();

  useEffect(() => {
    fetch(`http://localhost:8080/quotezip/AllQuotes/${century}`)
    .then((res) => res.json())
    .then((res) => setQuotes(res));
  }, []);

  if (quotes) {

    return (
      <div>
        <h3>{century}C 명언</h3>
        <div className="quotes">
          {quotes.map((quote) => (
            <div className="quote" key={quote.id}>
              <div className="quote_kr">{quote.quote_kr}</div>
              <div className="quote_en">{quote.quote_en}</div>

              <Link to={`AllPerson/${quote.person}`}> - {quote.person} -</Link>
            </div>
          ))}
        </div>
        
        <Link to="/">목록으로</Link>
      </div>
    );
  } else {
    return (
      <div>Loading...</div>
    )
  }
};

export default Quote;
