import React from "react";
import Image from "next/image";
export default function Avatar() {
  return (
    <Image
      alt="avatar"
      src="/images/placeholder.jpg"
      className="rounded-full"
      height={30}
      width={30}
    />
  );
}
