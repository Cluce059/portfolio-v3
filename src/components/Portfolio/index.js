import React from 'react';
import Card from '../Card';

function Portfolio(){
    //console.log(projects.img);
    const projects = [
        {  
            name: 'Fitness Buddy',
            description: 'Fitness Application',
            img: '../../assets/img/0.png',
            alt: 'Fitness Buddy app',
            repo: 'https://github.com/Cluce059/Fitness-Buddy',
            link: 'https://fitness-buddy-2.herokuapp.com/'
        },
        {
            name: 'Portfolio-v1',
            description: 'my first portfolio',
            img: '../../assets/img/1.png',
            alt: 'My first portfolio app',
            repo: 'https://github.com/Cluce059/Portofolio',
            link: 'https://cluce059.github.io/Portofolio/'
        },
        {
            name: 'Trivia Brews',
            description: 'Trivia and beer game app',
            img: '../../assets/img/2.png',
            alt: 'Trivia brews app',
            repo: 'https://github.com/Cluce059/TriviaBrews',
            link: 'https://cluce059.github.io/Project1/'
        },
        {
            name: 'Food Festival',
            description: 'Food festival app for finding tickets and events (placeholder)',
            img: '../../assets/img/3.png',
            alt: 'Food Festival app',
            repo: 'https://github.com/Cluce059/food-festival',
            link: 'https://cluce059.github.io/food-festival/'
        },
        {
            name: 'Weather App',
            description: 'Application for tracking local weather location api',
            img: '../../assets/img/4.png',
            alt: 'weather tracking app',
            repo: 'https://github.com/Cluce059/weatherApp',
            link: 'https://cluce059.github.io/weatherApp/'
        },
        {
            name: 'Portfolio v2',
            description: 'My second portfolio',
            img: '../../assets/img/5.png',
            alt: 'app',
            repo: 'https://github.com/Cluce059/portfolio',
            link: '/'
        } 
        ];
    //  for(var i = 0; i < projects.length; i++){
    //      console.log(projects[i].name)
    //  }
   
    return (
        <section className="portfolio-section" id="portfolio">
            <div className="flex-row">
            <h2>My Portoflio</h2>
            </div>
            {projects.map((project) => (
                <Card project ={project} />
            ))}
        </section>
    );
};

export default Portfolio;


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