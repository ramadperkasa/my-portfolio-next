function NavbarGettingStarted() {
  return (
    <>
      <div className='flex space-x-3 rtl:space-x-reverse md:order-2 md:space-x-0'>
        <a
          type='button'
          href='https://drive.google.com/file/d/1DMtkbN90udMTAAH69kKb-dp-eseNCLyX/view?usp=sharing'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-primary hover:bg-primary/95 focus:ring-primary/20 dark:bg-primary/60 dark:hover:bg-primary dark:focus:ring-primary/hover:bg-primary/95 inline-flex content-center items-center gap-2 rounded-lg px-4  py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='h-6 w-6'
          >
            <path d='M12 1.5a.75.75 0 01.75.75V7.5h-1.5V2.25A.75.75 0 0112 1.5zM11.25 7.5v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z' />
          </svg>
          Download
        </a>
        <button
          data-collapse-toggle='navbar-sticky'
          type='button'
          className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
          aria-controls='navbar-sticky'
          aria-expanded='false'
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='h-5 w-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default NavbarGettingStarted;
