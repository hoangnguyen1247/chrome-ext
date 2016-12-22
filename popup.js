document.addEventListener('DOMContentLoaded', function() {

   var checkPageButton = document.getElementById('checkPage');
   checkPageButton.addEventListener('click', function() {
      chrome.tabs.getSelected(null, function(tab) {
         var p = document.createElement('p');
         p.append("This is one chrome ext");

         document.body.appendChild(p);
      });
   }, false);

}, false);