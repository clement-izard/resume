export const experiences = [
  {
    id: 'medvice',
    logo: {
      src: '/icons/medvice.svg',
      alt: 'Medvice icon',
      width: 150,
      height: 50,
    },
    date: '2020-2021',
    companyInfos: t => (
      <>
        <p>
          <a
            href="https://medvice.io"
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            style={{ textDecoration: 'underline' }}
          >
            Medvice
          </a>
          {t('showcase.medvice.companyInfos.speech1')}
        </p>
        <br />
        <p>{t('showcase.medvice.companyInfos.speech2')}</p>
        <br />
        <p>{t('showcase.medvice.companyInfos.speech3')}</p>
        <br />
        <p>{t('showcase.medvice.companyInfos.speech4')}</p>
      </>
    ),
    features: t => (
      <>
        <strong>{t('showcase.featuresTitle')}</strong>
        <ul style={{ marginLeft: 12, marginTop: 12 }}>
          <li className="mb-0.5">- {t('showcase.medvice.features.calendar')}</li>
          <li className="mb-0.5">- {t('showcase.medvice.features.creator')}</li>
          <li className="mb-0.5">- {t('showcase.medvice.features.notif')}</li>
          <li className="mb-0.5">- {t('showcase.medvice.features.stt')}</li>
          <li className="mb-0.5">- {t('showcase.medvice.features.map')}</li>
          <li className="mb-0.5">- {t('showcase.medvice.features.rti')}</li>
          <li className="">
            -{' '}
            <a href="https://www.twilio.com" className="underline" target="_blank" rel="noreferrer">
              Twilio
            </a>{' '}
            video & chat
          </li>
          <li className="mb-0.5">
            -{' '}
            <a href="https://onesignal.com/" className="underline" target="_blank" rel="noreferrer">
              Onesignal
            </a>{' '}
            integration
          </li>
          <li className="mb-0.5">
            - 2fa,{' '}
            <a href="https://sentry.io" className="underline" target="_blank" rel="noreferrer">
              Sentry
            </a>
            ,{' '}
            <a
              href="https://www.zendesk.com"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              Zendesk
            </a>
            ,{' '}
            <a href="https://instabug.com" className="underline" target="_blank" rel="noreferrer">
              Instabug
            </a>
            ...
          </li>
        </ul>
      </>
    ),
    images: [
      '/demo/medvice/dashboard-0.png',
      '/demo/medvice/dashboard-1.png',
      '/demo/medvice/dashboard-2.png',
      '/demo/medvice/dashboard-3.png',
      '/demo/medvice/dashboard-4.png',
      '/demo/medvice/dashboard-5.png',
      // '/demo/medvice/mobile-0.png',
      // '/demo/medvice/mobile-1.png',
      // '/demo/medvice/mobile-2.png',
      // '/demo/medvice/mobile-3.png',
      // '/demo/medvice/mobile-4.png',
      // '/demo/medvice/mobile-5.png',
      // '/demo/medvice/mobile-6.png',
    ],
  },
  {
    id: 'sii',
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
    companyInfos: t => (
      <>
        <p>
          {t('showcase.sii.companyInfos.speech0')}
          <a
            href="https://sii-group.com"
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            style={{ textDecoration: 'underline' }}
          >
            SII
          </a>{' '}
          {t('showcase.sii.companyInfos.speech1')}
          <a
            href="https://hager.com"
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            style={{ textDecoration: 'underline' }}
          >
            Hager
          </a>
          {t('showcase.sii.companyInfos.speech2')}
        </p>
        <br />
        <p>{t('showcase.sii.companyInfos.speech3')}</p>
      </>
    ),
  },
  {
    id: 'wyl',
    logo: {
      src: '/icons/whereyoulove.svg',
      alt: 'Whereyoulove icon',
      width: 150,
      height: 100,
    },
    date: '2017-2019',
    companyInfos: t => (
      <>
        <p>
          <a
            href="https://whereyoulove.com/"
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            style={{ textDecoration: 'underline' }}
          >
            WhereYouLove
          </a>
          {t('showcase.wyl.companyInfos.speech0')}
        </p>
        <br />
        <p>{t('showcase.wyl.companyInfos.speech1')}</p>
        <br />
        <p>{t('showcase.wyl.companyInfos.speech2')}</p>
      </>
    ),
    images: [
      '/demo/whereyoulove/homepage.png',
      '/demo/whereyoulove/homepage2.png',
      '/demo/whereyoulove/search.png',
      '/demo/whereyoulove/search2.png',
      '/demo/whereyoulove/results.png',
      '/demo/whereyoulove/results2.png',
    ],
  },
  {
    id: 'hickup',
    logo: {
      src: '/icons/hickup.png',
      alt: 'Hickup icon',
      width: 130,
      height: 45,
    },
    date: '2015-2016',
    companyInfos: t => (
      <>
        <p>{t('showcase.sii.companyInfos.speech0')}</p>
        <br />
        <p>{t('showcase.sii.companyInfos.speech1')}</p>
        <br />
        <p>
          {t('showcase.sii.companyInfos.speech2')}
          <a
            href="https://www.crunchbase.com/acquisition/showpad-acquires-hickup--3912eaf1"
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            style={{ textDecoration: 'underline' }}
          >
            {t('showcase.sii.companyInfos.link0')}
          </a>
        </p>
      </>
    ),
  },
  {
    id: 'orange',
    noMargin: true,
    logo: {
      src: '/icons/orange.png',
      alt: 'Orange icon',
      width: 100,
      height: 100,
    },
    date: '2013',
    companyInfos: t => (
      <>
        <p>
          <a
            href="https://www.orange.com"
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            style={{ textDecoration: 'underline' }}
          >
            Orange
          </a>
          {t('showcase.orange.companyInfos.speech0')}
        </p>
        <br />
        <p>{t('showcase.orange.companyInfos.speech1')}</p>
      </>
    ),
  },
];
export const education = [
  {
    id: 'epitech',
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
    companyInfos: t => (
      <>
        <p>
          {t('showcase.epitech.companyInfos.speech0')}
          <a
            href="https://www.epitech.eu"
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            style={{ textDecoration: 'underline' }}
          >
            Epitech
          </a>
          {t('showcase.epitech.companyInfos.speech1')}
        </p>
        <br />
        <p>{t('showcase.epitech.companyInfos.speech2')}</p>
        <br />
        <p>{t('showcase.epitech.companyInfos.speech3')}</p>
        <br />
        <p>{t('showcase.epitech.companyInfos.speech4')}</p>
        <br />
        <p>{t('showcase.epitech.companyInfos.speech5')}</p>
        <br />
        <p>{t('showcase.epitech.companyInfos.speech6')}</p>
        <br />
        <p>{t('showcase.epitech.companyInfos.speech7')}</p>
      </>
    ),
  },
  {
    id: 'ahlia',
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
    companyInfos: t => (
      <>
        <p>{t('showcase.ahlia.companyInfos.speech0')}</p>
        <br />
        <p>
          {t('showcase.ahlia.companyInfos.speech1')}
          <a
            href="https://www.ahlia.edu.bh/"
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            style={{ textDecoration: 'underline' }}
          >
            Ahlia university
          </a>
          {t('showcase.ahlia.companyInfos.speech2')}
        </p>
      </>
    ),
  },
];
