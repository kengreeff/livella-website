import Logo from "@/components/Logo"

import Link from "./Link"

type MobileNavigationProps = {
  callbacks: {
    close: VoidFunction,
  }
}

const MobileNavigation = (props: MobileNavigationProps) => {
  const {
    callbacks: {
      close,
    },
  } = props

  return (
    <div className="navbar-menu relative z-50">
		<div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
		<nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
			<div className="flex items-center mb-8">
				<a className="mr-auto text-3xl font-bold leading-none" href="/">
          <Logo fill="black" height={18} width={185} />
				</a>

				<button className="navbar-close" onClick={close}>
					<svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>

			<div>
				<ul>
          <Link href="/">
            Home
          </Link>

          <Link href="/about">
            About
          </Link>

          <Link href="/products">
            Products
          </Link>

          <Link href="/installers">
            Installers
          </Link>

          <Link href="/support">
            Support
          </Link>
				</ul>
			</div>
		</nav>
	</div>
  )
}

export default MobileNavigation
