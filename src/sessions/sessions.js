import "./sessions.css";
import Title from "../title.js";
const Sessions = () => {
	return (
    <div className="sessions-contianer">
        <div className="sessions-title">
          <Title text="Сеансы RitmStyle"/>
        </div>
        <div className="sessions-blocks">
            <div className="d-flex">
                <div className="sessions-block sessions-block-standart">
                    <p className="sessions-block-text">Стандартный RitmStyle</p>
                </div>
            </div>
            <div className="d-flex sessions-second-block">
                <div className="sessions-block">
                    <p className="sessions-block-text">RitmStyle для пар</p>
                </div>
                <div className="sessions-block">
                    <p className="sessions-block-text">RitmStyle для пар</p>
                </div>
                <div className="sessions-block">
                    <p className="sessions-block-text">RitmStyle для пар</p>
                </div>
                <div className="sessions-block">
                    <p className="sessions-block-text">RitmStyle для пар</p>
                </div>
            </div>
        </div>
       </div>
	)
}
export default Sessions;