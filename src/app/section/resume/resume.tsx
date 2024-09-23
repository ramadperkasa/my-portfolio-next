'use client';

import Experience from './components/experience';
import Education from './components/education';
import Skill from './components/skill';
import Volunteering from './components/volunteering';

import React, { useState } from 'react';

function Resume() {
  const education = [
    {
      id: '1',
      title: 'Bachelor of Computer Science, Information Technology',
      subtitle: 'Universitas Kebangsaan Republik Indonesia',
      date: '2019 - 2023',
    },
    {
      id: '2',
      title: 'Mobile Development Learning Path',
      subtitle:
        'Bangkit Academy 2023 led by Google, Tokopedia, Gojek & Traveloka',
      date: '2023-01 - 2023-07',
    },
    {
      id: '3',
      title: 'High School',
      subtitle: 'SMK Negeri 11 Bandung - Software Engineering',
      date: '2016 - 2019',
    },
  ];

  const experience = [
    {
      id: '1',
      position: 'Freelance Front-End Software Developer',
      company: 'Wakaf Salman ITB',
      date: '2023-06 - Current',
      location: 'Bandung',
      description:
        'Wakaf salman ITB is an Islamic nonprofit institution, dedicated proactively to fulfilling its primary mandate as a trustee or administrator of the endowments of the community, aimed at supporting the advancement of civilization through philanthropic endeavors.',
      detail: [
        'Improve Search Engine Optimization (SEO)',
        'Build, develop and improve an application system.',
        'Improve website performance and best practice.',
      ],
      technology: ['Vue JS', 'Nuxt JS', 'Javascript', 'Laravel', 'PHP'],
    },
    {
      id: '2',
      position: 'Front-End Software Developer',
      company: 'PT Global Loyalty Indonesia (Alfagift)',
      date: '2021-12 - 2023-08',
      location: 'Tangerang',
      description:
        'Working on Global Loyalty Indonesia as an outsource team from BTS.id, Global Loyalty Indonesia is engaged in the development of CRM. This company is a subsidiary of Sumber Alfaria Trijaya PT (Alfamart).',
      detail: [
        'Develop over 3 products using Vue JS, Nuxt JS, and JQuery',
        'Reviewed project specifications and designed technology solutions that met or exceeded performance expectations.',
        'Worked with software development and testing team members to design and develop robust solutions to meet client requirements for functionality, scalability, and performance.',
        'Collaborated with fellow engineers to evaluate software and hardware interfaces.',
      ],
      technology: [
        'Vue JS',
        'Nuxt JS',
        'React JS',
        'Javascript',
        'JQuery',
        'Java Spring Boot',
        'REST API',
      ],
    },
    {
      id: '3',
      position: 'Senior Front-End Developer',
      company: 'PT Intersolusi Teknologi Asia',
      date: '2021-03 - 2023-08',
      location: 'Bandung',
      description:
        'BTS.id is a Software House Company that provides Android, IOS Application Development Services, E-Commerce Websites, and Custom Software.',
      detail: [
        'Develop, maintain, and optimize applications.',
        'Evaluating code to ensure it is valid, properly structured, meets standards, and is compatible with browsers, devices, or operating systems.',
        'Researching, learning, and evaluating new software.',
        'Evaluated and improved development work of other developers team, working to provide training, constructive criticism, and knowledge transfer.',
        'Coordinated efficient large-scale software deployments.',
        'Collaborated team environment to produce high-quality programs and applications.',
      ],
      technology: ['Vue JS', 'Nuxt JS', 'REST API', 'Flutter'],
    },
    {
      id: '4',
      position: 'Full-Stack Developer',
      company: 'PT Distribution Point International',
      date: '2019-03 - 2021-03',
      location: 'Bandung',
      description:
        'Dipointer is Software House Company that provides Android, IOS Application Development Services, E-Commerce Websites, and Custom Software.',
      detail: [
        'Collaborated with fellow engineers to evaluate software and hardware interfaces.',
        'Build, develop and improve application system',
        'Make system analysis',
        'Design and maintain Database',
        'Participate in project meetings with teams and clients',
        'Review and Debug app to make sure all functions are working properly',
      ],
      technology: [
        'Laravel',
        'Vue JS',
        'React JS Nuxt JS',
        'Flutter',
        'REST API',
      ],
    },
  ];

  const volunteering = [
    {
      id: '1',
      position: 'Project Manager',
      company: 'SelepasSma (Volunteer)',
      date: '2021-07 - 2021-11',
      location: 'Jakarta',
      description:
        'Selepas SMA is a caring mentor who helps high school students who lack privilege be equally educated, by providing guidance related to college.',
      detail: [
        'Developed and initiated projects, managed costs, and monitored performance.',
        'Planning and overseeing projects to ensure they are completed in timely fashion',
        'Arrange meeting to update progress',
        'Allocating Work to Teams',
        'Forming Effective Team Communication',
      ],
      technology: ['Vue JS', 'Nuxt JS', 'Javascript', 'Laravel', 'PHP'],
    },
  ];

  const data = [
    {
      id: 'experience',
      title: 'Experience',
      component: <Experience experience={experience} />,
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="me-2 h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
            clipRule="evenodd"
          />
          <path
            d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
        </svg>
      ),
    },
    {
      id: 'education',
      title: 'Education',
      component: <Education education={education} />,
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="me-2 h-4 w-4"
        >
          <path
            d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
          <path
            d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
          <path
            d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
        </svg>
      ),
    },
    {
      id: 'volunteering',
      title: 'Volunteering',
      component: <Volunteering volunteering={volunteering} />,
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="me-2 h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
            clipRule="evenodd"
          />
          <path
            d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
        </svg>
      ),
    },
    {
      id: 'skill',
      title: 'Skill',
      component: <Skill />,
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="me-2 h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  const [active, setActive] = useState('experience');

  const skill = [
    {
      id: '1',
      title: 'Vue JS',
      percentage: '90',
    },
    {
      id: '2',
      title: 'Nuxt JS',
      percentage: '90',
    },
    {
      id: '3',
      title: 'React JS',
      percentage: '80',
    },
    {
      id: '4',
      title: 'Flutter',
      percentage: '80',
    },
    {
      id: '5',
      title: 'Laravel',
      percentage: '80',
    },
    {
      id: '6',
      title: 'Javascript',
      percentage: '80',
    },
    {
      id: '7',
      title: 'Java Spring Boot',
      percentage: '80',
    },
    {
      id: '8',
      title: 'REST API',
      percentage: '80',
    },
    {
      id: '9',
      title: 'PHP',
      percentage: '80',
    },
  ];
  return (
    <div className="min-h-screen w-screen" id="resume">
      <div className="h-full">
        <div className="mx-auto h-full max-w-screen-2xl px-6 md:px-12 py-16">
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <span className="text-2xl font-bold text-primary">
              My Journey, My Story.
            </span>
            <h1 className="text-5xl font-extrabold text-white">Resume</h1>
          </div>

          <div className="h-full py-12 md:flex">
            <ul className="flex-column space-y h-full space-y-4 text-sm font-medium md:mb-0 md:me-4" id="resume-tab"
                data-tabs-toggle="#resume-tab-content" data-tabs-active-classes="bg-primary text-white"
                data-tabs-inactive-classes="hover:bg-[#1E2023]/90 hover:text-gray-500 dark:bg-gray-800 dark:hover:bg-gray-700"
                role="tablist">
              {data.map((item) => {
                return (
                  <li key={'data' + item.id} role="presentation">
                    <button
                      onClick={() => setActive(item.id)}
                      className={
                        `inline-flex w-full cursor-pointer items-center rounded-lg px-4 py-3` +
                        (active === item.id
                          ? ' bg-primary text-white'
                          : ' hover:bg-[#1E2023]/90 hover:text-gray-500 dark:bg-gray-800 dark:hover:bg-gray-700')
                      }
                    >
                      <div
                        className={
                          active === item.id ? 'text-white' : 'text-gray-500'
                        }
                      >
                        {item.icons}
                      </div>
                      {item.title}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div
              className="text-medium h-full w-full overflow-auto rounded-lg bg-[#1E2023] p-6 text-gray-500 dark:bg-gray-800">
              {data.find((item) => item.id === active)?.component || 'No data'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
