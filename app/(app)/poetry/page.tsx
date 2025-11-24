import { Prose } from '@/app/lib/ui'

const Poetry = () => (
  <div className="container mx-auto grid gap-8 px-4">
    <section className="hero">
      <div className="hero-content">
        <Prose>
          <h1>Poetry</h1>
          <p className="lead">
            Arabic is my compass, the verse my shelter, and meaning my aim. I
            write to spare expression from triviality, to sharpen feeling
            without noise, and to show that meter does not bind the soul—it
            frees it toward precision and grace.
          </p>
        </Prose>
      </div>
    </section>

    <Prose>
      <div>
        <h2>Vision</h2>
        <p>
          I seek a poetry that unites robust diction with transparent intent:
          classical in structure, modern in effect. I neither gild ornament at
          the cost of meaning nor thin meaning for the sake of ornament; my goal
          is a line spoken once and remembered often. The poem, for me, is a
          covenant with the reader: clarity without simplification, depth
          without complication.
        </p>
      </div>

      <div>
        <h2>Themes</h2>
        <ul>
          <li>
            <strong>Ambition and dignity:</strong> The soul`s ascent to the
            stars, and the disdain of the small when the aim is great.
          </li>
          <li>
            <strong>Solitude and pride:</strong> The self`s presence when the
            lights go out, and the worth of the first rank before all others.
          </li>
          <li>
            <strong>Love and fidelity:</strong> The fair meaning and the price
            of pursuit; a heart pledged to poise, not excess.
          </li>
          <li>
            <strong>Language and identity:</strong> Serving and straightening
            Arabic, reviving its legacy to the rhythm of our age.
          </li>
        </ul>
      </div>

      <div>
        <h2>Selected lines</h2>

        <h3>Your Love Is Sultan</h3>
        <iframe
          className="rounded-box aspect-video"
          width="100%"
          src="https://www.youtube.com/embed/rUQBYghpMvM?si=_eF1vz-FNe0VcPbo"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <h3>Wounds In My Heart</h3>
        <iframe
          className="rounded-box aspect-video"
          width="100%"
          src="https://www.youtube.com/embed/bzHmU9dKtSI?si=n21tKCwx-n9FOdpQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <h3>In The Darkness Of The Night</h3>
        <iframe
          className="rounded-box aspect-video"
          width="100%"
          src="https://www.youtube.com/embed/dpFYMc_lhMM?si=uuOXmASEHYtPDOC5"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div>
        <h2>Brief Q&A</h2>
        <ul>
          <li>
            <strong>Why elevated Classical Arabic?</strong> It balances
            precision and grace, giving meaning its form and the verse its
            authority.
          </li>
          <li>
            <strong>Do you abandon modernity?</strong> I borrow from it where it
            adds; modernity is a tool, not a creed.
          </li>
          <li>
            <strong>Is meter required?</strong> Meter is the poem`s sinew;
            rarely replaced by disciplined prose when the aim truly demands.
          </li>
          <li>
            <strong>Are poems annotated?</strong> Yes, when explanation aids
            clarity and the reader seeks understanding.
          </li>
        </ul>
      </div>
    </Prose>
  </div>
)

export default Poetry
