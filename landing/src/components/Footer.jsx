function Footer (){
  return (
<footer className="bg-black text-white py-16 text-center">
  <a href="#home" className="bg-gray-300 text-black py-2 px-6 rounded-full inline-flex items-center hover:bg-gray-400">
    <i className="fas fa-arrow-up mr-2"></i> To the top
  </a>
  <div className="text-3xl my-8 space-x-4">
    <a href="https://www.facebook.com" className="hover:opacity-80">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="https://www.instagram.com" className="hover:opacity-80">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="https://www.snapchat.com" className="hover:opacity-80">
      <i className="fab fa-snapchat-ghost"></i>
    </a>
    <a href="https://www.pinterest.com" className="hover:opacity-80">
      <i className="fab fa-pinterest-p"></i>
    </a>
    <a href="https://www.twitter.com" className="hover:opacity-80">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="https://www.linkedin.com" className="hover:opacity-80">
      <i className="fab fa-linkedin-in"></i>
    </a>
  </div>
  <p>
    Powered by{' '}
    <a
      href="https://personal-portfolio-summer-haze.vercel.app/"
      title="Summer Haze"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-green-400"
    >
      Summer_haze
    </a>
  </p>
</footer>

  );
}
export default Footer; 