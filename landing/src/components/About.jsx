import { FaDesktop, FaHeart,FaCog } from 'react-icons/fa';
import { MdDiamond } from "react-icons/md";

function About () {
  return(
<div className="container mx-auto py-32" id="about">
  <h3 className="text-center text-3xl font-semibold">ABOUT THE COMPANY</h3>
  <p className="text-center text-xl mt-4">Key features of our company</p>
  
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 text-center">
    <div>
      <FaDesktop className="mb-4 text-6xl mx-auto" />
      <p className="text-xl font-medium">Responsive</p>
      <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>
    <div>
      <FaHeart className="mb-4 text-6xl mx-auto" />
      <p className="text-xl font-medium">Passion</p>
      <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>
    <div>
      <MdDiamond className="mb-4 text-6xl mx-auto" />
      <p className="text-xl font-medium">Design</p>
      <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>
    <div>
      <FaCog className="mb-4 text-6xl mx-auto" />
      <p className="text-xl font-medium">Support</p>
      <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>
  </div>
</div>

  )
}

export default About;