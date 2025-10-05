import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/404'

const routes = [
    { path: '/', Component: Home },
    { path: '/about', Component: About },
    { path: '/contact', Component: Contact },
    { path: '*', Component: NotFound, notFound: true },
]

export default routes


