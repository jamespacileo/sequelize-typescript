import * as sequelize from 'sequelize';

/**
 * Version of sequelize
 */
export const version = sequelize['version'];

/**
 * Parsed version number of sequelize version
 */
export const majorVersion = parseInt("4", 10);
