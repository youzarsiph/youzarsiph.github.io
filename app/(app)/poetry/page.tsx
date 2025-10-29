import { CheckCircle2, ChevronRight, Info, PlayCircle } from 'lucide-react'
import Image from 'next/image'

import { Prose } from '@/app/lib/ui'

const PoemCard = (props: { src: string; href: string }) => (
  <article className="not-prose card card-sm md:card-md lg:card-lg 2xl:card-xl group overflow-hidden">
    <figure className="relative size-full py-20">
      <a
        href={props.href}
        className="absolute inset-0 z-10 flex items-center justify-center"
      >
        <PlayCircle className="text-primary rounded-box hidden size-1/4 p-4 backdrop-blur-3xl group-hover:block" />
      </a>

      <Image
        src={props.src}
        alt="Background"
        height={1000}
        width={1000}
        className="absolute inset-0 mx-auto h-full blur-2xl"
      />

      <div className="z-1 flex size-1/2 items-center justify-center">
        <Image
          src={props.src}
          alt="Clip image"
          height={1000}
          width={1000}
          className="rounded-box"
        />
      </div>
    </figure>
  </article>
)

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

        <div
          role="alert"
          className="not-prose alert alert-vertical alert-success alert-soft md:alert-horizontal mb-8"
        >
          <CheckCircle2 className="size-4 lg:size-6" />
          <p>Click the images to listen</p>
        </div>

        <PoemCard
          src="/before-the-sunrise.jpeg"
          href="https://suno.com/s/rHUxVJvkqtxvPpgF"
        />
        <blockquote dir="rtl" className="grid gap-4 md:grid-cols-2">
          <span>بَعْدَ غُرُوبِ الشَّمْسِ وَ قَبْلَ الشُّرُوٓقْ</span>
          <span>فِي غَسَقِ اللَّيْلِ حِينَ غُيُومًا تَسُوٓقْ</span>

          <span>أَشْكُو مَا أُلَاقِي مِنْ حُبِّهَا وَمَا أَذُوٓقْ</span>
          <span>فِي قَلْبِي نَارٌ، وَشَوْقٌ حَارٌّ، وَشُقُوٓقْ</span>

          <span>مُنْذُ أَحْبَبْتُكِ قَلْبِي لَفِي الأَحْزَانِ غَرِيٓقْ</span>
          <span>فِي أَحْلَامٍ وَ آَلَامٍ، وَ قَدِ انْقَطَعَ الطَّرِيٓقْ</span>

          <span>
            مَا لَهُ فِرَارٌ، وَقَلْبُهُ القَرَارُ، فَكَيْفَ يُطِيٓقْ؟
          </span>
          <span>ضَاقَتِ الأَرْضُ فَنَفْسِي وَصَدْرِي يَضِيٓقْ</span>
        </blockquote>

        <hr />

        <PoemCard
          src="/under-the-skies.jpeg"
          href="https://suno.com/s/3Stz7QLsIjXr9Abp"
        />
        <blockquote dir="rtl" className="grid gap-4 md:grid-cols-2">
          <span>فِي ظَلَامِ اللَّيلِ وَ ضَوْءِ النُّجُوٓمْ</span>
          <span>عَلَى أَعْتَابِ بَابِهِ بَيْنَ يَدَيْهِ أَقُوٓمْ</span>

          <span>
            لَا مَلْجَأَ إِلَّآ إِلَيْٓهِ ولَا الغَيْٓبُ بِمَعْلُوٓمْ
          </span>
          <span>إِلَّآ أَنِّي جِئْتُهُ بِهَمِّ قَلْبِيَ المَكْلُوٓمْ</span>

          <span>قَبْلَ الفَجْرِ وَ حِينَ تُمْطِرُ الغُيُوٓمْ</span>
          <span>قَلْبِي يُنَادِيهِ أَنْ يَا حَيُّ يَا قَيُّوٓمْ</span>

          <span>كُلٌّ بِأَمْرِكَ مَأْمُورٌ بِحُكْمِكَ مَحْكُوٓمْ</span>
          <span>إِنِّي لَفِي هُمُوٓمْ، تَسْكُنُنِي الغُمُوٓمْ</span>
        </blockquote>

        <hr />

        <PoemCard
          src="/skoon.jpeg"
          href="https://suno.com/s/Pw8HCHoeZUFymfHS"
        />
        <blockquote dir="rtl" className="grid gap-4 md:grid-cols-2">
          <span>بَعْدَ أَنْ كَانَ قَلْبِي فِي هُدُوءٍ وَ سُكُونْ</span>
          <span>حَتّى رَأَيْتُكِ فَقُلْتُ مُحَالٌ كَيْفَ يَكُونْ</span>

          <span>أَنْ أُحِبَّ، وَمَا ذَٰلِكَ عَلَى القُلُوبِ يَهُونْ</span>
          <span>فـأَحْبَبْتُكِ وَ الآنَ أَشْتَاقُ إِلَيْكِ بِجُنُونْ</span>

          <span>وَكَمْ يُؤْلِمُنِي، كَأَنِّي أَنْتَظِرُ رَيْبَ المَنُونْ</span>
          <span>أَدْرَكَ قَلْبِي، فَنَادَى مَنْ أَمْرُهُ كَافٌ وَنُونْ</span>

          <span>يَا مَنْ إِذَا أَرَادَ يَكُونْ، تَحْفَظُنَا وَ تَصُونْ</span>
          <span>أَنْزِلْ الشِّفَاءَ، إِنَّ الدَّاءَ فِي قَلْبِي مَكْنُونْ</span>
        </blockquote>

        <hr />

        <PoemCard
          src="/flame.jpeg"
          href="https://suno.com/s/Pw8HCHoeZUFymfHS"
        />
        <blockquote dir="rtl" className="grid gap-4 md:grid-cols-2">
          <span>حُبُّكِ نَارٌ وَلَيْتَنِي لَمْ أَكُنِ الوَقُود</span>
          <span>كَأَنِّي مُقَيَّدٌ فِي الأَغْلَالِ وَالقُيُود</span>

          <span>أَسِيرٌ يَسِيرُ حَيْثُ يَجُرُّنِي وَيَقُود</span>
          <span>وَكَمْ أُحِبُّكِ لَيْتَ لِي عِنْدَكِ وُجُود</span>

          <span>غَدَتْ حَيَاتِي كَسَبْعٍ شِدَاد</span>
          <span>أَفْنَتِ الدُّمُوعَ كَـمَا المِدَاد</span>

          <span>كُلَّمَا رَأَيْتُكِ حُبِّي لَكِ ازْدَاد</span>
          <span>فَزَادَ مَا يُكِنُّ قَلْبِي مِنْ وِدَاد</span>
        </blockquote>

        <div
          role="alert"
          className="not-prose alert alert-vertical lg:alert-horizontal alert-info alert-soft mb-8"
        >
          <Info className="size-4 lg:size-6" />
          <p>For more check out my profile on Suno</p>

          <a
            href="https://suno.com/@youzarsiph"
            className="btn btn-sm btn-info rounded-field"
          >
            Learn more
            <ChevronRight className="size-4 rtl:rotate-180" />
          </a>
        </div>
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
