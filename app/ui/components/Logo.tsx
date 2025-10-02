import Link from 'next/link'

const Logo = (props: {
  tooltip?: {
    open?: boolean
    vertical?: boolean
  }
}) => (
  <li
    data-tip="يُوسُفُ أَبُو شَنَبْ"
    className={`${props.tooltip?.open && 'tooltip-open'} tooltip ${props.tooltip?.vertical ? 'tooltip-bottom' : 'tooltip-right rtl:tooltip-left'} tooltip-success`}
  >
    <h1 className="relative dark:hidden">
      <Link
        href="/"
        className="btn rounded-field btn-square btn-lg btn-primary lg:btn-xl"
      >
        <div className="btn rounded-field btn-lg btn-primary lg:btn-xl absolute inset-0 rotate-45 p-0 shadow-none">
          <div className="relative" data-theme="luxury">
            <span className="btn btn-square btn-sm btn-primary lg:btn-md -rotate-45 rounded">
              <span className="btn btn-square btn-sm btn-primary lg:btn-md rotate-45 rounded p-0 shadow-none">
                <span className="-rotate-45 font-black">يٓ</span>
              </span>
            </span>
          </div>
        </div>
      </Link>
    </h1>
    <h1 className="relative hidden dark:block">
      <Link
        href="/"
        className="btn rounded-field btn-square btn-lg btn-primary lg:btn-xl"
      >
        <div className="btn rounded-field btn-lg btn-primary lg:btn-xl absolute inset-0 rotate-45 p-0 shadow-none">
          <div className="relative" data-theme="luxurylight">
            <span className="btn btn-square btn-sm btn-primary lg:btn-md -rotate-45 rounded">
              <span className="btn btn-square btn-sm btn-primary lg:btn-md rotate-45 rounded p-0 shadow-none">
                <span className="-rotate-45 font-black">يٓ</span>
              </span>
            </span>
          </div>
        </div>
      </Link>
    </h1>
  </li>
)

export default Logo
