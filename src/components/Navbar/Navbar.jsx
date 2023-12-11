import {  NavLink } from "react-router-dom";


const Navbar = () => {
    const navLinks = <>
        <li><NavLink className="font-semibold text-lg" to="/">Home</NavLink></li>

        <li><NavLink className="font-semibold text-lg" to="/allFoods">Education</NavLink></li>
        <li><NavLink className="font-semibold text-lg" to="/blog">Projects</NavLink></li>
        <li><NavLink className=" font-semibold text-lg" to="/about">About Me</NavLink></li>
        <li><a href="https://www.linkedin.com/in/partha-malakar-ba1350247/"><img className="h-10" src="https://i.ibb.co/SvVtBR4/download0.png" alt="" /></a></li>
        <li><a href="https://github.com/ParthaMalakar"><img className="h-10" src="https://i.ibb.co/8c1cNQ4/dow0nload.png" alt="" /></a></li>

    </>
  
    return (
        <div>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="md:flex justify-center items-center">
                        <img className="h-14 md:ml-10 navbar-start " alt="" />
                        <a className="  normal-case text-base md:text-2xl font-bold text-rose-500 md:ml-0  "><i>PARTHA_MALAKAR</i></a>

                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                   
                <NavLink className="btn btn-success font-semibold text-lg" to="/about">HIRE ME</NavLink>


                </div>

            </div>
           
        </div>
    );
};

export default Navbar;