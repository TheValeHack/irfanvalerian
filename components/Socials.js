// links
import Link from 'next/link';

// icons
import {
  RiGithubLine,
  RiInstagramLine,
  RiDribbbleLine,
  RiLinkedinLine,
  RiFacebookLine
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-2xl'>
      <Link href={'https://www.linkedin.com/in/muhammad-irfan-valerian-185210200/'} target='_blank' className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link href={'https://github.com/TheValeHack'} target='_blank' className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
      <Link href={'https://dribbble.com/thevale'} target='_blank' className='hover:text-accent transition-all duration-300'>
        <RiDribbbleLine />
      </Link>
      <Link href={'https://www.instagram.com/irfan_vrn'} target='_blank' className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={'https://www.facebook.com/irfanvrn/'} target='_blank' className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine />
      </Link>
    </div>
  );
};

export default Socials;
