import Image from 'next/image';
import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Existing sections */}
      <section className="relative w-full h-[750px] pt-16 md:pt-0">
        <Image
          src="/assets/main_scenery.jpg"
          alt="Background Image"
          fill
          style={{ objectFit: 'cover', opacity: 0.85 }}
          className="h-full w-full md:h-[750px]"
          quality={100}
          priority
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
          <div className="mt-2 text-black text-[16px] font-bold italic text-center w-full max-w-[200px]">
            Guest transfer is available with our partners
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-center w-full h-auto p-12">
        <div className="w-full md:w-8/20 h-[350px] md:h-[500px] relative">
          <Image
            src="/assets/pool.jpg"
            alt="Pool Image"
            fill
            style={{ objectFit: 'cover' }}
            className="h-full w-full"
            quality={100}
          />
        </div>
        <div className="w-full md:w-12/20 text-center md:text-left p-12 md:pl-20">
          <h2 className="font-bellota text-4xl md:text-5xl lg:text-6xl mt-2 mb-4">
            Beyond the sights
          </h2>
          <p className="font-bellota text-xl md:text-2xl lg:text-3xl mt-4">
            The resort offers two swimming pools, a restaurant, a coffee shop, and a small grocery store. For golf enthusiasts, it is also possible to practice your skills.
          </p>
        </div>
      </section>

      <section className="flex flex-col-reverse md:flex-row items-center justify-center w-full h-auto p-12 bg-offWhite">
        <div className="w-full md:w-12/20 text-center md:text-left p-12 md:pr-20">
          <h2 className="font-bellota text-4xl md:text-5xl lg:text-6xl mt-2 mb-4">
            The Lighthouse Apartment
          </h2>
          <p className="font-bellota text-xl md:text-2xl lg:text-3xl mt-4">
            A modern open space concept, offering a spacious living room with an elegant fireplace and a dining area where it’s glazed by huge windows, all facing a balcony and a private garden where you can enjoy your meals peacefully and also make a barbecue.
          </p>
        </div>
        <div className="w-full md:w-8/20 h-[350px] md:h-[500px] relative">
          <Image
            src="/assets/living_room.jpg"
            alt="Living Room Image"
            fill
            style={{ objectFit: 'cover' }}
            className="h-full w-full"
            quality={100}
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-center w-full h-auto p-12 bg-blue">
        <div className="w-full md:w-8/20 h-[350px] md:h-[500px] relative">
          <Image
            src="/assets/environment.jpg"
            alt="Environment Image"
            fill
            style={{ objectFit: 'cover' }}
            className="h-full w-full"
            quality={100}
          />
        </div>
        <div className="w-full md:w-12/20 text-center md:text-left p-12 md:pl-20">
          <h2 className="font-bellota text-4xl md:text-5xl lg:text-6xl mt-2 mb-4 text-black">
            The Environment
          </h2>
          <p className="font-bellota text-xl md:text-2xl lg:text-3xl mt-4 text-black">
            Both sea and countryside, making it ideal for some relaxed and romantic holidays.
          </p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-center w-full h-auto p-12 bg-offWhite">
        <div className="w-full md:w-12/20 text-center md:text-left p-12 md:pr-20 order-2 md:order-1">
          <h2 className="font-bellota text-4xl md:text-5xl lg:text-6xl mt-2 mb-4">
            A Fully Equipped Kitchen
          </h2>
          <p className="font-bellota text-xl md:text-2xl lg:text-3xl mt-4">
            With a refrigerator, coffee machine, stove and oven, toaster and all that is needed for your daily meals.
          </p>
        </div>
        <div className="w-full md:w-8/20 h-[350px] md:h-[500px] relative order-1 md:order-2">
          <Image
            src="/assets/kitchen.jpg"
            alt="Kitchen Image"
            fill
            style={{ objectFit: 'cover' }}
            className="h-full w-full"
            quality={100}
          />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-full h-auto p-12 bg-lightGray">
        <h2 className="font-bellota text-4xl md:text-5xl lg:text-6xl mt-2 mb-4 text-center">
          Unforgettable Moments
        </h2>
        <h3 className="font-bellota text-xl md:text-3xl lg:text-4xl mt-1 mb-4 text-center">
          With a wide range of activities
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-12">
          <ul className="font-bellota text-lg md:text-xl lg:text-2xl space-y-4 mx-auto md:mr-8 list-disc list-inside">
            <li className="marker:text-sm marker:text-gray-500">Surf lessons or surf equipment rentals</li>
            <li className="marker:text-sm marker:text-gray-500">Dolphin watching or Benagil cave cruises</li>
            <li className="marker:text-sm marker:text-gray-500">SUP tours</li>
            <li className="marker:text-sm marker:text-gray-500">Sky diving adventure</li>
          </ul>
          <ul className="font-bellota text-lg md:text-xl lg:text-2xl space-y-4 mx-auto md:ml-8 list-disc list-inside">
            <li className="marker:text-sm marker:text-gray-500">Algarve landscape and wine tasting tours</li>
            <li className="marker:text-sm marker:text-gray-500">Cultural tours to visit castles and other places of historic interest</li>
            <li className="marker:text-sm marker:text-gray-500">Kayak tours along the breathtaking cliff scenery in Lagos</li>
            <li className="marker:text-sm marker:text-gray-500">Wild West Coast tours</li>
          </ul>
        </div>
      </section>

      <footer className="flex flex-col items-center justify-center w-full h-auto p-12 bg-beige">
        <h2 className="font-bellota text-4xl md:text-5xl lg:text-6xl mt-2 mb-4 text-center">
          Contact Us
        </h2>
        <p className="font-bellota text-2xl md:text-3xl lg:text-4xl mt-2 mb-4 text-center">
          +351 967563958
        </p>
        <p className="font-bellota text-2xl md:text-3xl lg:text-4xl mt-2 mb-4 text-center">
          email@gmail.com
        </p>
        <h3 className="font-bellota text-4xl md:text-5xl lg:text-6xl mt-2 mb-4 text-center">
          Follow us
        </h3>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/lighthouseluzholidays" target="_blank" title='Instagram' rel="noopener noreferrer">
            <FaInstagram className="text-black h-10 w-10" />
          </a>
          <a href="https://wa.me/351967563958" target="_blank" title='Whatsapp' rel="noopener noreferrer">
            <FaWhatsapp className="text-black h-10 w-10" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
