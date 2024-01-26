import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand bg-body-tertiary">
            <div className="container-lg">
                <a className="navbar-brand" href="/">Seth Primack</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/blog" className="nav-link">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about" className="nav-link">About</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/blog" className="nav-link">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/blog" className="nav-link">Blog</Link>
                        </li>                 <li className="nav-item">
                            <Link href="/blog" className="nav-link">Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}