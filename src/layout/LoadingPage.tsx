import "./spinner.css";

export default function LoadingSpinner() {
  return (
    <div className="wrapper">
      <div className="spinner">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
        <span className="loading">Loading...</span>
      </div>
    </div>
  );
}
