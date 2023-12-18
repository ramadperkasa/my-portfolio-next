function Timeline(props: any) {
  return (
    <li className='mb-10 ms-10'>
      <span className='absolute -start-3 mt-4 flex h-6 w-6 items-center justify-center rounded-full bg-red-100 ring-8 ring-white dark:bg-blue-900 dark:ring-white'>
        <svg
          className='h-2.5 w-2.5 text-primary '
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 20 20'
        >
          <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
        </svg>
      </span>

      {props.children}
    </li>
  );
}

export default Timeline;
