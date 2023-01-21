import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading/Loading";
const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const [createUserWithEmailAndPassword, emailuser, emailloading, emailerror] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [signInWithGoogle, user, loading, ,] = useSignInWithGoogle(auth);

  if (emailloading || loading) {
    <Loading></Loading>;
  }

  const handleEmail = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };

  const handlePassWord = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);
    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "minimum 6 digit" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleSingUpFrom = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  useEffect(() => {
    if (emailerror) {
      switch (emailerror?.code) {
        case "auth/invalid-email":
          toast.error("Invalid email provided, please provide a valid email");
          break;
        case "auth/invalid-password":
          toast.error("Wrong Password");
          break;
        default:
          toast.error("Something Went Wrong");
      }
    }
  }, [emailerror]);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  useEffect(() => {
    if (user || emailuser) {
      navigate(from);
    }
  }, [user, emailuser]);
  return (
    <div>
      <div class="hero min-h-screen">
        <div class="card w-full max-w-md shadow-2xl bg-base-100 font-mono">
          <form onSubmit={handleSingUpFrom} class="card-body px-20">
            <h1 className="text-center font-semibold text-3xl mb-10">
              Please Sign Up
            </h1>
            <div class="form-control">
              <input
                type="text"
                name="name"
                placeholder="Name"
                class="input input-bordered mb-2 text-lg"
              />
              {errors?.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div class="form-control">
              <input
                onChange={handleEmail}
                type="email"
                name="email"
                placeholder="email"
                class="input input-bordered mb-2 text-lg"
              />
              {errors?.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
            </div>
            <div class="form-control">
              <input
                onChange={handlePassWord}
                type="password"
                name="password"
                placeholder="password"
                class="input input-bordered text-lg"
              />
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary text-lg">Sign Up</button>
            </div>
            <div class="divider mb-0">OR</div>
          </form>
          <button
            onClick={() => signInWithGoogle()}
            class="btn btn-outline text-lg mx-20 mb-10"
          >
            Contine To Google
          </button>
          <p className="text-center pb-8">
            Already Have Account?{" "}
            <Link to="/login">
              <span className="text-lg underline text-orange-500">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
