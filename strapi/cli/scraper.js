#!/usr/bin/env node
const strapi = require('@strapi/strapi');

strapi().load().then(
  async (instance) => {
    console.log('This is running...');
    
    // TODO
    const test = await instance.db.query('api::device.device').findOne();
    console.log(test);
    
    // exit with 0 code
    instance.stop(0);
  }
)
