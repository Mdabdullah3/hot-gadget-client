import { useEffect, useState } from "react";

const UseReviews = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://enigmatic-mountain-34268.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return [review];
};

export default UseReviews;
