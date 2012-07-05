Ext.define('TZ.model.Session', {
  extend: 'Ext.data.Model',

  config: {
    fields: [
      {name: 'id', type: 'int'},
      {name: 'email', type: 'string'},
      {name: 'password', type: 'string'},
    ],

    proxy: {
      type: 'rest',
      url : '/api/users/sign_in',
      reader: {
        type: 'json',
        root: 'api_user'
      },
	  },
  }
});
