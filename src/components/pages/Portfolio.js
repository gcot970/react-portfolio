import React from 'react';
import Project from './Project';

const projects = [
    {
        title: 'MealMate',
        imageSrc: 'https://raw.githubusercontent.com/LCatSew/meal-mate/main/screenshots/main.png',
        deployedLink: 'https://lcatsew.github.io/meal-mate/',
        githubLink: 'https://github.com/LCatSew/meal-mate',
    },
    {
        title: 'Password Generator',
        imageSrc: 'https://github.com/gcot970/passwordgenerator/raw/main/demo.gif',
        deployedLink: 'https://gcot970.github.io/passwordgenerator/',
        githubLink: 'https://github.com/gcot970/passwordgenerator',
    },
    {
        title: 'Weather Dash',
        imageSrc: 'https://raw.githubusercontent.com/gcot970/weather-dash/main/Assets/screenshot.gif',
        deployedLink: 'https://gcot970.github.io/weather-dash/',
        githubLink: 'https://github.com/gcot970/weather-dash',
    },
    {
        title: 'Blurb',
        imageSrc: 'https://user-images.githubusercontent.com/127680441/252193803-3e1caf43-cdf1-4ab2-b7fb-86e433e1b9a6.png',
        deployedLink: 'https://blurb-44f4260f090e.herokuapp.com/',
        githubLink: 'https://github.com/sethschnrt/blurb',
    },
    {
        title: 'Sample Portfolio',
        imageSrc: 'https://raw.githubusercontent.com/gcot970/portfolio/main/screenshot/desktop.png',
        deployedLink: 'https://gcot970.github.io/portfolio/',
        githubLink: 'https://github.com/gcot970/portfolio/',
    },
    {
        title: 'Accessibility Example',
        imageSrc: 'https://dummyimage.com/600x400/000/fff',
        deployedLink: 'https://gcot970.github.io/horiseon-seo-accessibility',
        githubLink: 'https://github.com/gcot970/horiseon-seo-accessibility',
    }
];

function Portfolio() {
    return (
        <div>
            <h2 className="text-center">Portfolio</h2>
            <div className="row justify-content-center">
                {projects.map((project, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <Project
                            title={project.title}
                            imageSrc={project.imageSrc}
                            deployedLink={project.deployedLink}
                            githubLink={project.githubLink}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
