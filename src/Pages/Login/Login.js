import React, { useContext, useState } from "react";
import "./Login.css";
import { Button, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../../Firebase";
import { MyContext } from "../../App";

const Login = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [passVisibal, setPassVisibal] = useState(false);
  const [connPass, setconnPass] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    connPass: "",
  });
  const context = useContext(MyContext);
  const [shown, setShown] = useState(0);

  const handalSignUp = (e) => {
    setShowLoader(true);
    e.preventDefault();
    if (user.password === user.connPass) {
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          setShowLoader(false);

          context.handalSignIn();
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("errorCode", errorCode);
          console.log("errorMessage", errorMessage);
          alert(errorCode);
          setShowLoader(false);
        });
    } else {
      alert(" two password are not same");
      setShowLoader(false);
    }
  };

  const handalLogin = (e) => {
    setShowLoader(true);
    e.preventDefault();
    if (user.password.length !== 0 && user.email.length !== 0) {
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          context.handalSignIn();

          setShowLoader(false);
          navigate("/");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          //   console.log("errorCode", errorCode);
          //   console.log("errorMessage", errorMessage);
          alert(error.code);
          setShowLoader(false);
        });
    }
  };
  return (
    <section className="LoginSignUp">
      <div className="container-web">
        {shown === 0 && (
          <div className="Wreper login">
            <div className="card shadow ">
              <Backdrop
                sx={{
                  color: "#000",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                className="formLoader"
                open={showLoader}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
              <h4>Login</h4>
              <form
                autoComplete="off"
                onSubmit={handalLogin}
                className="loginForm"
              >
                <div className="form-group mb-4 w-100">
                  <TextField
                    autoComplete="off"
                    label="Email"
                    variant="outlined"
                    className="w-100 "
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                </div>
                <div className="form-group mb-4 w-100 position-relative">
                  <TextField
                    autoComplete="off"
                    label="Password"
                    type={passVisibal ? "text" : "password"}
                    variant="outlined"
                    className="w-100"
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                  <Button
                    className="passHidebtn"
                    onClick={() => setPassVisibal(!passVisibal)}
                  >
                    {passVisibal ? <Visibility /> : <VisibilityOff />}
                  </Button>
                </div>
                <Button type="submit" className="w-100 btn">
                  Login
                </Button>
                <p className="text-center m-2">OR</p>
                <div className="w-100 belowBtnContainer">
                  <Button
                    className=" btn2"
                    onClick={() => setShown(1)}
                    color="info"
                  >
                    not have An Account, create one
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
        {shown === 1 && (
          <div className="Wreper signUP">
            <div className="card shadow ">
              <Backdrop
                sx={{
                  color: "#000",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                className="formLoader"
                open={showLoader}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
              <h4>SignUp</h4>
              <form className="loginForm" onSubmit={handalSignUp}>
                <div className="form-group mb-4 w-100">
                  <TextField
                    autoComplete="off"
                    label="Email"
                    variant="outlined"
                    className="w-100 "
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                </div>
                <div className="form-group mb-4 w-100 position-relative">
                  <TextField
                    autoComplete="off"
                    label="Password"
                    type={passVisibal ? "text" : "password"}
                    variant="outlined"
                    className="w-100"
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                  <Button
                    className="passHidebtn"
                    onClick={() => setPassVisibal(!passVisibal)}
                  >
                    {passVisibal ? <Visibility /> : <VisibilityOff />}
                  </Button>
                </div>
                <div className="form-group mb-4 w-100 position-relative">
                  <TextField
                    autoComplete="off"
                    label="Confirm Password"
                    type={connPass ? "text" : "password"}
                    variant="outlined"
                    className="w-100"
                    value={user.connPass}
                    onChange={(e) =>
                      setUser({ ...user, connPass: e.target.value })
                    }
                  />
                  <Button
                    className="passHidebtn"
                    onClick={() => setconnPass(!connPass)}
                  >
                    {connPass ? <Visibility /> : <VisibilityOff />}
                  </Button>
                </div>
                <Button type="submit" className="w-100 btn">
                  SignUp
                </Button>
              </form>
              <p className="text-center m-2">OR</p>
              <div className="w-100 belowBtnContainer">
                <Button
                  className=" btn2"
                  onClick={() => setShown(0)}
                  color="info"
                >
                  have An Account
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Login;
