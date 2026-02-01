import GBM from '../assets/event_imgs/gbm.jpg';
import Professional from '../assets/event_imgs/professional.jpg';
import Outreach from '../assets/event_imgs/outreach.jpg';
import Social from '../assets/event_imgs/social.jpg';
import Project from '../assets/event_imgs/project.jpg';
import WEConference from '../assets/event_imgs/we_conference.jpg';

const Events = [
  {
    title: 'GBMs',
    items: [
      'Attend our quarterly meetings to stay updated',
      'Bond with your fellow SWE members',
      'Interact with our exciting guest speakers',
    ],
    image: GBM,
  },
  {
    title: 'Professional Events',
    items: [
      'Network and meet with industry professionals',
      'Gain valuable insight into your field of interest',
      'Learn how to best prepare yourself for graduation',
    ],
    image: Professional,
  },
  {
    title: 'Outreach Events',
    items: [
      'Become a mentor for high school students with EDGE',
      'Participate and help run cool events with Envision',
      'Give back to the engineering community with SWE Next',
    ],
    image: Outreach,
  },
  {
    title: 'Social Events',
    items: [
      'Hang out with your fellow SWE-bees',
      'Relax with arts and crafts activities, beach days, and more!',
    ],
    image: Social,
  },
  {
    title: 'Project Teams',
    items: [
      'Gain hands-on technical experience',
      'Collaborate with other engineering students',
      'Past projects include: robotic bird, this website, etc',
    ],
    image: Project,
  },
  {
    title: 'WE Conference',
    items: [
      'SWE\'s annual conference for women in engineering',
      'Attend a career fairs, keynote speeches, professional development workshops',
      'Held in late October',
    ],
    image: WEConference,
  },
];

export default Events;
