import axios from "axios";
import { useEffect, useState } from "react";

const useServices = () => {
  const [service, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/services")
      .then((res) => setServices(res.data));
  }, []);
  return service;
};

export default useServices;
