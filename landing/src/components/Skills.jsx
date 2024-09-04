import { FaCamera, FaDesktop } from 'react-icons/fa';
import { MdInsertPhoto } from "react-icons/md";
function Skills () {
  return(
<div className="bg-gray-200 py-16 px-4">
  <div className="flex flex-wrap -mx-4">
    <div className="w-full md:w-1/2 px-4 mb-8">
      <h3 className="text-2xl font-semibold mb-4">Our Skills.</h3>
      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>
      tempor incididunt ut labore et dolore.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>
      tempor incididunt ut labore et dolore.</p>
    </div>
    <div className="w-full md:w-1/2 px-4">
      <p className="text-lg font-medium flex items-center mb-4">
        <FaCamera className="mr-2" /> Photography
      </p>
      <div className="bg-gray-300 h-4 rounded">
        <div className="bg-gray-800 h-full rounded w-9/12 text-center text-white">90%</div>
      </div>
      <p className="text-lg font-medium flex items-center mt-4 mb-4">
        <FaDesktop className="mr-2" /> Web Design
      </p>
      <div className="bg-gray-300 h-4 rounded">
        <div className="bg-gray-800 h-full rounded w-85 text-center text-white">85%</div>
      </div>
      <p className="text-lg font-medium flex items-center mt-4 mb-4">
        <MdInsertPhoto className="mr-2" /> Photoshop
      </p>
      <div className="bg-gray-300 h-4 rounded">
        <div className="bg-gray-800 h-full rounded w-3/4 text-center text-white">75%</div>
      </div>
    </div>
  </div>
</div>

)
}   

export default Skills;