const nodemailer = require('nodemailer');

export default async (req, res) => {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
    secure: true,
  });

  const result = await transporter.sendMail({
    from: req.body.email,
    to: 'clementizard@tutanota.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: `'<div>${req.body.message}</div>'`,
  });

  console.log('result', result);

  res.send(200);
};
