

// prism-language
$('css').each(function(){
    var html = $(this).html();
    $(this).html('<pre><code class=\'language-css\'>'+html+'</code></pre>');
    })
$('js').each(function(){
    var html = $(this).html();
    $(this).html('<pre><code class=\'language-js\'>'+html+'</code></pre>');
})


