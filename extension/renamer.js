/**
 * Renames instances of "Rice University" to "Rice University Official Page".
 * @author Waseem Ahmad <me@waseemahmad.com>
 */

/**
 * Finds occurences of Rice University on the entire page and replaces them with Rice University
 * Official Page.
 */
function makeItSo() {
  var selectors = ['a', 'span'];
  for (var i in selectors) {
    var selector = selectors[i];
    $(selector + ':contains("Rice University"):not(:contains("Rice University Official Page"))')
        .text("Rice University Official Page");
  }
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
