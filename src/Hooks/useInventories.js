import { useEffect, useState } from "react";

const useInventories = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch(`https://king-furniture.herokuapp.com/inventories`)
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);
  return [inventories];
};

export default useInventories;
