import Home from '../pages/Home';
import GetInvolved from '../pages/GetInvolved';
import Sponsors from '../pages/Sponsors';
import Calendar from '../pages/Calendar';
import Outreach from '../pages/Outreach';
import About from '../pages/About';
import Projects from '../pages/Projects';
import AboutImg from '../assets/cover_imgs/about_pic.jpg';
import ProjImg from '../assets/cover_imgs/technical_pic.jpg';
import BoardImg from '../assets/cover_imgs/board_pic.jpg';
import GetInvolvedImg from '../assets/cover_imgs/Get_Involved.jpeg';

const Pages = [
  {
    path: '/',
    title: 'SWE @ UCSD',
    subtitle: 'Aspire / Advance / Achieve',
    titleTag: 'SWE UCSD',
    navLabel: 'Home',
    component: Home,
    image: BoardImg,
  },
  {
    path: '/about',
    title: 'About Us',
    subtitle: 'Learn about what it means to be a SWE Bee!',
    titleTag: 'About – SWE UCSD',
    navLabel: 'About',
    component: About,
    image: AboutImg,
  },
  {
    path: '/events',
    title: 'SWE Calendar',
    subtitle: 'Check out our upcoming events!',
    titleTag: 'Calendar – SWE UCSD',
    navLabel: 'Events',
    component: Calendar,
    image: 'https://i.imgur.com/N7KojTu.jpg',
  },
  {
    path: '/involvement',
    title: 'Get Involved',
    subtitle: 'Find out how to be active in our section',
    titleTag: 'Involvement – SWE UCSD',
    navLabel: 'Get Involved',
    component: GetInvolved,
    image: GetInvolvedImg,
  },
  {
    path: '/projects',
    title: 'Project Teams',
    subtitle: 'Learn about our current projects',
    titleTag: 'Projects – SWE UCSD',
    navLabel: 'Projects',
    component: Projects,
    image: ProjImg,
  },
  {
    path: '/outreach',
    title: 'Outreach',
    subtitle: 'Help us inspire young women to pursue engineering',
    titleTag: 'Outreach – SWE UCSD',
    navLabel: 'Outreach',
    component: Outreach,
    image: 'https://i.imgur.com/bk3c3nz.jpg',
  },
  {
    path: '/sponsors',
    title: 'Sponsors',
    subtitle: 'Thanks to our sponsors for their continued support!',
    titleTag: 'Sponsors – SWE UCSD',
    navLabel: 'Sponsors',
    component: Sponsors,
    image: 'http://swe.ucsd.edu/wp-content/uploads/2020/11/DSC_0145-1.jpg',
  },

];

export default Pages;
