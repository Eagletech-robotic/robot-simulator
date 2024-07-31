import './Header.css'

export function Header() {
    return (
        <div className="header">
            <div className="container">
                <a className="button" href="/">
                    About
                </a>
                <a className="button" href="/blog">
                    Blog
                </a>
                <a className="button" href="https://github.com/eagletech-robotic/">
                    Github
                </a>
            </div>
        </div>
    )
}
