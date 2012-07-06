Ext.define("TZ.view.Register",{
	extend: 'Ext.form.Panel',
	xtype: 'registerform',
	alias: 'widget.xregister',

	requires: [
    'Ext.field.Text',
    'Ext.field.Password',
    'Ext.field.Email',
    'Ext.MessageBox'
  ],

	config: {
		title: 'Register',
		scrollable: false,
		items: [
		  {
        xtype: 'titlebar',
        title: 'Register form',
        items: [
          {
            xtype: 'button',
            align: 'left',
            ui: 'back',
            id: 'backfr',
            text: 'Back'
          },
          {
            iconCls: 'home',
            iconMask: true,
            align: 'right',
            id: 'homerf',
		       	handler: function () {
              Ext.Msg.alert('Title', 'Ooops, Do not work yet')
            },
          }
        ]
      },
      {
      	items: [
      		{
      			xtype: 'fieldset',
	    			items: [
							{
								xtype: 'emailfield',
								name: 'email',
								label: 'Email'
							},
							{
								xtype: 'passwordfield',
								name: 'password',
								label: 'Password'
							},
							{
								xtype: 'passwordfield',
								name: 'password_confirmation',
								label: 'Password Confirmation'
							},
							{
								xtype: 'button',
								ui: 'confirm',
								text: 'Register',
                id: 'register_submit'
							}
      			]
      		}
      	]
      }
		]
	}
  
});
