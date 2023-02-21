"use client";

import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className='py-4'>
      <div className='flex justify-between items-center mx-32'>
        <h1>Trivio</h1>
        <button className=''>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            direction={"left"}
            size={18}
          />
          {isOpen && <p>MENU</p>}
        </button>
      </div>
    </div>
  );
}
