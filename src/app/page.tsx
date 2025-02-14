"use client";

import Navbar from '@/components/Navbar';
import Profile from '@/components/Profile';
import About from '@/components/About'
import Stack from '@/components/Stack'
import Skill from '@/components/Skill'
import Project from '@/components/Project'
import {Spacer} from "@nextui-org/react";


export default function Home() {
  const sections = [About, Stack, Skill, Project];
  
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='bg-[#B3C8CF]'>
      <Navbar />
      <Profile />
      <Spacer y={16} />
      {sections.map((Component, index) => (
        <div key={index}>
          <Component />
          <Spacer y={16} />
        </div>
      ))}
    </div>
  );
}
