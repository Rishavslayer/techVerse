import { FaEnvelope } from "react-icons/fa";

function Team () {
return(
<div className="py-32 px-4" id="team">
  <h3 className="text-center text-2xl font-semibold">THE TEAM</h3>
  <p className="text-center text-lg text-gray-700">The ones who run this company</p>
  <div className="flex flex-wrap mt-16 -mx-4 grayscale">
    <div className="w-full lg:w-1/4 md:w-1/2 px-4 mb-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="/w3images/team2.jpg" alt="John" className="w-full"/>
        <div className="p-6">
          <h3 className="text-xl font-semibold">John Doe</h3>
          <p className="text-gray-500">CEO & Founder</p>
          <p className="mt-4 text-gray-600">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
          <p className="mt-6">
            <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded">
              <FaEnvelope className="inline-block mr-2" /> Contact
            </button>
          </p>
        </div>
      </div>
    </div>
    <div className="w-full lg:w-1/4 md:w-1/2 px-4 mb-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="/w3images/team1.jpg" alt="Jane" className="w-full"/>
        <div className="p-6">
          <h3 className="text-xl font-semibold">Anja Doe</h3>
          <p className="text-gray-500">Art Director</p>
          <p className="mt-4 text-gray-600">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
          <p className="mt-6">
            <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded">
              <FaEnvelope className="inline-block mr-2" /> Contact
            </button>
          </p>
        </div>
      </div>
    </div>
    <div className="w-full lg:w-1/4 md:w-1/2 px-4 mb-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="/w3images/team3.jpg" alt="Mike" className="w-full"/>
        <div className="p-6">
          <h3 className="text-xl font-semibold">Mike Ross</h3>
          <p className="text-gray-500">Web Designer</p>
          <p className="mt-4 text-gray-600">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
          <p className="mt-6">
            <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded">
              <FaEnvelope className="inline-block mr-2" /> Contact
            </button>
          </p>
        </div>
      </div>
    </div>
    <div className="w-full lg:w-1/4 md:w-1/2 px-4 mb-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="/w3images/team4.jpg" alt="Dan" className="w-full"/>
        <div className="p-6">
          <h3 className="text-xl font-semibold">Dan Star</h3>
          <p className="text-gray-500">Designer</p>
          <p className="mt-4 text-gray-600">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
          <p className="mt-6">
            <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded">
              <FaEnvelope className="inline-block mr-2" /> Contact
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

);
}

export default Team;