import React, { useState } from "react";
import { RiTeamFill } from "react-icons/ri";
import { MdOutlineWork } from "react-icons/md";
import { IoIosPricetag } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const Anchor = ({ text , href , icon}) => {
    return <a href={href} className="text-gray-700 hover:text-gray-900 hover:bg-gray-300 flex items-center p-4 transition-all">
      {icon && <span className="mr-1">{icon}</span>}
      {text}
    </a>;
  }
  const AnchorHidden =({text, href, icon, onClick}) => {
    return <a href={href} onClick={onClick} className=" text-white px-2 py-1 w-full hover:text-black hover:bg-gray-300" >
      {text}
      {icon && <span className="ml-1">{icon}</span>}
    </a>
  }

  return (
		<>
			{/* Navbar (sit on top) */}
			<div className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
				<div className="flex items-center justify-between ">
					<Anchor text="TECHVERSER" href="#home" />
					{/* Right-sided navbar links */}
					<nav className="hidden sm:flex">
						<Anchor text="ABOUT" href="#about" />
						<Anchor text="TEAM" href="#team" icon={<RiTeamFill />} />
						<Anchor text="WORK" href="#work" icon={<MdOutlineWork />} />
						<Anchor text="PRICING" href="#pricing" icon={<IoIosPricetag />} />
						<Anchor text="CONTACT" href="#contact" icon={<IoIosMail />} />
					</nav>
					{/* Hide right-floated links on small screens and replace them with a menu icon */}
					<button
						className="sm:hidden text-gray-700 hover:text-gray-900 mx-2"
						onClick={handleSidebarToggle}
					>
						<GiHamburgerMenu />
					</button>
				</div>
			</div>

			{/* Sidebar on small screens when clicking the menu icon */}
			{isSidebarOpen && (
				<nav
					className=" h-full fixed w-64 z-20 bg-black text-white flex flex-col items-start sm:hidden transition-transform transform translate-x-0"
					// className="fixed inset-0 bg-black text-white flex flex-col items-start p-4 space-y-4 sm:hidden transition-transform transform translate-x-0"
				>
					<button
						onClick={closeSidebar}
						className="text-lg flex items-center w-full hover:bg-gray-300 hover:text-black p-2 transition-all"
					>
						Close
						<span className="ml-1">
							<IoMdClose />
						</span>
					</button>
					<AnchorHidden text="ABOUT" href="#about" onClick={closeSidebar} />
					<AnchorHidden text="TEAM" href="#team" onClick={closeSidebar} />
					<AnchorHidden text="WORK" href="#work" onClick={closeSidebar} />
					<AnchorHidden text="PRICING" href="#pricing" onClick={closeSidebar} />
					<AnchorHidden text="CONTACT" href="#contact" onClick={closeSidebar} />
				</nav>
			)}
		</>
	);
}

export default Navbar;
