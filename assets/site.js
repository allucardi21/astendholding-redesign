(function(){
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
  if(btn&&nav){btn.addEventListener('click',function(){
    var open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',open);
  });}
  var form=document.querySelector('form.mail');
  if(form){form.addEventListener('submit',function(e){
    e.preventDefault();
    var f=form.elements,lines=[];
    ['name','phone','email'].forEach(function(k){if(f[k].value.trim())lines.push(f[k].dataset.label+': '+f[k].value.trim());});
    lines.push('',f.message.value.trim());
    var subject=f.subject.value.trim()||form.dataset.subject;
    location.href='mailto:astend.holding@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(lines.join('\n'));
  });}
})();
