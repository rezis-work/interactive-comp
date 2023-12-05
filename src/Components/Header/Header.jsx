import "./Header.css";
export default function Header({ logo, text, descr }) {
  return (
    <div className="header">
      <div className="img-div">
        <img src={logo} alt="Logo img" />
      </div>
      <h1>{text}</h1>
      <p>{descr}</p>
    </div>
  );
}
