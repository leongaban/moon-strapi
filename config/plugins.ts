export default ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "sendgrid", // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "hello@moonportfolio.xyz",
        defaultReplyTo: "hello@moonportfolio.xyz",
        testAddress: "hello@moonportfolio.xyz",
      },
    },
  },
  // ...
});
