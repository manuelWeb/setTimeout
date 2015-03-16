function fade_show(divId, speed) {
  $(divId)
    .css({
      'display': 'block'
    })
    .animate({
      opacity: 1
    }, speed);
}

function inc_zindex(divId, speed, zIndex1) {
  $(divId)
    .animate({
      opacity: 0
    }, 0)
    .css('z-index', '2')
    .animate({
      opacity: 1
    }, speed);
  $(zIndex1).css('z-index', '1');
}
var tabDia = $('#dia_container a'),
  tabDiaL = tabDia.length;

for (var i = 0; i < tabDiaL; i++) {
  tabDia[i].style.display = 'none';
  tabDia[i].style.opacity = '0';
}

var tab1_evtFirst = [],
  tab2_evtFirst = [];
tab1_evtFirst.push(tabDia[0], tabDia[2]); // pck1 (right) + pck3 (left)
tab2_evtFirst.push(tabDia[1], tabDia[3]); // pck2 (right) + pck4 (left)

// on affiche tab1_evtFirst puis 3s plus tard tab2_evtFirst
fade_show(tab1_evtFirst, 1000);
setTimeout(function () {
  showNextTab();
}, 3000);

function showNextTab() {
  if (tab1_evtFirst[0].style.display == 'block' && tab2_evtFirst[0].style.display == 'none' && tab2_evtFirst[0].style.zIndex === '') {
    fade_show(tab2_evtFirst, 1000);
    // puis 3s plus tard on passe à toog_zIndex premier if
    setTimeout(function() {
      toggle_zIndex();
    }, 3000);
  }
}

function toggle_zIndex() {
  if (tab2_evtFirst[0].style.zIndex === '') {
    // tab1_evtFirst opactity:0; tab1_evtFirst z-index:2; tab1_evtFirst opactity:1; tab2_evtFirst z-index:1
    inc_zindex(tab1_evtFirst, 1000, tab2_evtFirst);
    // puis 3s plus tard toggle_zIndex else if 2
    setTimeout(function (argument) {
      toggle_zIndex();
    }, 3000);
  } else if (tab2_evtFirst[0].style.zIndex == 1) {
    inc_zindex(tab2_evtFirst, 1000, tab1_evtFirst);
    setTimeout(function () {
      toggle_zIndex();
    }, 3000);
  } else {
    inc_zindex(tab1_evtFirst, 1000, tab2_evtFirst);
    setTimeout(function () {
      toggle_zIndex();
    }, 3000);
  }
}
