function Contact () {
  return (
<div className="bg-gray-200 py-32 px-4" id="contact">
  <h3 className="text-3xl font-bold text-center">CONTACT</h3>
  <p className="text-lg text-center mt-4">Let's get in touch. Send us a message:</p>
  <div className="mt-12">
    <p className="flex items-center text-lg mb-4">
      <i className="fas fa-map-marker-alt text-3xl mr-4"></i> Chicago, US
    </p>
    <p className="flex items-center text-lg mb-4">
      <i className="fas fa-phone-alt text-3xl mr-4"></i> Phone: +00 151515
    </p>
    <p className="flex items-center text-lg mb-4">
      <i className="fas fa-envelope text-3xl mr-4"></i> Email: mail@mail.com
    </p>
    <br />
    <form action="/action_page.php" target="_blank">
      <p className="mb-4">
        <input
          className="w-full px-4 py-2 border rounded-md"
          type="text"
          placeholder="Name"
          required
          name="Name"
        />
      </p>
      <p className="mb-4">
        <input
          className="w-full px-4 py-2 border rounded-md"
          type="email"
          placeholder="Email"
          required
          name="Email"
        />
      </p>
      <p className="mb-4">
        <input
          className="w-full px-4 py-2 border rounded-md"
          type="text"
          placeholder="Subject"
          required
          name="Subject"
        />
      </p>
      <p className="mb-4">
        <textarea
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Message"
          required
          name="Message"
          rows="4"
        ></textarea>
      </p>
      <p>
        <button className="bg-black text-white py-2 px-6 rounded-md flex items-center">
          <i className="fas fa-paper-plane mr-2"></i> SEND MESSAGE
        </button>
      </p>
    </form>
    <img
      src="/w3images/map.jpg"
      className="w-full mt-12 grayscale"
      alt="Map"
    />
  </div>
</div>

  );
}
export default Contact;