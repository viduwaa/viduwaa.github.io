import { FaBootstrap, FaNodeJs, FaReact ,FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro } from "react-icons/si";

import C from "/assets/icons/c.svg"
import Java from "/assets/icons/java.svg"
import Python from "/assets/icons/python.svg"
import JS from "/assets/icons/js.svg"
import AWS from "/assets/icons/aws.svg"
import Azure from "/assets/icons/azure.svg"

export  const TechStackItems = [
    
{
    id:100,
    name: <FaReact size={50}/>,
    color: "blue"
},
{
    id:101,
    name: <SiTypescript size={50}/>,
    color: "blue"
},
{
    id:102,
    name: <SiTailwindcss size={50}/>,
    color: "#36B6F2"
},
{
    id:103,
    name: <FaBootstrap size={50}/>,
    color: "#7B11F3"
},
{
    id:104,
    name: <FaNodeJs size={50}/>,
    color: "#5FAE46"
},
]

export const  ProgrammingItems = [
    {
        id:105,
        name:"Python",
        image:Python,
    },
    {   id:106,
        name:"Java",
        image:Java,
    },
    {
        id:107,
        name:"C",
        image:C,
    },
    {   
        id:108,
        name:"Javascript",
        image:JS,
    },
    
]

export const DesigningItems=[
    {
        id:109,
        name: <SiAdobephotoshop  size={50}/>,
        color: "#2FA3F7"
    },
    {   
        id:110,
        name: <SiAdobeillustrator  size={50}/>,
        color: "#F79500"
    },
    {
        id:111,
        name: <SiAdobepremierepro   size={50}/>,
        color: "#EB7BFF"
    },
]

export const CloudItems=[
    {
        id:112,
        name:"AWS",
        image:AWS
    },
    {
        id:113,
        name:"Azure",
        image:Azure
    }
]


export const VersionControl =[
    {
        id:113,
        name:<FaGitAlt size={50} color={"#FF4E35"}/>
    }
]