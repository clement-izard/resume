export const experiences = [
  {
    logo: {
      src: '/icons/medvice.svg',
      alt: 'Medvice icon',
      width: 150,
      height: 50,
    },
    title: 'MIA Suite - Lead Front end developer',
    date: '2020-2021',
    info: 'Full remote - 6 months extended to 20',
    details: 'In charge of 3 web apps and a mobile app (React, React native)',
    companyInfos: (
      <>
        <p>
          Medvice (
          <a
            href="https://medvice.io"
            target="_blank"
            onClick={e => e.stopPropagation()}
            style={{ textDecoration: 'underline' }}
          >
            medvice.io
          </a>
          ) is a health startup that aim to save doctors time by allowing the patients to fill
          complaints on their phone before going to the clinic.
        </p>
        <br />
        <p>
          The doctor can send an advice and determine what is the best solution for the patient: a
          visit or an audiovisual call either scheduled or immediate. He can also manage his
          calendar by setting holidays and breaks during the day.
        </p>
        <br />
        <p>
          Complaints are dynamically created by the clinic to fit their needs, assistants can manage
          doctors schedule along with other actions related to the patients. Medvice use an
          administrator dashboard to manage subscribed clinics.
        </p>
      </>
    ),
    features: (
      <>
        <h4>Features</h4>
        <ul style={{ marginLeft: 12, marginTop: 12 }}>
          <li>One</li>
          <li>Two</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
      </>
    ),
    images: [
      'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
      'https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png',
      'https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png',
    ],
  },
  {
    noOpen: true,
    logo: {
      src: '/icons/sii.svg',
      alt: 'Sii icon',
      width: 150,
      height: 100,
    },
    title: 'SII / Hager - Front end consultant',
    date: '2019-2020',
    info: 'On site - 7 months',
    details: 'Upgraded an energy EV visualization app (Knockout.js, Next.js)',
    companyInfos: (
      <>
        <p>
          I was hired by{' '}
          <a
            href="https://sii-group.com"
            target="_blank"
            onClick={e => e.stopPropagation()}
            style={{ textDecoration: 'underline' }}
          >
            SII
          </a>{' '}
          as a contractor and worked at{' '}
          <a
            href="https://hager.com"
            target="_blank"
            onClick={e => e.stopPropagation()}
            style={{ textDecoration: 'underline' }}
          >
            Hager
          </a>
          , a supplier of electrical solutions for residential, tertiary and industrial buildings.
        </p>
        <br />
        <p>
          I was part of the team that modernized an app to view the electrical devices in an house
          like solar panel, battery, electrical vehicle etc. The initial app was written with
          Knockout.js and require.js, we made some updates on it before starting to rebuild it from
          scratch with Next.js and Swr.
        </p>
      </>
    ),
  },
  {
    noOpen: true,
    logo: {
      src: '/icons/whereyoulove.svg',
      alt: 'Whereyoulove icon',
      width: 150,
      height: 100,
    },
    title: 'Where you love - Lead Front end developer',
    date: '2017-2019',
    info: 'Half remote - 2 years',
    details: 'Integration of new design from scratch (React)',
  },
  {
    noOpen: true,
    logo: {
      src: '/icons/hickup.png',
      alt: 'Hickup icon',
      width: 130,
      height: 45,
    },
    title: 'Hickup - Front end intern',
    date: '2015-2016',
    info: 'On site - 6 months - internship',
    details: 'Upgraded tablet apps to allow dynamic rebranding in Showpad (Angular, Ionic)',
  },
  {
    noOpen: true,
    noMargin: true,
    logo: {
      src: '/icons/orange.png',
      alt: 'Orange icon',
      width: 100,
      height: 100,
    },
    title: 'Orange - Fullstack intern',
    date: '2013',
    info: 'On site - 6 months - internship',
    details:
      'Creation of a seller rating dashboard based on their sells / complaints (Access, Php, SQL, jQuery)',
  },
];
export const education = [
  {
    noOpen: true,
    logo: {
      src: '/icons/epitech.png',
      alt: 'Epitech icon',
      width: 150,
      height: 60,
    },
    title: 'Epitech - Student',
    date: '2012-2018',
    info: 'Master’s Degree in computer science',
    details:
      'Creation of a web application for graduation project (MySQL, Koa.js, Socket.io, React)',
  },
  {
    noOpen: true,
    noMargin: true,
    logo: {
      src: '/icons/ahlia.png',
      alt: 'Ahlia icon',
      width: 100,
      height: 90,
    },
    title: 'Ahlia University - Student',
    date: '2016-2017',
    info: '9 months studies in a foreign country',
    details: 'Various modules: from Bioinformatics to Arabic class',
  },
];
