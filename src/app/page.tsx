import React from "react";

export default function page() {
  return (
    <div className="responsive h-fit space-y-12">
      <div className="h-[60vh] w-full">
        <video
          className="h-full w-full rounded-2xl object-cover"
          autoPlay
          loop
          preload="metadata"
          playsInline
          aria-label="Landscape Video"
        >
          <source src="/Landscape Video 2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <section className="flex flex-row">
        <div className="">
          <h1 className="text-4xl font-bold uppercase text-primary">
            We are frontline consulting
          </h1>
          <p className="tracking-wider">
            We drives impactful solutions in environmental planning, tourism
            development, and technical writing. Let&apos;s create sustainable success
            for your projects
          </p>
        </div>
        <div className="">Button</div>
      </section>
    </div>
  );
}
