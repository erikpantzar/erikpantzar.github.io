export function blogder() {
  const triggers = document.querySelectorAll('.cider__trigger');
  const body = document.body;

  for(let i=0; i<triggers.length; i++) {
    triggers[i].addEventListener('click', function(event) {
        event.preventDefault(event);

        reqwest(event.target.href, function(response) {
          handleResponse(response);

          history.pushState(null, null, event.target.href);
        });

        body.classList.toggle('new');
      });
    }
}

function handleResponse(response) {
  // make a goalie
  const goalie = document.createElement('div');
  goalie.innerHTML = response;

  const main = document.querySelector('main');
  if(main !== null) {
    main.classList.add('rider--sunset');
  }

  // add the new thing to the ain
  const targeter = document.createElement('main');
  targeter.classList = 'rider'
  const targetContent = goalie.querySelectorAll('#content')[0];

  targeter.appendChild(targetContent);
  document.body.appendChild(targeter);

  if(main !== null) {
    // dp cleanup
    window.setTimeout(()=> {
      main.parentNode.removeChild(main);
    }, 400);
  }
}
