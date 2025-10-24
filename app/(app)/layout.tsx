import type { Metadata } from 'next'
import { Noto_Kufi_Arabic } from 'next/font/google'
import '@/app/lib/ui/globals.css'
import {
  Home,
  Menu,
  X,
  Linkedin,
  Github,
  Package2,
  Info,
  Building2,
  Code,
  MessageSquareQuote,
  Copyright,
  Sun,
  MoonStar,
  Feather,
  Boxes,
  BrainCircuit,
  GraduationCap,
  BadgeCheck,
} from 'lucide-react'
import Link from 'next/link'
import { Logo } from '@/app/lib/ui'

const kufi = Noto_Kufi_Arabic({
  variable: '--font-kufi',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Yousuf Abu Shanab — Engineer, Founder, Poet',
  description:
    'Syrian engineer and poet building large-scale, production-ready systems and mission-driven open source for Arabic. Explore organizations, open source, projects, and poetry.',
  keywords: [
    'Yousuf Abu Shanab',
    'Arabic technology',
    'open source',
    'Quran apps',
    'LMS',
    'Wagtail',
    'Django',
    'DRF',
    'Expo',
    'poetry',
    'ad-diwan',
    'al-qawaed',
    'al-qamous',
  ],
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en" className="h-dvh">
    <body
      className={`${kufi.variable} font-kufi h-dvh font-[Noto_Kufi_Arabic] antialiased`}
    >
      <div className="drawer size-full">
        <input id="nav-drawer" type="checkbox" className="drawer-toggle" />

        <section id="content" className="drawer-content">
          <div
            id="main"
            className="bg-base-300 relative h-dvh overflow-hidden sm:p-1 lg:p-2"
          >
            <div className="flex size-full items-center gap-1">
              <section className="bg-base-100 sm:rounded-box relative size-full grow overflow-hidden">
                <header className="absolute inset-x-0 top-0 z-10 backdrop-blur-2xl">
                  <nav className="navbar p-4">
                    <ol className="navbar-start gap-4">
                      <li
                        className="tooltip tooltip-right tooltip-primary rtl:tooltip-left z-10"
                        data-tip="Open drawer"
                      >
                        <label
                          htmlFor="nav-drawer"
                          aria-label="close sidebar"
                          className="btn rounded-field btn-square btn-soft btn-sm btn-primary md:btn-md 2xl:btn-lg"
                        >
                          <Menu className="size-4 md:size-6" />
                          <span className="sr-only">Open drawer</span>
                        </label>
                      </li>
                    </ol>

                    <ol className="navbar-center gap-4">
                      <Logo tooltip={{ vertical: true }} />
                    </ol>

                    <ol className="navbar-end gap-4">
                      <li
                        className="tooltip tooltip-left rtl:tooltip-right tooltip-primary hidden dark:inline-block"
                        data-tip="Toggle theme"
                      >
                        <label className="swap swap-rotate btn rounded-field btn-square btn-soft btn-sm btn-primary md:btn-md 2xl:btn-lg">
                          <input
                            type="checkbox"
                            className="theme-controller hidden dark:flex"
                            value="luxurylight"
                          />
                          <Sun className="swap-off size-4 lg:size-6" />
                          <MoonStar className="swap-on size-4 lg:size-6" />
                        </label>
                      </li>

                      <li
                        className="tooltip tooltip-left rtl:tooltip-right tooltip-primary dark:hidden"
                        data-tip="Toggle theme"
                      >
                        <label className="swap swap-rotate btn rounded-field btn-square btn-soft btn-sm btn-primary md:btn-md 2xl:btn-lg">
                          <input
                            type="checkbox"
                            className="theme-controller hidden dark:flex"
                            value="luxury"
                          />
                          <Sun className="swap-off size-4 lg:size-6" />
                          <MoonStar className="swap-on size-4 lg:size-6" />
                        </label>
                      </li>
                    </ol>
                  </nav>
                </header>

                <section className="grid size-full gap-8 overflow-y-auto pt-20 lg:pt-24">
                  {children}

                  <div className="grid w-full gap-4">
                    <footer className="footer border-base-300 w-full gap-4 border-t p-10">
                      <aside className="grid-flow-col items-center gap-4">
                        <Logo />

                        <p className="text-primary">
                          Yousuf Abu Shanab
                          <br />
                          Engineer, Founder, Poet
                        </p>
                      </aside>
                      <nav className="grid gap-4">
                        <ol className="grid grid-flow-col gap-4">
                          <li
                            className="tooltip tooltip-right tooltip-error rtl:tooltip-left"
                            data-tip="Badges"
                          >
                            <a
                              href="https://www.credly.com/users/youzarsiph"
                              className="btn rounded-field btn-square btn-sm btn-error md:btn-md 2xl:btn-lg"
                            >
                              <BadgeCheck className="size-4 md:size-6" />
                              <span className="sr-only">Badges</span>
                            </a>
                          </li>
                          <li
                            className="tooltip tooltip-right tooltip-success rtl:tooltip-left"
                            data-tip="Certificates"
                          >
                            <a
                              href="https://www.coursera.org/learner/youzarsiph"
                              className="btn rounded-field btn-square btn-sm btn-success md:btn-md 2xl:btn-lg"
                            >
                              <GraduationCap className="size-4 md:size-6" />
                              <span className="sr-only">Certificates</span>
                            </a>
                          </li>
                          <li
                            className="tooltip tooltip-right tooltip-warning rtl:tooltip-left"
                            data-tip="HuggingFace"
                          >
                            <a
                              href="https://huggingface.co/youzarsiph"
                              className="btn rounded-field btn-square btn-sm btn-warning md:btn-md 2xl:btn-lg"
                            >
                              <BrainCircuit className="size-4 md:size-6" />
                              <span className="sr-only">HuggingFace</span>
                            </a>
                          </li>
                          <li
                            className="tooltip tooltip-right tooltip-info rtl:tooltip-left"
                            data-tip="PyPI"
                          >
                            <a
                              href="https://pypi.org/user/youzarsiph/"
                              className="btn rounded-field btn-square btn-sm btn-info md:btn-md 2xl:btn-lg"
                            >
                              <Boxes className="size-4 md:size-6" />
                              <span className="sr-only">PyPI</span>
                            </a>
                          </li>
                          <li
                            className="tooltip tooltip-right tooltip-info rtl:tooltip-left"
                            data-tip="Linked In"
                          >
                            <a
                              href="https://linkedin.com/in/youzarsiph"
                              className="btn rounded-field btn-square btn-soft btn-sm btn-info md:btn-md 2xl:btn-lg"
                            >
                              <Linkedin className="size-4 md:size-6" />
                              <span className="sr-only">Linked In</span>
                            </a>
                          </li>

                          <li
                            className="tooltip tooltip-right tooltip-primary rtl:tooltip-left"
                            data-tip="Github"
                          >
                            <a
                              href="https://github.com/youzarsiph"
                              className="btn rounded-field btn-square btn-sm btn-primary md:btn-md 2xl:btn-lg"
                            >
                              <Github className="size-4 md:size-6" />
                              <span className="sr-only">Github</span>
                            </a>
                          </li>
                        </ol>
                        <span className="text-primary flex items-center gap-2">
                          <Copyright className="size-4 lg:size-6" />
                          Yousuf Abu Shanab
                        </span>
                      </nav>
                    </footer>
                  </div>
                </section>
              </section>
            </div>
          </div>
        </section>

        <section id="sidebar" className="drawer-side z-50">
          <label
            htmlFor="nav-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <section className="bg-base-100 flex size-full flex-col justify-between overflow-hidden overflow-y-auto backdrop-blur-3xl sm:w-10/12 md:w-8/12 lg:w-1/3 2xl:w-1/4">
            <div className="flex grow flex-col">
              <header className="navbar p-4">
                <ol className="navbar-start">
                  <Logo />
                </ol>

                <ol className="navbar-end gap-4">
                  <li
                    className="tooltip tooltip-left tooltip-error rtl:tooltip-right"
                    data-tip="Badges"
                  >
                    <a
                      href="https://www.credly.com/users/youzarsiph"
                      className="btn rounded-field btn-square btn-sm btn-error md:btn-md 2xl:btn-lg"
                    >
                      <BadgeCheck className="size-4 md:size-6" />
                      <span className="sr-only">Badges</span>
                    </a>
                  </li>
                  <li
                    className="tooltip tooltip-left tooltip-success rtl:tooltip-right"
                    data-tip="Certificates"
                  >
                    <a
                      href="https://www.coursera.org/learner/youzarsiph"
                      className="btn rounded-field btn-square btn-sm btn-success md:btn-md 2xl:btn-lg"
                    >
                      <GraduationCap className="size-4 md:size-6" />
                      <span className="sr-only">Certificates</span>
                    </a>
                  </li>
                  <li
                    className="tooltip tooltip-left tooltip-warning rtl:tooltip-right"
                    data-tip="HuggingFace"
                  >
                    <a
                      href="https://huggingface.co/youzarsiph"
                      className="btn rounded-field btn-square btn-sm btn-warning md:btn-md 2xl:btn-lg"
                    >
                      <BrainCircuit className="size-4 md:size-6" />
                      <span className="sr-only">HuggingFace</span>
                    </a>
                  </li>
                  <li
                    className="tooltip tooltip-left tooltip-info rtl:tooltip-right"
                    data-tip="PyPI"
                  >
                    <a
                      href="https://pypi.org/user/youzarsiph/"
                      className="btn rounded-field btn-square btn-sm btn-info md:btn-md 2xl:btn-lg"
                    >
                      <Boxes className="size-4 md:size-6" />
                      <span className="sr-only">PyPI</span>
                    </a>
                  </li>
                  <li
                    className="tooltip tooltip-left tooltip-info rtl:tooltip-right"
                    data-tip="Linked In"
                  >
                    <a
                      href="https://linkedin.com/in/youzarsiph"
                      className="btn rounded-field btn-square btn-soft btn-sm btn-info md:btn-md 2xl:btn-lg"
                    >
                      <Linkedin className="size-4 md:size-6" />
                      <span className="sr-only">Linked In</span>
                    </a>
                  </li>

                  <li
                    className="tooltip tooltip-left tooltip-primary rtl:tooltip-right"
                    data-tip="Github"
                  >
                    <a
                      href="https://github.com/youzarsiph"
                      className="btn rounded-field btn-square btn-sm btn-primary md:btn-md 2xl:btn-lg"
                    >
                      <Github className="size-4 md:size-6" />
                      <span className="sr-only">Github</span>
                    </a>
                  </li>

                  <li
                    className="tooltip tooltip-left rtl:tooltip-right"
                    data-tip="Close"
                  >
                    <label
                      htmlFor="nav-drawer"
                      aria-label="close sidebar"
                      className="btn rounded-field btn-square btn-ghost btn-sm md:btn-md 2xl:btn-lg"
                    >
                      <X className="size-4 md:size-6" />
                      <span className="sr-only">Close</span>
                    </label>
                  </li>
                </ol>
              </header>

              <ol className="menu menu-vertical size-full grow overflow-y-auto">
                <li>
                  <Link href="/">
                    <Home className="size-4 md:size-6" />
                    Home
                  </Link>
                </li>
                <li>
                  <a href="/about">
                    <Info className="size-4 md:size-6" />
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact">
                    <MessageSquareQuote className="size-4 md:size-6" />
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/poetry">
                    <Feather className="size-4 md:size-6" />
                    Poetry
                  </a>
                </li>
                <li>
                  <a href="/orgs">
                    <Building2 className="size-4 md:size-6" />
                    Organizations
                  </a>
                </li>
                <li>
                  <a href="/os">
                    <Code className="size-4 md:size-6" />
                    Open Source
                  </a>
                </li>
                <li>
                  <a href="/projects">
                    <Package2 className="size-4 md:size-6" />
                    Projects
                  </a>
                </li>
              </ol>
            </div>
          </section>
        </section>
      </div>
    </body>
  </html>
)

export default RootLayout
