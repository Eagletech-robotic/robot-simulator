import './Header.css'

export function Header() {
    return (
        <div className="header">
            <div className="title">EagleTech Robotics</div>
            <div className="logo_container">
                <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" />
            </div>
        </div>
    )
}
