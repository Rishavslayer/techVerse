import  navLinks  from "../constant/";
export default function Header(){
  return(
    <header className="flex">
      <div id="logo" className="w-[60vw] sm:w-full ">
        <img className="w-full h-full"src="https://cdn.freecodecamp.org/testable-projects-fcc/images/product-landing-page-logo.png" alt="original trombones logo" />
      </div>
      <nav id="nav-bar">
        <ul>
          {navLinks.map((link)=>(
            <li key={link.text}><a href={link.href}>{link.text}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  )
}