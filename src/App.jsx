import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthPageController } from "./Pages/AuthPageController/AuthPageController";
import { UserPageController } from "./Pages/UserPageController/UserPageController";
import "./App.css";
import { ErrorPage } from "./Components/ErrPage/ErrorPage";
import React from "react";

export const App = () => {
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
                    element={<AuthPageController setUserData={setUserData} />}
                    path="/"
                />
                <Route
                    element={
                        <UserPageController
                            setUserData={setUserData}
                            userData={userData}
                        />
                    }
                    path="/user"
                />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
    );
};
