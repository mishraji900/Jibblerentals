import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-200">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col items-start justify-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-500">
            Jibble-rents 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          {
            footerLinks.map((item)=>(
              <div key={item.title}
              className="flex flex-col gap-6 text-base min-w-[170px]">
                <h3 className="font-bold">{item.title}</h3>
                <div className="flex flex-col gap-5">
                {item.links.map((link)=>(
                  <Link
                  key={link.title}
                  href={link.title}
                  className="text-gray-500"
                  >{link.title}</Link>
                ))
                }
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
      <p>@2023 CarHub. All rights reserved</p>

      <div className="footer__copyrights-link">
        <Link href="/" className="text-gray-500">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-500">
          Terms & Condition
        </Link>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
