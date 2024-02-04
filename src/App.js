import { Carousel } from "./Carousel";
import Content from "./Content";
import Card from "./Card";
import service1 from './Media/service1.jpeg';
import service2 from './Media/service2.jpeg';
import service3 from './Media/service3.jpeg';
import Service from "./Service";
import './index.css';

const serviceDetails = [
  {
    uniqueNo: 1,
    imageUrl: service1,
    description: "We provide detailed project plans to our clients, demonstrating our actionable plans to translate your vision to real-world results. Thus, giving you a cleaner picture of what will be done and delivered by when.",
  },
  {
    uniqueNo: 2,
    imageUrl: service2,
    description: "We provide detailed project plans to our clients, demonstrating our actionable plans to translate your vision to real-world results. Thus, giving you a cleaner picture of what will be done and delivered by when.",
  },
  {
    uniqueNo: 3,
    imageUrl: service3,
    description: "We provide detailed project plans to our clients, demonstrating our actionable plans to translate your vision to real-world results. Thus, giving you a cleaner picture of what will be done and delivered by when.",
  },
]

function App() {
  return (
    
<div className='services-container'>
      <h1 className='title'>
        We Deliver Clean Code, Error Free, and Secure
        <br />
        Web Applications
      </h1>
      <ul className="service-list">
        {serviceDetails.map((eachItem) => (
          <Service key={eachItem.uniqueNo} details={eachItem} />
        ))}
      </ul>
      
      <Content />
      <Carousel/>
      <Card/>
    </div>
  );
}

export default App;
