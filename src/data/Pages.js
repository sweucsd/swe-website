import Home from '../pages/Home';
import GetInvolved from '../pages/GetInvolved';
import Sponsors from '../pages/Sponsors';
import Calendar from '../pages/Calendar';
import About from '../pages/About';
import AboutImg from '../assets/cover_imgs/about_pic.jpg';
import CalendarImg from '../assets/cover_imgs/calendar_pic.jpg';
import HomeImg from '../assets/cover_imgs/home_pic.jpg';
import GetInvolvedImg from '../assets/cover_imgs/get_involved_pic.jpg';

const Pages = [
  {
    path: '/',
    title: 'Society of Women Engineers',
    subtitle: 'Aspire / Advance / Achieve',
    titleTag: 'SWE at UCSD',
    navLabel: 'Home',
    component: Home,
    image: HomeImg,
  },
  {
    path: '/about',
    title: 'About Us',
    subtitle: 'Learn about what it means to be a SWE Bee!',
    titleTag: 'About – SWE at UCSD',
    navLabel: 'About',
    component: About,
    image: AboutImg,
  },
  {
    path: '/calendar',
    title: 'SWE Calendar',
    subtitle: 'Check out our upcoming events!',
    titleTag: 'Calendar – SWE at UCSD',
    navLabel: 'Calendar',
    component: Calendar,
    image: CalendarImg,
  },
  {
    path: '/involvement',
    title: 'Get Involved',
    subtitle: 'Find out how to be active in our section',
    titleTag: 'Involvement – SWE at UCSD',
    navLabel: 'Get Involved',
    component: GetInvolved,
    image: GetInvolvedImg,
  },
  {
    path: '/sponsors',
    title: 'Sponsors',
    subtitle: 'Thanks to the organizations that conntinue to support and empower our community!',
    titleTag: 'Sponsors – SWE at UCSD',
    navLabel: 'Sponsors',
    component: Sponsors,
    image: 'http://swe.ucsd.edu/wp-content/uploads/2020/11/DSC_0145-1.jpg',
  },

];

export default Pages;
