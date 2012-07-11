Ext.define('TZ.controller.Login', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'xmain',
            loginform: 'xlogin',
        },
        control: {
            'xlogin button[id=backfl]': {
                tap: 'showBackPage',
            },
            'xlogin button[id=login_submit]': {
                tap: 'submitLoginForm',
            },
        }
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {

    },


    showBackPage: function () {
        this.getMain().setActiveItem(0);
    },

    submitLoginForm: function() {
      var values = this.getLoginform().getValues();
      var main = this.getMain();
      session = Ext.create('TZ.model.Session', values);
      session.save({
        success: function() {
          Ext.Msg.alert('Login', 'Loged in successfully', function(){
            main.setActiveItem(0);
          });
        },
        failure: function() {
          Ext.Msg.alert('Login', 'Something goes wrong')
        },

      });
    },

});
