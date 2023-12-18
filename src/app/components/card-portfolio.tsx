import Image from 'next/image';
import Link from 'next/link';

function CardPortfolio(props: any) {
  const {
    image,
    title,
    description,
    tech,
    associated,
    period,
    link,
    platform,
  } = props;

  const icons = [
    {
      id: 'vue',
      icon: '/picture/logo/vue.svg',
      name: 'Vue JS',
    },
    {
      id: 'nuxt',
      icon: '/picture/logo/nuxt.svg',
      name: 'Nuxt JS',
    },
    {
      id: 'javascript',
      icon: '/picture/logo/javascript.svg',
      name: 'Javascript',
    },
    {
      id: 'flowbite',
      icon: '/picture/logo/flowbite.png',
      name: 'Flowbite',
    },
    {
      id: 'tailwind',
      icon: '/picture/logo/tailwind.svg',
      name: 'Tailwind',
    },
    {
      id: 'bootstrap',
      icon: '/picture/logo/bootstrap.svg',
      name: 'Bootstrap',
    },
    {
      id: 'vuetify',
      icon: '/picture/logo/vuetify.svg',
      name: 'Vuetify',
    },
    {
      id: 'android-studio',
      icon: '/picture/logo/android-studio.svg',
      name: 'Android Studio',
    },
    {
      id: 'firebase',
      icon: '/picture/logo/firebase.svg',
      name: 'Firebase',
    },
    {
      id: 'facebook-pixel',
      icon: '/picture/logo/facebook-pixel.svg',
      name: 'Pixel',
    },
    {
      id: 'seo',
      icon: '/picture/logo/seo.png',
      name: 'SEO',
    },
    {
      id: 'api',
      icon: '/picture/logo/rest-api.svg',
      name: 'REST API',
    },
    {
      id: 'laravel',
      icon: '/picture/logo/laravel.svg',
      name: 'Laravel',
    },
    {
      id: 'gtm',
      icon: '/picture/logo/gtm.svg',
      name: 'GTM',
    },
    {
      id: 'composition-api',
      icon: '/picture/logo/composition-api.png',
      name: 'Composition API',
    },
    {
      id: 'pinia',
      icon: '/picture/logo/pinia.svg',
      name: 'Pinia',
    },
    {
      id: 'tensorflow',
      icon: '/picture/logo/tensorflow.svg',
      name: 'Tensorflow',
    },
    {
      id: 'kotlin',
      icon: '/picture/logo/kotlin.svg',
      name: 'Kotlin',
    },
    {
      id: 'flutter',
      icon: '/picture/logo/flutter.svg',
      name: 'Flutter',
    },
    {
      id: 'onesignal',
      icon: '/picture/logo/onesignal.png',
      name: 'Onesignal',
    },
    {
      id: 'crashlytics',
      icon: '/picture/logo/crashlytics.svg',
      name: 'Crashlytics',
    },
    {
      id: 'mysql',
      icon: '/picture/logo/mysql.svg',
      name: 'MySQL',
    },
    {
      id: 'php',
      icon: '/picture/logo/php.svg',
      name: 'PHP',
    },
    {
      id: 'postgres',
      icon: '/picture/logo/postgresql.svg',
      name: 'PostgreSQL',
    },
    {
      id: 'android-studio',
      icon: '/picture/logo/android-studio.svg',
      name: 'Android Studio',
    },
    {
      id: 'gcp',
      icon: '/picture/logo/gcp.png',
      name: 'GCP',
    },
    {
      id: 'google-maps-api',
      icon: '/picture/logo/google-maps.svg',
      name: 'Google Maps API',
    },
    {
      id: 'sql-server',
      icon: '/picture/logo/sql-server.svg',
      name: 'SQL Server',
    },
  ];

  return (
    <Link key={title} href={link ?? '#'} target='_blank' className='h-full'>
      <div className='h-full cursor-pointer rounded-lg bg-[#1E2023] p-12 shadow-xl duration-300 hover:-translate-y-2 hover:bg-[#1E2023]/80 '>
        <div className='flex flex-col gap-5'>
          <div className='flex'>
            <Image
              src={image}
              alt={title}
              width={600}
              height={450}
              className='h-[420px] w-full rounded-lg object-contain'
            />
          </div>
          <h1 className='text-2xl font-bold text-white'>{title} </h1>

          <div>
            <span className='text-base font-semibold text-white'>{period}</span>
          </div>

          <div className='flex flex-col gap-2'>
            <span className='text-base font-semibold text-white'>
              {associated}
            </span>
          </div>

          <div className='inline-flex h-full gap-2'>
            {tech.map((item: any) => {
              return (
                <div
                  key={item.title}
                  className='align-center flex h-auto w-[50px] cursor-pointer flex-col items-center justify-center rounded-md bg-[#292b2f] p-2 shadow-xl duration-300 hover:-translate-y-2 hover:bg-[#1E2023]/80'
                >
                  <Image
                    src={icons.find((i) => i.id === item)?.icon ?? ''}
                    alt={item.title}
                    width={25}
                    height={25}
                    className='text-center'
                  />
                  <span className='mt-1 text-center text-[0.4rem] text-xs'>
                    {icons.find((i) => i.id === item)?.name ?? ''}
                  </span>
                </div>
              );
            })}
          </div>

          <p className='text-justify text-gray-400'>{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default CardPortfolio;
