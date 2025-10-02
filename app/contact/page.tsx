import { Prose } from '@/app/ui'

const Contact = () => (
  <div className="container mx-auto grid gap-8 px-4">
    <section className="hero">
      <div className="hero-content">
        <Prose>
          <h1>Contact and collaboration</h1>
          <p className="lead">
            I collaborate with teams and individuals who value clarity, rigor,
            and cultural respect.
          </p>
        </Prose>
      </div>
    </section>

    <Prose>
      <h2>Work together</h2>
      <ul>
        <li>
          <strong>Engineering:</strong> Architecture reviews, platform builds,
          and performance audits.
        </li>
        <li>
          <strong>Open source:</strong> Sponsorships, maintainership, and
          ecosystem integration.
        </li>
        <li>
          <strong>Education:</strong> LMS deployments, course design, and
          instructor tooling.LMS deployments, course design, and instructor
          tooling.
        </li>
        <li>
          <strong>Open impact:</strong> Share what works. Document what matters.
          Invite scrutiny.
        </li>
        <li>
          <strong>Poetry & culture:</strong> Readings, curation, and digital
          publishing.
        </li>
      </ul>

      <h2>Get in touch</h2>
      <ul>
        <li>
          <strong>GitHub:</strong>{' '}
          <a href="https://github.com/youzarsiph" className="link link-primary">
            @youzarsiph
          </a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://linkedin.com/in/youzarsiph"
            className="link link-primary"
          >
            @youzarsiph
          </a>
        </li>
      </ul>
    </Prose>
  </div>
)

export default Contact
