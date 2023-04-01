'use strict';

/**
 * hero-en service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hero-en.hero-en');
