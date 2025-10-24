import { Prose } from '@/app/lib/ui'
import Image from 'next/image'

const Orgs = () => (
  <div className="container mx-auto grid gap-8 px-4">
    <Prose>
      <h1>Organizations</h1>

      <div>
        <div className="grid grid-cols-12 gap-4">
          <figure className="col-span-12 lg:col-span-4">
            <Image
              height={1080}
              width={1920}
              alt="Q Complex Logo"
              src="/q-complex-logo.png"
              className="rounded-box w-full"
            />
          </figure>
          <div className="col-span-12 grid lg:col-span-8 lg:place-items-center">
            <h2>
              <a
                href="https://github.com/Q-Complex"
                className="link link-primary link-hover font-black"
              >
                Q-Complex
              </a>
              <br />— The Quran Complex
            </h2>
          </div>
        </div>
        <ul>
          <li>
            <strong>Mission:</strong> Build modern Quran applications and
            infrastructure with cutting-edge technology.
          </li>
          <li>
            <strong>Projects:</strong>
            <ul>
              <li>
                <a
                  className="link link-primary"
                  href="https://github.com/Q-Complex/al-quran"
                >
                  <strong>
                    <code>al-quran</code>
                  </strong>
                </a>
                : Modern web app and APIs.
              </li>
              <li>
                <a
                  className="link link-primary"
                  href="https://github.com/Q-Complex/al-quran-app"
                >
                  <strong>
                    <code>al-quran-app</code>
                  </strong>
                </a>
                : Cross-platform mobile app focused on a calm reading
                experience.
              </li>
              <li>
                <a
                  className="link link-primary"
                  href="https://github.com/Q-Complex/quran-db"
                >
                  <strong>
                    <code>quran-db</code>
                  </strong>
                </a>
                : Comprehensive Quran database in SQLite3 and JSON.
              </li>
              <li>
                <a
                  className="link link-primary"
                  href="https://github.com/Q-Complex/quran-cli"
                >
                  <strong>
                    <code>quran-cli</code>
                  </strong>
                </a>
                : Advanced CLI for Quran data exploration.
              </li>
            </ul>
          </li>
          <li>
            <strong>Approach:</strong> Accessibility, performance, and fidelity
            to the text.
          </li>
        </ul>
        <hr />
      </div>

      <div>
        <div className="grid grid-cols-12 gap-4">
          <figure className="col-span-12 lg:col-span-4">
            <Image
              height={1080}
              width={1920}
              alt="House Of Wisdom Logo"
              src="/how-logo.png"
              className="rounded-box w-full"
            />
          </figure>
          <div className="col-span-12 grid lg:col-span-8 lg:place-items-center">
            <h2>
              <a
                href="https://github.com/the-house-of-wsidom"
                className="link link-primary link-hover font-black"
              >
                The House of Wisdom
              </a>
              <br />— Open source LMS powered by AI
            </h2>
          </div>
        </div>
        <ul>
          <li>
            <strong>Mission:</strong> Democratize high-quality learning with
            transparent, adaptable tools.
          </li>
          <li>
            <strong>Projects:</strong>
            <ul>
              <li>
                <a
                  className="link link-primary"
                  href="https://github.com/the-house-of-wsidom/house-of-wisdom"
                >
                  <strong>
                    <code>house-of-wisdom</code>
                  </strong>
                </a>
                : Core LMS platform.
              </li>
              <li>
                <a
                  className="link link-primary"
                  href="https://github.com/the-house-of-wsidom/how-app"
                >
                  <strong>
                    <code>how-app</code>
                  </strong>
                </a>
                : Cross platform Mobile app for learners and instructors.
              </li>
              <li>
                <a
                  className="link link-primary"
                  href="https://github.com/the-house-of-wsidom/instructor-guide"
                >
                  <strong>
                    <code>instructor-guide</code>
                  </strong>
                </a>
                : Course guiding instructors on best practices.
              </li>
              <li>
                <a
                  className="link link-primary"
                  href="https://github.com/the-house-of-wsidom/user-guide"
                >
                  <strong>
                    <code>user-guide</code>
                  </strong>
                </a>
                : Course guiding learners through the platform.
              </li>
            </ul>
          </li>
          <li>
            <strong>Approach:</strong> Open standards, explainable AI, and
            documented pedagogy.
          </li>
        </ul>
        <hr />
      </div>

      <div>
        <div className="grid grid-cols-12 gap-4">
          <figure className="col-span-12 lg:col-span-4">
            <Image
              height={1080}
              width={1920}
              alt="Al Arabiyya Logo"
              src="/al-arabiyya-logo.png"
              className="rounded-box w-full"
            />
          </figure>
          <div className="col-span-12 grid lg:col-span-8 lg:place-items-center">
            <h2>
              <a
                href="https://github.com/al-arabiyya"
                className="link link-primary link-hover font-black"
              >
                Al Arabiyaa
              </a>
              <br />— Modern tech for Arabic
            </h2>
          </div>
        </div>
        <ul>
          <li>
            <strong>Mission:</strong> Build open tools that make Arabic usage
            powerful across the web and mobile.
          </li>
          <li>
            <strong>Projects:</strong>
            <ul>
              <li>
                <a
                  className="link link-primary"
                  href="https://github.com/al-arabiyya/al-uloum"
                >
                  <strong>
                    <code>al-uloum</code>
                  </strong>
                </a>
                : Arabic linguistics web app.
              </li>
              <li>
                <a
                  className="link link-primary"
                  href="https://github.com/al-arabiyya/al-qamous"
                >
                  <strong>
                    <code>al-qamous</code>
                  </strong>
                </a>
                : Arabic dictionary web app.
              </li>
              <li>
                <a
                  className="link link-primary"
                  href="https://github.com/al-arabiyya/ad-diwan"
                >
                  <strong>
                    <code>ad-diwan</code>
                  </strong>
                </a>
                : Platform for poets and poems.
              </li>
              <li>
                <a
                  className="link link-primary"
                  href="https://github.com/al-arabiyya/al-arabiyya"
                >
                  <strong>
                    <code>al-arabiyya</code>
                  </strong>
                </a>
                : The main platform that contains all other projects.
              </li>
              <li>
                <a
                  className="link link-primary"
                  href="https://github.com/al-arabiyya/al-arabiyya-app"
                >
                  <strong>
                    <code>al-arabiyya-app</code>
                  </strong>
                </a>
                : Cross-platform mobile app for Arabic language learning.
              </li>
            </ul>
          </li>
          <li>
            <strong>Approach:</strong> Bilingual UX, performance, and joyful
            design.
          </li>
        </ul>
      </div>
    </Prose>
  </div>
)

export default Orgs
