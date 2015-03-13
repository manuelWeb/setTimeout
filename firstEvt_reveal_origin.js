(function () {// IEF protege variables
  // raccourci getElemntById : _id(monId)
  function _id (id) {
    return document.getElementById(id);
  }
  function fade_show(divId,lapsToShow) {
    $(divId)
    .css({'display':'block'})
    .animate({
      opacity: 1
    },lapsToShow);
  }
  function fade_hide(divId,lapsToHide) {
    // alert(divId)
    $(divId).animate({
      opacity:0
    },lapsToHide,function (){
      $(this).css({'display':'none'})
    });
  };

  function showDiv() {
    // console.log(arguments[0])
    var argL = parseFloat(arguments[0].length),
        tab = [];
    for (var i = 0; i < argL; i++) {
      // si js active on masque toutes les dia
      _id(arguments[0][i]).style.display = 'none';
      _id(arguments[0][i]).style.opacity = '0';
      // console.log(arguments[0][i])
      tab.push(arguments[0][i]);
    };// recup ID -> tab[]

    var indexDiapo = 0,
        timePause=3000;
    var show = setInterval(function () {
      var idArg = tab[indexDiapo],
          diiv = _id(idArg);
      // setTimeout(function function_name () {},600);
      if(idArg){
        fade_show(diiv);
        // console.log(idArg);
      };
      if(!idArg){// idArg === undefined
        clearInterval(show);
        // console.log('clear');
        showNext();
        // showDiv(get_dia('dia_container'));
      };
      indexDiapo++;
    },timePause);
    
    function showNext () {
      var tab2 = [];
      for (var i = 0; i < tab.length; i++) {
        tab2.push(tab[i]);
        // console.info(_id(tab[i]))
        _id(tab[i]).style.zIndex = '0';
      };
      var count = 0; 
      var show2 = setInterval(function () {
        if(tab[count]!=undefined){
          _id(tab[count]).style.zIndex = 1;
          // console.log(_id(tab[count]));
        }else{
          clearInterval(show2);
          // console.log('clear');
          showNext();
        }
        count++;
      },timePause)
    }

    function hideAll (tab,tabl,sto) {
      clearTimeout(sto);
      // console.log(tab)
      for (var i = 0; i < tabl; i++) {
        var elmntsTohide = _id(tab[i]);
        fade_hide(elmntsTohide);
      };   
    };

  };// END showDiv

  function get_dia (argument) {
    var dias = document.getElementById(argument).children,
        diasL= dias.length,
        diasTab=[],
        diaIndex=0;
    for (diaIndex; diaIndex < diasL; diaIndex++) {
      diasTab.push(dias[diaIndex].id);
      if(diaIndex==diasL-1){
        // alert(diasTab);
        return diasTab;
      }
    };
  };

  showDiv(get_dia('dia_container'));

})();// END IEF