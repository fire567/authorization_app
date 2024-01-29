export const LoginInput = ({ login, setLogin }) => {
    return (
        <div className="input_wrapper">
            <label className="label">Логин:</label>
            <input
                className="input"
                type="text"
                onChange={(e) => setLogin(e.target.value)}
                value={login}
            />
        </div>
    );
};
