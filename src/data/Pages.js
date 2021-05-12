import Home from '../pages/Home';
import GetInvolved from '../pages/GetInvolved';
import Sponsors from '../pages/Sponsors';
import Calendar from '../pages/Calendar';
import Outreach from '../pages/Outreach';
import About from '../pages/About';
import Projects from '../pages/Projects';

const Pages = [
  {
    path: '/',
    title: 'SWE @ UCSD',
    subtitle: 'Aspire / Advance / Achieve',
    titleTag: 'SWE UCSD',
    navLabel: 'Home',
    component: Home,
  },
  {
    path: '/about',
    title: 'About Us',
    subtitle: 'Learn about who we are and what it means to be a SWE Bee!',
    titleTag: 'About – SWE UCSD',
    navLabel: 'About',
    component: About,
  },
  {
    path: '/events',
    title: 'SWE Calendar',
    subtitle: 'Subscribe to our calendar to stay notified about our upcoming events!',
    titleTag: 'Calendar – SWE UCSD',
    navLabel: 'Calendar',
    component: Calendar,
  },
  {
    path: '/involvement',
    title: 'Get Involved',
    subtitle: 'Find out how to be active in our chapter',
    titleTag: 'Involvement – SWE UCSD',
    navLabel: 'Involvement',
    component: GetInvolved,
  },
  {
    path: '/projects',
    title: 'Project Teams',
    subtitle: 'Learn about our current projects',
    titleTag: 'Projects – SWE UCSD',
    navLabel: 'Projects',
    component: Projects,
  },
  {
    path: '/outreach',
    title: 'Outreach',
    subtitle: 'Help us inspire young women to pursue engineering',
    titleTag: 'Outreach – SWE UCSD',
    navLabel: 'Outreach',
    component: Outreach,
  },
  {
    path: '/professional',
    title: 'maybe: Professional Development?',
    subtitle: 'WE20 Conference and opportunities info page?',
    titleTag: 'Professional – SWE UCSD',
    navLabel: 'Professional',
    component: Outreach,
  },
  {
    path: '/sponsors',
    title: 'Sponsors',
    subtitle: 'Thanks to our sponsors for their continued support!',
    titleTag: 'Sponsors – SWE UCSD',
    navLabel: 'Sponsors',
    component: Sponsors,
  },

];

export default Pages;
