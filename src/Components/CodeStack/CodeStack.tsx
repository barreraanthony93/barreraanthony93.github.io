import React from "react";
import "./CodeStack.scss";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSass } from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiFirebase,
  SiExpo,
  SiAdobecreativecloud,
  SiTypescript
} from "react-icons/si";
import { DiGoogleCloudPlatform } from "react-icons/di";

interface Props {
  stack: string[];
}
interface Icon {
  icon: string;
  element: JSX.Element;
}

const stackIcons: Icon[] = [
  { icon: "react", element: <FaReact /> },
  { icon: "node", element: <FaNodeJs /> },
  { icon: "html", element: <FaHtml5 /> },
  { icon: "css", element: <FaCss3Alt /> },
  { icon: "scss", element: <FaSass /> },
  { icon: "next", element: <SiNextdotjs /> },
  { icon: "javascript", element: <SiJavascript /> },
  { icon: "typescript", element: <SiTypescript /> },
  { icon: "firebase", element: <SiFirebase /> },
  { icon: "adobe", element: <SiAdobecreativecloud /> },
  { icon: "google", element: <DiGoogleCloudPlatform /> },
  { icon: "expo", element: <SiExpo /> },
];

const CodeStack = (props: Props) => {
  const { stack } = props;

  const renderStackIcon = (s: string) => {
    return (
      <div key={s}>
        {stackIcons.map((icon, i) => (
            <span key={`${icon.icon}${i}`}>
                { icon.icon === s ? icon.element : null}
            </span>
            ))}
      </div>
    );
  };

  return <div className="stack">{stack.map((s) => renderStackIcon(s))}</div>;
};

export default CodeStack;
