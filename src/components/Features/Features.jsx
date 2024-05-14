import "./Features.css";
import featureData from "../../data";

const Features = () => {
  return (
    <div className="features">
      {featureData.map((feature) => (
        <div key={feature.id} className="item">
          <img src={feature.image} alt={feature.title} />
          <div className="feature-detail">
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
            <a href="#">Learn More →</a>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Features;
