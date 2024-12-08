import React from "react";
import Layout from "../Layout/Layout";

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Farhan",
      role: "CEO",
      image: "../assets/pictures/imad92-asad-qjY99j5D1DQ-unsplash.jpg",
    },
    {
      id: 2,
      name: "Rabbil Rupom",
      role: "CTO",
      image: "../assets/pictures/pylyp-sukhenko-SrsIBiJPpxs-unsplash.jpg",
    },
    {
      id: 3,
      name: "Amit",
      role: "Designer",
      image: "../assets/pictures/royal-anwar-l1MCA0VyNrk-unsplash.jpg",
    },
    {
      id: 4,
      name: "Tahmid",
      role: "Developer",
      image: "../assets/pictures/ruthson-zimmerman-hDANeGXvWRw-unsplash.jpg",
    },
  ];
  return (
    <Layout>
      <section id="about" className="py-10 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We are a team of passionate professionals dedicated to delivering
            exceptional services and products. Our mission is to create value
            for our customers and stakeholders.
          </p>
        </div>
      </section>

      <section id="team" className="py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="card bg-base-100 shadow-md">
                <figure>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
