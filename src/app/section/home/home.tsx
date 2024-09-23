'use client';

import Image from 'next/image';
import ScreenSize from '../../../utils/screen-size';
import { useEffect, useState } from 'react';

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(ScreenSize.isMobile());
  }, []);

  const portfolio = {
    id: 'home',
    title: 'PORTFOLIO',
    name: 'RAMA DWIYANTARA PERKASA',
    link: '#home',
    position: 'Frontend Developer',
    about: `Dedicated and passionate developer with over 5 years of experience. Skilled in Vue JS, Flutter, React JS, and Laravel. Developed and maintained over 20 web and mobile apps. Contributed to developing back-end code for over 5 projects using the Laravel restful API.`,
    image: {
      src: '/picture/rama.png',
      width: 500,
      height: 300,
      className: 'w-[200px] h-[300px] md:w-[35vw] md:h-[90vh] object-contain',
      alt: 'Rama Dwiyantara Perkasa',
    },
    skill: [
      {
        name: 'Vue',
        icon: '/picture/vue.svg',
        width: 50,
        height: 50,
        className: 'h-10 w-10 md:h-12 md:w-12 object-contain',
      },
      {
        name: 'Laravel',
        icon: '/picture/laravel.svg',
        width: 50,
        height: 50,
        className: 'h-10 w-10 md:h-12 md:w-12 object-contain',
      },
      {
        name: 'React',
        icon: '/picture/react.svg',
        width: 50,
        height: 50,
        className: 'h-10 w-10 md:h-12 md:w-12 object-contain',
      },
      {
        name: 'Flutter',
        icon: '/picture/flutter.svg',
        width: 50,
        height: 50,
        className: 'h-10 w-10 md:h-12 md:w-12 object-contain',
      },
    ],
    social: [
      {
        name: '@ramadwiyantara',
        alt: 'Instagram',
        icon: '/picture/instagram.png',
        link: 'https://www.instagram.com/ramadwiyantara/',
        width: isMobile ? 30 : 25,
        height: isMobile ? 30 : 25,
        className: 'object-contain',
      },
      {
        name: 'Rama Dwiyantara Perkasa',
        alt: 'LinkedIn',
        icon: '/picture/linkedin.png',
        link: 'https://www.linkedin.com/in/ramadwiyantara/',
        width: isMobile ? 30 : 25,
        height: isMobile ? 30 : 25,
        className: 'object-contain',
      },
      {
        name: 'ramadperkasa',
        alt: 'Github',
        icon: '/picture/github.svg',
        link: 'https://www.github.com/ramadperkasa',
        width: isMobile ? 30 : 25,
        height: isMobile ? 30 : 25,
        className: 'object-contain',
      },
    ],
  };

  return (
    <>
      <div className='mt-4 hidden h-screen md:block' id={portfolio.id}>
        <div className='absolute right-[55%] h-full w-full rounded-full bg-primary'></div>
        <div className='grid h-full grid-cols-6 pt-20'>
          <div className='relative col-span-3 hidden md:block'>
            <div className='absolute h-full w-full'>
              <div className='absolute right-0 top-0 h-full'>
                <div className='flex h-full flex-col justify-end'>
                  <Image {...portfolio.image} />
                </div>
              </div>
            </div>
            <div className='absolute z-20 h-full w-full'>
              <div className='ml-6 flex h-full flex-col justify-end gap-3'>
                {portfolio.social.map((item) => {
                  return (
                    <a
                      href={item.link}
                      key={item.icon}
                      target='_blank'
                      rel='noreferrer'
                      className='flex w-96 cursor-pointer content-center gap-2 rounded-xl bg-black/80 p-3 font-bold text-white/90 duration-300 hover:-translate-y-1 hover:bg-black'
                    >
                      <Image
                        src={item.icon}
                        width={item.width}
                        height={item.height}
                        alt={item.alt}
                        className={item.className}
                      />
                      {<span>{item.name}</span>}
                    </a>
                  );
                })}
                <div className='mb-4'></div>
              </div>
            </div>
          </div>
          <div className='col-span-3 mr-14'>
            <div className='flex h-full w-full flex-col justify-center gap-4'>
              <h1 className='text-4xl font-extrabold text-white'>
                {portfolio.title}
              </h1>
              <h2 className='text-6xl font-bold text-primary'>
                {portfolio.name}
              </h2>
              <h3 className='text-3xl font-semibold'>{portfolio.position}</h3>

              <div className='my-4'>
                <div className='flex flex-col gap-4'>
                  <h4 className='text-4xl font-bold text-primary'>About Me</h4>
                  <p className='text-justify text-xl'>{portfolio.about}</p>
                </div>
              </div>

              <span className='text-4xl font-bold text-primary'>
                Best Skill On
              </span>
              <div className='flex gap-2'>
                {portfolio.skill.map((item) => {
                  return (
                    <div
                      key={item.name}
                      className='align-center flex h-full cursor-pointer flex-col justify-center rounded-md bg-[#1E2023] p-2 px-5 shadow-xl duration-300 hover:-translate-y-2 hover:bg-[#1E2023]/80'
                    >
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={item.width}
                        height={item.height}
                        className={item.className}
                      />
                      <span className='text-center'>{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='block px-12 md:hidden'>
        <div className='mb-5 mt-24'>
          <div className='flex h-2/4 w-full  flex-col items-center justify-end'>
            <div className='relative flex h-full w-full place-content-center'>
              <div className='home-spinner top-0 z-0 h-64 w-64 rounded-full bg-primary'></div>

              <Image
                {...portfolio.image}
                className={`absolute top-0 z-10 flex h-full w-full object-contain ${portfolio.image.className}`}
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-4 text-center'>
          <h2 className='text-2xl font-bold text-primary md:text-3xl'>
            {portfolio.name}
          </h2>
          <h3 className='text-1xl font-semibold md:text-2xl'>
            {portfolio.position}
          </h3>

          <div className='flex gap-2'>
            {portfolio.skill.map((item) => {
              return (
                <div
                  key={item.name}
                  className='align-center flex h-full cursor-pointer flex-col justify-center rounded-md bg-[#1E2023] p-2 px-5 shadow-xl duration-300 hover:-translate-y-2 hover:bg-[#1E2023]/80'
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={item.width}
                    height={item.height}
                    className={item.className}
                  />
                  <span className='text-center text-base sm:text-xs'>
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>

          <div className='my-6'>
            <div className='flex flex-col gap-4'>
              <h4 className='text-2xl font-bold text-primary'>About Me</h4>
              <p className='text-justify text-lg'>{portfolio.about}</p>
            </div>
          </div>

          <span className='mb-3 hidden text-2xl font-bold text-primary md:mb-0 md:block'>
            Best Skill On
          </span>
        </div>
        <div
          className='flex w-full flex-row items-center justify-center
        gap-4 md:flex-col md:items-start md:justify-start
        '
        >
          {portfolio.social.map((item) => {
            return (
              <a
                href={item.link}
                key={item.icon}
                target='_blank'
                className='flex w-auto cursor-pointer content-center gap-2 rounded-xl bg-black/80 p-3 font-bold text-white/90 duration-300 hover:-translate-y-1 hover:bg-black md:w-80'
              >
                <Image
                  src={item.icon}
                  width={item.width}
                  height={item.height}
                  alt={item.alt}
                  className={item.className}
                />
                {!isMobile && <span>{item.name}</span>}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
