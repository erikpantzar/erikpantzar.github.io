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

        history.pushState(null, null, event.target.href);
      });

      body.classList.toggle('new');
    });
  }
}

function handleResponse(response) {
  // make a goalie
  var goalie = document.createElement('div');
  goalie.innerHTML = response;

  var main = document.querySelector('main');
  if (main !== null) {
    main.classList.add('rider--sunset');
  }

  // add the new thing to the ain
  var targeter = document.createElement('main');
  targeter.classList = 'rider';
  var targetContent = goalie.querySelectorAll('#content')[0];

  targeter.appendChild(targetContent);
  document.body.appendChild(targeter);

  if (main !== null) {
    // dp cleanup
    window.setTimeout(function () {
      main.parentNode.removeChild(main);
    }, 400);
  }
}

},{}],2:[function(require,module,exports){
'use strict';

var _blogder = require('./blogder');

(0, _blogder.blogder)();

},{"./blogder":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9ibG9nZGVyLmpzIiwianMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztRQ0FnQixPLEdBQUEsTztBQUFULFNBQVMsT0FBVCxHQUFtQjtBQUN4QixNQUFNLFdBQVcsU0FBUyxnQkFBVCxDQUEwQixpQkFBMUIsQ0FBakI7QUFDQSxNQUFNLE9BQU8sU0FBUyxJQUF0Qjs7QUFFQSxPQUFJLElBQUksSUFBRSxDQUFWLEVBQWEsSUFBRSxTQUFTLE1BQXhCLEVBQWdDLEdBQWhDLEVBQXFDO0FBQ25DLGFBQVMsQ0FBVCxFQUFZLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFVBQVMsS0FBVCxFQUFnQjtBQUNsRCxZQUFNLGNBQU4sQ0FBcUIsS0FBckI7O0FBRUEsY0FBUSxNQUFNLE1BQU4sQ0FBYSxJQUFyQixFQUEyQixVQUFTLFFBQVQsRUFBbUI7QUFDNUMsdUJBQWUsUUFBZjs7QUFFQSxnQkFBUSxTQUFSLENBQWtCLElBQWxCLEVBQXdCLElBQXhCLEVBQThCLE1BQU0sTUFBTixDQUFhLElBQTNDO0FBQ0QsT0FKRDs7QUFNQSxXQUFLLFNBQUwsQ0FBZSxNQUFmLENBQXNCLEtBQXRCO0FBQ0QsS0FWSDtBQVdDO0FBQ0o7O0FBRUQsU0FBUyxjQUFULENBQXdCLFFBQXhCLEVBQWtDO0FBQ2hDO0FBQ0EsTUFBTSxTQUFTLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFmO0FBQ0EsU0FBTyxTQUFQLEdBQW1CLFFBQW5COztBQUVBLE1BQU0sT0FBTyxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLE1BQUcsU0FBUyxJQUFaLEVBQWtCO0FBQ2hCLFNBQUssU0FBTCxDQUFlLEdBQWYsQ0FBbUIsZUFBbkI7QUFDRDs7QUFFRDtBQUNBLE1BQU0sV0FBVyxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBakI7QUFDQSxXQUFTLFNBQVQsR0FBcUIsT0FBckI7QUFDQSxNQUFNLGdCQUFnQixPQUFPLGdCQUFQLENBQXdCLFVBQXhCLEVBQW9DLENBQXBDLENBQXRCOztBQUVBLFdBQVMsV0FBVCxDQUFxQixhQUFyQjtBQUNBLFdBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEIsUUFBMUI7O0FBRUEsTUFBRyxTQUFTLElBQVosRUFBa0I7QUFDaEI7QUFDQSxXQUFPLFVBQVAsQ0FBa0IsWUFBSztBQUNyQixXQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBNEIsSUFBNUI7QUFDRCxLQUZELEVBRUcsR0FGSDtBQUdEO0FBQ0Y7Ozs7O0FDM0NEOztBQUVBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBmdW5jdGlvbiBibG9nZGVyKCkge1xuICBjb25zdCB0cmlnZ2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaWRlcl9fdHJpZ2dlcicpO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuICBmb3IobGV0IGk9MDsgaTx0cmlnZ2Vycy5sZW5ndGg7IGkrKykge1xuICAgIHRyaWdnZXJzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoZXZlbnQpO1xuXG4gICAgICAgIHJlcXdlc3QoZXZlbnQudGFyZ2V0LmhyZWYsIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xuXG4gICAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgZXZlbnQudGFyZ2V0LmhyZWYpO1xuICAgICAgICB9KTtcblxuICAgICAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ25ldycpO1xuICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVSZXNwb25zZShyZXNwb25zZSkge1xuICAvLyBtYWtlIGEgZ29hbGllXG4gIGNvbnN0IGdvYWxpZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBnb2FsaWUuaW5uZXJIVE1MID0gcmVzcG9uc2U7XG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgaWYobWFpbiAhPT0gbnVsbCkge1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgncmlkZXItLXN1bnNldCcpO1xuICB9XG5cbiAgLy8gYWRkIHRoZSBuZXcgdGhpbmcgdG8gdGhlIGFpblxuICBjb25zdCB0YXJnZXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgdGFyZ2V0ZXIuY2xhc3NMaXN0ID0gJ3JpZGVyJ1xuICBjb25zdCB0YXJnZXRDb250ZW50ID0gZ29hbGllLnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb250ZW50JylbMF07XG5cbiAgdGFyZ2V0ZXIuYXBwZW5kQ2hpbGQodGFyZ2V0Q29udGVudCk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGFyZ2V0ZXIpO1xuXG4gIGlmKG1haW4gIT09IG51bGwpIHtcbiAgICAvLyBkcCBjbGVhbnVwXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCk9PiB7XG4gICAgICBtYWluLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobWFpbik7XG4gICAgfSwgNDAwKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgYmxvZ2RlciB9IGZyb20gJy4vYmxvZ2Rlcic7XG5cbmJsb2dkZXIoKTtcbiJdfQ==
