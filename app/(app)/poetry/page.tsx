import { Prose } from '@/app/lib/ui'
import { AudioLines } from 'lucide-react'

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
        <blockquote dir="rtl" className="grid gap-4 md:grid-cols-2">
          <span>أَيُّهَا المَجْنُوٓنُ، اِرْمِ السِّهَامَ لَيْلَآ</span>
          <span>حُبُّهَا المَكْنُوٓنُ، أَمِيلُ إِلَيْهَا مَيْلَآ</span>

          <span>إِنَّ ذَا الجُنُوٓنُ، إِنَّهَا عِنْدِي لَيْلَىٓ</span>
          <span>كَافٌ ثُمَّ نُوٓنٌ، تَنَالُ الحُـبَّ نَيْلَآ</span>

          <span>أَيُّهَا اللَآئِمُ، لَقَدْ أَكْثَرْتَ لَوْمًا وَعَذْلَآ</span>
          <span>غَافِلٌ وَنَآئِمٌ، وَمَا كَانَ حُكْمُكَ عَدْلَآ</span>

          <span>إِنِّي الهَآئِمُ، لَقَدْ هِمْتُ بِهَا حُبًّا وَذُلَّآ</span>
          <span>سَأَلْتُ الدَّآئِمَ، قَلْبَهَا، حُبَّهَا ثُمَّ وَصْلَآ</span>

          <cite className="text-primary col-span-2 font-bold">
            يوسف أبو شنب
          </cite>
        </blockquote>

        <blockquote dir="rtl" className="grid gap-4 md:grid-cols-2">
          <span>بَعْدَ أَنْ كَانَ قَلْبِي فِي هُدُوءٍ وَ سُكُونْ</span>
          <span>حَتّى رَأَيْتُكِ فَقُلْتُ مُحَالٌ كَيْفَ يَكُونْ</span>

          <span>أَنْ أُحِبَّ، وَمَا ذَٰلِكَ عَلَى القُلُوبِ يَهُونْ</span>
          <span>فـأَحْبَبْتُكِ وَ الآنَ أَشْتَاقُ إِلَيْكِ بِجُنُونْ</span>

          <span>وَكَمْ يُؤْلِمُنِي، كَأَنِّي أَنْتَظِرُ رَيْبَ المَنُونْ</span>
          <span>أَدْرَكَ قَلْبِي، فَنَادَى مَنْ أَمْرُهُ كَافٌ وَنُونْ</span>

          <span>يَا مَنْ إِذَا أَرَادَ يَكُونْ، تَحْفَظُنَا وَ تَصُونْ</span>
          <span>أَنْزِلْ الشِّفَاءَ، إِنَّ الدَّاءَ فِي قَلْبِي مَكْنُونْ</span>

          <div className="flex items-center gap-4">
            <div
              className="tooltip tooltip-right tooltip-primary rtl:tooltip-left"
              data-tip="Listen"
            >
              <a
                href="https://suno.com/s/Pw8HCHoeZUFymfHS"
                className="btn rounded-field btn-square btn-soft btn-sm btn-primary md:btn-md 2xl:btn-lg"
              >
                <AudioLines className="size-4 md:size-6" />
                <span className="sr-only">Listen</span>
              </a>
            </div>

            <cite className="text-primary col-span-2 font-bold">
              يوسف أبو شنب
            </cite>
          </div>
        </blockquote>

        <blockquote dir="rtl" className="grid gap-4 md:grid-cols-2">
          <span>حُبُّكِ نَارٌ وَلَيْتَنِي لَمْ أَكُنِ الوَقُود</span>
          <span>كَأَنِّي مُقَيَّدٌ فِي الأَغْلَالِ وَالقُيُود</span>

          <span>أَسِيرٌ يَسِيرُ حَيْثُ يَجُرُّنِي وَيَقُود</span>
          <span>وَكَمْ أُحِبُّكِ لَيْتَ لِي عِنْدَكِ وُجُود</span>

          <span>غَدَتْ حَيَاتِي كَسَبْعٍ شِدَاد</span>
          <span>أَفْنَتِ الدُّمُوعَ كَـمَا المِدَاد</span>

          <span>كُلَّمَا رَأَيْتُكِ حُبِّي لَكِ ازْدَاد</span>
          <span>فَزَادَ مَا يُكِنُّ قَلْبِي مِنْ وِدَاد</span>

          <div className="flex items-center gap-4">
            <div
              className="tooltip tooltip-right tooltip-primary rtl:tooltip-left"
              data-tip="Listen"
            >
              <a
                href="https://suno.com/s/BtXY8joqZnukXzR7"
                className="btn rounded-field btn-square btn-soft btn-sm btn-primary md:btn-md 2xl:btn-lg"
              >
                <AudioLines className="size-4 md:size-6" />
                <span className="sr-only">Listen</span>
              </a>
            </div>

            <cite className="text-primary col-span-2 font-bold">
              يوسف أبو شنب
            </cite>
          </div>
        </blockquote>
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
