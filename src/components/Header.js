import { Link, useNavigate } from "react-router-dom";
import { LOGO, USER_AVATAR } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
/* eslint-disable jsx-a11y/anchor-is-valid */
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between ">
      <Link>
        <img className="w-40" src={LOGO} alt="logo" />
      </Link>
      {user && <div className="flex p-2 gap-3">
        <img className="w-12 h-12 rounded-md" alt="usericon" src={USER_AVATAR} />
        <button onClick={handleSignOut} className="font-bold text-white">
          (Sign out)
        </button>
      </div>}
    </div>
  );
};

export default Header;
