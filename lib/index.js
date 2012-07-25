var request = require('request'),
    util    = require('util');

var client = {

    init: function (config) {
        this.sequences = {};

        this.endpoint = {
            uri: config.uri || 'https://api.unmagnify.com'
        };

        this.credentials = {
            token: config.token || 'token'
        };

        return this;
    },

    registerSequence: function (name, id) {
        this.sequences[name] = id;

        return this;
    },

    plot: function(sequence, value, callback) {
        if (!this.sequences[sequence]) {
            throw 'Unregistered sequence.';
        }

        var id = this.sequences[sequence];
        var url = util.format('%s/sequences/%s/plots', this.endpoint.uri, id);
     
        request.post({
            url: url,
            headers: {
                'Authorization': util.format('Token token=%s', this.credentials.token)
            },
            json: {
                value: value,
                timestamp: new Date().toISOString()
            }
        }, function (err, response, body) {
            if (callback) {
                callback(err);
            }
        });
    }

};

exports.create = function (config) {
    return Object
        .create(client)
        .init(config);
};
