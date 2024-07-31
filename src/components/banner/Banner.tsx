import './Banner.css'

export function Banner() {
    return (
        <div className="banner">
            <div className="title">EagleTech Robotics</div>
            <div className="logo_container">
                <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" />
            </div>
        </div>
    )
}
