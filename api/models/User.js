/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
*/

module.exports = {

    attributes: {
        paypalId: {
            type: 'string',
            required: true,
            unique: true
        },
        coordinated_events: {
            collection: 'role',
            via: 'coordinator'
        },
        payments: {
            collection: 'payment',
            via: 'payment_user'
        }
    },
};
