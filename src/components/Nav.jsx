import logo from '../assets/logo.svg'
import search from '../assets/bx_search-alt.svg'
import { navlinks } from '../constants'
const Nav = () => {
  return (
    <header>
        <nav className="bg-white px-16 py-4 flex items-center justify-between">
        <div className="bg-white align-middle">
            <img 
            src={logo} 
            alt="logo"
            width={198}
            height={56}
            />  
        </div>
        <div className="bg-white">
            <ul className=' text-slate-700 flex  justify-center items-center gap-8 text-md font-semibold uppercase font-sf-pro'>
                {navlinks.map((link) => {
                    return (
                        <li key={link.name} className='hover:text-black hover:cursor-pointer'>{link.name}
                        </li>
                    )
                })}
                <li>
                    <img 
                    src={search}
                    alt='search'
                    />
                </li>
            </ul>
        </div>
        </nav>
    </header>
  )
}

export default Nav