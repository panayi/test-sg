const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('--YOUR API KEY HERE--');
sgMail.setSubstitutionWrappers('{{', '}}');

const msg = {
  to: 'recipient@example.org',
  from: 'sender@example.org',
  subject: 'Hello world',
  text: 'Hello plain world!',
  html: '<p>Hello HTML world!</p>',
  templateId: 'e3afe6d0-a425-4228-99e9-3e59a795fd0c',
  substitutions: {
    name: 'Some One',
    city: 'Denver',
  },
};
sgMail.send(msg);