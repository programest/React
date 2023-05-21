import "./header.css";
const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg   w-100">
			<a className="navbar-brand" href="#" >
				<img src="../img/logo.png" alt="" className="w-100 h-100" />
			</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">

					<li className="nav-item">
						<a className="nav-link" href="#">Главная</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Сеансы</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Отзывы</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Контакты</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Новости</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Обо мне</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Блог</a>
					</li>
				</ul>
			</div>
			<div className="button">
				<div className="button-text">Записаться на сеанс</div>
			</div>
		</nav>
	)
}
export default Header;