import { FaFacebook, FaInstagram, FaSnapchat, FaPinterest, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Header () {
  return(
   <header
  className=" "
  style={{
    backgroundImage: 'url("https://i0.wp.com/picjumbo.com/wp-content/uploads/amazing-nature-mountain-scenery-during-sunset-free-photo.jpg?w=2210&quality=70")',
    backgroundSize: 'cover',
    backgroundPosition: 'center' ,
    minHeight: "100vh",
    filter: "grayscale(50%)"
  }}
>
  <div className="p-32 text-white absolute top-16">
<span class=" font-bold text-8xl leading-16">Start something that matters</span>
<br />
<span class="text-3xl leading-8">Stop wasting valuable time with projects that just isn't you.</span>
<p className="py-8">
{/* <a href="#about" class="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off"> */}
<a href="#about" class="bg-gray-200 bg-opacity-75 hover:bg-opacity-100 text-black text-xl p-3 ">
  Learn more and start today
</a>
</p>
</div>
{/* <div class="w3-display-bottomleft w3-text-grey w3-large"> */}
<div class=" fixed bottom-0 left-0 p-8 text-2xl text-white flex gap-1">
    <a href="https://facebook.com" className="hover:opacity-100 opacity-75">
        <FaFacebook />
      </a>
      <a href="https://instagram.com" className="hover:opacity-100 opacity-75">
        <FaInstagram />
      </a>
      <a href="https://snapchat.com" className="hover:opacity-100 opacity-75">
        <FaSnapchat />
      </a>
      <a href="https://pinterest.com" className="hover:opacity-100 opacity-75">
        <FaPinterest />
      </a>
      <a href="https://twitter.com" className="hover:opacity-100 opacity-75">
        <FaTwitter />
      </a>
      <a href="https://linkedin.com" className="hover:opacity-100 opacity-75">
        <FaLinkedin />
      </a>
  </div>
</header>
  );
}

export default Header;