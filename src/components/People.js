import React from "react";
import Person from "./Person";
import { useQuery } from "react-query";


const fetchPeople = async () => {
  const res = await fetch("http://swapi.dev/api/people/");
  return res.json();
};

const People = () => {
  const { data, status } = useQuery("people", fetchPeople, {
    onSuccess: () => console.log("data fetched with no problems"),
  });
  console.log(data);

  return (
    <div>
      <h2>People</h2>
      {status === "loading" && <div>Loading fetch...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          {data.results.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
    </div>
  );
};

// eslint-disable-next-line
export default People
