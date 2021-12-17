export const experiences = [
  {
    image: {
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
  },
  {
    noOpen: true,
    image: {
      src: '/icons/sii.svg',
      alt: 'Sii icon',
      width: 150,
      height: 100,
    },
    title: 'SII / Hager - Front end consultant',
    date: '2019-2020',
    info: 'On site - 7 months',
    details: 'Upgraded an energy EV visualization app (Knockout.js, Next.js)',
  },
  {
    noOpen: true,
    image: {
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
    image: {
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
    image: {
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
    image: {
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
    image: {
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
