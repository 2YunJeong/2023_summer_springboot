import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Person = () => {
  const { name } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/quotezip/AllPerson/${name}`)
    .then((res) => res.json())
    .then((res) => setPerson(res))
    .catch(error => console.error('Error fetching quotes:', error));
  }, []);

  if (person) {
    return (
      <div>
          <img src={person.imageurl} alt={person.name}사진 style={{maxWidth: '300px'}}></img>
          <h2>이름: {person.name}</h2>
          <p>출생: {person.birthdate}</p>
          <p>사망: {person.deathdate}</p>
          <p>국적: {person.nationality}</p>
          <p>직업: {person.job}</p>
          <p>여담: {person.others}</p>
          <Link to="/">명언으로</Link>
      </div>
    );
  } else {
    return (
      <div>Loading...</div>
    )
  }
};

export default Person;
