Ext.define('TZ.model.User', {
  extend: 'Ext.data.Model',

  config: {
    fields: [
      {name: 'id', type: 'int'},
      {name: 'email', type: 'string'},
      {name: 'password', type: 'string'},
      {name: 'password_confirmation', type: 'string'}
    ],

    validations: [
      
      ],

    proxy: {
      type: 'rest',
      url : 'api/users',
      reader: {
        type: 'json',
        rootProperty: 'api_user'
      },
	  },
  }
});
