Ext.define('TZ.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
          main: 'xmain',
        },
        control: {
          'xmain button[id=reg]': {
            tap: 'showRegForm',
          },
          'xmain button[id=log]' : {
            tap: 'showLogForm'

          },
      }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    },

    showRegForm: function () {
      console.log('it works!');
      this.getMain().setActiveItem(1);
    },

    showLogForm: function () {
      this.getMain().setActiveItem(2)
    },
});
