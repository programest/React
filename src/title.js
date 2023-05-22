const Title = ({text}) => {
	return (
        <div className="title text-center d-flex align-items-center justify-content-center">
            <div className="title-cap"></div>
            <h2 className="title-text">{text}</h2>
            <div className="title-cap rot"></div>
        </div>
	)
}
export default Title;