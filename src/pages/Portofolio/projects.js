import mernResto from '../../assets/images/portofolio/restaurant-store-min.PNG';
import netflix from '../../assets/images/portofolio/netflix-min.PNG';
import portofolio2 from '../../assets/images/portofolio/portofolio-2.PNG';
import portofolio1 from '../../assets/images/portofolio/portofolio-1-min.PNG';
import pwa2 from '../../assets/images/portofolio/pwa-2-min.PNG';
import pwa1 from '../../assets/images/portofolio/pwa-1-min.PNG';

const projects = [
    {
        id: 1,
        name: 'Restaurant Order App',
        image: mernResto,
        techologies: ['mongodb', 'expressjs', 'reactjs', 'nodejs', 'react-redux'],
        githubLink: 'https://github.com/danangpurbojati/restaurant-mern',
        liveLink: 'https://mern-restaurant.web.app/'
    },
    {
        id: 2,
        name: 'Netflix Clone',
        image: netflix,
        techologies: ['reactjs', 'firebase', 'react-redux', 'styled-components'],
        githubLink: 'https://github.com/danangpurbojati/netflix-s-clone-reactjs',
        liveLink: 'https://netflix-dev-clone.web.app/'
    },
    {
        id: 3,
        name: 'Portofolio - v2',
        image: portofolio2,
        techologies: ['reactjs', 'styled-components'],
        githubLink: 'https://github.com/danangpurbojati/portofolio-v2',
        liveLink: 'https://purbojati-portofolio.web.app/'
    },
    {
        id: 4,
        name: 'Portofolio - v1',
        image: portofolio1,
        techologies: ['reactjs', 'styled-components'],
        githubLink: 'https://github.com/danangpurbojati/portofolio',
        liveLink: 'https://danang-portofolio.web.app/'
    },
    {
        id: 5,
        name: 'Restaurant PWA',
        image: pwa2,
        techologies: ['PWA', 'webpack', 'testing'],
        githubLink: 'https://github.com/danangpurbojati/restaurant-web',
        liveLink: 'https://restaurant-dicoding-submission.web.app/'
    },
    {
        id: 6,
        name: 'Football Matches - PWA',
        image: pwa1,
        techologies: ['PWA', 'webpack'],
        githubLink: 'https://github.com/danangpurbojati/football-match-pwa',
        liveLink: 'https://danangpurbojati.github.io/football-match-pwa/'
    },
];

export default projects;