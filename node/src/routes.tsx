import { type ComponentType } from 'react';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/404';

export type RouteConfig = {
	path: string;
	Component: ComponentType;
	notFound?: boolean;
};

const routes: RouteConfig[] = [
	{ path: '/', Component: Index },
	{ path: '/about', Component: About },
	{ path: '/contact', Component: Contact },
	{ path: '*', Component: NotFound, notFound: true },
];

export default routes;

