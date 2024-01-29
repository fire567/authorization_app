export const Header = ({ user, logOutHandler }) => {
    return (
        <header className="user_page_header">
            <span className="page_name">UserPage: {user && user.login}</span>
            <button className="log_out_button" onClick={() => logOutHandler()}>
                Выйти
            </button>
        </header>
    );
};
