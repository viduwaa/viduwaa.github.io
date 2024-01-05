import { FaBootstrap, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro } from "react-icons/si";

import C from "/assets/icons/c.svg"
import Java from "/assets/icons/java.svg"
import Python from "/assets/icons/python.svg"
import JS from "/assets/icons/js.svg"
import AWS from "/assets/icons/aws.svg"
import Azure from "/assets/icons/azure.svg"

export  const TechStackItems = [
    
{
    name: <FaReact size={50}/>,
    color: "blue"
},
{
    name: <SiTypescript size={50}/>,
    color: "blue"
},
{
    name: <SiTailwindcss size={50}/>,
    color: "#36B6F2"
},
{
    name: <FaBootstrap size={50}/>,
    color: "#7B11F3"
},
{
    name: <FaNodeJs size={50}/>,
    color: "#5FAE46"
},
]

export const  ProgrammingItems = [
    {
        name:"Python",
        image:Python,
    },
    {
        name:"Java",
        image:Java,
    },
    {
        name:"C",
        image:C,
    },
    {
        name:"Javascript",
        image:JS,
    },
    
]

export const DesigningItems=[
    {
        name: <SiAdobephotoshop  size={50}/>,
        color: "#2FA3F7"
    },
    {
        name: <SiAdobeillustrator  size={50}/>,
        color: "#F79500"
    },
    {
        name: <SiAdobepremierepro   size={50}/>,
        color: "#EB7BFF"
    },
]

export const CloudItems=[
    {
        name:"AWS",
        image:AWS
    },
    {
        name:"Azure",
        image:Azure
    }
]