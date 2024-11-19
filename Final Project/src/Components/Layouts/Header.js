import React, { useContext } from "react";
import { FaUniversity } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import UserContext from "../../Hooks/UserContext";
import { toast } from "react-toastify";

const Header = () => {
  const { setUser, setPaperList } = useContext(UserContext);
  const logout = () => {
    setUser("");
    setPaperList([]);
    localStorage.clear();
    toast.info("Logged Out");
  };
  return (
    <header className="absolute top-0 flex w-full justify-between bg-slate-950 text-slate-50 dark:bg-slate-950 ">
      <Link
        to="/dash"
        className="ml-4 flex items-center gap-2 px-3 py-1 text-2xl font-semibold sm:text-3xl"
      >
        <FaUniversity className="m-1" />
        <h1 className="m-0 pr-1 font-spectral text-slate-50 decoration-violet-500 decoration-[3px] underline-offset-[3px] hover:underline">
          GIET Baniatangi
          {/* <span className="inline-block h-4 w-4 rounded-full bg-violet-500 dark:bg-violet-500 sm:h-[1.15rem] sm:w-[1.15rem]"></span> */}
          
        </h1>
      </Link>
      <Link
        to="./"
        className="text-md m-2 mr-4 flex items-center rounded-md p-[7px] font-semibold duration-200 hover:bg-red-700 hover:text-slate-100"
        onClick={() => logout()}
      >
       <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
</svg></span>

        <p>&nbsp;Logout&nbsp;&nbsp;</p>
        <FiLogOut className="text-xl" />
      </Link>
    </header>
  );
};

export default Header;
