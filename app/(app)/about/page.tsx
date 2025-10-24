import { Prose } from '@/app/lib/ui'

const About = () => (
  <div className="container mx-auto grid gap-8 px-4">
    <section className="hero">
      <div className="hero-content">
        <Prose>
          <h1>About</h1>
          <p className="lead">
            I am a Syrian software engineer, founder, and poet. I build
            large-scale systems with an uncompromising focus on clarity,
            performance, and human impact. My work serves Arabic—its language,
            its readers, its future—through open source projects and
            mission-driven organizations.
          </p>
        </Prose>
      </div>
    </section>

    <Prose>
      <div>
        <h2>Principles</h2>
        <ul>
          <li>
            <strong>Clarity first:</strong> Systems should be readable,
            predictable, and humane.
          </li>
          <li>
            <strong>Scale with integrity:</strong> Production readiness isn`t
            optional; it`s a responsibility.
          </li>
          <li>
            <strong>Arabic at the center:</strong> Technology should honor and
            elevate our language.
          </li>
          <li>
            <strong>Open impact:</strong> Share what works. Document what
            matters. Invite scrutiny.
          </li>
        </ul>
      </div>

      <div>
        <h2>My Guiding lines</h2>
        <blockquote dir="rtl" className="grid gap-4 md:grid-cols-2">
          <span>إِذا غامَرتَ في شَرَفٍ مَرومٍ</span>
          <span>فَلا تَقنَع بِما دونَ النُجومِ</span>

          <span>فَطَعمُ المَوتِ في أَمرٍ صَغيرٍ</span>
          <span>كَطَعمِ المَوتِ في أَمرٍ عَظيمِ</span>
          <cite className="text-primary col-span-2 font-bold">المتنبّي</cite>
        </blockquote>

        <blockquote dir="rtl" className="grid gap-4 md:grid-cols-2">
          <span>سَيَذكُرُني قَومي إِذا جَدَّ جِدُّهُم</span>
          <span>وَفي اللَيلَةِ الظَلماءِ يُفتَقَدُ البَدرُ</span>

          <span>وَنَحنُ أُناسٌ لا تَوَسُّطَ عِندَنا</span>
          <span>لَنا الصَدرُ دونَ العالَمينَ أَوِ القَبرُ</span>

          <span>تَهونُ عَلَينا في المَعالي نُفوسُنا</span>
          <span>وَمَن خَطَبَ الحَسناءَ لَم يُغلِها المَهرُ</span>

          <span>أَعَزُّ بَني الدُنيا وَأَعلى ذَوي العُلا</span>
          <span>وَأَكرَمُ مَن فَوقَ التُرابِ وَلا فَخرُ</span>

          <cite className="text-primary col-span-2 font-bold">
            أبو فراس الحمداني
          </cite>
        </blockquote>
      </div>

      <div>
        <h2>Influences</h2>
        <ul>
          <li>
            <strong>Language:</strong> Classical Arabic, prosody, and precision.
          </li>
          <li>
            <strong>Engineering:</strong> Clean architecture, reproducibility,
            and rigorous tooling.
          </li>
          <li>
            <strong>Community:</strong> Building public goods that others can
            adopt, audit, and trust.
          </li>
        </ul>
      </div>
    </Prose>
  </div>
)

export default About
