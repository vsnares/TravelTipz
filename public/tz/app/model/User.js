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
      { type: 'presence',  field: 'email' },
      { type: 'presence',  field: 'password' },
      { type: 'length',  field: 'password' , min: 6 },
      { type: 'format',    field: 'age', matcher: /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/ },  

    ],

    proxy: {
      type: 'rest',
      url : '/api/users',
      reader: {
        type: 'json',
        rootProperty: 'api_user'
      },
	  },
  }
});
