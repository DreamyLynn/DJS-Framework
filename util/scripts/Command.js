const Discord = require('discord.js');

/**
 * Defines a new Command
*/
function CreateCommand() {

    let BaseStructure = {
        'enabled': true,
        'type': 'command',
        'exec': function(client, msg, args) {
            return;
        },
        'name': null,
        'description': 'Makes something special 🌟',
        'aliases': [],
        'options': {
            'permissionLevel': 0,
            'cooldown': 2
        }
    };
    let _t = this;

    /**
     * @param {Discord.Client} client 
     * @param {Discord.Message} msg 
     * @param {Array} args 
    */
    function cmdHandler(client, msg, args) {};
    
    /**
     * @param {cmdHandler} CommandHandeler Sets the Command Handler
     * @returns {CreateCommand}
    */
    this.setExec = function(CommandHandeler) {
        BaseStructure.exec = CommandHandeler;
        return _t;
    };

    /**
     * @param {String} CommandName The Name of the Command
     * @returns {CreateCommand}
    */
    this.setName = function(CommandName) {
        BaseStructure.name = CommandName;
        return _t;
    };

    /**
     * @param {String} CommandDescription The Name of the Command
     * @returns {CreateCommand}
    */
    this.setDescription = function(CommandDescription) {
        BaseStructure.description = CommandDescription;
        return _t;
    };


    /**
     * @param {String} AliasName Add an Alias Name of the Command
     * @returns {CreateCommand}
    */
    this.addAlias = function(AliasName) {
        BaseStructure.aliases.push(AliasName);
        return _t;
    };

    /**
     * @param {Array} AliasList Sets the Alias List of the Command
     * @returns {CreateCommand}
    */
    this.setAliases = function(AliasList) {
        BaseStructure.aliases = AliasList;
        return _t;
    };

    /**
     * @param {Number} CooldownCuration Sets the Cooldown duration of the Command
     * @returns {CreateCommand}
    */
    this.setCooldown = function(CooldownCuration) {
        BaseStructure.options.cooldown = CooldownCuration;
        return _t;
    };

    /**
     * @param {Number} PermissionLevel Sets the Permission Level of the Command
     * @returns {CreateCommand}
    */
    this.setPermissionLevel = function(PermissionLevel) {
        BaseStructure.options.permissionLevel = PermissionLevel;
        return _t;
    };

    /**
     * Disables the Command
     * @returns {CreateCommand}
    */
    this.disable = function() {
        BaseStructure.enabled = false;
        return _t;
    };

    this._cmd = BaseStructure;

};

module.exports = CreateCommand;