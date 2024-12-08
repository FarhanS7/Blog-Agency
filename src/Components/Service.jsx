import React, { useEffect, useState } from "react";

const Service = () => {
  const [services, setServices] = useState([]);

  // Fetch services dynamically (Mocking with static data for now)
  useEffect(() => {
    const fetchServices = async () => {
      // Simulating an API call
      const serviceData = [
        {
          id: 1,
          name: "Web Development",
          description: "Build amazing websites.",
        },
        {
          id: 2,
          name: "App Development",
          description: "Create feature-rich mobile apps.",
        },
        {
          id: 3,
          name: "UI/UX Design",
          description: "Design intuitive user interfaces.",
        },
      ];
      setServices(serviceData);
    };

    fetchServices();
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      {/* Service Section */}
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="card shadow-md bg-white">
              <div className="card-body">
                <h2 className="card-title text-lg font-semibold">
                  {service.name}
                </h2>
                <p className="text-gray-600">{service.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
