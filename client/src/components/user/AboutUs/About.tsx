function About() {
  return (
    <div className="w-full flex flex-col justify-center items-center p-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">About Us</h1>

      <div className="max-w-lg w-full flex flex-col items-center">
        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2"
          alt="About Us"
          className="h-64 w-full bg-gray-200 rounded-lg object-cover"
        />

        {/* Text */}
        <p className="text-gray-700 text-center mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-[#BD9455] text-white font-medium p-3 rounded-lg mt-6"
        >
          Know More
        </button>
      </div>
    </div>
  );
}

export default About;
