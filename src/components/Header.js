import { Link } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <Link>
      <img className="w-40" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo"/>
      </Link>
    </div>
  );
};

export default Header;
