import logo from './logo.svg';
import './App.css';
import Header from './header/header';
import Mainimg from './main-img/main-img'
function App() {
	return (
		<div className="App">
			<header className="container">
				<header>
					<Header />
				</header>
				<main>
					<Mainimg />
				</main>
				<footer>

				</footer>
			</header>
		</div>
	);
}


export default App;
