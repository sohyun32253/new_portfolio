import React from 'react';
import FrontendIcon from '../images/Frontend_icon.png';
import LanguageIcon from '../images/language_icon.png'
import CollaborationIcon from '../images/collaboration_icon.png'
import DesignIcon from '../images/design_icon.png'

function Skills() {
    const Skills = [
        { 
          title : "Frontend",
          icon : FrontendIcon,
          items : [
            { name : "HTML5", color : "bg-skill01" },
            { name : "CSS3", color : "bg-skill01" },
            { name : "Vue", color : "bg-skill01" },
            { name : "React", color : "bg-skill01" },
            { name : "TypeScript", color : "bg-skill01" },
            { name : "JavaScript", color : "bg-skill01" },
            { name : "Jquery", color : "bg-skill01" },
            { name : "Axios", color : "bg-skill01" },
            { name : "REST API", color : "bg-skill01" },
            { name : "Tailwind CSS", color : "bg-skill01" },
            { name : "styled-components", color : "bg-skill01" },
          ]
        },
        { 
            title : "Language",
            icon : LanguageIcon,
            items : [
              { name : "JavaScript", color : "bg-skill02" },
              { name : "TypeScript", color : "bg-skill02" },
            ]
        },
        { 
            title : "Collaboration",
            icon : CollaborationIcon,
            items : [
              { name : "GitHub", color : "bg-skill03" },
              { name : "Firebase", color : "bg-skill03" },
              { name : "Notion", color : "bg-skill03" },
            ]
        },
        { 
            title : "Design",
            icon : DesignIcon,
            items : [
                { name : "Figma", color : "bg-skill04" },
                { name : "Photoshop", color : "bg-skill04" },
                { name : "Illustrator", color : "bg-skill04" },
            ]
        }
    ] 

    return(
        <section id='skills' className='px-10 mb-20 md:px-0 md:pt-[96px] md:mb-[96px] '>
        <div className='content px-10 py-10  rounded-xl shadow md:w-[1280px] mx-auto border-skillBorder border'>
            { Skills.map((skill, index) =>(
                <div key={index} className='gap-10 mb-5 md:flex md:items-center last:mb-0'>
                    <h3 className='text-2xl font-bold text-subBackground w-[200px]'><img src={skill.icon} className='inline' /> {skill.title}</h3>
                    <ul className='flex py-5 gap-5 flex-wrap md:w-[1000px]'>
                        {skill.items.map((i, index)=> (
                             <li key={index} className={`px-4 py-1 border rounded-full text-xl text-white ${i.color}`}>{i.name}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        </section>
    )
}
export default Skills;