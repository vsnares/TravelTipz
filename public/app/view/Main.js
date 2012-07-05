Ext.define("TZ.view.Main", {
    extend: 'Ext.tab.Panel',
    alias: 'widget.xmain',

    requires: [
      'Ext.TitleBar',
    ],
    config: {
      cls: 'home',
      scrollable: true,
      styleHtmlContent: true,

      tabBar: {
        hidden: true,
      },
      activeItem: 0,

      items: [
        {
            title: 'home',
            scrollable: true,
            items: [
                {
                  xtype: 'titlebar',
                  title: 'TravelTipz',
                },
                {
                  html: [
                  '<img src="http://iphonemockup.lkmc.ch/uploaded/ZEbQjEHYMjgMdQBGgGmObBYWMAZPSZeMhSfALmZPH/1.png" />',
                  '<h1>Welcome to TravelTipz</h1>',
                ].join("")
                },
                {
                  xtype: 'button',
                  ui: 'normal',
                  text: 'Registration',
                  margin: '10 10 25 10',
                  id: 'reg'
                },
                {
                  html: '<h1>Do you have an account?</h1>'
                },
                {
                  xtype: 'button',
                  ui: 'normal',
                  text: 'Log In',
                  margin: '10 10 25 10',
                  id: 'log'
                }
              ]
            },
            {
              xtype: 'registerform'
            },
            {
              xtype: 'loginform'
            },
      ]
    }
});
