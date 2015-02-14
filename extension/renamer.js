/**
 * Renames instances of "Rice University Official Page" to "Rice University".
 * @author Waseem Ahmad <me@waseemahmad.com>
 */

function makeItSo() {
  var source = "Rice University Official Page";
  var replace = "Rice University";
  $('a:contains("' + source + '")').text(replace);
  $('span:contains("' + source + '")').text(replace);
}

var observer = new MutationObserver(function(mutations, observer) {
  makeItSo();
});

observer.observe(document, {
  subtree: true,
  attributes: true,
  childList: true,
  characterData: true,
  attributeOldValue: true,
  characterDataOldValue: true
});
