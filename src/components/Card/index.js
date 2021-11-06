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
		<img src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyNDcwMTUwOQ&ixlib=rb-1.2.1&q=85" alt="An orange painted blue, cut in half laying on a blue background" />
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
