import { useForm } from 'react-hook-form';
import authApi from '../../../redux/fetures/auth/authApi';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from './../../../redux/hooks';
import { verifyToken } from '../../../util/verifyToken';
import { setUser } from '../../../redux/fetures/auth/authSlice';

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();

    const [login] = authApi.useLoginMutation()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = async (data) => {

        try {
            const res = await login(data).unwrap();
            const token = res.data.accessToken;
            const user = verifyToken(token);
            dispatch(setUser({ user, token }));
            console.log(res);
            
            if (res?.success) {
                toast.success(res?.message)
                navigate("/")
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className=' h-screen flex items-center justify-center'>
            <div className="w-[25%] mx-auto mt-10">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                >
                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Invalid email address',
                                },
                            })}
                            type="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your email"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs italic">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Password must be at least 6 characters long',
                                },
                            })}
                            type="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your password"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-xs italic">{errors.password.message}</p>
                        )}
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Login
                        </button>
                    </div>

                    <div className='mt-3'>
                        <p>If You Are Not Registred Go For <Link to="/registration" className=' text-blue-600 font-semibold'>Registration </Link>  </p>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default Login;
