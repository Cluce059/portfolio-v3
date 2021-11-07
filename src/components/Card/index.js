import React from "react";
import {FaGithub} from 'react-icons/fa';
import {MdExitToApp} from 'react-icons/md'; 
import Boop from '../Boop';

const Card = (project) => {
	//double deconstruct idk wai
   console.log(project.project.name);
  return (
	<div class="card-list">
	<article class="card">
	<figure class="card-image">
		<img className="card-img"
		   src={require(`../../assets/img/${project.project.img}.png`).default}
		   alt={project.project.alt}
		   key={project.project.name} 
		   />
	</figure>
	<div class="card-header">
		<a href={project.project.link}>{project.project.name}</a>
		<p>{project.project.description}</p>
	</div>
	<div class="card-footer">
	<Boop rotation={20} timing={200}> 
    	<a className="project-icon" href = {project.project.link}>
            <MdExitToApp /> 
		</a> 
    </Boop>
    <Boop rotation={20} timing={200}>
        <a className="project-icon" href={project.project.repo}> 
			<FaGithub /> 
		</a>                                         
    </Boop>
	</div>
</article>
</div>
  )
};

export default Card;
