const FEATURES = [{
    icon: '🧠',
    title: 'Skill Analyzer',
    desc: 'AI evaluates your current skill level against industry benchmarks.',
},
{
    icon: '🎯',
    title: 'Career Matcher',
    desc: 'Matches your skills to the most suitable roles across 50+ career paths.',
},
{
    icon: '📈',
    title: 'Skill Gap Detector',
    desc: 'Pinpoints exactly what you are missing to land your dream role.',
},
{
    icon: '🗺️',
    title: 'Roadmap Generator',
    desc: 'Creates a personalized week-by-week learning plan for your timeline.',
},
{
    icon: '📁',
    title: 'GitHub Analyzer',
    desc: 'Reviews your repositories and code quality for recruiters.',
},
{
    icon: '📄',
    title: 'CV Optimizer',
    desc: 'Finds ATS issues, weak phrasing, and missing keywords in your resume.',
},
]
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
            <section className="features" id="features">
                <div className="container">
                    <h2 className="section__title">
                        Everything you need to <span className="gradient-text">
                            get hired
                        </span>
                    </h2>
                    <p className="section__subtitle">
                        A complete career platform - not just another chatbot.
                    </p>
                    <div className="features__grid">
                        {FEATURES.map(feature => (<div className="feature-card" key={feature.title}><span className="feature-card__icon">{feature.icon}</span>
                            <h3 className="feature-card__title">{feature.title}</h3>
                            <p className="feature-card__desc">{feature.desc}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="cta">
                <div className="container">
                    <div className="cta__card">
                        <h2 className="cta__title">
                            Build your roadmap in <span className="gradient-text">2 minutes</span>
                        </h2>
                        <p className="cta__subtitle">
                            Enter your degree, skills, and target job. Let AI do the rest.
                        </p>
                        <button className="btn-primary">
                            Get Started Free
                        </button>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="container">
                    <span className="navbar__logo">
                        Skill<span className="gradient-text">
                            Forge
                        </span>
                        AI
                    </span>
                    <p className="footer__copy">
                        Build as a learning portfolio project . MIT Licence
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default LandingPage
