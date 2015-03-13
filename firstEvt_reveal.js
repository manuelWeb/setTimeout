//(function () {// IEF protege variables})();// END IEF

  function fade_show(divId,lapsToShow) {
    $(divId)
    .css({'display':'block'})
    .animate({
      opacity: 1
    },lapsToShow);
  }
  var tabDia = $('#dia_container a'), tabDiaL = tabDia.length;
  for (var i = 0; i < tabDiaL; i++) {
    tabDia[i].style.display = 'none';
    tabDia[i].style.opacity = '0';
  }
  var tab1 = []; tab1.push(tabDia[0],tabDia[2]);
  var tab2 = []; tab2.push(tabDia[1],tabDia[3]);

  fade_show(tab1,1000);

  function showNextTab (argument) {
    if(tab1[0].style.display == 'block' && tab2[0].style.display == 'none'){
      fade_show(tab2,1000)
    }else{
      fctStart();
    }
  };

  var timeOut = setTimeout("showNextTab()", 3000);



