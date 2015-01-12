window.onload = () ->
	$('code').each (i, block) ->
		hljs.highlightBlock block
		return;
	return;

