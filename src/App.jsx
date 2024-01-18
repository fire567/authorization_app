import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./Pages/AuthPage/AuthPage";
import UserPage from "./Pages/UserPage/UserPage";
import "./App.css";

const App = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (userData) {
            localStorage.setItem("user", JSON.stringify(userData));
        }

        if (
            localStorage.getItem("user") &&
            window.location.pathname !== "/user"
        ) {
            window.location.assign("http://localhost:3000/user");
        } else if (
            !localStorage.getItem("user") &&
            window.location.pathname === "/user"
        ) {
            window.location.assign("http://localhost:3000/");
        }
    }, [userData]);

    return (
        <div className="App">
            <Routes>
                <Route
                    element={<AuthPage setUserData={setUserData} />}
                    path="/"
                />
                <Route
                    element={<UserPage setUserData={setUserData} />}
                    path="/user"
                />
            </Routes>
        </div>
    );
};

export default App;
