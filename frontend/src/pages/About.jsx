import './About.css';

export default function About() {
  return (
    <div className='about-page'>
      <h2>मध्यप्रदेश शासन — लोक स्वास्थ्य यांत्रिकी विभाग</h2>
      <p>JalSetu AI — Smart Water Distribution System. Pilot programme for PHED, Govt. of Madhya Pradesh.</p>
      <div className='about-grid'>
        <section>
          <h3>Mission</h3>
          <p>Predict and prevent water stress in 8 pilot districts of MP under Jal Jeevan Mission.</p>
        </section>
        <section>
          <h3>Coverage</h3>
          <p>Sagar, Damoh, Panna, Chhatarpur, Tikamgarh, Vidisha, Raisen, Narsinghpur.</p>
        </section>
        <section>
          <h3>Architecture</h3>
          <p>MP Village Data → Risk Engine → Groundwater Engine → Priority Scorer → Groq LLaMA → PHED Decisions</p>
        </section>
      </div>
      <p>Tech stack: MERN + Groq LLaMA 8B</p>
      <p>Disclaimer: Data is synthetic for pilot demonstration.</p>
    </div>
  );
}
