import "./map.css";
import icon1 from "../img/icon1.png"
import icon2 from "../img/icon2.png"
import icon3 from "../img/icon3.png"
const MapBlock = ({title, text1, text2,text3}) => {
    return(
        <div className="map__block">
            <h3 className="map-title">{title}</h3>
            <div className="map__icon">
                <div className="d-flex mb-4">
                    <img src={icon1} alt="" className="map__icon-img" />
                    <span className="map__icon-text">{text1}</span>
                </div>
                <div className="d-flex mb-4">
                    <img src={icon2} alt="" className="map__icon-img" />
                    <span className="map__icon-text">{text2}</span>
                </div>
                <div className="d-flex mb-4">
                    <img src={icon3} alt="" className="map__icon-img" />
                    <span className="map__icon-text">{text3}</span>
                </div>
                <button className="map-btn">Записаться на сеанс</button>
            </div>
        </div>
    )
}
const Map = () => {
    return(
        <div className="map__wrapper d-flex">
            <div className="map">
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab04f19e00785bffa97705f4b8520c78ca52623ff52ceb0707b2fd262686796e4&amp;source=constructor" width="850" height="600" className='map__map' frameborder="0"></iframe>
            </div>
            <div className="map__blocks">
                <MapBlock title="Бассейн WorkClass" text1="Невский 140" text2="м. Спасская" text3="Запись по договоренности"/>
                <MapBlock title="Бассейн На Гороховой" text1="3-й проезд Иванова" text2="м. Крестовский остров" text3="Запись по договоренности"/>
            </div>
        </div>
    )
  
}
export default Map;