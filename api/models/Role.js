/**
 * Role.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        role_id: {
            type: 'integer',
            required: true,
            unique: true,
        },
        where: {
            type: 'string',
            required: true,
        },
        when: {
            type: 'datetime',
            required: true
        },
        cost: {
            type: 'float',
            required: true,
        },
        coordinator: {
            model: 'user'
        },
        payments: {
            collection: 'payment',
            via: 'payment_role'
        }
    }
};
