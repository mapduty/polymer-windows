Polymer('polymer-windows', {

    ready: function() {
    },

    page: 0,

    afterTransition: function(e) {
        if(this.page == 'scriptWindow') {
            var code = this.$.codeMirror;
            code.style.display = "block";
            code.refresh();
            code.focus();
        }
    }

});