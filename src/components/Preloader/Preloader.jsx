import "./Preloader.css";

function CustomPreloader({ emptyError, apiError }) {
  return (
    <>
      <div className="custom-preloader">
        <div
          className={`custom-preloader__circle ${emptyError || apiError ? "custom-preloader__circle_error" : ""}`}
        ></div>
        <p className="custom-preloader__text">
          {emptyError
            ? "Nothing found"
            : apiError
              ? "Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later."
              : "Cooking..."}
        </p>
      </div>
    </>
  );
}

export default CustomPreloader;
