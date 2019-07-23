onload = function () {
  var left = $(".left");
  var right = $(".right");
  var index = 0;
  var u1 = $(".u1")
  var ind = 0
  // 大轮播图
  right.click(function () {
    index++;
    if (index == u1[0].children.length) {
      index = 0;
    }
    $(u1[0].children).fadeOut(100);
    u1.eq(0).find("> li").eq(index).fadeIn(100);
  })
  left.click(function () {
    index--;
    if (index == 0) {
      index = u1[0].children.length - 1
    }
    $(u1[0].children).fadeOut(100);
    u1.eq(0).find("> li").eq(index).fadeIn(100);
  })
			

  // 改变图片src
  var u2 = $(".u2");
  var img1 = $(".i1");
  for (var i = 0; i < 4; i++) {
    u2[0].children[i].onmouseover = function () {
      ind = $(this).index()
      img1[0].src = u2[0].children[ind].children[0].src
    }
    u2[0].children[i].onmouseout = function () {
      img1[0].src = json[0].imgUrl[0]
    }
  }
  for (var i = 0; i < 4; i++) {
    u2[1].children[i].onmouseover = function () {
      ind = $(this).index()
      img1[2].src = u2[1].children[ind].children[0].src
    }
    u2[1].children[i].onmouseout = function () {
      img1[2].src = json[2].imgUrl[0]
    }
  }
  for (var i = 0; i < 4; i++) {
    u2[2].children[i].onmouseover = function () {
      ind = $(this).index()
      img1[3].src = u2[2].children[ind].children[0].src
    }
    u2[2].children[i].onmouseout = function () {
      img1[3].src = json[3].imgUrl[0]
    }
  }
  for (var i = 0; i < 4; i++) {
    u2[3].children[i].onmouseover = function () {
      ind = $(this).index()
      img1[4].src = u2[3].children[ind].children[0].src
    }
    u2[3].children[i].onmouseout = function () {
      img1[4].src = json[4].imgUrl[0]
    }
  }
  for (var i = 0; i < 4; i++) {
    u2[4].children[i].onmouseover = function () {
      ind = $(this).index()
      img1[5].src = u2[4].children[ind].children[0].src
    }
    u2[4].children[i].onmouseout = function () {
      img1[5].src = json[5].imgUrl[0]
    }
  }
  for (var i = 0; i < 4; i++) {
    u2[5].children[i].onmouseover = function () {
      ind = $(this).index()
      img1[6].src = u2[5].children[ind].children[0].src
    }
    u2[5].children[i].onmouseout = function () {
      img1[6].src = json[6].imgUrl[0]
    }
  }
  for (var i = 0; i < 4; i++) {
    u2[6].children[i].onmouseover = function () {
      ind = $(this).index()
      img1[7].src = u2[6].children[ind].children[0].src
    }
    u2[6].children[i].onmouseout = function () {
      img1[7].src = json[7].imgUrl[0]
    }
  }
  for (var i = 0; i < 4; i++) {
    u2[7].children[i].onmouseover = function () {
      ind = $(this).index()
      img1[8].src = u2[7].children[ind].children[0].src
    }
    u2[7].children[i].onmouseout = function () {
      img1[8].src = json[8].imgUrl[0]
    }
  }
  for (var i = 0; i < 4; i++) {
    u2[8].children[i].onmouseover = function () {
      ind = $(this).index()
      img1[9].src = u2[8].children[ind].children[0].src
    }
    u2[8].children[i].onmouseout = function () {
      img1[9].src = json[9].imgUrl[0]
    }
  }
  for (var i = 0; i < 4; i++) {
    u2[9].children[i].onmouseover = function () {
      ind = $(this).index()
      img1[10].src = u2[9].children[ind].children[0].src
    }
    u2[9].children[i].onmouseout = function () {
      img1[10].src = "./images/0k1.jpg"
    }
  }
  for (var i = 0; i < 4; i++) {
    u2[10].children[i].onmouseover = function () {
      ind = $(this).index()
      img1[11].src = u2[10].children[ind].children[0].src
    }
    u2[10].children[i].onmouseout = function () {
      img1[11].src = "./images/0l1.jpg"
    }
  }

  // 圆点
  for (k = 0; k < u1[0].children.length; k++) {
    p = $("<p>");
    p.css({ "width": "16px", "height": "11px", "background": "#fff", "z-index": "999", "float": "left", "margin-left": "5px","cursor":"pointer" });
    p.addClass("p2")
    p.appendTo($(".circle"))
  }
  p2 = $(".p2")
  for (var l = 0; l < p2.length; l++) {
    p2[l].onclick = function () {
      ind = $(this).index();
      $(p2[ind]).css({"background":"rgb(95, 117, 133)"})
      $(u1[0].children).fadeOut(100);
      u1.eq(0).find("> li").eq(ind).fadeIn(100);
      index=ind
    }
  }
}
