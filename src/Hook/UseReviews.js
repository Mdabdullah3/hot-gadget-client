import { useEffect, useState } from "react";

const UseReviews = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://hot-gadget.onrender.com/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return [review];
};

export default UseReviews;
