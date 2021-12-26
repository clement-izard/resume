const nodemailer = require('nodemailer');

export default async (req, res) => {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.transporter_email,
      pass: process.env.transporter_password,
    },
    secure: true,
  });

  const result = await transporter.sendMail({
    from: req.body.email,
    to: process.env.destination_email,
    subject: `Message ${req.body.name ? `From ${req.body.name} ` : ''}About ${req.body.subject}`,
    text: req.body.message,
    html: `<div>${req.body.message}</div>`,
  });
  if (result.accepted?.length) res.send(200);
  else if (result.rejected?.length) res.send(500);

  /*
  {
  accepted: [ 'clementizard@tutanota.com' ],
  rejected: [],
  envelopeTime: 118,
  messageTime: 350,
  messageSize: 615,
  response: '250 2.0.0 OK  1640467005 k9sm10841846wro.80 - gsmtp',
  envelope: { from: 'contactme@gmail.com', to: [ 'clementizard@tutanota.com' ] },
  messageId: '<6bd6ff61-f6fc-1a98-879b-5e99778ceee0@gmail.com>'
  }
  */
};
