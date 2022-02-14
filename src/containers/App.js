import NavBar from '../components/layout/navbar/NavBar.component';
import Footer from '../components/layout/footer/Footer.component';
import Home from '../pages/home/Home.page';
import About from '../pages/about/About.page';
import NotFound from '../pages/notfound/NotFound.page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='flex flex-col justify-between h-screen'>
				<NavBar />
				<main className='container mx-auto px-3 pb-12'>
					<Routes>
						<Route exact path='/' element={<Home />} />
						<Route exact path='/about' element={<About />} />
						<Route path='/notfound' element={<NotFound />} />
						<Route path='/*' element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
