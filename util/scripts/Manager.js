const DJSF = require('../../DJSF');
const Discord = require('discord.js');
const Config = require('../../config.json');

const Manager = new Discord.ShardingManager(`${DJSF.Dirs.core}/index.js`, {
    'mode': 'process',
    'respawn': true,
    'totalShards': 'auto',
    'shardArgs': process.argv,
    'token': Config.bot.token,
});

process.Manager = Manager;

let data = {
    events: {},
};

module.exports = function() {

    /**
     * @param {number|string} shardCount
    */
    this.start = async function(shardCount) {
        Manager.spawn(shardCount || 'auto', 2500)
        .then(shard => {
            if(typeof data.events.start === 'function') {
                data.events.start(data.shard = shard);
            }
        })
        .catch(error => process.Logger.Error(`Invalid token provided!`));
    };

    /**
     * @param {Discord.Shard} shard 
    */
    function callback(shard) {}
    /**
     * @param {callback} callback 
    */
    this.onStart = (callback) => data.events.start = callback;

};