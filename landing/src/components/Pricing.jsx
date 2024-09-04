function Pricing() {
  return (
<div className="bg-gray-800 text-white py-32 px-4" id="pricing">
  <h3 className="text-3xl font-bold text-center">PRICING</h3>
  <p className="text-lg text-center mt-4">Choose a pricing plan that fits your needs.</p>
  <div className="mt-16 flex justify-between">
    <div className="w-full md:w-1/3">
      <ul className="bg-white shadow-lg rounded-lg">
        <li className="bg-black text-white text-2xl text-center py-8 rounded-t-lg">Basic</li>
        <li className="p-4"><b>10GB</b> Storage</li>
        <li className="p-4"><b>10</b> Emails</li>
        <li className="p-4"><b>10</b> Domains</li>
        <li className="p-4"><b>Endless</b> Support</li>
        <li className="p-4">
          <h2 className="text-2xl font-bold">$ 10</h2>
          <span className="text-gray-500">per month</span>
        </li>
        <li className="bg-gray-200 p-6">
          <button className="bg-black text-white py-2 px-6 w-full rounded-lg">Sign Up</button>
        </li>
      </ul>
    </div>
    <div className="w-full md:w-1/3">
      <ul className="bg-white shadow-lg rounded-lg">
        <li className="bg-red-500 text-white text-2xl text-center py-12 rounded-t-lg">Pro</li>
        <li className="p-4"><b>25GB</b> Storage</li>
        <li className="p-4"><b>25</b> Emails</li>
        <li className="p-4"><b>25</b> Domains</li>
        <li className="p-4"><b>Endless</b> Support</li>
        <li className="p-4">
          <h2 className="text-2xl font-bold">$ 25</h2>
          <span className="text-gray-500">per month</span>
        </li>
        <li className="bg-gray-200 p-6">
          <button className="bg-black text-white py-2 px-6 w-full rounded-lg">Sign Up</button>
        </li>
      </ul>
    </div>
    <div className="w-full md:w-1/3">
      <ul className="bg-white shadow-lg rounded-lg">
        <li className="bg-black text-white text-2xl text-center py-8 rounded-t-lg">Premium</li>
        <li className="p-4"><b>50GB</b> Storage</li>
        <li className="p-4"><b>50</b> Emails</li>
        <li className="p-4"><b>50</b> Domains</li>
        <li className="p-4"><b>Endless</b> Support</li>
        <li className="p-4">
          <h2 className="text-2xl font-bold">$ 50</h2>
          <span className="text-gray-500">per month</span>
        </li>
        <li className="bg-gray-200 p-6">
          <button className="bg-black text-white py-2 px-6 w-full rounded-lg">Sign Up</button>
        </li>
      </ul>
    </div>
  </div>
</div>

  );
}

export default Pricing;