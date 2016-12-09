'use strict';

describe('helloApp', function() {

  it('should automatically redirect to /hello when location hash/fragment is empty', function() {
    browser.get('');
    expect(browser.getLocationAbsUrl()).toMatch("/hello");
  });

  describe('say hello', function() {
    
    beforeEach(function() {
      browser.get('#!/hello');
    });

    it('should render hello world message when user navigates to /hello', function() {
      expect(element.all(by.css('[ng-view] .message p')).first().getText()).
        toMatch(/Hello World!/);
    });
    
    it('message should change when user inputs new value in text box', function() {
      element(by.id('message')).clear();
      element(by.id('message')).sendKeys('User');
      expect(element(by.id('message')).getAttribute('value')).
      	toBe('User');
      expect(element.all(by.css('[ng-view] .message p')).first().getText()).
        toMatch(/Hello User!/);
    });

  });

});
