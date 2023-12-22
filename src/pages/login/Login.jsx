/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
// import swal from "sweetalert";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hook/useAxiosPublic";
import useAuth from "../../hook/useAuth";
// import css from "./Login.css"

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const { signIn, googleSignIn } = useAuth();

  const from = location.state?.from?.pathname || "/";
  console.log("state in the location login page", location.state);

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: 'User Login Successful.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            navigate(from, { replace: true });
        })
}

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <>
      

             <div
      style={{
        backgroundImage:
          "url(https://png.pngtree.com/thumb_back/fh260/background/20220705/pngtree-red-white-abstract-background-banner-design-with-ribbon-illustration-image_1416614.jpg)",
        backgroundRepeat: "no-repeat",

        // Background color with opacity
      }}
      className="hero min-h-screen "
    >
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src="" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full bg-white  shadow-2xl shadow-red-200 text-black">
          <div className="card-body text-black">
            <h1 className="text-3xl text-center font-bold text-red-600">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered inputbox text-black"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered inputbox text-black"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-black">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                {" "}
                <button className=" text-black border border-blue-600 py-1 rounded ">
                  Login
                </button>
              </div>
            </form>
            <div className="form-control">
              <button
                onClick={handleGoogleSignIn}
                className="btn border-blue-600 mt-4"
              >
                <span>
                  <FaGoogle></FaGoogle>
                </span>{" "}
                Login with google
              </button>
            </div>
            <p className="my-4 text-center">
              New to this website?{" "}
              <Link className="text-black font-bold" to="/register">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
 
  );
};

export default Login;
