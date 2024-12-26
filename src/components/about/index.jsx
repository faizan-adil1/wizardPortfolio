import React from "react";
import Link from "next/link";
import ItemLayout from "./ItemLaoyout";
// import ItemLayout from "./ItemLayout";


const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        {/* About Section */}
        <ItemLayout
          className={"col-span-full lg:col-span-8 row-span-2 flex-col items-start"}
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            About Me
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            I am Muhammad Faizan Adil, a passionate Frontend Developer with 2+ years of
            academic experience in BSCS at IQRA University (extension campus). I specialize
            in building responsive, user-friendly portals using React.js, Next.js, and Tailwind CSS.
            I have created three major portals from scratch: "Onboarding," "Brands Admin," and "Admin Panel,"
            ensuring they are responsive across all devices. I am always eager to learn new technologies and bring creative ideas to life.
          </p>
        </ItemLayout>

        {/* Clients Section */}
        <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            3+ <sub className="font-semibold text-base">projects</sub>
          </p>
        </ItemLayout>

        {/* Experience Section */}
        <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+ <sub className="font-semibold text-base">months of experience</sub>
          </p>
        </ItemLayout>

        {/* Languages Section */}
        <ItemLayout className={"col-span-full md:col-span-4 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=faizan-adil1&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`} 
            alt="GitHub Stats"
            loading="lazy"
          />
        </ItemLayout>
        {/* GitHub Stats Section */}
        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=faizan-adil1&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`} 
            alt="GitHub Stats"
            loading="lazy"
          />
        </ItemLayout>

        {/* Skills Section */}
        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=react,nextjs,tailwind,redux,typescript,js,html,css,vscode,git,aws,bootstrap,github,mongodb,mysql,netlify,threejs,vercel,vite,vscode,nodejs,npm,postgres,`}
            alt="My Skills"
            loading="lazy"
          />
        </ItemLayout>

          {/* GitHub Streak Section */}
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?
                user=faizan-adil1&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="GitHub Streak"
            loading="lazy"
          />
        </ItemLayout>

          {/* Featured Project Section */}
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin?username=faizan-adil1&repo=Music-Pakistan&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`} 
            alt="GitHub Stats"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
