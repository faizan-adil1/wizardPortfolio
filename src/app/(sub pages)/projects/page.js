"use client";
import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
// import Staff from "@/components/models/Staff";
import dynamic from "next/dynamic";
import React from "react";
// import { useState,useEffect } from "react";

const Staff = dynamic(() => import("@/components/models/Staff"), {  ssr: false,});

// export const metadata = {
//   title: "Projects",
//   description: "Check out my personal and open-source projects on GitHub.",
// };

export default function Home() {
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = React.useState(true);


  React.useEffect(() => {
    // Fetching data from GitHub API
    async function fetchProjects() {
      const res = await fetch("https://api.github.com/users/faizan-adil1/repos");
      const data = await res.json();

      // Formatting the data as you need
      const formattedProjects = data.map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || "No description provided",
        date: repo.created_at.split("T")[0], // Getting the date in YYYY-MM-DD format
        demoLink: repo.html_url,
        private: repo.private
      }));

      setProjects(formattedProjects);
      setLoading(false);
    }

    fetchProjects();
  }, []);

  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />
      {
        loading ? (
          <p>Loading...</p>
        ) : (
          <ProjectList projects={projects} />

        )
      }

      <div className="flex items-center justify-center fixed  top-16  lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}