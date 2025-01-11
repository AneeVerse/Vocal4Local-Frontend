"use client";
const StatsSection = () => {
  const logos = [
    "/images/home/partner/partner1.png",
    "/images/home/partner/partner1.png",
    "/images/home/partner/partner1.png",
    "/images/home/partner/partner1.png",
    "/images/home/partner/partner1.png",
  ];

  const stats = [
    { value: "60%", label: "Project Completed" },
    { value: "30+", label: "Team Members" },
    { value: "40K", label: "Satisfied Clients" },
  ];

  return (
    <div className="bg-white py-12">
      {/* Logos Section */}
      <div className="flex flex-wrap justify-center items-center gap-8 border-b border-gray-300 pb-8">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className=" h-6 md:h-12 object-cover w-auto grayscale opacity-80"
          />
        ))}
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8 text-center py-8">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-3xl md:text-4xl font-bold text-black">{stat.value}</p>
            <p className="text-sm md:text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
