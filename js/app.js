var body = document.getElementsByTagName('body')[0];
body.className = 'bg-light'

function header() {
  let div = document.createElement('div');
  div.className = 'py-5 text-center';
  let img = document.createElement('img');
  img.className = 'd-block mx-auto mb-4';
  img.src = 'https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg';
  img.width = 72;
  img.height = 72;
  div.appendChild(img);

  let h2 = document.createElement('h2');
  h2.appendChild(document.createTextNode('Checkout form'));
  div.appendChild(h2);

  let p = document.createElement('p');
  p.className = 'lead';
  p.appendChild(document.createTextNode('Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.'));
  div.appendChild(p);

  return div;
}

function divs() {
  let div = document.createElement('div');
  div.className = 'container';
  
  div.appendChild(body.appendChild(header()));
  div.appendChild(body.appendChild(row()));

  return div;
}

function row() {
  let div = document.createElement('div');
  div.className = 'row';

  div.appendChild(rowCol4());
  div.appendChild(rowCol8());

  return div;
}

function rowCol4() {
  // let div = document.createElement('div');
  // div.className = 'row';

  let div = document.createElement('div');
  div.className = 'col-md-4 order-md-2 mb-4';

  let h4 = document.createElement('h4');
  h4.className = 'd-flex justify-content-between align-items-center mb-3';
  div.appendChild(h4);
  
  let span1 = document.createElement('span');
  let spanText1 = document.createTextNode('Your Cart');
  span1.className = 'text-muted';
  span1.appendChild(spanText1);

  let span2 = document.createElement('span');
  let spanText2 = document.createTextNode('3');
  span2.className = 'badge badge-secondary badge-pill';
  span2.appendChild(spanText2);

  h4.appendChild(span1);
  h4.appendChild(span2);

  let ul = document.createElement('ul');
  ul.className = 'list-group mb-3';

  let li1 = document.createElement('li');
  li1.className = 'list-group-item d-flex justify-content-between lh-condensed';
  ul.appendChild(li1);

  let DivLi1 = document.createElement('div');

  let DivLi1H6 = document.createElement('h6');
  DivLi1H6.className = 'my-0';
  let DivLi1H6Text = document.createTextNode('Product name');
  
  DivLi1H6.appendChild(DivLi1H6Text);
  
  DivLi1.appendChild(DivLi1H6);
  
  li1.appendChild(DivLi1);

  div.appendChild(ul);

  return div;
}

function rowCol8() {
  let div = document.createElement('div');
  div.className = 'col-md-8 order-md-1';

  return div;
}

body.appendChild(divs());
