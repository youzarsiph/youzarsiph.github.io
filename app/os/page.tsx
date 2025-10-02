import { Prose } from '@/app/ui'

const OS = () => (
  <div className="container mx-auto grid gap-8 px-4">
    <section className="hero">
      <div className="hero-content">
        <Prose>
          <h1>Open source</h1>
          <p className="lead">
            I maintain and contribute to packages, templates, and frameworks
            that help developers move faster without sacrificing quality.
          </p>
        </Prose>
      </div>
    </section>

    <Prose>
      <div>
        <h2>Packages</h2>
        <ul>
          <li>
            <strong>DRF UI suite:</strong> Reimagined, materialized UI for
            Django REST Framework.
            <ul>
              <li>
                <a
                  className="link link-primary"
                  href="https://github.com/youzarsiph/drf-restwind"
                >
                  <strong>
                    <code>drf-restwind</code>
                  </strong>
                </a>
              </li>
              <li>
                <a
                  className="link link-primary"
                  href="https://github.com/youzarsiph/drf-redesign"
                >
                  <strong>
                    <code>drf-redesign</code>
                  </strong>
                </a>
              </li>
              <li>
                <a
                  className="link link-primary"
                  href="https://github.com/youzarsiph/drf-material"
                >
                  <strong>
                    <code>drf-material</code>
                  </strong>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="link link-primary"
              href="https://github.com/youzarsiph/wagtail-tw-blocks"
            >
              <strong>
                <code>wagtail-tw-blocks</code>
              </strong>
            </a>
            : Production-ready content blocks.
          </li>
          <li>
            <strong>Reusable apps:</strong>
            <ul>
              <li>
                <a
                  className="link link-primary"
                  href="https://github.com/youzarsiph/django-w-blog"
                >
                  <strong>
                    <code>django-w-blog</code>
                  </strong>
                </a>
                : Blog application for real-world publishing.
              </li>
              <li>
                <a
                  className="link link-primary"
                  href="https://github.com/youzarsiph/django-w-careers"
                >
                  <strong>
                    <code>django-w-careers</code>
                  </strong>
                </a>
                : Job posting application.
              </li>
              <li>
                <a
                  className="link link-primary"
                  href="https://github.com/youzarsiph/django-w-docs"
                >
                  <strong>
                    <code>django-w-docs</code>
                  </strong>
                </a>
                : Documentation application.
              </li>
            </ul>
          </li>
          <li>
            <a
              className="link link-primary"
              href="https://github.com/youzarsiph/code-pilot-cli"
            >
              <strong>
                <code>code-pilot-cli</code>
              </strong>
            </a>
            : CLI powered by AI, that elevates code quality, tests, docs, and
            security.
          </li>
        </ul>
      </div>

      <div>
        <h2>Templates</h2>
        <ul>
          <li>
            <strong>Foundations:</strong>
            <ul>
              <li>
                <a
                  className="link link-primary"
                  href="https://github.com/youzarsiph/python-app"
                >
                  <strong>
                    <code>python-app</code>
                  </strong>
                </a>
                : General Python app scaffold.
              </li>
            </ul>
          </li>
          <li>
            <strong>Web:</strong> Production-ready web and API templates.
            <ul>
              <li>
                <a
                  className="link link-primary"
                  href="https://github.com/youzarsiph/django-app"
                >
                  <strong>
                    <code>django-app</code>
                  </strong>
                </a>
              </li>
              <li>
                <a
                  className="link link-primary"
                  href="https://github.com/youzarsiph/drf-app"
                >
                  <strong>
                    <code>drf-app</code>
                  </strong>
                </a>
              </li>
              <li>
                <a
                  className="link link-primary"
                  href="https://github.com/youzarsiph/wagtail-app"
                >
                  <strong>
                    <code>wagtail-app</code>
                  </strong>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <strong>Mobile:</strong> Material Design 3, themeable UI, i18n, and
            bi-directional
            <ul>
              <li>
                <a
                  className="link link-primary"
                  href="https://github.com/youzarsiph/expo-material"
                >
                  <strong>
                    <code>expo-material</code>
                  </strong>
                </a>
              </li>
              <li>
                <a
                  className="link link-primary"
                  href="https://github.com/youzarsiph/expo-material-tabs"
                >
                  <strong>
                    <code>expo-material-tabs</code>
                  </strong>
                </a>
              </li>
              <li>
                <a
                  className="link link-primary"
                  href="https://github.com/youzarsiph/expo-material-drawer"
                >
                  <strong>
                    <code>expo-material-drawer</code>
                  </strong>
                </a>
              </li>
              <li>
                <a
                  className="link link-primary"
                  href="https://github.com/youzarsiph/expo-react-native-paper"
                >
                  <strong>
                    <code>expo-react-native-paper</code>
                  </strong>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="link link-primary"
              href="https://github.com/youzarsiph/code-pilot-cli"
            >
              <strong>
                <code>cli-app</code>
              </strong>
            </a>
            : Robust CLI base with CI/CD.
          </li>
        </ul>
      </div>

      <div>
        <h2>Contributions</h2>
        <ul>
          <li>
            <strong>Expo:</strong> Mobile app framework.
          </li>
          <li>
            <strong>daisyUI:</strong> Popular Tailwind CSS component library.
          </li>
          <li>
            <strong>Django REST Framework:</strong> Reliable APIs for Django.
          </li>
          <li>
            <strong>And more</strong>
          </li>
        </ul>
      </div>
    </Prose>
  </div>
)

export default OS
