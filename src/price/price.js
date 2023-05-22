import "./price.css";
import Title from "../title.js";
import AboutImg from "../img/unsplash_M3fhZSBFoFQ.png"
const PriceText = ({text, sum}) =>{
    return (
        <div className="d-flex justify-content-column align-items-center price-info">
            <div className="d-flex col-12">
                <div className="title-cap me-3"></div>
                <p className="price-text me-5 mb-0">{text}</p>
            </div>
            <div className="">
                <p className="sum-text mb-0">{sum}</p>
            </div>
           
        </div>
    )
}
const Price = () => {
    return(
        <div className="price__block">
            <Title text="Стоимость сеансов"/>
            <div className="price__info-block d-flex justify-content-between align-items-center ">
                <div className="price-info-li">
                    <PriceText text="RitmStyle с погружением" sum="1000р."  />
                    <PriceText text="Абонемент на RitmStyle" sum="5500р."  />
                    <PriceText text="RitmStyle для пар" sum="6000р."  />
                    <PriceText text="RitmStyle для беременных" sum="13500р."  />
                    <PriceText text="RitmStyle +  фотосессия" sum="11500р."  />
                </div>
                <div className="price-info-img">
                    <img src={AboutImg} alt="" />
                    <p className="price-info-img-text text-center mt-3">Подарочный сертификат </p>
                </div>
            </div>
        </div>
    )
  
}
export default Price;