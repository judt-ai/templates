import { Link, Routes, Route } from 'react-router-dom';
import routes from './routes';

export function App() {
	return (
		<div className='dark w-full min-h-screen flex items-center flex-col justify-start bg-gradient-to-br from-blue-600 via-slate-800 to-black'>
			{/* navigation links */}
			<nav className='flex w-full items-center justify-center gap-4 p-4' >
				<Link className='underline' to='/'>Home</Link>
				<Link className='underline' to='/about'>About</Link>
				<Link className='underline' to='/contact'>Contact</Link>
			</nav >
			<div className='pt-4 w-full text-center flex flex-col justify-center grow'>
				<Routes>
					{routes.map((route, index) => (
						<Route key={index} path={route.path} element={<route.Component />} />
					))}
				</Routes>
			</div>
		</div >
	);
}

