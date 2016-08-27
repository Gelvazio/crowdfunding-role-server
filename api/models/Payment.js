/**
 * Payment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
        payment_role: {
            model: 'role'
        },
        payment_user: {
            model: 'user'
        },
        value: {
            type: 'float',
            required: true
        }
     }
};
