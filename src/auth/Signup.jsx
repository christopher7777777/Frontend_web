import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import SignUpImage from "../assets/undraw_signup.svg";
import { signUpSchema } from "../validation/formValidation";

const SignUp = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div
          className="h-full w-full sm:h-[80%] sm:w-[80%] grid sm:grid-cols-2"
          style={{ boxShadow: "20px 20px 20px #DEDEDE" }}
        >
          {/* sign up form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-2 md:gap-4 lg:gap-4 justify-center pl-8 pr-8 sm:pl-12 sm:pr-12"
          >
            <h1 className="text-blue-600 text-3xl md:text-4xl lg:text-5xl font-bold">
              Sign Up
            </h1>

            <div className="w-full">
              <input
                className="h-10 md:h-10 pl-4 w-full border-2 border-blue-600 rounded-md focus:border-blue-600"
                type="text"
                placeholder="Username"
                name="username"
                id="username"
                
                {...register("username")}
              />
              <p className="text-xs lg:text-xm text-red-600 font-semibold pt-1">
                {errors.username?.message}
              </p>
            </div>

            <div className="w-full">
              <input
                className="h-10 md:h-10 pl-4 w-full border-2 border-blue-600 rounded-md focus:border-blue-600"
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                
                {...register("email")}
              />
              <p className="text-xs lg:text-xm text-red-600 font-semibold pt-1">
                {errors.email?.message}
              </p>
            </div>

            <div className="w-full">
              <input
                className="h-10 md:h-10 pl-4 w-full border-2 border-blue-600 rounded-md focus:border-blue-600"
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                {...register("password")}
              />
              <p className="text-xs lg:text-xm text-red-600 font-semibold pt-1">
                {errors.password?.message}
              </p>
            </div>

            <div className="w-full">
              <input
                className="h-10 md:h-10 pl-4 w-full border-2 border-blue-600 rounded-md focus:border-blue-600"
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                id="confirmPassword"
                {...register("confirmPassword")}
              />
              <p className="text-xs lg:text-xm text-red-600 font-semibold pt-1">
                {errors.confirmPassword?.message}
              </p>
            </div>

            <button
              type="submit"
              className="h-10 md:h-10 w-full bg-blue-600 rounded-md text-white font-bold text-lg ease-in-out duration-300 hover:bg-blue-800"
            >
              Sign Up
            </button>

            <div className="flex flex-col items-center">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  name="condition"
                  id="condition"
                  {...register("iAgree")}
                />
                <p>
                  I agree to all{" "}
                  <span className="text-blue-600">
                    <a href="/termsconditions">Terms and Conditions</a>
                  </span>
                </p>
              </div>
              <p className="text-xs lg:text-sm text-red-600 font-semibold">
                {errors.iAgree?.message}
              </p>
            </div>
          </form>

          {/* sign up image */}
          <div className="flex flex-col justify-center items-center pl-8 pr-8 gap-2 md:gap-4 lg:gap-6">
            <img className="w-11/12 "  src={SignUpImage} alt="sign up Image" />
            <p className="font-normal">
              Already a Member?{" "}
              <span className="text-blue-600">
                <a href="/signIn">Sign In</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;