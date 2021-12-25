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
          <a
            href="https://medvice.io"
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            style={{ textDecoration: 'underline' }}
          >
            Medvice
          </a>{' '}
          is a health startup that aim to save doctors time by allowing the patients to fill
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
        <strong>Features</strong>
        <ul style={{ marginLeft: 12, marginTop: 12 }}>
          <li className="mb-0.5">- Calendar and scheduling</li>
          <li className="mb-0.5">
            -{' '}
            <a href="https://www.twilio.com" className="underline" target="_blank">
              Twilio
            </a>{' '}
            video & chat
          </li>
          <li className="mb-0.5">- Complaint creator</li>
          <li className="mb-0.5">- Desktop notifications</li>
          <li className="mb-0.5">
            - 2fa,{' '}
            <a href="https://sentry.io" className="underline" target="_blank">
              Sentry
            </a>
            ,{' '}
            <a href="https://www.zendesk.com" className="underline" target="_blank">
              Zendesk
            </a>
            ,{' '}
            <a href="https://instabug.com" className="underline" target="_blank">
              Instabug
            </a>
            ...
          </li>
          <li className="mb-0.5">- Speech to text</li>
          <li className="mb-0.5">- Geolocation & maps</li>
          <li className="mb-0.5">- Onesignal integration</li>
          <li className="">- Rich text input</li>
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
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            style={{ textDecoration: 'underline' }}
          >
            SII
          </a>{' '}
          as a contractor and worked at{' '}
          <a
            href="https://hager.com"
            target="_blank"
            rel="noreferrer"
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
          Knockout.js and require.js, we made some updates before starting to rebuild it with
          Next.js and Swr.
        </p>
      </>
    ),
  },
  {
    logo: {
      src: '/icons/whereyoulove.svg',
      alt: 'Whereyoulove icon',
      width: 150,
      height: 100,
    },
    title: 'Where you love - Lead Front end developer',
    date: '2017-2019',
    info: 'Half remote - 2 years',
    details:
      'Created the questionnaires generator for the end user along with the administrator and real estate agent dashboards (React.js)',
    companyInfos: (
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
          </a>{' '}
          is a real estate startup. By regrouping places from different sources and asking lifestyle
          questions to a user, whereyoulove matches him with the most fitting houses or apartments;
          saving hours of searching by himself.
        </p>
        <br />
        <p>
          Home owners have their own dashboard to customize their offers. Based on the location,
          whereyoulove add the number of theatre, fast-food and schools nearby. Each result have
          their own score based on the user's choice.
        </p>
        <br />
        <p>This startup has been bought by a real estate company in 2020.</p>
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
    logo: {
      src: '/icons/hickup.png',
      alt: 'Hickup icon',
      width: 130,
      height: 45,
    },
    title: 'Hickup - Front end intern',
    date: '2015-2016',
    info: 'On site - 6 months - internship',
    details: 'Upgraded tablet apps to allow dynamic rebranding (Angular, Ionic)',
    companyInfos: (
      <>
        <p>
          Hickup was specialized in creating tablet apps to sell a product. The app was sold to
          other companies marketing team to sell their product.
        </p>
        <br />
        <p>
          My role was to make each app customizable through a dashboard. This way every app could be
          rebranded infinitely to sell any product from any brand.
        </p>
        <br />
        <p>
          At the end of my internship, I trained the next intern to continue my work.{' '}
          <a
            href="https://www.crunchbase.com/acquisition/showpad-acquires-hickup--3912eaf1"
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            style={{ textDecoration: 'underline' }}
          >
            The company was acquired by Showpad a year later.
          </a>
        </p>
      </>
    ),
  },
  {
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
    companyInfos: (
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
          </a>{' '}
          is a telecom company, one of the largest in France. They also own stores to sell phones
          and internet packages. In these stores sellers are rated by their sells and complaints, I
          started the internal web app that rank them.
        </p>
        <br />
        <p>
          I used Microsoft Access to create complex queries through a few databases. With aggregated
          data I used Php and jQuery to show them correctly in a dashboard. My work was then used to
          congratulate the best sellers with free holidays and take actions on the ones with the
          most complaints.
        </p>
      </>
    ),
  },
];
export const education = [
  {
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
    companyInfos: (
      <>
        <p>
          The graduation project I made at{' '}
          <a
            href="https://www.epitech.eu"
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            style={{ textDecoration: 'underline' }}
          >
            Epitech
          </a>{' '}
          started in my third year and finished at the very end of my fifth, in parallel of other
          modules. This project was meant for gamers, more particularly competitive ones.
        </p>
        <br />
        <p>
          It was a dashboard where you could find players statistics for a specific game. I started
          with Counter Strike - Global Offensive. Steam was not providing past statistics, only the
          current ones. The only way to draw a graph was to refresh player data and save it in my
          database.
        </p>
        <br />
        <p>
          I choose MySQL because I was already used to it, after a while I found that MongoDB would
          have done the job better but it wasn't worth the time to change it.
        </p>
        <br />
        <p>
          I used Koa.js as the Node.js server; mainly because it was Express.js developers who made
          it. Also because it looked cleaner. I quickly fallen into callback hell and Node's update
          about async/await was such an improvement I reworked it with this new syntax.
        </p>
        <br />
        <p>
          Already used to Angular, I found a dashboard template in Angular 2 for the Front, but
          later admitted that a rework in React could actually help develop it faster. Completely
          new to react I read the man and never used Angular ever since.
        </p>
        <br />
        <p>
          I added Socket.io to allow real time statistics across clients and Auth0 for Google,
          Facebook, Twitter and Steam authentications.
        </p>
        <br />
        <p>
          Another part of the app was the teams, they had their own statistics averaging the players
          inside. Searching for a player by it's statistics allowed the teams with a missing member
          to find the one they really needed.
        </p>
      </>
    ),
  },
  {
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
    companyInfos: (
      <>
        <p>
          For the fourth year of studies, Epitech require the students to go to a foreign country
          and validate modules there. Many of the partner universities are located in Europe or in
          North America.
        </p>
        <br />
        <p>
          I choose to go to{' '}
          <a
            href="https://www.ahlia.edu.bh/"
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            style={{ textDecoration: 'underline' }}
          >
            Ahlia university
          </a>{' '}
          in Bahrain because they had a Bioinformatics module which was very rare, only 2
          universities offered it. It was also very different from any country in Europe or North
          America, a way to actually see something else and have some real adventure.
        </p>
      </>
    ),
  },
];
