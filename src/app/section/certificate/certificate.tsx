'use client';

import Image from 'next/image';
import Link from 'next/link';

import * as React from 'react';
import { useState } from 'react';

function Certificate() {
  const tabs = [
    {
      id: 'frontend',
      name: 'Frontend',
    },
    {
      id: 'backend',
      name: 'Backend',
    },
    {
      id: 'mobile',
      name: 'Mobile',
    },
    {
      id: 'selfDevelopment',
      name: 'Self Development',
    },
  ];

  const [tab, setTab] = useState('frontend');

  const data = [
    {
      group: 'mobile',
      image: '/picture/certificates/21-07-Layer_6.png',
      title: 'The Complete 2021 Flutter Development Bootcamp with Dart',
      platform: 'Udemy',
      issued: 'Jul 2021',
      credentialId: 'UC-da074e62-e60d-4514-958f-fd71a58da327',
      link: 'https://www.udemy.com/certificate/UC-da074e62-e60d-4514-958f-fd71a58da327/',
    },
    {
      group: 'selfDevelopment',
      image: '/picture/certificates/21-8-Golang.png',
      title: 'Self Confidence & Self Esteem: Confidence Via Self-Awareness',
      platform: 'Udemy',
      issued: 'Jul 2021',
      credentialId: 'UC-8b2ef0ee-390c-4bbe-8e9f-99f9dfb25b9b',
      link: 'https://www.udemy.com/certificate/UC-8b2ef0ee-390c-4bbe-8e9f-99f9dfb25b9b/',
    },
    {
      group: 'backend',
      image: '/picture/certificates/21-8-Golang.png',
      title: `Go: The Complete Developer's Guide (Golang)`,
      platform: 'Udemy',
      issued: 'Nov 2021',
      credentialId: 'UC-29b60f0b-7e7c-4e4b-8aff-09938bc2ac69',
      link: 'https://www.udemy.com/certificate/UC-29b60f0b-7e7c-4e4b-8aff-09938bc2ac69/',
    },
    {
      group: 'frontend',
      image: '/picture/certificates/21-09-Vue.png',
      title: 'Vue - The Complete Guide (w/ Router, Vuex, Composition API)',
      platform: 'Udemy',
      issued: 'Sep 2021',
      credentialId: 'UC-2203aa41-82e0-4c2b-a6b4-70ee06847aff',
      link: 'https://www.udemy.com/certificate/UC-2203aa41-82e0-4c2b-a6b4-70ee06847aff/',
    },
    {
      group: 'selfDevelopment',
      title: 'Master Cognitive Biases and Improve Your Critical Thinking',
      platform: 'Udemy',
      issued: 'Nov 2021',
      credentialId: 'UC-4c5a62c5-3b88-467d-8cde-73a372983425',
      link: 'https://www.udemy.com/certificate/UC-4c5a62c5-3b88-467d-8cde-73a372983425/',
    },
    {
      group: 'frontend',
      title: 'JavaScript (Basic)',
      image: '/picture/certificates/22-8-javascript_basic_certificate.png',
      platform: 'HackerRank',
      issued: 'Aug 2022',
      credentialId: '3e276f80f816',
      link: 'https://www.hackerrank.com/certificates/3e276f80f816',
    },
    {
      group: 'frontend',
      title: 'Rest API (Intermediate)',
      image: '/picture/certificates/22-08-Layer_4.png',
      platform: 'HackerRank',
      issued: 'Aug 2022',
      credentialId: '2a33fee55217',
      link: 'https://www.hackerrank.com/certificates/2a33fee55217',
    },
    {
      group: 'frontend',
      title: 'CSS',
      image: '/picture/certificates/22-08-Layer_8.png',
      platform: 'HackerRank',
      issued: 'Aug 2022',
      credentialId: '954a99f42f30',
      link: 'https://www.hackerrank.com/certificates/954a99f42f30',
    },
    {
      group: 'selfDevelopment',
      title: 'Problem Solving (Basic)',
      image:
        '/picture/certificates/22-08-problem_solving_basic_certificate.png',
      platform: 'HackerRank',
      issued: 'Aug 2022',
      credentialId: 'b2dfa60f8270',
      link: 'https://www.hackerrank.com/certificates/b2dfa60f8270',
    },
    {
      group: 'frontend',
      title: 'Javascript (Intermediate)',
      image: '/picture/certificates/22-09-Layer_2.png',
      platform: 'HackerRank',
      issued: 'Sep 2022',
      credentialId: '8735bf374997',
      link: 'https://www.hackerrank.com/certificates/8735bf374997',
    },
    {
      group: 'selfDevelopment',
      title: 'Problem Solving (Intermediate)',
      image: '/picture/certificates/22-09-Layer_3.png',
      platform: 'HackerRank',
      issued: 'Sep 2022',
      credentialId: '36bcbc3a0668',
      link: 'https://www.hackerrank.com/certificates/36bcbc3a0668',
    },
    {
      group: 'backend',
      title: 'SQL Basic',
      image: '/picture/certificates/22-09-sql_basic_certificate.png',
      platform: 'HackerRank',
      issued: 'Sep 2022',
      credentialId: '914b9144b28b',
      link: 'https://www.hackerrank.com/certificates/914b9144b28b',
    },
    {
      group: 'mobile',
      title: 'iOS & Swift - The Complete iOS App Development Bootcamp',
      image: '/picture/certificates/22-12-Ios_Udemy.png',
      platform: 'Udemy',
      issued: 'Dec 2022',
      credentialId: 'UC-b069ab03-c761-4cf9-bbba-21029a3910cf',
      credentialUrl:
        'https://www.udemy.com/certificate/UC-b069ab03-c761-4cf9-bbba-21029a3910cf/',
    },
    {
      group: 'mobile',
      title: 'Introduction to iOS Mobile Application Development',
      image: '/picture/certificates/23-1-Introduction_iOS.png',
      platform: 'Coursera',
      issued: 'Jan 2023',
      credentialId: 'WGZWP4WFNW9S',
      credentialUrl:
        'https://www.coursera.org/account/accomplishments/verify/WGZWP4WFNW9S',
    },
    {
      group: 'mobile',
      title: 'Belajar Fundamental Aplikasi Android',
      image: '/picture/certificates/23-03-Layer_5.png',
      platform: 'Dicoding',
      issued: 'Mar 2023',
      credentialId: '4EXGNE8GGZRL',
      credentialUrl: 'https://www.dicoding.com/certificates/4EXGNE8GGZRL',
    },
    {
      group: 'mobile',
      title: 'Belajar Membuat Aplikasi Android untuk Pemula',
      image: '/picture/certificates/23-03-Layer_9.png',
      platform: 'Dicoding',
      issued: 'Mar 2023',
      credentialId: 'ERZR069ONXYV',
      credentialUrl: 'https://www.dicoding.com/certificates/ERZR069ONXYV',
    },
    {
      group: 'mobile',
      title: 'Memulai Pemrograman Dengan Kotlin',
      image: '/picture/certificates/23-03-Layer_11.png',
      platform: 'Dicoding',
      issued: 'Mar 2023',
      credentialId: 'N9ZO41Y4YZG5',
      credentialUrl: 'https://www.dicoding.com/certificates/N9ZO41Y4YZG5',
    },
    {
      group: 'backend',
      title: 'Belajar Prinsip Pemrograman SOLID',
      image: '/picture/certificates/23-05-Layer_10.png',
      platform: 'Dicoding',
      issued: 'Jul 2023',
      credentialId: 'JLX13L94JP72',
      credentialUrl: 'https://www.dicoding.com/certificates/JLX13L94JP72',
    },
    {
      group: 'frontend',
      title: 'Belajar Dasar UX Design',
      image: '/picture/certificates/23-05-Layer_12.png',
      platform: 'Dicoding',
      issued: 'Jul 2023',
      credentialId: 'L4PQGG7WOZO1',
      credentialUrl: 'https://www.dicoding.com/certificates/L4PQGG7WOZO1',
    },
    {
      group: 'mobile',
      title: 'Belajar Pengembangan Aplikasi Android Intermediate',
      image: '/picture/certificates/23-06-Layer_1.png',
      platform: 'Dicoding',
      issued: 'Jul 2023',
      credentialId: '81P234OE8XOY',
      credentialUrl: 'https://www.dicoding.com/certificates/81P234OE8XOY',
    },
    {
      group: 'frontend',
      title: 'Belajar Membuat Front-End Web untuk Pemula',
      image: '/picture/certificates/23-11-Frontend.png',
      platform: 'Dicoding',
      issued: 'Nov 2023',
      credentialId: 'GRX526NNKX0M',
      credentialUrl: 'https://www.dicoding.com/certificates/GRX526NNKX0M',
    },
    {
      group: 'frontend',
      title: 'Belajar Dasar Perograman JavaScript',
      image: '/picture/certificates/23-11-Javascript.png',
      platform: 'Dicoding',
      issued: 'Nov 2023',
      credentialId: 'KEXLL6Y0WXG2',
      credentialUrl: 'https://www.dicoding.com/certificates/KEXLL6Y0WXG2',
    },
    {
      group: 'frontend',
      title: 'Belajar Dasar Pemrograman Web',
      image: '/picture/certificates/23-11-Progweb.png',
      platform: 'Dicoding',
      issued: 'Nov 2023',
      credentialId: '53XE47MRKZRN',
      credentialUrl: 'https://www.dicoding.com/certificates/53XE47MRKZRN',
    },
    {
      group: 'frontend',
      title: 'Belajar Membuat Aplikasi Web dengan React',
      image: '/picture/certificates/23-11-React.png',
      platform: 'Dicoding',
      issued: 'Nov 2023',
      credentialId: '53XE48NQKZRN',
      credentialUrl: 'https://www.dicoding.com/certificates/53XE48NQKZRN',
    },
  ];

  return (
    <>
      <div className='w-screen' id='certificate'>
        <div className='mx-auto my-16 max-w-screen-2xl px-12'>
          <div className='flex w-full flex-col items-center justify-center gap-2'>
            <span className='text-2xl font-bold text-primary'>
              I Love Learning.
            </span>
            <h1 className='text-5xl font-extrabold text-white'>Certificate</h1>
          </div>

          <div className='mt-8'>
            <div className='sm:hidden'>
              <label htmlFor='tabs' className='sr-only'>
                Select a tab
              </label>
              <select
                id='tabs'
                className='block w-full rounded-lg border bg-[#1E2023] p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                defaultValue={tab}
                onChange={(e) => setTab(e.target.value)}
              >
                {tabs.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <ul className='hidden rounded-lg text-center text-sm font-medium text-gray-500 shadow dark:divide-gray-700 dark:text-gray-400 sm:flex'>
              {tabs.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={
                      `flex-1 cursor-pointer px-6 py-4` +
                      (tab === item.id
                        ? ' border-b-2 border-primary text-primary'
                        : ' hover:text-primary')
                    }
                    onClick={() => setTab(item.id)}
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className='mt-12 grid w-full grid-cols-3 justify-items-center gap-8'>
            {data
              .filter((item) => item.group === tab)
              .map((item) => (
                <Link
                  href={item.link ? item.link : '#'}
                  target='_blank'
                  rel='noreferrer noopener'
                  className='max-w-sm rounded-lg bg-[#1E2023] p-8 shadow-xl duration-300 hover:-translate-y-2 hover:bg-[#1E2023]/80'
                  key={item.title}
                >
                  <div className='flex flex-col gap-5'>
                    <div className='flex self-center'>
                      <Image
                        src={
                          item.image
                            ? item.image
                            : '/picture/certificates/21-07-Layer_6.png'
                        }
                        alt={item.title}
                        width={300}
                        height={300}
                      />
                    </div>
                    <h1 className='text-justify text-xl font-bold text-white'>
                      {item.title}
                    </h1>
                    <div className='align-center grid w-full grid-cols-2 justify-center'>
                      <div className='flex flex-col gap-2'>
                        <span className='text-gray-400'>Platform</span>
                        <span className='text-white'>{item.platform}</span>
                      </div>
                      <div className='flex flex-col gap-2'>
                        <span className='text-gray-400'>Issued</span>
                        <span className='text-white'>{item.issued}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Certificate;
