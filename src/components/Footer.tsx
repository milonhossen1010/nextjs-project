import Container from './Container';
import { TbMinusVertical } from 'react-icons/tb';
import { FaGithub, FaYoutube, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  const footerList = [
    { _id: 131, title: 'Support', link: '#', icon: true },
    { _id: 132, title: 'Contact Us', link: '/contact-us', icon: true },
    { _id: 133, title: 'Disclaimer', link: '#', icon: true },
    { _id: 134, title: 'Privacy Policy', link: '#' },
  ];
  return (
    <div className="  bg-green-100 w-full">
      <Container>
        <div className="flex text-sm flex-col md:flex-row md:item-center gap-2 justify-between">
          <p>© Copyrights Creative Studio</p>
          <ul className="flex items-center gap-2">
            {footerList.map(item => (
              <Link key={item._id} href={item.link}>
                <li className="flex items-center gap-2 text-gray-500 hover:text-primeColor duration-300 cursor-pointer">
                  {item.title}
                  {item.icon && <TbMinusVertical className="text-xl" />}
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex items-center gap-4 text-gray-700">
            <a href="#" target="_blank">
              <FaGithub className="text-xl hover:text-primeColor cursor-pointer duration-300" />
            </a>
            <a href="#" target="_blank">
              <FaLinkedinIn className="text-xl hover:text-primeColor cursor-pointer duration-300" />
            </a>
            <a href="#" target="_blank">
              <FaFacebookF className="text-xl hover:text-primeColor cursor-pointer duration-300" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
