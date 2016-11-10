(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.blogder = blogder;
function blogder() {
  var triggers = document.querySelectorAll('.cider__trigger');
  var body = document.body;

  for (var i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener('click', function (event) {
      event.preventDefault(event);

      reqwest(event.target.href, function (response) {
        handleResponse(response);
      });

      body.classList.toggle('new');
    });
  }
}

function handleResponse(response) {
  var goalie = document.createElement('div');
  goalie.innerHTML = response;

  var main = document.querySelector('main');
  main.classList.add('rider--sunset');

  var targeter = document.createElement('main');
  targeter.classList = 'rider';
  var targetContent = goalie.querySelectorAll('#content')[0];

  targeter.appendChild(targetContent);
  document.body.appendChild(targeter);

  window.setTimeout(function () {
    main.parentNode.removeChild(main);
  }, 400);
}

},{}],2:[function(require,module,exports){
'use strict';

var _blogder = require('./blogder');

(0, _blogder.blogder)();

},{"./blogder":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9ibG9nZGVyLmpzIiwianMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztRQ0FnQixPLEdBQUEsTztBQUFULFNBQVMsT0FBVCxHQUFtQjtBQUN4QixNQUFNLFdBQVcsU0FBUyxnQkFBVCxDQUEwQixpQkFBMUIsQ0FBakI7QUFDQSxNQUFNLE9BQU8sU0FBUyxJQUF0Qjs7QUFFQSxPQUFJLElBQUksSUFBRSxDQUFWLEVBQWEsSUFBRSxTQUFTLE1BQXhCLEVBQWdDLEdBQWhDLEVBQXFDO0FBQ25DLGFBQVMsQ0FBVCxFQUFZLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFVBQVMsS0FBVCxFQUFnQjtBQUNsRCxZQUFNLGNBQU4sQ0FBcUIsS0FBckI7O0FBRUEsY0FBUSxNQUFNLE1BQU4sQ0FBYSxJQUFyQixFQUEyQixVQUFTLFFBQVQsRUFBbUI7QUFDNUMsdUJBQWUsUUFBZjtBQUNELE9BRkQ7O0FBSUEsV0FBSyxTQUFMLENBQWUsTUFBZixDQUFzQixLQUF0QjtBQUNELEtBUkg7QUFTQztBQUNKOztBQUdELFNBQVMsY0FBVCxDQUF3QixRQUF4QixFQUFrQztBQUNoQyxNQUFNLFNBQVMsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQWY7QUFDQSxTQUFPLFNBQVAsR0FBbUIsUUFBbkI7O0FBRUEsTUFBSSxPQUFPLFNBQVMsYUFBVCxDQUF1QixNQUF2QixDQUFYO0FBQ0EsT0FBSyxTQUFMLENBQWUsR0FBZixDQUFtQixlQUFuQjs7QUFJQSxNQUFNLFdBQVcsU0FBUyxhQUFULENBQXVCLE1BQXZCLENBQWpCO0FBQ0EsV0FBUyxTQUFULEdBQXFCLE9BQXJCO0FBQ0EsTUFBTSxnQkFBZ0IsT0FBTyxnQkFBUCxDQUF3QixVQUF4QixFQUFvQyxDQUFwQyxDQUF0Qjs7QUFFQSxXQUFTLFdBQVQsQ0FBcUIsYUFBckI7QUFDQSxXQUFTLElBQVQsQ0FBYyxXQUFkLENBQTBCLFFBQTFCOztBQUVBLFNBQU8sVUFBUCxDQUFrQixZQUFLO0FBQ3JCLFNBQUssVUFBTCxDQUFnQixXQUFoQixDQUE0QixJQUE1QjtBQUNELEdBRkQsRUFFRyxHQUZIO0FBR0Q7Ozs7O0FDckNEOztBQUVBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBmdW5jdGlvbiBibG9nZGVyKCkge1xuICBjb25zdCB0cmlnZ2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaWRlcl9fdHJpZ2dlcicpO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuICBmb3IobGV0IGk9MDsgaTx0cmlnZ2Vycy5sZW5ndGg7IGkrKykge1xuICAgIHRyaWdnZXJzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoZXZlbnQpO1xuXG4gICAgICAgIHJlcXdlc3QoZXZlbnQudGFyZ2V0LmhyZWYsIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICB9KTtcblxuICAgICAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ25ldycpO1xuICAgICAgfSk7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gIGNvbnN0IGdvYWxpZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBnb2FsaWUuaW5uZXJIVE1MID0gcmVzcG9uc2U7XG5cbiAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gIG1haW4uY2xhc3NMaXN0LmFkZCgncmlkZXItLXN1bnNldCcpO1xuXG5cblxuICBjb25zdCB0YXJnZXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgdGFyZ2V0ZXIuY2xhc3NMaXN0ID0gJ3JpZGVyJ1xuICBjb25zdCB0YXJnZXRDb250ZW50ID0gZ29hbGllLnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb250ZW50JylbMF07XG5cbiAgdGFyZ2V0ZXIuYXBwZW5kQ2hpbGQodGFyZ2V0Q29udGVudCk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGFyZ2V0ZXIpO1xuXG4gIHdpbmRvdy5zZXRUaW1lb3V0KCgpPT4ge1xuICAgIG1haW4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtYWluKTtcbiAgfSwgNDAwKTtcbn1cbiIsImltcG9ydCB7IGJsb2dkZXIgfSBmcm9tICcuL2Jsb2dkZXInO1xuXG5ibG9nZGVyKCk7XG4iXX0=
