const Header = props => {

    const GetCurrentYear = () => {
        const CurrentTime = new Date()
        return CurrentTime.getFullYear()
    }

    return (
        <nav class="navbar fixed-bottom navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <div class="navbar-brand" href="#">{GetCurrentYear()} <span className="fw-bold fst-italic">São Paulo, Brasil</span></div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Contato</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Informações</a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
    )
}

export default Header