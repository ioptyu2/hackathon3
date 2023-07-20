import { NavLink, Outlet } from "react-router-dom"

export default function Header() {
    return(
        <main>
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/pokedex">Pokedex</NavLink>
                    <NavLink to="/search">Search Pokemon</NavLink>
                </nav>
            </header>
        </main>
    )
}
