import { FaTh } from "react-icons/fa";

function Promo () {
  return(
<div className="bg-gray-200 py-32">
  <div className="flex flex-wrap -mx-4">
    <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
      <h3 className="text-2xl font-semibold">We know design.</h3>
      <p className="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        <br />
        tempor incididunt ut labore et dolore.
      </p>
      <p className="mt-6">
        <a href="#work" className="inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
          <FaTh className="inline-block mr-2" /> View Our Works
        </a>
      </p>
    </div>
    <div className="w-full md:w-1/2 px-4">
      <img
        className="rounded-lg w-full h-auto"
        src="/w3images/phone_buildings.jpg"
        alt="Buildings"
      />
    </div>
  </div>
</div>

  );
}

export default Promo;