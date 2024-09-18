import React, { useState } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'
// import { Link, NavLink } from 'react-router-dom'
// import "./Navbar.css"




// const NavLinks = () => {
//   return (
//     <>
//       <NavLink to="/about">
//         About
//       </NavLink>

//       <NavLink to="/blog">
//         Blog
//       </NavLink>
//     </>
//   );
// };



function Navbar() {

  const [isNavOpen, setIsNavOpen] = useState(false)

  // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='container mx-auto py-3'>
      <div className=' flex justify-between items-center'>
        {/* <Link to="/" className='uppercase font-bold text-xl'>
          pecuihe
        </Link> */}

        {/* <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div> */}

        {/* <ul className={menuOpen ? "open" : ""}> */}
        
        <nav>
          {/*DESKTOP VIEW*/}

          {/* <div className='hidden justify-end md:flex'>
            <NavLinks />
          </div> */}

          {/* <ul className={isNavOpen ? "open" : ""}>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/books">Books</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul> */}
    


          {/* MOBILE VIEW */}
          <div className='md:hidden'>
              {/* HAMBURGER MENU */}
            <div className=''>              
              <LuMenu className='text-3xl' 
              onClick={() => setIsNavOpen(!isNavOpen)} />

            </div>

              {/* NAV MENU */}
            <div className={isNavOpen ? 'navOpen' : 'navClose'}>
              <div className='absolute top-0 right-0 px-8 py-8'
                onClick={() => setIsNavOpen (false)}
              >
                <LuX className='text-3xl' />
              </div>

              

            </div>            

          </div>

        </nav>
    
      </div>
    </div>
  )
};


// ---------------2nd   Method--------------->
// const Navbar = () => {

//   // to change burger classes
//   const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
//   const [menu_class, setMenuClass] = useState("menu hidden")
//   const [isMenuClicked, setIsMenuClicked] = useState(false)

//   // toggle burger menu change
//   const updateMenu = () => {
//       if(!isMenuClicked) {
//           setBurgerClass("burger-bar clicked")
//           setMenuClass("menu visible")
//       }
//       else {
//           setBurgerClass("burger-bar unclicked")
//           setMenuClass("menu hidden")
//       }
//       setIsMenuClicked(!isMenuClicked)
//   }

//   return(
//       <div>
//         <nav className='nav'>
//           <h1 className='logo'>PECUIHE</h1>


//           <div className="burger-menu" onClick={updateMenu}>
//               <div className={burger_class} ></div>
//               <div className={burger_class} ></div>
//               <div className={burger_class} ></div>
//           </div>

//           <div className={menu_class}>
//             <ul>
//               {links.map((item, index) => (
//                 <li className='' key={index}>
//                   <a href={item.path}>
//                     {item.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>

//           </div>
//         </nav>
//       </div>
//   )
// }



export default Navbar




// const links = [
//   {
//     id: 1,
//     name: 'Home',
//     path: '/',
//   },
//   {
//     id: 2,
//     name: 'About Us',
//     path: '/about',
//   },
//   {
//     id: 3,
//     name: 'Books',
//     path: '/books',
//   },
//   {
//     id: 4,
//     name: 'Contact',
//     path: '/contact',
//   },
//   {
//     id: 5,
//     name: 'Blog',
//     path: '/blog',
//   }
// ]



//  {/* <div className='hidden md:flex'>
//             <ul  className='flex space-x-10'>
//               {links.map((item, index) => (
//                 <li key={index}>
//                   <a href={item.path}>
//                     {item.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div> */}




// {/* <div className='flex flex-col justify-between min-h-[250px] '> */}
//                 <ul  className=''>
//                   {links.map((item, index) => (
//                     <li key={index}>
//                       <a href={item.path}>
//                         {item.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>  */}
              // </div> 