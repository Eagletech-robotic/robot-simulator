import { NavLink, useLocation } from 'react-router-dom'
import './Header.css'

export function Header() {
    const currentPath = useLocation().pathname

    const aboutPath = '/'
    const blogPath = '/blog'
    const githubPath = 'https://github.com/eagletech-robotic/'

    return (
        <div className="header">
            <NavLink className={currentPath === aboutPath ? 'button active' : 'button'} to={aboutPath}>
                About
                <div
                    className="active-bar"
                    style={{ visibility: currentPath === aboutPath ? 'unset' : 'hidden' }}
                ></div>
            </NavLink>
            <NavLink className={currentPath === blogPath ? 'button active' : 'button'} to={blogPath}>
                Blog
                <div className="active-bar" style={{ visibility: currentPath === blogPath ? 'unset' : 'hidden' }}></div>
            </NavLink>
            <NavLink className="button" to={githubPath}>
                Github
            </NavLink>
        </div>
    )
}
