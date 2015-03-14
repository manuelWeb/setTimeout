//(function () {// IEF protege variables})();// END IEF

  function fade_show(divId, speed) {
    $(divId)
    .css({'display':'block'})
    .animate({
      opacity: 1
    }, speed);
  };
  function inc_zindex(divId, speed, zIndex1) {
    $(divId)
    .animate({opacity:0}, 0)
    .css('z-index','2')
    .animate({
      opacity: 1
    }, speed);
    $(zIndex1).css('z-index','1')
  };
  var tabDia = $('#dia_container a'),
  tabDiaL    = tabDia.length;

  for (var i = 0; i < tabDiaL; i++) {
    tabDia[i].style.display = 'none';
    tabDia[i].style.opacity = '0';
  }
  var tab1 = [],
  tab2     = [];
  tab1.push(tabDia[0],tabDia[2]);
  tab2.push(tabDia[1],tabDia[3]);

  fade_show(tab1,1000);

  function showNextTab (argument) {
    if(tab1[0].style.display == 'block' && tab2[0].style.display == 'none' && tab2[0].style.zIndex == ''){
      fade_show(tab2,1000);
      console.log('et maintenant ?');
      setTimeout("showNextTab()", 3000);
    }else{
      inc_zindex(tab1,1000,tab2);
      console.log("tab1=opacity:0> z-index2 + opacity:1");

      setTimeout("toggle_zIndex()", 3000)
    }
  };
  function toggle_zIndex () {
    if(tab2[0].style.zIndex == 1){
      inc_zindex(tab2,1000,tab1);
      setTimeout("toggle_zIndex()", 3000)
    }else{
      inc_zindex(tab1,1000,tab2);
      console.log('ici?')
      setTimeout("toggle_zIndex()", 3000)
    }
  }

  setTimeout("showNextTab()", 3000);
