function getRandom(min, max){
  return Math.random() * (max - min) + min;
}

var isSafari = /constructor/i.test(window.HTMLElement);
var isFF = !!navigator.userAgent.match(/firefox/i);

if (isSafari) {
  document.getElementsByTagName('html')[0].classList.add('safari');
}
initBt4();
// Button 4
function initBt4() {
  var btn = document.querySelectorAll('#component-4')[0];
  var bg = document.querySelectorAll('#component-4 .button')[0];
  var blob = document.querySelectorAll('#component-4 .blob');
  var filter = document.querySelector('#filter-goo-4 feGaussianBlur');

  btn.addEventListener('mousemove', function(e) {
    var x = (e.pageX - btn.offsetLeft - btn.offsetWidth / 2) * 0.6;
    var y = (e.pageY - btn.offsetTop - btn.offsetHeight / 2) * 0.6;

    TweenLite.to(blob[1], 4.2, { x: x, y: y, ease: Elastic.easeOut.config(1, 0.1) });
    TweenLite.to(blob[2], 2.8, { x: x, y: -y, ease: Elastic.easeOut.config(1, 0.1) });
    TweenLite.to(blob[3], 2.8, { x: -x, y: -y, ease: Elastic.easeOut.config(1, 0.1) });
    TweenLite.to(filter, 5, { onUpdate: function() { filter.setAttribute('x', 0); }});
  });

  btn.addEventListener('mouseup', function(e) {
    var x = e.pageX - btn.offsetLeft - blob[0].offsetWidth / 2;
    var y = e.pageY - btn.offsetTop - blob[0].offsetHeight / 2;

    var dirX = Math.random() > 0.5 ? -1 : 1;
    var dirY = Math.random() > 0.5 ? -1 : 1;
    var r = getRandom(60, 80);

    Array.prototype.slice.call(blob, 1).forEach(function(bt) {
      var tl = new TimelineLite();
      tl.to(bt, 1.2, { x: dirX * r * Math.random() + '%', y: dirY * r * Math.random() + '%', ease: Elastic.easeOut.config(1, 0.2) });
      tl.to(bt, 1.2, { x: '0%', y: '0%', ease: Elastic.easeOut.config(1, 0.2) }, '-=1.1');
    });
  });
}
