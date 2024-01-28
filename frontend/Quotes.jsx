import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/quotezip/AllQuotes`)
    .then((res) => res.json())
    .then((res) => {setQuotes(res);})
    .catch(error => console.error('Error fetching quotes:', error));
  }, []);

  const openQuote = (century) => {
    navigate(`/AllQuotes/${century}`);
  };

  if (quotes.length) {

    //명언을 세기별로 그룹화
    const centuryGroups = {};
    quotes.forEach(quote => {
      if (!centuryGroups[quote.century]) {
        centuryGroups[quote.century] = [];
      }
      centuryGroups[quote.century].push(quote);
    });

    return (
      <div>
         <h2>명언 목록</h2>
        <div className="quotes">
          {Object.keys(centuryGroups).map(century => (
            <div key={century}>
              <h3 className="century">{century}C</h3>
              {centuryGroups[century].slice(0, 2).map(quote => (
                <div className="quote" key={quote.id}>
                  <div className="qquote">{quote.quote_kr.slice(0,40)}...</div>
                </div>
              ))}
              <Link to={`AllQuotes/${century}`}>더보기</Link>
            </div>
          ))}

        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Quotes;
