import Image from "next/image";
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      <section className="relative w-full h-[742px] pt-16 md:pt-0"> {/* Added padding-top for mobile */}
        <Image 
          src="/assets/main_scenery.jpg"
          alt="Background Image" 
          fill 
          style={{ objectFit: 'cover', opacity: 0.85 }} 
          className="h-full w-full md:h-[742px]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="font-bellota text-6xl md:text-8xl font-normal">
            <span className="block">Welcome</span>
            <span className="block">Lighthouse Apartment</span>
          </h1>
          <a 
            href="mailto:yourbusiness@example.com?subject=Booking%20Inquiry&body=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20an%20apartment."
            className="mt-10 px-8 py-4 bg-[#61B9C3] text-white font-bellota text-2xl md:text-3xl font-bold rounded-full"
          >
            Book Now
          </a>
          <div className="mt-2 text-black text-[14px] font-normal text-center w-full max-w-[200px]">
            We also provide guest transfer<br />service with our partners
          </div>
        </div>
      </section>
      
      <section className="flex flex-col md:flex-row items-center justify-center w-full h-auto p-8">
        <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative">
          <Image 
            src="/assets/pool.jpg"
            alt="Pool Image" 
            fill 
            style={{ objectFit: 'cover' }} 
            className="h-full w-full"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left p-8 md:pl-16">
          <h2 className="font-bellota text-4xl md:text-5xl lg:text-6xl mt-2 mb-2">
            Beyond the sights
          </h2>
          <p className="font-bellota text-xl md:text-2xl lg:text-3xl mt-8">
            The resort offers two swimming pools, a restaurant, a coffee shop, and a small grocery store. For golf enthusiasts, it is also possible to practice your skills.
          </p>
        </div>
      </section>

      <section className="flex flex-col-reverse md:flex-row items-center justify-center w-full h-auto p-8 bg-offWhite">
        <div className="w-full md:w-1/2 text-center md:text-left p-8 md:pr-16">
          <h2 className="font-bellota text-4xl md:text-5xl lg:text-6xl mb-4">
            The Lighthouse Apartment
          </h2>
          <p className="font-bellota text-xl md:text-2xl lg:text-3xl mt-4">
            A modern open space concept, offering a spacious living room with an elegant fireplace and a dining area where it’s glazed by huge windows, all facing a balcony and a private garden where you can enjoy your meals peacefully and also make a barbecue.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative">
          <Image 
            src="/assets/living_room.jpg"
            alt="Living Room Image" 
            fill 
            style={{ objectFit: 'cover' }} 
            className="h-full w-full"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
