// import { motion } from "framer-motion";
// import Link from "next/link";

// const item = {
//   hidden: { opacity: 0, y: 100 },
//   show: { opacity: 1, y: 0 },
// };

// const ProjectLink = motion(Link);
// const ProjectLayout = ({ name, description, date, demoLink }) => {
//   return (
//     <ProjectLink
//       variants={item}
//       href={demoLink}
//       target={"_blank"}
//       className=" text-sm md:text-base flex  items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
//     >
//       <div className="flex items-center justify-center space-x-2">
//         <h2 className="text-foreground">{name}</h2>
//         <p className="text-muted hidden sm:inline-block">{description}</p>
//       </div>
//       <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
//       <p className="text-muted sm:text-foreground">
//         {new Date(date).toDateString()}
//       </p>
//     </ProjectLink>
//   );
// };

// export default ProjectLayout;


import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);
const ProjectLayout = ({ name, description, date, demoLink }) => {
  return (
    <ProjectLink
      variants={item}
      href={demoLink}
      target={"_blank"}
      className="text-sm md:text-base flex flex-col sm:flex-row items-start sm:items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
    >
      {/* Start Section */}
      <div className="flex items-center space-x-2">
        <h2 className="text-foreground">{name}</h2>
      </div>

      {/* Middle Section (Description) */}
      <p className="text-muted sm:mt-0 sm:ml-4 md:ml-6 lg:ml-8 w-full sm:w-auto sm:flex-1">
        {description}
      </p>

      {/* End Section (Date) */}
      <p className="text-muted sm:text-foreground flex-shrink-0 mt-2 sm:mt-0">
        {new Date(date).toDateString()}
      </p>
    </ProjectLink>
  );
};

export default ProjectLayout;
