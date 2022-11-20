module.exports = {
  scraperJob: {
    task: ({ strapi }) => {
      // TODO: update this
      let test = "This runs every minutes.";
      console.log(test);
    },
    options: {
      rule: '* * * * * *',
      tz: 'Europe/Prague',
    },
  },

};
