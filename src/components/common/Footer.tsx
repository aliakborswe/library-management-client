import { BookOpenText, Facebook, Github, Linkedin, Mail, PhoneCall, Twitter } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className='bg-secondary'>
      <div className='container mx-auto px-2.5 pt-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='flex flex-col '>
            <Link to='/' className='flex items-center gap-1'>
              <BookOpenText className='text-chart-2 w-8 h-8' />
              <div className='text-chart-2 font-bold text-2xl'>BookFlow</div>
            </Link>
            <p className='mt-2  '>
              Efficiently manage library with our platform, connecting book
              lovers and writers.
            </p>
          </div>
          <div className='mt-3'>
            <h3 className='font-semibold text-lg mb-4'>Company</h3>
            <ul className='space-y-2'>
              <li>
                <Link to='/' className=' hover:text-primary transition-colors'>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/all-books'
                  className=' hover:text-primary transition-colors'
                >
                  All Books
                </Link>
              </li>
              <li>
                <Link
                  to='/borrow-summary'
                  className=' hover:text-primary transition-colors'
                >
                  Borrow Summary
                </Link>
              </li>
            </ul>
          </div>
          <div className='mt-3'>
            <h3 className='font-semibold text-lg mb-4'>Legal</h3>
            <ul className='space-y-2'>
              <li>
                <Link to='/' className=' hover:text-primary transition-colors'>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to='/' className=' hover:text-primary transition-colors'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to='/' className=' hover:text-primary transition-colors'>
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className='mt-3'>
            <h3 className='font-semibold text-lg mb-4'>Contact</h3>
            <ul className='space-y-2'>
              <li className='flex gap-2 font-bold'>
                <PhoneCall /> +8801804555186
              </li>
              <li className='flex gap-2 font-bold'>
                <Mail /> contact@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* copyright */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-4 py-6 mt-8 border-t-2 border-primary text-primary'>
          <p>©BookFlow 2025</p>
          <div className='flex gap-2'>
            <Link to='https://www.facebook.com/aliakbor2002'>
              <Facebook />
            </Link>
            <Link to='https://github.com/aliakborswe'>
              <Github />
            </Link>
            <Link to='https://www.linkedin.com/aliakborswe/'>
              <Linkedin />
            </Link>
            <Link to='https://x.com/aliakborswe'>
              <Twitter />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
