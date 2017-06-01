/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    schema:true,

  	name : {
  		type : 'string',
  		required: true,
  	},
  	title : {
  		type:'string',

  	},
  	email : {
  		type:'string',
  		email:true,
  		required:true,

  	},
  	encryptedPassword : {
  		type : 'string',

  	},

    toJSON: function(){

      var obj = this.toObject();
      delete obj.passwd;
      delete obj.passwdcnf;
      delete obj._csrf;
      delete obj.encryptedPassword;
      return obj;

    }

  }
};

