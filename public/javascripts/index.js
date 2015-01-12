window.onload = function() {
  $('code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
};
