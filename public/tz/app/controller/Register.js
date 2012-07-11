Ext.define('TZ.controller.Register', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'xmain',
            registerform: 'xregister'
         },
        control: {
            'xregister button[id=backfr]': {
                tap: 'showBackPage',
            },
            'xregister button[id=register_submit]': {
                tap: 'submitRegForm',
            },

        }
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {

    },

    showBackPage: function () {
        this.getMain().setActiveItem(0);
    },

    submitRegForm: function () {
        var values = this.getRegisterform().getValues();
        var main = this.getMain();
        user = Ext.create('TZ.model.User', values);
        user.save({
          success: function() {
                Ext.Msg.alert('Registration', 'Registration success', function(){
                       main.setActiveItem(2);
                });
          },
          failure: function() {
                Ext.Msg.alert('Registration', 'Something goes wrong')
          },

        });
    }
});
