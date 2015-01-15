window.onload = function() {
  return $('code').each(function(i, block) {
    return hljs.highlightBlock(block);
  });
};
