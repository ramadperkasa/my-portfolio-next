import Timeline from '../../../components/timeline';

function Experience(props: any) {
  return (
    <div className='p-4'>
      <h3 className='dark: mb-2 text-2xl font-bold text-white'>Experience</h3>

      <div className='ml-8 mt-8'>
        <ol className='relative border-s border-gray-200 dark:border-gray-700'>
          {props.experience.map((item: any) => {
            return (
              <Timeline item={item} key={`timeline-${item.id}`}>
                <h2>
                  <a
                    href={item.link}
                    className='text-base font-semibold text-white dark:text-white md:text-lg'
                  >
                    {item.company}
                  </a>
                </h2>
                <h3 className='mb-1 text-base font-semibold text-white dark:text-white md:text-lg'>
                  {item.position}
                </h3>
                <h3 className='mb-1 text-base font-semibold text-white dark:text-white md:text-lg'>
                  {item.title}
                </h3>
                <time className='mb-2 block text-xs font-normal leading-none text-gray-400 dark:text-[#abaeb3] md:text-sm'>
                  {item.date}
                </time>
                <p className='text-sm font-normal text-[#abaeb3] md:text-base'>
                  {item.description}
                </p>

                {
                  <ul className='list-inside list-disc text-sm font-normal text-[#abaeb3] md:text-base'>
                    {item.detail.map((item: any) => {
                      return <li key={'detail' + item}>{item}</li>;
                    })}
                  </ul>
                }

                <div className='mt-5 text-sm text-[#abaeb3] md:text-base'>
                  <span>Technology : </span>
                  {item.technology.map((item: any) => {
                    return (
                      <span className='ml-2' key={'technology' + item}>
                        {item}
                      </span>
                    );
                  })}
                </div>
              </Timeline>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default Experience;
