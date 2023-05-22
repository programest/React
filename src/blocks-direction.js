import AboutImg from "./img/about-img.png"

const Direction = ({title, text, isEven }) => {
    const blocks = document.querySelectorAll('.about-block').length;
    return (
        <div className="about-block d-flex align-items-center justify-content-between mb-5">
            {isEven ? (
            <>
                <div className="about-text me-5">
                    <h3 className="about-text-title mb-4">{title}</h3>
                    < p className="about-text-text">{text}</p>
                    </div>
                <div className="about-img">
                    <img src={AboutImg} alt="" />
                </div>
                </>
        ) : (<>
        <div className="about-img">
                <img src={AboutImg} alt="" />
            </div>
           <div className="about-text ms-5">
                <h3 className="about-text-title mb-4">{title}</h3>
                < p className="about-text-text">{text}</p>
                </div>
            
        </>
        )}
        </div>
        )
	
}

export default Direction;
