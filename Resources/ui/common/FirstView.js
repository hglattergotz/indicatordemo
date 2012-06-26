//FirstView Component Constructor
function FirstView() {
    //create object instance, a parasitic subclass of Observable
    var self = Ti.UI.createView({
        layout: 'vertical'
    });

    //label using localization-ready strings from <app dir>/i18n/en/strings.xml
    var label = Ti.UI.createLabel({
        color : '#919191',
        text : String.format(L('welcome'), 'the Indicator Demo'),
        // height : 'auto',
        width : 'auto',
        top : 160
    });

    self.add(label);

    // Create a button to open the indicator window
    var button = Ti.UI.createButton({
        title : 'Show the indicator for 5 seconds',
        height : 40,
        left : 20,
        right : 20,
        top : 20
    });

    self.add(button);

    // Load the Indictor Window module
    var uie = require('lib/IndicatorWindow');
    
    // Create an instance of an indicator window
    var indicator = uie.createIndicatorWindow({top:60});
    
    // Event listener for button that opens the indicator and closes it after
    // 5000 milliseconds
    button.addEventListener('click', function(e) {
        indicator.openIndicator();
    
        setTimeout(function() {
            indicator.closeIndicator();
        },5000);
    });

    return self;
}

module.exports = FirstView;
