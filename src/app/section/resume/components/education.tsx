function Education(props: any) {
  return (
    <>
      <div className='p-4'>
        <h3 className='dark: mb-2 text-2xl font-bold text-white'>Education</h3>
      </div>

      <div className='ml-8 mt-8'>
        <ol className='relative border-s border-gray-200 dark:border-gray-700'>
          {props.education.map((item: any) => {
            return (
              <li className='mb-10 ms-10' key={item}>
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

                <div className='flex flex-col gap-5'>
                  <h2 className='text-xl font-semibold text-white'>
                    {item.subtitle}
                  </h2>
                  <h3 className='text-lg font-semibold text-white'>
                    {item.title}
                  </h3>
                  <time className='mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-[#abaeb3]'>
                    {item.date}
                  </time>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}

export default Education;
