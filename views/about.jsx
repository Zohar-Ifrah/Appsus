const { Outlet, NavLink } = ReactRouterDOM

export function About() {
    return (
        <section className="about">
            <h2>About sprint3</h2>



            <h1>Sprint3 project created by Yuval Turgeman & Zohar Ifrah</h1>
            <p>If you enjoy this app, try some of our other projects:</p>
            <nav>
                <NavLink to="/about/Zohar" >Zohar</NavLink>
                <NavLink to="/about/Yuval">Yuval</NavLink>
            </nav>
            <section>
                <Outlet />
            </section>

        </section>
    )
}