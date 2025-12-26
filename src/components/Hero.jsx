import ScrollVelocity from './ReactBits/ScrollVelocity.jsx';

export default function Hero() {
  return (
    <section>
      <ScrollVelocity
  texts={['Hi, I’m Jaswanth 👋']} 
  velocity={200} 
  className="custom-scroll-text"
/>

      <p>
        Aspiring Software Engineer | AI & Full-Stack Enthusiast
      </p>

      {/* 🔽 REACT BITS HERO COMPONENT GOES HERE */}
    </section>
  );
}
