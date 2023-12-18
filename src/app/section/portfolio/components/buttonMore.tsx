import Link from 'next/link';

function ButtonMore() {
  return (
    <Link
      href='/portfolio'
      className='align-center hover:bg-[#1E2023]/85 mx-auto inline-flex w-full max-w-lg justify-center rounded-lg bg-[#1E2023] p-3 px-8 shadow-xl duration-300 hover:-translate-y-2'
    >
      <span className='font-bold text-primary'>Discover More Portfolio</span>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='h-6 w-6 text-primary'
      >
        <path
          fillRule='evenodd'
          d='M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z'
          clipRule='evenodd'
        />
      </svg>
    </Link>
  );
}

export default ButtonMore;
