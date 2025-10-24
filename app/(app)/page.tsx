import { Prose } from '@/app/lib/ui'

const Home = () => (
  <div className="container mx-auto grid gap-8 px-4">
    <section className="hero">
      <div className="hero-content">
        <Prose>
          <h1>Yousuf Abu Shanab</h1>
          <p className="lead">
            A builder of systems and a writer of lines—where Arabic heart meets
            cutting-edge craft. I build calm, production-ready technology and
            write poetry that remembers the sky is the limit.
          </p>
        </Prose>
      </div>
    </section>

    <Prose>
      <div>
        <h2>What I do</h2>
        <ul>
          <li>
            <strong>Engineering:</strong> Design and build scalable,
            production-ready platforms with a bias for clarity and
            maintainability.
          </li>
          <li>
            <strong>Open source:</strong> Contribute reusable packages,
            templates, and tools that raise the floor for developers.
          </li>
          <li>
            <strong>Founding:</strong> Create mission-driven organizations that
            push Arabic technology forward.
          </li>
          <li>
            <strong>Poetry:</strong> Write with an old soul for a modern
            world—rooted in language, reaching for the stars.
          </li>
        </ul>
      </div>

      <div>
        <h2>Featured organizations</h2>
        <ul>
          <li>
            <strong>Q-Complex:</strong> Non-profit building modern Quran apps
            and infrastructure.
          </li>
          <li>
            <strong>The House of Wisdom:</strong> Open source, AI-powered LMS
            for the future of learning.
          </li>
          <li>
            <strong>Al Arabiyaa:</strong> Modern technology to power the Arabic
            language across platforms.
          </li>
        </ul>
      </div>
    </Prose>
  </div>
)

export default Home
