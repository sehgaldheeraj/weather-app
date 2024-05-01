import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
const index = ({ input, setInput }) => {
  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city"
      />
      <button className="search-button" onClick={() => setInput("")}>
        <FontAwesomeIcon icon={faLocationArrow} />
      </button>
    </div>
  );
};

export default index;
