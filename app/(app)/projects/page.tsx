import { Prose } from '@/app/lib/ui'

const OS = () => (
  <div className="container mx-auto grid gap-8 px-4">
    <section className="hero">
      <div className="hero-content">
        <Prose>
          <h1>Projects</h1>
          <p className="lead">
            A selection of in-development work aligned with real-world needs.
          </p>
        </Prose>
      </div>
    </section>

    <Prose>
      <div>
        <h2>Product initiatives</h2>
        <ul>
          <li>
            <strong>Al Matjar:</strong> E-commerce platform focused on
            performance and trust.
          </li>
          <li>
            <strong>Al Wazeer:</strong> Real-time AI chats for practical
            assistance.
          </li>
          <li>
            <strong>Al Mirsal:</strong> Real-time messaging with privacy by
            design.
          </li>
          <li>
            <strong>The House Of Wealth:</strong> Modern banking system with
            transparent controls.
          </li>
          <li>
            <strong>TalentHub:</strong> Job platform connecting builders with
            opportunities.
          </li>
          <li>
            <strong>Weather:</strong> Clean weather app focused on clarity over
            clutter.
          </li>
        </ul>
      </div>

      <div>
        <h2>Engineering standards</h2>
        <ul>
          <li>
            <strong>CI/CD:</strong> GitHub Actions across repos for fast,
            reliable delivery.
          </li>
          <li>
            <strong>Quality:</strong> Auto-formatting, linting, and typed code
            where feasible.
          </li>
          <li>
            <strong>Dependencies:</strong> Managed with rigor for security and
            reproducibility.
          </li>
          <li>
            <strong>Docs:</strong> Living documentation, changelogs, and upgrade
            paths.
          </li>
        </ul>
      </div>
    </Prose>
  </div>
)

export default OS
