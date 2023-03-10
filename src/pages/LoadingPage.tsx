import "./spinner.css";

export default function LoadingSpinner() {
  return (
    <div className="container">
      <div className="ring"></div>
      <div className="ring"></div>
      <div className="ring"></div>
      <span className="loading">Loading...</span>
    </div>
  );
}
