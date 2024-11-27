import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FlyoutCardProps {
  image: string;
  href: string;
  title: string;
}

const FlyoutCard = ({ image, href, title }: FlyoutCardProps) => {
  return (
    <Link href={href} className="space-y-2">
      <Image className="h-36 w-full object-cover rounded-xl" src={image} alt="alt" width={300} height={300} />
      <div className="text-black flex flex-row">
        <ChevronRight color="#1B6E6E" strokeWidth={1.5} />
        <h6 className="font-medium">{title}</h6>
      </div>
    </Link>
  );
};

export default FlyoutCard;
