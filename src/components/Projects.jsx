
import ScrollVelocity from './ReactBits/ScrollVelocity.jsx';
 
export default function Projects() {
  const velocity = 500;
  return (
    <section>
      <h2>Projects</h2>
         
        {/* <ScrollVelocity
  texts={['Jaswanth S M']} 
  velocity={velocity} 
  className="custom-scroll-text"
/> */}
      <ul>
        <li>Farm2Bag AI Chatbot</li>
        <li>YOLO Object Detection</li>
      </ul>

      {/* 🔽 REACT BITS PROJECT CARD COMPONENT GOES HERE */}
    </section>
  );
}
