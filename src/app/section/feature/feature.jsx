import Image from 'next/image';

function Feature() {
  const data = [
    {
      icons: '/picture/feature/frontend.png',
      title: 'Develop Website',
      desc: `This involves creating the visual elements and user interface of a website using languages like HTML, CSS, and JavaScript. It's about translating designs into functional web pages.`,
    },
    {
      icons: '/picture/feature/responsive.png',
      title: 'Responsive Design',
      desc: 'This refers to creating websites that adapt and display well across various devices and screen sizes, ensuring a seamless user experience on desktops, tablets, and mobile phones.',
    },
    {
      icons: '/picture/feature/api.png',
      title: 'Integrate API',
      desc: 'Integrating APIs involves connecting your website to external services or platforms, allowing for functionalities like fetching data from databases, social media integrations, payment gateways, etc.',
    },
    {
      icons: '/picture/feature/ux.png',
      title: 'Convert Design to Code',
      desc: `Taking a design concept (such as from a graphic designer or UI/UX team) and turning it into a functional website using programming languages and frameworks while maintaining the design's integrity.`,
    },
    {
      icons: '/picture/feature/seo.png',
      title: 'Search Engine Optimization (SEO)',
      desc: 'This involves optimizing a website to improve its visibility and ranking on search engines like Google. It includes strategies like keyword optimization, meta tags, content structuring, and site speed improvement.',
    },
    {
      icons: '/picture/feature/maintain.png',
      title: 'Maintainance and Optimization',
      desc: `Beyond the initial development, this involves ongoing tasks such as fixing bugs, updating content, ensuring security measures, and optimizing the site's performance for better user experience and speed.`,
    },
  ];
  return (
    <>
      <div className='w-screen' id='feature'>
        <div className=' mx-auto my-16 max-w-screen-2xl px-12'>
          <div className='flex flex-col gap-2'>
            <span className='text-2xl font-bold text-primary'>Feature</span>
            <h1 className='text-5xl font-extrabold text-white'>
              What Can I Do
            </h1>
          </div>

          <div className='mt-12 grid grid-cols-3 gap-12'>
            {data.map((item, i) => (
              <div
                key={i}
                className='max-w-sm rounded-lg   bg-[#1E2023] px-10 py-12 shadow-xl duration-300 hover:-translate-y-2 hover:bg-[#1E2023]/80'
              >
                <div className='flex flex-col gap-5'>
                  <div className='flex'>
                    <Image src={item.icons} alt='icon' width={75} height={75} />
                  </div>
                  <h1 className='text-2xl font-bold text-white'>
                    {item.title}
                  </h1>
                  <p className='text-justify text-gray-400'>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Feature;
