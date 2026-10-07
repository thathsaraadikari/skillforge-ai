function LandingPage() {
    return (
        <div>
            <nav className="navbar">
                <div className="container">

                    {/* Logo */}
                    <span className="navbar__logo">
                        Skill<span className="gradient-text">Forge</span> AI
                    </span>

                    {/* Nav Links */}
                    <div className="navbar__links">
                        <a href="#features">Features</a>
                        <a href="#how-it-works">How it Works</a>
                    </div>

                    {/* Button */}
                    <button className="btn-primary">Get Started</button>

                </div>
            </nav>
            <section className="hero">
                <div className="container">
                    <h1 className="hero__title">
                        Turn Your Skills Into{' '}
                        <span className="gradient-text">
                            Your Dream Career
                        </span>
                    </h1>
                    <p className="hero__subtitle">
                        SkillForge AI analyzes your Skills, finds the gaps, and builds a personalized roadmap to land your target job.
                    </p>
                    <div className="hero__actions">
                        <button className="btn-primary">
                            Build My Roadmap
                        </button>
                        <button className="btn-secondary">
                            See How It Works
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LandingPage
