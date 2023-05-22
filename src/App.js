import logo from './logo.svg';
import './App.css';
import Header from './header/header';
import Mainimg from './main-img/main-img'
import Sessions from './sessions/sessions'
import Reviews from './reviews/reviews'
import About from './about/about';
import Price from './price/price';
import Map from './map/map';
import Footer from './footer/footer';
function App() {
	return (
		<div className="App ">
			<header className="container ">
				<header>
					<Header />
				</header>
				<main>
					<Mainimg />
					<Sessions/>
					<Reviews />
					<About />
					<Price />
					<Map />
					
				</main>
				<footer>
					<Footer />
				</footer>
			</header>
		</div>
	);
}


export default App;
