var copyright_by_duypham_dot_info = 'Recent Comments free version 3.2 by http://duypham.info';
  nc = 20;
  // số lượng bình luận
  length_name = 25;
  // độ dài tên
  length_content = 100;
  // độ dài nội dung bình luận
  home_page = 'https://www.phamvanlinh.xyz/';
  // link blogger
  admin_uri = 'https://www.facebook.com/hnilnavmahp.ku/';
  // link admin
  no_avatar = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4eLf_Xwj_O89GmTpup2tK0g8HHtUwCjpVunjTlkormdHeoCwnYZrp8Dae-rxq9wxYWWosoyjLYkXgcfQ1M6Lqh-DJJs6VnIxUywPDbVDHuRiiqsQ88jfoTzCVg-8L7_x84uIkta-0KOet/s16000/favicon-1000x1000.png';
  // avatar ẩn danh
  admin_avatar = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4eLf_Xwj_O89GmTpup2tK0g8HHtUwCjpVunjTlkormdHeoCwnYZrp8Dae-rxq9wxYWWosoyjLYkXgcfQ1M6Lqh-DJJs6VnIxUywPDbVDHuRiiqsQ88jfoTzCVg-8L7_x84uIkta-0KOet/s16000/favicon-1000x1000.png';
  // avatar admin
  function rc_avatar2(a) {
    -1 != d[u].indexOf("/p/") ? (pn[u] = 1, o = a.entry.title.$t, t[u] = o) : (o = a.feed.title.$t, t[u] = o, num = a.feed.openSearch$totalResults.$t, i = parseInt((num - 1) / 200) + 1, pn[u] = i), u++
  }
  function rc_avatar1(t) {
    tt = t.feed.openSearch$totalResults.$t, tb = t.feed.title.$t, "uri" in t.feed.author[0] && (ura = t.feed.author[0].uri.$t), ima = t.feed.author[0].gd$image.src;
    for (g = 0; g < nc && g < tt && (c = t.feed.entry[g], g != t.feed.entry.length); g++) {
      if (lk = c.link[0].href, lk = lk.split("/"), bid = lk[4], pid = lk[5], cid = lk[8], d[g] = c["thr$in-reply-to"].href, -1 != y && (d[g] = d[g] + "?m=0"), pi[g] = c.gd$extendedProperty[0].value, ti[g] = c.gd$extendedProperty[1].value, p[g] = cid, "content" in c) var e = c.content.$t;
      else if ("summary" in c) e = c.summary.$t;
      else e = "&#8592;";
      if ((e = (e = (e = e.replace(/<br \/>/g, " ")).replace(/@<a.*?a>/g, "")).replace(/<[^>]*>/g, "")).length < length_content) j2[g] = e;
      else {
        var r = (e = e.substring(0, length_content)).lastIndexOf(" ");
        e = e.substring(0, r), j2[g] = e + "&#133;"
      }
      if (a2 = c.author[0].name.$t, a2.length < length_name) a[g] = a2;
      else {
        a2 = a2.substring(0, length_name);
        r = a2.lastIndexOf("");
        a2 = a2.substring(0, r), a[g] = a2 + "&#133;"
      }
      "uri" in c.author[0] && (ur[g] = c.author[0].uri.$t), "http://img1.blogblog.com/img/blank.gif" == c.author[0].gd$image.src ? (im[g] = no_avatar, alt[g] = "no avatar") : (im[g] = c.author[0].gd$image.src, alt[g] = a[g]), -1 != d[g].indexOf("/p/") ? document.write('<script type="text/javascript" src="https://www.blogger.com/feeds/' + bid + "/pages/default/" + pid + '?alt=json-in-script&callback=rc_avatar2"><\/script>') : document.write('<script type="text/javascript" src="' + home_page + "/feeds/" + pid + '/comments/default?alt=json-in-script&max-results=1&callback=rc_avatar2"><\/script>')
    }
  }
  function rc_avatar() {
    var e = "";
    for (e += "<ul>", z = 0; z < nc && z < tt; z++) {
      t[z] = t[z].replace("Comments on " + tb + ": ", "");
      var r = "";
      1 == pn[z] ? r = "#c" : (cp = "commentPage=" + pn[z] + "#c", r = -1 != y ? "&" + cp : "?" + cp), e += '<li class="', ur[z] == ura && im[z] == ima || ur[z] == admin_uri && im[z] == admin_avatar ? e += "rc-admin" : e += "rc-author", e += '"><div class="rc-info"><img alt="' + alt[z] + '" class="rc-avatar" src="' + im[z] + '"/><h4>' + a[z] + '</h4></div><a href="' + d[z] + r + p[z] + '" rel="nofollow" title="' + a[z] + " on " + t[z] + '"><p>' + j2[z] + "</p>", "true" != pi[z] && (e += "<span>" + ti[z] + "</span>"), e += '</a><div class="clear"></div></li>'
    }
    e += "</ul>", document.getElementById("rc-avatar-plus").innerHTML = e
  }
  tt = 0, u = 0, lk = [], d = [], p = [], pn = [], j2 = [], tb = [], t = [], pi = [], ti = [], a = [], im = [], alt = [], ur = [], ura = [], ima = [], ad = "duypham", loc = "http://", dot = ".", inf = "info", a3 = location.href, y = a3.indexOf("?m=0"), copyright_by_duypham_dot_info == "Recent Comments free version 3.2 by " + loc + ad + dot + inf && document.write('<script type="text/javascript" src="' + home_page + "/feeds/comments/default?alt=json-in-script&max-results=" + nc + '&callback=rc_avatar1"><\/script>');
  //]]>
</script>
<script type='text/javascript'>rc_avatar();
</script>
<!-- get số lượng comments -->
<script type='text/javascript'>
  //<![CDATA[
  function totalComments(json) {
    document.addEventListener("DOMContentLoaded", () => {
      var commentsCount = json.feed.openSearch$totalResults.$t
      document.getElementById('totalComments_bottom').innerHTML = commentsCount > 20 ? `Xem thêm ${commentsCount - 20} bình luận` : `Xem tất cả bình luận` 
      document.querySelector('.codepro-commentStart .more > *').title = `Xem ${commentsCount} bình luận`
      document.querySelector('.popup-comments').dataset.text = commentsCount
    });
  };
  document.write('<script type=\"text/javascript\" src=\"/feeds/comments/default?alt=json-in-script&max-results=0&callback=totalComments\"><\/script>');
  //]]>
