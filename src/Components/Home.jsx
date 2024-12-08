import React from "react";

const Home = () => {
  return (
    <div>
      <div id="hero" className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to the Homepage</h1>
            <p className="py-6">
              Discover amazing content and explore our latest blogs and
              features!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div id="custom" className="py-12 bg-primary text-white text-center">
        <h2 className="text-4xl font-bold">Custom Section</h2>
        <p className="mt-4">
          This is a custom section where you can add any content or features.
        </p>
      </div>
    </div>
  );
};

export default Home;
