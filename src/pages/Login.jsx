import Lottie from 'lottie-react';
import Login_Lottie from '../assets/Lotties/Login_lottie.json'
import { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router';

const Login = () => {
    const {googleSignIn,login} = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // Login User
        login(email,password)
        .then(result=>{
            console.log(result.user);
            toast.success('Successful Login');
            navigate('/' || location.state);
        })
        .catch(error=>console.log(error));
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                <div className="text-center lg:text-left">
                    <Lottie className='w-[300px]' animationData={Login_Lottie} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold text-center">Login</h1>
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                {/* Email */}
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Your Email" />
                                {/* Password */}
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />

                                <div className='text-base mb-4'>Create an Account? <a className="link link-hover font-semibold">Register</a></div>

                                {/* Google */}
                                <button className="btn bg-white text-black border-[#e5e5e5]">
                                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Login with Google
                                </button>


                                <button className="btn btn-neutral">Login</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;