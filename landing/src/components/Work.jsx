function Work () {
  return(
<div className="py-32 px-4" id="work">
  <h3 className="text-center text-2xl font-semibold">OUR WORK</h3>
  <p className="text-center text-lg text-gray-700">What we've done for people</p>

  <div className="flex flex-wrap mt-16 -mx-4">
    <div className="w-full lg:w-1/4 md:w-1/2 px-4">
      <img 
        src="/w3images/tech_mic.jpg" 
        className="w-full hover:opacity-75 cursor-pointer" 
        alt="A microphone" 
        onClick={() => onClick(this)} 
      />
    </div>
    <div className="w-full lg:w-1/4 md:w-1/2 px-4">
      <img 
        src="/w3images/tech_phone.jpg" 
        className="w-full hover:opacity-75 cursor-pointer" 
        alt="A phone" 
        onClick={() => onClick(this)} 
      />
    </div>
    <div className="w-full lg:w-1/4 md:w-1/2 px-4">
      <img 
        src="/w3images/tech_drone.jpg" 
        className="w-full hover:opacity-75 cursor-pointer" 
        alt="A drone" 
        onClick={() => onClick(this)} 
      />
    </div>
    <div className="w-full lg:w-1/4 md:w-1/2 px-4">
      <img 
        src="/w3images/tech_sound.jpg" 
        className="w-full hover:opacity-75 cursor-pointer" 
        alt="Soundbox" 
        onClick={() => onClick(this)} 
      />
    </div>
  </div>

  <div className="flex flex-wrap mt-8 -mx-4">
    <div className="w-full lg:w-1/4 md:w-1/2 px-4">
      <img 
        src="/w3images/tech_tablet.jpg" 
        className="w-full hover:opacity-75 cursor-pointer" 
        alt="A tablet" 
        onClick={() => onClick(this)} 
      />
    </div>
    <div className="w-full lg:w-1/4 md:w-1/2 px-4">
      <img 
        src="/w3images/tech_camera.jpg" 
        className="w-full hover:opacity-75 cursor-pointer" 
        alt="A camera" 
        onClick={() => onClick(this)} 
      />
    </div>
    <div className="w-full lg:w-1/4 md:w-1/2 px-4">
      <img 
        src="/w3images/tech_typewriter.jpg" 
        className="w-full hover:opacity-75 cursor-pointer" 
        alt="A typewriter" 
        onClick={() => onClick(this)} 
      />
    </div>
    <div className="w-full lg:w-1/4 md:w-1/2 px-4">
      <img 
        src="/w3images/tech_tableturner.jpg" 
        className="w-full hover:opacity-75 cursor-pointer" 
        alt="A tableturner" 
        onClick={() => onClick(this)} 
      />
    </div>
  </div>
</div>

  );
}

export default Work;