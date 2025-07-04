import React, { use } from 'react';
import Register_lottie from '../assets/Lotties/Register_lottie.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router';

const Register = () => {
    const { createUser, updateUser, googleSignIn } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        if(name === '' || email === '' || photo === '' || password === ''){
            toast.error('Invalid Input');
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if(!passwordRegex.test(password)){
            toast.error('Invalid Password!');
            return;
        }

        // Create User
        createUser(email, password)
            .then(result => {
                const newUser = result.user;

                // Update User
                updateUser(name, photo)
                    .then(() => {
                        toast.success('Successful Registation');
                        navigate('/' || location.state);
                    })
                    .catch(error => {
                        toast.error('Update User Failed!!');
                    })
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
                toast.error('Registation Failed!');
            })
    }

    const handleGoogle = () => {
        console.log('Ok');
        googleSignIn()
            .then(result => {
                toast.success("Successful Registation");

                // Navigate User
                navigate(location.state || '/')
            }).catch(error => {
                toast.error('Registation Failed!')
                console.log(error);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                <div className="text-center lg:text-left">
                    <Lottie className='w-[250px]' animationData={Register_lottie} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body text-secondary">
                        <h1 className="text-5xl font-bold text-center">Register</h1>
                        <form onSubmit={handleRegister} >
                            <fieldset className="fieldset">
                                {/* Name */}
                                <label className="label">Name</label>
                                <input type="text" name='name' className="input" placeholder="Your Name" />
                                {/* Email */}
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Your Email" />
                                {/* PhotoUrl */}
                                <label className="label">Photo</label>
                                <input type="url" name='photo' className="input" placeholder="Url" />
                                {/* Password */}
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />

                                <div className='text-base mb-4'>Already have an Account ? <a className="link link-hover font-semibold"><Link to={'/login'}>Login</Link></a></div>

                                {/* Google */}
                                <button type='button' onClick={handleGoogle} className="btn bg-secondary text-white border-secondary">
                                    <svg className='rounded-3xl' aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Login with Google
                                </button>
                                <button type='submit' className="btn btn-secondary">Register</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;