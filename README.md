Mimosa livereload chrome extension
===================================

Livereload extension for mimosa web framework server (http://mimosa.io).
With this extension you don't need to add to your web pages (probably in the layout) "socket.io" (unless that you use it for your own implementation) and  "reload-client.js" scripts, basically it will deal with the server to reload your page whenever server notify changes.

You can find the extension in [chrome web store](https://chrome.google.com/webstore/detail/mimosa-livereload/ilabemofohmfjciemambcomieohbchip)

## FAQ

* Do I need to use this extension to use mimosa livereload?

  No, you don't. Mimosa provide the livereload functionality agnostically, so it works in every browser which is supported by [socket.io](http://socket.io).

  Read about it in http://mimosa.io/utilities.html#reload

* How does it work?

  This extension works quite similar as the native mimosa livereload works, obviously the extension only change the client part of that feature.
  The main difference is that you don't need to add to your pages (probably layout if you use a view template engine) `reload-client.js` script and [socket.io](http://socket.io) client script, unless that you use [socket.io](http://socket.io) for your purpose.

  The extension also changes how the pages is reloaded when some change is notified by the livereload server, meanwhile the native functionality doesn't reload the page when the change is in a `css` file (just remove and add the file), this extension reload the page in any change.

* What are the benefits to use this extension?
  As commented above, you don't need to add to your pages `reload-client.js` and [socket.io](http://socket.io) client scripts.

  Moreover, as the extension reload the page on any change, you can see the `css` changes when the browser's window doesn't have the focus, because, at least in my machine, the browser doesn't render the `css` change when its window doesn't have the focus and it happens the most of the times because I have the focus in my editor's window.

* Should you get rid of the client livereload functionality and use this extension?

  Absolutely no, if you want to reload the pages in any browser or it doesn't provide you any advantage. Mimosa livereload native functionality is awesome and this extension doesn't overcome it.

## Acknowledgements

[David Bashford](https://github.com/dbashford/) creator of [Mimosa web framework](http://mimosa.io) and all its collaborators.

[Guillermo Rauch](http://devthought.com/) creator of [socket.io](http://socket.io) and all its collaborators.


## License
Just MIT! (read the LICENSE file for more details).
