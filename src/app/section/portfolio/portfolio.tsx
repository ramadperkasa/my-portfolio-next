import CardPortfolio from '../../components/card-portfolio';
import ButtonMore from './components/buttonMore';

function Portfolio() {
  const data = [
    {
      image: '/picture/portfolios/Salman Hospital.png',
      title: 'Wakaf Salman Hospital Landing Page',
      period: 'Jul 2022 - Aug 2023',
      associated: 'Wakaf Salman ITB',
      tech: [
        'vue',
        'nuxt',
        'javascript',
        'facebook-pixel',
        'seo',
        'tailwind',
        'flowbite',
      ],
      platform: 'Web',
      link: 'https://hospital.wakafsalman.or.id/',
      description:
        'The Wakaf Salman Hospital Landing Page is a web page designed to provide essential information about a hospital project initiated by the Wakaf Salman Foundation. This landing page serves a dual purpose: to inform visitors about the hospital, its construction progress, and to provide a platform for donations.',
    },
    {
      image: '/picture/portfolios/Salman LP.png',
      title: 'Wakaf Salman Landing Page',
      period: 'Jul 2022 - Aug 2023',
      associated: 'Wakaf Salman ITB',
      tech: ['vue', 'nuxt', 'bootstrap', 'seo', 'laravel', 'php'],
      platform: 'Web',
      link: 'https://wakafsalman.or.id/',
      description:
        'The Wakaf Salman Landing Page is a web page created to educate visitors about the Wakaf Salman program. This program may be related to a charity, foundation, or organization that promotes endowments as a means to help those in need. This page has two main purposes: to provide comprehensive information about the Wakaf Salman program and to give visitors a way to make donations.',
    },
    {
      image: '/picture/portfolios/Alfagift.png',
      title: 'Alfagift - Online Ordering Application',
      period: 'Jul 2022 - Aug 2023',
      associated: 'PT Global Loyalty Indonesia',
      tech: ['vue', 'nuxt', 'gtm', 'api', 'bootstrap'],
      platform: 'Web',
      link: 'https://alfagift.id/',
      description:
        'The Web Commerce project for Alfagift aims to establish a robust and user-friendly online platform that facilitates the seamless buying and selling of Alfagift products. The project focuses on developing an e-commerce website that enhances the customer experience, expands market reach, and drives sales for Alfagift.',
    },
    {
      image: '/picture/portfolios/APO.png',
      title: 'Alfagift - Web Commerce',
      period: 'Jul 2022 - Aug 2023',
      associated: 'PT Global Loyalty Indonesia',
      tech: ['vue', 'nuxt', 'gtm', 'bootstrap', 'api'],
      platform: 'Web',
      link: 'https://alfagift.id/',
      description:
        'The Alfagift Online Ordering Application project is designed to provide a convenient and efficient way for customers to place online orders for products offered by Alfagift. The primary objective of this application is to assist store staff in monitoring and managing online orders effectively.',
    },
    {
      image: '/picture/portfolios/Joven.png',
      title: 'Joven - Crowd Funding Application',
      period: 'Jul 2022 - Aug 2023',
      associated: 'PT Intersolusi Teknologi Asia',
      tech: ['vue', 'composition-api', 'api', 'pinia', 'vuetify'],
      platform: 'Web',
      link: null,
      description:
        'The crowdfunding project aims to create an online platform that connects passionate individuals, innovators, and entrepreneurs with potential investors and supporters. The project focuses on facilitating the crowdfunding process to help bring innovative ideas, projects, and initiatives to life.',
    },
    {
      image: '/picture/portfolios/Soilit.png',
      title: 'SoilIt! - Soil Color Detection App',
      period: 'Jul 2022 - Aug 2023',
      associated:
        'Bangkit Academy 2023 led by Google, Tokopedia, Gojek & Traveloka',
      tech: [
        'kotlin',
        'android-studio',
        'tensorflow',
        'firebase',
        'gcp',
        'laravel',
        'api',
      ],
      platform: 'Mobile',
      link: null,
      description:
        'Soilit is an Android application that utilizes machine learning and cloud computing to detect soil color and determine soil quality. The application aims to provide an easy and affordable way for farmers, gardeners, or the general public to assess soil quality without the need for expensive equipment or laboratory analysis. The application will use image processing techniques to extract color features from soil images taken by the smartphone camera and then use machine learning algorithms to classify the soil based on its fertility.',
    },
    {
      image: '/picture/portfolios/Tetrik.png',
      title: 'Tetrik - Electric Vehicle Charging App',
      period: 'Jul 2022 - Aug 2023',
      associated: 'PT Intersolusi Teknologi Asia',
      tech: [
        'flutter',
        'firebase',
        'google-maps-api',
        'crashlytics',
        'onesignal',
      ],
      platform: 'Mobile',
      link: null,
      description:
        'Application to simplify electric vehicle charging service with the main feature of a charging station. The features in this application are charging reservations, on the spot transactions, and finding nearby charging facilities.',
    },
    {
      image: '/picture/portfolios/Areakids.png',
      title: 'Areakids  - Childrens Apparel E-Commerce',
      period: 'Jul 2022 - Aug 2023',
      associated: 'Codev (Code Developer)',
      tech: ['vue', 'laravel', 'api', 'mysql', 'vuetify'],
      platform: 'Web',
      link: null,
      description:
        'The Areakids Childrens Apparel E-Commerce project is an online platform developed for the purpose of selling childrens clothing and accessories. This e-commerce website is dedicated to providing a user-friendly, secure, and engaging shopping experience for parents and guardians seeking high-quality clothing for their children.',
    },
    {
      image: '/picture/portfolios/BBK Monitoring.png',
      title: 'Ceramic Center Service Monitoring Dashboard',
      period: 'Jul 2022 - Aug 2023',
      associated: 'PT Distribution Point International',
      tech: ['laravel', 'api', 'vuetify', 'nuxt', 'vue', 'postgres'],
      platform: 'Web',
      link: 'https://www.bbk.go.id/',
      description:
        'The Ceramic Center Service Monitoring Dashboard project involves the development of a digital platform to monitor and manage services at the Ceramic Center, which is also known as "Balai Besar Keramik." This dashboard is designed to provide real-time insights and data analysis related to the services and operations within the Ceramic Center.',
    },
    {
      image: '/picture/portfolios/ABN.png',
      title: 'ABN Company Profile with Healthcare Equipment Catalog',
      period: 'Jul 2022 - Aug 2023',
      associated: 'PT Distribution Point International',
      tech: ['laravel', 'api', 'vuetify', 'nuxt', 'vue', 'mysql'],
      platform: 'Web',
      link: 'https://abnmedical.com/',
      description:
        'The ABN Company Profile with Healthcare Equipment Catalog project involves the creation of a digital document or web-based platform that provides comprehensive information about the ABN company, including its background, mission, and vision. Additionally, it includes an extensive catalog of healthcare equipment and related products offered by PT Sugih Instrument Abadi, namely ABN.',
    },
    {
      image: '/picture/portfolios/BBB.png',
      title: 'BBB Company Human Resource Management System (HRMS)',
      period: 'Jul 2022 - Aug 2023',
      associated: 'PT Distribution Point International',
      tech: ['laravel', 'api', 'vuetify', 'nuxt', 'vue', 'sql-server'],
      platform: 'Web',
      link: null,
      description:
        'The BBB Company Human Resource Management System (HRMS) project involves the development of a digital system that streamlines and automates HR processes, with a primary focus on employee payroll and attendance management. This system is designed to enhance efficiency and accuracy in managing human resources within BBB Company.',
    },
    {
      image: '/picture/portfolios/BBK SPSS.png',
      title: 'Ceramic Center Certification Management System',
      period: 'Jul 2022 - Aug 2023',
      associated: 'PT Distribution Point International',
      tech: ['laravel', 'api', 'vuetify', 'nuxt', 'vue', 'postgres'],
      platform: 'Web',
      link: null,
      description:
        'The Ceramic Center Service Monitoring Dashboard project involves the development of a digital platform to monitor and manage services at the Ceramic Center, which is also known as "Balai Besar Keramik." This dashboard is designed to provide real-time insights and data analysis related to the services and operations within the Ceramic Center.',
    },
    {
      image: '/picture/portfolios/Kemala Bhayangkari.png',
      title:
        'SMP Kemala Bhayangkari Bandung New Student Admission (Online PPDB) System',
      period: 'Jul 2022 - Aug 2023',
      associated: 'PT Distribution Point International',
      tech: ['laravel', 'api', 'vuetify', 'nuxt', 'vue', 'mysql'],
      platform: 'Web',
      link: null,
      description:
        'The Kemala Bhayangkari New Student Admission (Online PPDB) System project is a digital platform developed to manage and streamline the process of admitting new students to Kemala Bhayangkari Middle School in Bandung. This online system is designed to provide an efficient and user-friendly experience for parents and guardians who wish to enroll their children in the school.',
    },
    {
      image: '/picture/portfolios/bhayangkari.png',
      title: 'SMK kemala Bhayangkari Bandung School Profile',
      period: 'Jul 2022 - Aug 2023',
      associated: 'PT Distribution Point International',
      tech: ['laravel', 'api', 'vuetify', 'nuxt', 'vue', 'mysql'],
      platform: 'Web',
      link: null,
      description: `The SMP Kemala Bhayangkari Bandung School Profile project aims to create a comprehensive and informative digital document or web-based platform that provides an overview of SMP Kemala Bhayangkari Middle School in Bandung. This profile showcases the school's background, vision, mission, and its commitment to providing quality education.`,
    },
    {
      image: '/picture/portfolios/maaimaskuub.png',
      title: 'CSR Website of Mosques Maaimaskuub',
      period: 'Jul 2022 - Aug 2023',
      associated: 'PT Distribution Point International',
      tech: ['laravel', 'api', 'vuetify', 'nuxt', 'vue', 'mysql'],
      platform: 'Web',
      link: null,
      description: `The CSR Website of Mosques Maaimaskuub project aims to create a detailed and informative profile of the Maaimaskuub Mosque in the context of its Corporate Social Responsibility (CSR) initiatives. This profile serves as a document or web-based platform that provides a comprehensive overview of the mosque's background, activities, and its commitment to community development.`,
    },
    {
      image: '/picture/portfolios/Aspebtindo.png',
      title: 'Aspebtindo Company Profile',
      period: 'Jul 2022 - Aug 2023',
      associated: 'PT Distribution Point International',
      tech: ['laravel', 'api', 'vuetify', 'vue', 'mysql'],
      platform: 'Web',
      link: 'https://www.aspebtindo.org/',
      description:
        'The Aspebtindo Company Profile - Broker Certification Services project involves the creation of a comprehensive document or web-based platform that provides an in-depth overview of Aspebtindo, a company specializing in the certification of brokers and professionals in the financial industry.',
    },
    {
      image: '/picture/portfolios/SMKN 13.png',
      title: 'SMK Negeri 13 Bandung - Smart School',
      period: 'Jul 2022 - Aug 2023',
      associated: 'Codev (Code Developer)',
      tech: ['laravel', 'api', 'vuetify', 'vue', 'mysql'],
      platform: 'Web',
      link: 'https://www.smkn-13bdg.sch.id/',
      description:
        'The SMK Negeri 13 Bandung - Smart School project aims to develop a comprehensive digital platform that effectively manages student attendance records, book borrowing from the school library, and student financial transactions within SMK Negeri 13 Bandung.',
    },
  ];
  return (
    <div className="w-screen" id="portfolio">
      <div className="mx-auto my-16 max-w-screen-2xl px-6 md:px-12">
        <div className="flex w-full flex-col items-center justify-center gap-2">
          <span className="text-base md:text-2xl font-bold text-primary">
            My project, crafted with love.
          </span>
          <h1 className="text-5xl font-extrabold text-white">Portfolio</h1>
        </div>

        <div className="mt-12 grid h-full grid-cols-1 md:grid-cols-2 gap-12">
          {data.splice(0, 4).map((item) => {
            return <CardPortfolio key={item.title} {...item} />;
          })}
        </div>

        <div className="mt-12 flex w-full">
          <ButtonMore />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
