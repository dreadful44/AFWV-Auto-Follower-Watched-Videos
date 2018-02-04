
let buttonTest;
let currentUrl;

document.addEventListener('DOMContentLoaded', function () {
    buttonTest = document.querySelector('#buttonTest');
    buttonTest.addEventListener('click', function testAction() {
        console.log(document);

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            console.log(tabs);

            var currentTab = tabs[0];
            incognito = currentTab.incognito;
            currentUrl = currentTab.url;

            function modifyDOM() {
                //You can play with your DOM here or check URL against your regex
                console.log('Tab script:');
                console.log(document.body);
                return document.body.innerHTML;
            }

            //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
            chrome.tabs.executeScript({
                code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
            }, (results) => {
                //Here we have just the innerHTML and not DOM structure
                console.log('Popup script:')
                console.log(results[0]);
            });
        });
    });


});



function detectVideo(bodyHtml) {

}

