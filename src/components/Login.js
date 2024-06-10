import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 text-white absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0">
      <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input type="text" placeholder="Email Address" className="p-2 my-4 w-full bg-gray-700"/>
        <input type="password" placeholder="Password" className="p-2 my-4 w-full bg-gray-700"/>
        <button className="p-2 my-4 bg-red-700 w-full rounded-lg">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
