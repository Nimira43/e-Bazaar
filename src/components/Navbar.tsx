// import CartButton from './CartButton'
// import LinksDropdown from './LinksDropdown'
// import Logo from './Logo'
// import ModeToggle from './ModeToggle'
// import NavLinks from './NavLinks'

import { CartButton, LinksDropdown, Logo, ModeToggle, NavLinks } from './index'

const Navbar = () => {
  return (
    <nav className='py-4'>
      <div className='align-element flex justify-between items-center'>
        <Logo />
        <LinksDropdown />
        <NavLinks />
        <div className='flex justify-center items-center gap-x-4'>
          <ModeToggle />
          <CartButton />
        </div>
      </div>
    </nav>
  )
}

export default Navbar