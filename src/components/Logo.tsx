import { Link } from 'react-router-dom'
import { GiBarracksTent } from 'react-icons/gi'

function Logo() {
  return (
    <Link
      to='/'
      className='hidden lg:flex justify-center items-center p-2 rounded-lg '
    >
      <GiBarracksTent className='w-8 h-8' />
      <span className='ml-2 text-3xl pt-3 logo'>e-Bazaar</span>
    </Link>
  );
}

export default Logo;