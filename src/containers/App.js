import NavBar from '../components/layout/navbar/NavBar.component';
import Footer from '../components/layout/footer/Footer.component';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='flex flex-col justify-between h-screen'>
				<NavBar />
				<main>Content</main>
				<Footer/>
			</div>
			<Routes></Routes>
		</Router>
	);
}

export default App;
