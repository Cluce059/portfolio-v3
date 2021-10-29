import React from "react";

const ProjectList =() => {
    //leave open bc use will initialize 
    //const [currentProject, setCurrentProject] = useState();
    const projects=[
        {
            name: 'Fitness Buddy',
            description: 'Fitness Application',
            i: 0,
            alt: 'Fitness Buddy app',
            repo: 'https://github.com/Cluce059/Fitness-Buddy',
            link: 'https://fitness-buddy-2.herokuapp.com/'
        },
        {
            name: 'Portfolio-v1',
            description: 'my first portfolio',
            i: 1,
            alt: 'My first portfolio app',
            repo: 'https://github.com/Cluce059/Portofolio',
            link: 'https://cluce059.github.io/Portofolio/'
        },
        {
            name: 'Trivia Brews',
            description: 'Trivia and beer game app',
            i: 2,
            alt: 'Trivia brews app',
            repo: 'https://github.com/Cluce059/TriviaBrews',
            link: 'https://cluce059.github.io/Project1/'
        },
        {
            name: 'Food Festival',
            description: 'Food festival app for finding tickets and events (placeholder)',
            i: 3,
            alt: 'Food Festival app',
            repo: 'https://github.com/Cluce059/food-festival',
            link: 'https://cluce059.github.io/food-festival/'
        },
        {
            name: 'Weather App',
            description: 'Application for tracking local weather location api',
            i: '4',
            alt: 'weather tracking app',
            repo: 'https://github.com/Cluce059/weatherApp',
            link: 'https://cluce059.github.io/weatherApp/'
        },
        {
            name: 'This app and more to come ...',
            description: 'alt',
            i: '0',
            alt: 'app',
            repo: '/',
            link: '/'
        }
    ];
        
    return (
     <div className="flex-row">
        {projects.map((project)=> (
            <li>
                {project.name}
               
                <img 
                src={require(`../../assets/img/${project.i}.png`).default}
                alt={project.alt}
                key={project.name}
                ></img>
                    <span> {project.description} </span>
                    <p>Link: {project.link}</p>
                    <p>Github Repo: {project.repo}</p>
            </li>
        ))}
     </div>
    );
};

export default ProjectList;
