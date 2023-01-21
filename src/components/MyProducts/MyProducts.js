import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import ProductShow from "../Home/Product/ProductShow";

const MyProducts = () => {
  const [myItems, setMyItems] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const email = user.email;
    const url = `https://enigmatic-mountain-34268.herokuapp.com/myProducts?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyItems(data));
  }, [user]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto px-10 md:px-28 gap-5 mt-20 relative font-mono">
      {myItems.map((item) => (
        <ProductShow key={item._id} item={item}></ProductShow>
      ))}
    </div>
  );
};

export default MyProducts;
