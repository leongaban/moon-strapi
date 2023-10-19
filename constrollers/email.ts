export default async ({ env }) => {
  await strapi.plugins['email'].services.email.send({
    to: 'valid email address', // ? User's email
    from: 'hello@moonportfolio.xyz', // ? e.g. single sender verification in SendGrid
    // cc: 'valid email address',
    // bcc: 'valid email address',
    replyTo: 'hello@moonportfolio.xyz',
    subject: 'Email subject', // ? dynamically change this
    text: 'Hello world!', // ? dynamically change this
    html: 'Hello world!', // ? dynamically change this
  });

  // TODO Vince
  // TODO - wrap html in a div with class
  // TODO - create email for register, reset password
  const emailTemplate = {
    subject: 'Welcome <%= user.firstname %>',
    text: `You're signed up on MoonPortfolio!
      Your account is now linked with: <%= user.email %>.`,
    html: `<h1>Welcome to MoonPortfolio</h1>
      <p>We're a simple, but beautiful crypto portfolio tracker.<p>
      <p>And we're excited to help you on your path to building crypto wealth.<p>
      <p>Your account is now linked with: <%= user.email %>.<p>
      <p><a href="https://www.moonportfolio.xyz/login">You can signin here.</a><p>`,
  };

  // ? EXAMPLE
  // ? https://docs.strapi.io/dev-docs/plugins/email
  // await strapi.plugins["email"].services.email.sendTemplatedEmail(
  //   {
  //     to: user.email,
  //     // from: is not specified, the defaultFrom is used.
  //   },
  //   emailTemplate,
  //   {
  //     user: _.pick(user, ["username", "email", "firstname", "lastname"]),
  //   }
  // );
};
