
function mouseOver(elem) {
  elem.style.visibility = "visible";
  clearTimeout(mouseOver);
}

function mouseOut(elem) {
  elem.style.visibility = "hidden";
}

/*
function showMouseover() {
  let mouse= document.getElementById('corps_epaule');
  mouse.style.display = 'block';
}

function hideMouseover() {
  let mouse= document.getElementById('corps_epaule');
  mouse.style.display = 'none'
}
/*
let over = document.getElementById("corps_epaule")
over.addEventListener("mouseover" function( event ) {
  event.target.style.color = "grey";
  setTimeout(function() {
    event.target.style.color ="";
  }500);
}, false);
/*
<script>
  function show(id) {
    document.getElementById(id).style.visibility = "visible";
  }
  function hide(id) {
    document.getElementById(id).style.visibility = "hidden";
  }
</script>
*/
