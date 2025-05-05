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
            { name : "CSS3", color : "bg-skill02" },
            { name : "Vue", color : "bg-skill05" },
            { name : "React", color : "bg-skill03" },
            { name : "TypeScript", color : "bg-skill04" },
            { name : "JavaScript", color : "bg-skill05" },
            { name : "Axios", color : "bg-skill06" },
            { name : "REST API", color : "bg-skill07" },
          ]
        },
        { 
            title : "Language",
            icon : LanguageIcon,
            items : [
              { name : "JavaScript", color : "bg-skill08" },
              { name : "TypeScript", color : "bg-skill09" },
            ]
        },
        { 
            title : "Collaboration",
            icon : CollaborationIcon,
            items : [
              { name : "GitHub", color : "bg-skill10" },
              { name : "Firebase", color : "bg-skill11" },
              { name : "Notion", color : "bg-skill12" },
            ]
        },
        { 
            title : "Design",
            icon : DesignIcon,
            items : [
                { name : "Figma", color : "bg-skill13" },
                { name : "Photoshop", color : "bg-skill14" },
                { name : "Illustrator", color : "bg-skill15" },
            ]
        }
    ] 

    return(
        <section id='skills' className='px-10 mb-20 md:px-0 md:pt-[96px] md:mb-[96px]'>
        <div className='content px-10 py-10 bg-white rounded-xl shadow md:w-[1280px] mx-auto'>
            { Skills.map((skill, index) =>(
                <div key={index} className='gap-10 mb-5 md:flex md:items-center last:mb-0'>
                    <h3 className='text-2xl font-bold text-subText w-[200px]'><img src={skill.icon} className='inline' /> {skill.title}</h3>
                    <ul className='flex py-5 gap-5 flex-wrap'>
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