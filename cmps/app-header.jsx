const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {

    return <header className="app-header">
        <Link to="/">
            <h3>Appsus!</h3>
        </Link>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/mail">MailSUS</NavLink>
            <NavLink to="/note">Note-Keeper</NavLink>
            <a href="https://zohar-ifrah.github.io/miss-book/">Miss-Book</a>
        </nav>
    </header>
}
