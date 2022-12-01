import { useEffect, useState } from "react";

const useAddVolunteers = () => {
  const [volunteerList, setVolunteerList] = useState([]);
  useEffect(() => {
    fetch("https://volunteer-network-by-omar.onrender.com/volunteersList")
      .then((res) => res.json())
      .then((data) => setVolunteerList(data));
  }, []);
  return [volunteerList, setVolunteerList];
};

export default useAddVolunteers;
