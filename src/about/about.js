import "./about.css";
import Title from "../title.js";
import Direction from "../blocks-direction";
import AboutImg from "../img/about-img.png"
const About = () => {
    
	return (
    <div className="about-contianer">
        <div className="about-title">
          <Title text="Об RitmStyle"/>
        </div>
            <Direction isEven={false} title="RitmStyle массаж" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in purus, sed tellus eget mattis nibh quam. Eu ornare nunc, id est. Erat consectetur etiam a sit diam in imperdiet amet. Diam nisl, ipsum suscipit amet. Eleifend amet habitasse proin quis adipiscing. Nisl convallis mauris in consequat. Sit ac vitae posuere maecenas dictumst quam. Felis amet diam, non augue massa. Egestas molestie lobortis rhoncus, elit nulla nisl. Habitant tortor at tempor." />
            <Direction isEven={true} title="RitmStyle гидротерапия" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu cras quis ac a non ut viverra turpis eget. Hendrerit quis pulvinar massa ipsum sem. Donec posuere nulla enim non neque etiam. Eros arcu, pulvinar penatibus luctus ridiculus sagittis vel nunc hac. Nisi, diam tincidunt dui viverra. Eget quis ultricies sem nunc risus senectus luctus ultricies. Enim feugiat pharetra pharetra et.
Pulvinar arcu at morbi posuere cursus. Fermentum est sit enim velit ornare molestie. Ipsum nisi id sed tempor elementum. Mi nunc eget pellentesque ipsum. Suspendisse risus a id vel massa tincidunt. Hendrerit blandit in augue vel mi quam magna egestas. Fringilla ac lacus viverra ullamcorper leo, enim vitae id aliquam. Magna sed tristique tellus enim, netus tempor at elit dui. Ullamcorper hendrerit feugiat libero tellus diam egestas dui tellus odio." />

       </div>
	)
}
export default About;