import "./Submit.css";

export default function Submit({ image, curPoint }) {
  return (
    <div className="submit-wrap">
      <img src={image} alt="illustration" />
      <div className="selected">
        <p>You selected {curPoint} out of 5</p>
      </div>
      <h1>Thank you!</h1>
      <p className="text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
