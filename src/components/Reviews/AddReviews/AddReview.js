import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const [user] = useAuthState(auth);

  const onSubmitFrom = (data) => {
    fetch("https://enigmatic-mountain-34268.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Your Review Succesfull Added");
      });
    reset();
  };
  return (
    <div className="text-center font-mono mt-20 mb-10">
      <h2 className="text-4xl font-semibold ">
        Add Your C<span className="text-amber-500">omments</span>
      </h2>
      <form
        className="flex flex-col w-80 mx-auto mt-20 form"
        onSubmit={handleSubmit(onSubmitFrom)}
      >
        <input
          className="w-80 rounded border-2 border-solid border-amber-500  mb-5 py-4 px-10"
          placeholder="User Photo"
          type="text"
          {...register("img")}
        />
        <input
          className="w-80 rounded border-2 border-solid border-amber-500  mb-5 py-4 px-10"
          placeholder="name"
          {...register("name", { required: true })}
        />
        <input
          className="w-80 rounded  border-2 border-solid border-amber-500  mb-5 py-4 px-10"
          value={user.email}
          {...register("email", { required: true })}
        />
        <input
          className="w-80 rounded border-2 border-solid border-amber-500  mb-5 py-4 px-10"
          placeholder="description"
          type="text"
          {...register("description", { required: true })}
        />
        <input
          className="w-80 rounded border-2 border-solid border-amber-500  mb-5 py-4 px-10"
          placeholder="address"
          type="text"
          {...register("address", { required: true })}
        />
        <input
          className="product-btn rounded bg-amber-500 py-4 text-white text-xl"
          type="Submit"
          value="Post Review"
        />
      </form>
    </div>
  );
};

export default AddReview;
