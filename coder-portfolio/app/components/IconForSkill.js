// components/IconForSkill.js
import { SiReact, SiNextdotjs, SiThreedotjs, SiNodedotjs, SiPython,  SiDocker, SiMongodb } from "react-icons/si";
import { TbBrandTypescript, TbBrandJavascript } from "react-icons/tb";
import { FiCode } from "react-icons/fi";

const IconForSkill = ({ skill, className = "text-4xl text-purple-400" }) => {
  const iconProps = { className };
  
  switch(skill.toLowerCase()) {
    case 'react':
      return <SiReact {...iconProps} />;
    case 'next.js':
      return <SiNextdotjs {...iconProps} />;
    case 'three.js':
      return <SiThreedotjs {...iconProps} />;
    case 'node.js':
      return <SiNodedotjs {...iconProps} />;
    case 'python':
      return <SiPython {...iconProps} />;
    // case 'aws':
    //   return <SiAmazonaws {...iconProps} />;
    case 'docker':
      return <SiDocker {...iconProps} />;
    case 'mongodb':
      return <SiMongodb {...iconProps} />;
    case 'typescript':
      return <TbBrandTypescript {...iconProps} />;
    case 'javascript':
      return <TbBrandJavascript {...iconProps} />;
    default:
      return <FiCode {...iconProps} />;
  }
};

export default IconForSkill;