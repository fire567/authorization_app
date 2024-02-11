import { useState, useEffect } from "react";
import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthPageController } from "./Pages/AuthPageController/AuthPageController";
import { UserPageController } from "./Pages/UserPageController/UserPageController";
import { app } from "./App.styles";
import { ErrorPage } from "./Components/ErrPage/ErrorPage";
import { useNavigate } from "react-router-dom";

export const App: FC = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (window.location.pathname === "/") {
            localStorage.getItem("user")
                ? navigate("/user")
                : navigate("/login");
        }
    }, []);

    return (
        <div className={app}>
            <Routes>
                <Route
                    element={
                        <AuthPageController
                            userData={userData}
                            setUserData={setUserData}
                        />
                    }
                    path="/login"
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
