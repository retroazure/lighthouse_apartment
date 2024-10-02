import React from 'react';
import Image from 'next/image';


const About: React.FC = () => {
  return (
    <>
      <section className="relative w-full h-[750px] pt-16 md:pt-0">
        <Image
          src="/assets/background.webp" // Replace with your actual image path
          alt="Background Image"
          fill
          style={{ objectFit: 'cover', opacity: 0.85 }}
          className="h-full w-full md:h-[750px]"
          quality={100}
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="font-bellota text-5xl md:text-8xl font-normal">
            <span className="block">About Me</span>
          </h1>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-full h-auto p-8 md:p-16 bg-lightGray">
        <p className="font-bellota text-xl md:text-3xl lg:text-4xl mt-4 text-center max-w-2xl md:max-w-4xl mx-auto">
          Connected to the world of surfing, both as a practitioner and as a businesswoman, driven by a passion for the sea and the need to live by it, the apartment reflects this closeness by being 200 meters from the Atlantic Ocean. The view of the sea that surrounds the apartment immediately conveys a sense of peace which can be a great inspiration, either for relaxing alone or in the company of someone. It is an ideal apartment for couples on romantic vacations, with great possibilities for exploring the natural wonders that the area offers, namely the unique beaches and cliffs, gastronomy, fishing villages as well as nightlife in Lagos.
          <br /><br />
          We offer quality tours, provided by our partners, tailored to the profile of our guests.
        </p>
      </section>
    </>
  );
};

export default About;
