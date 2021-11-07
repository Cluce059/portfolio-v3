import React from 'react';
import Card from '../Card';

function Projects(){
    //console.log(projects.img);
    const projects = [
        {  
            name: 'Fitness Buddy',
            description: 'A Fitness Application for personalized workout plans',
            // img: '../../assets/img/0.png',
            img: '0',
            alt: 'Fitness Buddy',
            repo: 'https://github.com/Cluce059/Fitness-Buddy',
            link: 'https://fitness-buddy-2.herokuapp.com/'
        },
        {
            name: 'Portfolio v1',
            description: 'My first portfolio uilt using static HTML and JavaScript',
            img: '1',
            alt: 'My first portfolio',
            repo: 'https://github.com/Cluce059/Portofolio',
            link: 'https://cluce059.github.io/Portofolio/'
        },
        {
            name: 'Trivia Brews',
            description: 'A trivi game with brewery proximity feature',
            img: '2',
            alt: 'Trivia Brews',
            repo: 'https://github.com/Cluce059/TriviaBrews',
            link: 'https://cluce059.github.io/Project1/'
        },
        {
            name: 'Food Festival',
            description: 'Food festival app for finding tickets and events',
            img: '3',
            alt: 'Food Festival',
            repo: 'https://github.com/Cluce059/food-festival',
            link: 'https://cluce059.github.io/food-festival/'
        },
        {
            name: 'Weather App',
            description: 'Application for tracking local weather location api',
            img: '4',
            alt: 'weather tracking app',
            repo: 'https://github.com/Cluce059/weatherApp',
            link: 'https://cluce059.github.io/weatherApp/'
        },
        {
            name: 'Portfolio v2',
            description: 'My second portfolio',
            img: '5',
            alt: 'Portfolio-v2',
            repo: 'https://github.com/Cluce059/portfolio',
            link: '/'
        } 
        ];
    //  for(var i = 0; i < projects.length; i++){
    //      console.log(projects[i].name)
    //  }
   
    return (
        <section className="portfolio-section" id="portfolio">

          <div>
          <div className="flex-row">Projects</div>
            {projects.map((project) => (
                <Card project ={project} />
            ))}
            </div>
        </section>
    );
};

export default Projects;


//pages 
/**import React from 'react';
import ProjectList from './ProjectList';

function Portfolio(){
    //const { currentProject } = props;
    return (
        <section className="portfolio">
            <h2>My Portoflio</h2>
            <ProjectList/>
        </section>
    );
}

export default Portfolio; */