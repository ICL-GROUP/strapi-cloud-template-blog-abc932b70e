'use strict';

/**
 *  about controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::about.about',{
    async find(ctx) {
        try {
          // Retrieve all instances of the 'about' model
          const about = await strapi.services.about.find();
    
          // Return the retrieved data
          return ctx.send(about);
        } catch (error) {
          // Handle any errors that occur during the retrieval process
          return ctx.badRequest('Failed to retrieve about information');
        }
      }
});
