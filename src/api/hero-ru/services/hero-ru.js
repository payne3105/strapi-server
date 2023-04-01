'use strict';

/**
 * hero-ru service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hero-ru.hero-ru');
