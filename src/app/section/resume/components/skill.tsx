import Image from 'next/image';
import { useEffect, useState } from 'react';
import ScreenSize from '../../../../utils/screen-size';

function Skill() {
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
    {
      id: 'angular',
      icon: '/picture/logo/angular.svg',
      name: 'Angular',
    },
    {
      id: 'react',
      icon: '/picture/logo/react.svg',
      name: 'React',
    },
    {
      id: 'next',
      icon: '/picture/logo/next.svg',
      name: 'Next JS',
    },
    {
      id: 'nest',
      icon: '/picture/logo/nest.svg',
      name: 'Nest JS',
    },
    {
      id: 'node',
      icon: '/picture/logo/node.svg',
      name: 'Node JS',
    },
    {
      id: 'swift',
      icon: '/picture/logo/swift.svg',
      name: 'Swift',
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(ScreenSize.isMobile());
  }, []);

  return (
    <>
      <div className="p-4">
        <h3 className="dark: mb-2 text-2xl  font-bold text-white">Skill</h3>
      </div>

      <div className="">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {icons.map((item) => {
            return (
              <div
                className="align-center flex cursor-pointer flex-col items-center justify-center gap-3 rounded-md bg-[#292b2f] p-2 py-8 shadow-xl duration-300 hover:-translate-y-2 hover:bg-[#1E2023]/80"
                key={item.id}
              >
                <Image
                  src={item.icon}
                  width={isMobile ? 30 : 50}
                  height={isMobile ? 30 : 50}
                  alt={item.name}
                  className="object-contain"
                />
                <span className="pt-2 w-full text-center text-white text-xs md:text-base">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Skill;
