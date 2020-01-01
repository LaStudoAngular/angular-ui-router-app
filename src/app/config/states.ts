import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { PeopleComponent } from '../components/people/people.component';

// STATES
const homeState = { name: 'home', url: '/home', component: HomeComponent };
const aboutState = { name: 'about', url: '/about', component: AboutComponent };
const peopleState = {
  name: 'people',
  url: '/people',
  component: PeopleComponent
};

export const INITIAL_STATES = [homeState, aboutState, peopleState];

export const INITIAL_COMPONENTS = [
  HomeComponent,
  AboutComponent,
  PeopleComponent,
];
