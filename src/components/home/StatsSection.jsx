"use client";
const StatsSection = () => {
  const logos = [
    "/images/infiniti.webp",
    "/images/artifact.webp",
    "/images/caudalie.webp",
    "/images/axeptio.webp",
    "/images/mfinity.webp",
    "/images/group.webp",
  ];

  const stats = [
    { value: "60%", label: "Project Completed" },
    { value: "30+", label: "Team Members" },
    { value: "40K", label: "Satisfied Clients" },
  ];

  return (
    <div className="bg-white py-12">
      {/* Logos Section */}
      <div className="flex justify-center items-center gap-8 border-b border-gray-300 pb-8">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="h-12 w-auto grayscale opacity-80"
          />
        ))}
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-8">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-4xl font-bold text-black">{stat.value}</p>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
