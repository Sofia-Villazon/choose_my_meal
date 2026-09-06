import "./Preloader.css";

function CustomPreloader({ apiError }) {
  return (
    <>
      <div className="custom-preloader">
        <div
          className={`custom-preloader__circle ${apiError ? "custom-preloader__circle_error" : ""}`}
        ></div>
        <p className="custom-preloader__text">
          {apiError
            ? "Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later."
            : "Cooking..."}
        </p>
      </div>
    </>
  );
}

export default CustomPreloader;
