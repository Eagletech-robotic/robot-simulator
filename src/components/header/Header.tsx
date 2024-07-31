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
                <div className={`active-bar ${currentPath === aboutPath ? 'visible' : ''}`}></div>
            </NavLink>
            <NavLink className={currentPath === blogPath ? 'button active' : 'button'} to={blogPath}>
                Blog
                <div className={`active-bar ${currentPath === blogPath ? 'visible' : ''}`}></div>
            </NavLink>
            <NavLink className="button link-out" to={githubPath}>
                Github
                <svg
                    className="link-out-icon"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                    >
                        <path d="m13.5 10.5 7.5-7.5" />
                        <path d="m16 3h5v5" />
                        <path d="m21 14v5c0 1.1046-.8954 2-2 2h-7-7c-1.10457 0-2-.8954-2-2v-14c0-1.10457.89543-2 2-2h5" />
                    </g>
                </svg>
            </NavLink>
        </div>
    )
}
