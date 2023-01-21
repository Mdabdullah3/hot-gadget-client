import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";
import Loading from "../../Shared/Loading/Loading";
const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    generall: "",
  });

  const [signInWithEmail, emailuser, emailloading, emailerror] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, user, loading, googleerror] =
    useSignInWithGoogle(auth);

  if (loading || emailloading) {
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
      setErrors({ ...userInfo, password: "Minimun 6 Digit use" });
      setUserInfo({ ...errors, password: "" });
    }
  };

  const handleLoginFrom = (e) => {
    e.preventDefault();
    signInWithEmail(userInfo.email, userInfo.password);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  useEffect(() => {
    const error = emailerror || googleerror;
    if (error) {
      switch (error.code) {
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
  }, [emailerror, googleerror]);

  useEffect(() => {
    if (user || emailuser) {
      navigate(from);
    }
  }, [user, emailuser]);

  const restPassword = async () => {
    const email = userInfo.email;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("sent Email");
    } else {
      toast("Please Use Your Valid Email");
    }
  };
  return (
    <div>
      <div class="hero min-h-screen">
        <div class="card w-full max-w-md shadow-2xl bg-base-100 font-mono">
          <form onSubmit={handleLoginFrom} class="card-body px-20">
            <h1 className="text-center font-semibold text-3xl mb-10">
              Please Login
            </h1>
            <div class="form-control">
              <input
                name="email"
                onChange={handleEmail}
                type="text"
                placeholder="email"
                class="input input-bordered mb-2"
              />
              {errors?.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div class="form-control">
              <input
                type="password"
                name="password"
                onChange={handlePassWord}
                placeholder="password"
                class="input input-bordered"
              />
              {errors?.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
              <label class="label">
                <h1 onClick={() => restPassword()} class="text-black text-md">
                  Forgot password?
                </h1>
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary text-lg">Login</button>
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
            New To Fisino{" "}
            <Link to="/signup">
              <span className="text-lg underline text-orange-500">Sing Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
