import { useEffect, useState } from "react";

const useInventories = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    fetch(`https://warehouse-server-raselmahmud22.koyeb.app/inventories`)
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, [inventories]);
  return [inventories];
};

export default useInventories;
