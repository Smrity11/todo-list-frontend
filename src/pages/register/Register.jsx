 /* eslint-disable no-unused-vars */

 import { useContext } from "react";
//  import { Helmet } from "react-helmet-async";
 import { useForm } from "react-hook-form";

 import { Link, useNavigate } from "react-router-dom";
 import Swal from 'sweetalert2'
import { AuthContext } from "../../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../../hook/useAxiosPublic";
import useAuth from "../../hook/useAuth";

 
 const Register = () => {
     const axiosPublic = useAxiosPublic();
     const { register, handleSubmit, reset, formState: { errors } } = useForm();
     const { createUser, updateUserProfile } = useContext(AuthContext);
     const navigate = useNavigate();
     const { googleSignIn } = useAuth();
 
     const onSubmit = data => {
 
         createUser(data.email, data.password)
             .then(result => {
                 const loggedUser = result.user;
                 console.log(loggedUser);
                 updateUserProfile(data.name, data.photoURL)
                     .then(() => {
                         // create user entry in the database
                         const userInfo = {
                             name: data.name,
                             email: data.email,
                             photoURL:data.photoURL
                         }
                         axiosPublic.post('/users', userInfo)
                             .then(res => {
                                 if (res.data.insertedId) {
                                     console.log('user added to the database')
                                     reset();
                                     Swal.fire({
                                         position: 'top-end',
                                         icon: 'success',
                                         title: 'User created successfully.',
                                         showConfirmButton: false,
                                         timer: 1500
                                     });
                                     navigate('/');
                                 }
                             })
 
 
                     })
                     .catch(error => console.log(error))
             })
     };
     const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    }

 
     return (
         <>
             {/* <Helmet>
                 <title>OpinioNex | Register</title>
             </Helmet> */}

             <div style={{
            backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20220705/pngtree-red-white-abstract-background-banner-design-with-ribbon-illustration-image_1416614.jpg)',
            backgroundRepeat: 'no-repeat',
           
            // Background color with opacity
        }} className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src="" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-white  text-white">
                    <div className="card-body text-black">
                        <h1 className="text-3xl text-center text-red-600 font-bold">Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name='name' placeholder="name" className="inputbox input input-bordered text-black" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control ">
                <label className="label">
                  <span className="label-text text-black">Photo</span>
                </label>
                <input
                {...register("photoURL", { required: true })} 
                  name="photoURL"
                  type="text"
                  placeholder="Enter Your Photo URL"
                  className="input input-bordered inputbox text-black"
                />
              </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Email</span>
                                </label>
                                <input type="text" name='email'   {...register("email", { required: true })} placeholder="email" className="inputbox input input-bordered text-black" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Confirm Password</span>
                                </label>
                                <input type="text" name='password' {...register("password", {
                                     required: true,
                                     minLength: 6,
                                     maxLength: 20,
                                     pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                 })} placeholder="password" className="inputbox input input-bordered text-black" />
                                  {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                 {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                 {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                 {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                
                            </div>
                            <div className="flex justify-between items-center">
              <div>
              <input required type="checkbox" /> <span>Accept Term & Conditions</span>
              </div>
              </div>
                            <div className="form-control mt-6">
                                <input className="btn border broder-blue-600 text-black font-bold" type="submit" value="Register" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already Have an Account? <Link className='text-black font-bold' to="/login">Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>



            
         </>
     );
 };
 
 export default Register;





