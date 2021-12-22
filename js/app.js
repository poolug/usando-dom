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
  let div = document.createElement('div');
  div.className = 'col-md-4 order-md-2 mb-4';

  let h4 = document.createElement('h4');
  h4.className = 'd-flex justify-content-between align-items-center mb-3';
  div.appendChild(h4);
  
  let span1 = document.createElement('span');
  let spanText1 = document.createTextNode('Your cart');
  span1.className = 'text-muted';
  span1.appendChild(spanText1);

  let span2 = document.createElement('span');
  let spanText2 = document.createTextNode('3');
  span2.className = 'badge badge-secondary badge-pill';
  span2.appendChild(spanText2);

  h4.appendChild(span1) && h4.appendChild(span2);

  let ul = document.createElement('ul');
  ul.className = 'list-group mb-3';
  div.appendChild(ul);

  let liClass = className = 'list-group-item d-flex justify-content-between lh-condensed';

  ul.appendChild(li1()) && ul.appendChild(li2()) && ul.appendChild(li3()) && ul.appendChild(li4()) && ul.appendChild(li5());
  div.appendChild(form());

  function li1(){
    let li1 = document.createElement('li');
    li1.className = liClass;
    ul.appendChild(li1);

    let DivLi1 = document.createElement('div');

    let DivLi1H6 = document.createElement('h6');
    DivLi1H6.className = 'my-0';
    let DivLi1H6Text = document.createTextNode('Product name');
    DivLi1H6.appendChild(DivLi1H6Text);

    let Small1 = document.createElement('small');
    Small1.className = 'text-muted';
    let SmallText = document.createTextNode('Brief description');
    Small1.appendChild(SmallText);
    
    let SpanLi1 = document.createElement('span');
    SpanLi1.className = 'text-muted';
    let SpanLi1Text = document.createTextNode('$12');
    SpanLi1.appendChild(SpanLi1Text);

    DivLi1.appendChild(DivLi1H6) && DivLi1.appendChild(Small1);

    li1.appendChild(DivLi1) && li1.appendChild(SpanLi1);

    return li1;
  }

  function li2(){
    let li2 = document.createElement('li');
    li2.className = liClass;
    ul.appendChild(li2);

    let Divli2 = document.createElement('div');

    let Divli2H6 = document.createElement('h6');
    Divli2H6.className = 'my-0';
    let Divli2H6Text = document.createTextNode('Second product');
    Divli2H6.appendChild(Divli2H6Text);

    let Small1 = document.createElement('small');
    Small1.className = 'text-muted';
    let SmallText = document.createTextNode('Brief description');
    Small1.appendChild(SmallText);
    
    let Spanli2 = document.createElement('span');
    Spanli2.className = 'text-muted';
    let Spanli2Text = document.createTextNode('$8');
    Spanli2.appendChild(Spanli2Text);

    Divli2.appendChild(Divli2H6) && Divli2.appendChild(Small1);

    li2.appendChild(Divli2) && li2.appendChild(Spanli2);
    
    return li2;
  }

  function li3(){
    let li3 = document.createElement('li');
    li3.className = liClass;
    ul.appendChild(li3);

    let Divli3 = document.createElement('div');

    let Divli3H6 = document.createElement('h6');
    Divli3H6.className = 'my-0';
    let Divli3H6Text = document.createTextNode('Third item');
    Divli3H6.appendChild(Divli3H6Text);

    let Small1 = document.createElement('small');
    Small1.className = 'text-muted';
    let SmallText = document.createTextNode('Brief description');
    Small1.appendChild(SmallText);
    
    let Spanli3 = document.createElement('span');
    Spanli3.className = 'text-muted';
    let Spanli3Text = document.createTextNode('$5');
    Spanli3.appendChild(Spanli3Text);

    Divli3.appendChild(Divli3H6) && Divli3.appendChild(Small1);

    li3.appendChild(Divli3) && li3.appendChild(Spanli3);
    
    return li3;
  }
  
  function li4(){
    let li4 = document.createElement('li');
    li4.className = 'list-group-item d-flex justify-content-between bg-light';
    ul.appendChild(li4);

    let Divli4 = document.createElement('div');
    Divli4.className = 'text-success';

    let Divli4H6 = document.createElement('h6');
    Divli4H6.className = 'my-0';
    let Divli4H6Text = document.createTextNode('Promo code');
    Divli4H6.appendChild(Divli4H6Text);

    let Small1 = document.createElement('small');
    let SmallText = document.createTextNode('EXAMPLECODE');
    Small1.appendChild(SmallText);
    
    let Spanli4 = document.createElement('span');
    Spanli4.className = 'text-success';
    let Spanli4Text = document.createTextNode('-$5');
    Spanli4.appendChild(Spanli4Text);

    Divli4.appendChild(Divli4H6) && Divli4.appendChild(Small1);

    li4.appendChild(Divli4) && li4.appendChild(Spanli4);
    
    return li4;
  }

  function li5(){
    let li5 = document.createElement('li');
    li5.className = 'list-group-item d-flex justify-content-between';
    ul.appendChild(li5);
    
    let SpanLi5 = document.createElement('span');
    SpanLi5.className = 'text-muted';
    let SpanLi5Text = document.createTextNode('Total (USD)');
    SpanLi5.appendChild(SpanLi5Text);

    let StrongLi5 = document.createElement('strong');
    let StrongLi5Text = document.createTextNode('$20');
    StrongLi5.appendChild(StrongLi5Text);

    li5.appendChild(SpanLi5) && li5.appendChild(StrongLi5);
    
    return li5;
  }

  function form(){
    let form = document.createElement('form');
      form.className = 'card p-2';

      function divForm(){
        let div = document.createElement('div');
        div.className = 'input-group';

        let inputDiv = document.createElement('input');
        inputDiv.setAttribute('type', 'text') + inputDiv.setAttribute('placeholder', 'Promo code');
        inputDiv.className = 'form-control';

        let div2 = document.createElement('div');
        div2.className = 'input-group-append';

        let buttonDiv2 = document.createElement('button');
        buttonDiv2.setAttribute('type','submit');
        buttonDiv2.className = 'btn btn-secondary';
        let buttonDiv2Text = document.createTextNode('Redeem');
        buttonDiv2.appendChild(buttonDiv2Text);

        div.appendChild(inputDiv) && div.appendChild(div2) && div2.appendChild(buttonDiv2);

        return div;
      }
      form.appendChild(divForm());

    return form;
  }

  return div;
}

function rowCol8() {
  let div = document.createElement('div');
  div.className = 'col-md-8 order-md-1';

  let divH4 = document.createElement('h4');
  divH4.className = 'mb-3';
  let divH4Text = document.createTextNode('Billing address');
  divH4.appendChild(divH4Text);

  div.appendChild(divH4);

  function form(){
    let form = document.createElement('form');
    form.className = 'needs-validation';
    form.setAttribute('novalidate','');

    function row1Form(){
      let row = document.createElement('div');
      row.className = 'row';

      function divRowCol6a() {
        let div1Row = document.createElement('div');
        div1Row.className = 'col-md-6 mb-3';

        let labelDiv1Row = document.createElement('label');
        labelDiv1Row.setAttribute('for','firstName');
        let labelDiv1RowText = document.createTextNode('First name');
        labelDiv1Row.appendChild(labelDiv1RowText);

        let inputDiv1Row = document.createElement('input');
        inputDiv1Row.setAttribute('type','text');
        inputDiv1Row.className = 'form-control';
        inputDiv1Row.setAttribute('id','firstName') + inputDiv1Row.setAttribute('placeholder','');
        inputDiv1Row.setAttribute('value','') + inputDiv1Row.setAttribute('required','');
        
        let div = document.createElement('div');
        div.className = 'invalid-feedback';
        let divText = document.createTextNode('Valid first name is required. ');
        div.appendChild(divText);
        
        div1Row.appendChild(labelDiv1Row) && div1Row.appendChild(inputDiv1Row) && div1Row.appendChild(div);

        return div1Row
      }

      function divRowCol6b() {
        let div1Row = document.createElement('div');
        div1Row.className = 'col-md-6 mb-3';

        let labelDiv1Row = document.createElement('label');
        labelDiv1Row.setAttribute('for','lastName');
        let labelDiv1RowText = document.createTextNode('Last name');
        labelDiv1Row.appendChild(labelDiv1RowText);

        let inputDiv1Row = document.createElement('input');
        inputDiv1Row.setAttribute('type','text');
        inputDiv1Row.className = 'form-control';
        inputDiv1Row.setAttribute('id','lastName') + inputDiv1Row.setAttribute('placeholder','');
        inputDiv1Row.setAttribute('value','') + inputDiv1Row.setAttribute('required','');
        
        let div = document.createElement('div');
        div.className = 'invalid-feedback';
        let divText = document.createTextNode('Valid last name is required. ');
        div.appendChild(divText);
        
        div1Row.appendChild(labelDiv1Row) && div1Row.appendChild(inputDiv1Row) && div1Row.appendChild(div);

        return div1Row
      }
      row.appendChild(divRowCol6a()) && row.appendChild(divRowCol6b());

      return row;
    }
    
    function divsForm(){
      let div1 = document.createElement('div');
      div1.className = 'mb-3';
      let label = document.createElement('label');
      label.setAttribute('for','username')
      let labelText = document.createTextNode('Username')
      label.appendChild(labelText) && div1.appendChild(label);

      let div1a = document.createElement('div');
      div1a.className = 'input-group';
      let div1ab = document.createElement('div');
      div1ab.className = 'input-group-preprend';
      div1a.appendChild(div1ab);
      let spanDiv1ab = document.createElement('span');
      spanDiv1ab.className = 'input-group-text';
      let spanDiv1abText = document.createTextNode('@');
      spanDiv1ab.appendChild(spanDiv1abText);
      div1ab.appendChild(spanDiv1ab);
      let inputDiv1a = document.createElement('input');
      inputDiv1a.setAttribute('type','text') + inputDiv1a.setAttribute('id','username') + inputDiv1a.setAttribute('placeholder','Username');
      inputDiv1a.className = 'form-control';
      inputDiv1a.setAttribute('required','')
      div1a.appendChild(inputDiv1a);
      let div1a2 = document.createElement('div');
      div1a2.className = 'invalid-feedback';
      div1a2.setAttribute('style','100%;');
      div1a2Text = document.createTextNode('Your username is required.');
      div1a2.appendChild(div1a2Text);
      div1a.appendChild(div1a2);

      div1.appendChild(div1a);

      return div1;
    }

    form.appendChild(row1Form()) && form.appendChild(divsForm());

    return form;
  }
  div.appendChild(form());

  return div;
}

body.appendChild(divs());
