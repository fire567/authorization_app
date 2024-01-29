import "./ValidMarker.css";

export const ValidMarker = ({ isValidPassword }) => {
    return (
        <div className="valid_marker">
            <div className={`circle ${isValidPassword}`}>
                <div className={`marker ${isValidPassword}`}></div>
            </div>
        </div>
    );
};
