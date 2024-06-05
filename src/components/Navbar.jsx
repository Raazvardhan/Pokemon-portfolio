import logoo from '../assets/kevinRushLogo.png'
import { FaLinkedin } from 'react-icons/fa6'  
import { FaGithub } from 'react-icons/fa6'
import { FaTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'

const Navbar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
    <img className='mx-2 w-10' src={logoo} alt="logo" />
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
      <FaLinkedin/>
      <FaGithub/>
      <FaTwitter/>
      <FaInstagram/>
    </div>
  </nav>
}

export default Navbar