window.NinchatAsyncInit = function() {
    window.Ninchat.embedInit({
      containerId: 'ninchat-chatroom',
      channelId: '2b13vb1d007k'
    });
  };

  (function(doc) {
    if (doc.getElementById('ninchat-js')) {
      return;
    }

    var js, first = doc.getElementsByTagName('script')[0], date = new Date();

    js     = doc.createElement('script');
    js.id  = 'ninchat-js';
    js.src = 'https://ninchat.com/js/embed.min.js?_=' + (date.getMonth() * 100 + date.getDate());
    first.parentNode.insertBefore(js, first);
  }(document));