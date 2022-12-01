import { useEffect, useState } from "react";

const useVolunteers = () => {
  const [volunteers, setVolunteers] = useState([]);
  console.log(volunteers);
  useEffect(() => {
    fetch("https://volunteer-network-by-omar.onrender.com/volunteers")
      .then((res) => res.json())
      .then((data) => setVolunteers(data));
  }, []);
  return [volunteers, setVolunteers];
};

export default useVolunteers;
