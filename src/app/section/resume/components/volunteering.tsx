import Timeline from '../../../components/timeline';

function Volunteering(props: any) {
  return (
    <>
      <div className="p-4">
        <h3 className="dark: mb-2 text-2xl font-bold text-white">
          Volunteering
        </h3>

        <div className="ml-8 mt-8">
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {props.volunteering.map((item: any) => {
              return (
                <Timeline item={item} key={item}>
                  <h2>
                    <a
                      href={item.link}
                      className="text-base md:text-lg font-semibold text-white dark:text-white"
                    >
                      {item.company}
                    </a>
                  </h2>
                  <h3 className="mb-1 text-base md:text-lg font-semibold text-white dark:text-white">
                    {item.position}
                  </h3>
                  <h3 className="mb-1 text-base md:text-lg font-semibold text-white dark:text-white">
                    {item.title}
                  </h3>
                  <time
                    className="mb-2 block text-xs md:text-sm font-normal leading-none text-gray-400 dark:text-[#abaeb3]">
                    {item.date}
                  </time>
                  <p className="text-sm md:text-base font-normal text-[#abaeb3]">
                    {item.description}
                  </p>

                  {
                    <ul className="list-inside list-disc text-base font-normal text-[#abaeb3]">
                      {item.detail.map((item: any) => {
                        return <li key={item}>{item}</li>;
                      })}
                    </ul>
                  }

                  <div className="mt-5  text-[#abaeb3]">
                    <span>Technology : </span>
                    {item.technology.map((item: any) => {
                      return (
                        <span className="ml-2" key={item}>
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
    </>
  );
}

export default Volunteering;
