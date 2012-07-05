Ext.define("TZ.view.Login",{
	extend: 'Ext.form.Panel',
	xtype: 'loginform',
	alias: 'widget.xlogin',

	requires: [
    'Ext.field.Text',
    'Ext.field.Password',
    'Ext.form.FieldSet',
    'Ext.MessageBox'
  ],

	config: {
		title: 'Login',
		scrollable: false,
    fullscreen: true,
		items: [
		  {
        xtype: 'titlebar',
        title: 'Login form',
          items: [
           {
              xtype: 'button',
              align: 'left',
              id: 'backfl',
              ui: 'back',
              text: 'Back'
           },
           {
              iconCls: 'home',
              iconMask: true,
              align: 'right',
              id: 'homefl',
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
								label: 'Email:'
							},
							{
								xtype: 'passwordfield',
								name: 'password',
								label: 'Password:'
							},
							{
								xtype: 'button',
								ui: 'confirm',
                id: 'login_submit',
								text: 'Log In'
							}
						]
					}
				]
		 	},
		]
	}
});
