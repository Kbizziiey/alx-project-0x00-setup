import Button from "@/components/Button/Button";
import Card from "@/components/Card";
import React from 'react';

export default function landing() {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="flex justify-betwee items-center gap-1">
        <Button title="Buy Now" styles="rounded-sm text-sm bg-blue-500 "/>
        <Button title="Subscribe Now" styles="rounded-lg text -2xl bg-red-300"/>
        <Button title="Join now" styles="rounded-full text-lg bg-green-500"/>
      </div>
      
    </div>
  );
}
