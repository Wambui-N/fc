import React from "react";
import Button from "./Button";
import FlyoutCard from "./FlyoutCard";

interface FlyoutContentProps {
  items: { image: string; href: string; title: string }[]; // Array of items to display
}

const FlyoutContent: React.FC<FlyoutContentProps> = ({ items }) => {
  return (
    <>
      <div className="absolute left-0 right-0 top-1/3 mt-4 h-12 rounded-xl bg-transparent"></div>
      <div className="z-30 absolute left-0 right-0 top-full mt-4 h-auto rounded-xl bg-white p-8">
        <div className="flex flex-row gap-6">
          <div className="basis-1/4 space-y-4">
            <h3 className="font-semibold text-xl">We deliver specialized consulting and training</h3>
            <Button label="Browse our services" />
          </div>
          <div className="basis-3/4 grid grid-cols-3 gap-12">
            {items.map((item, index) => (
              <FlyoutCard key={index} image={item.image} href={'#'} title={item.title} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FlyoutContent;
