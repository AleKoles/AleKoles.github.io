function toggleDiv(divid) {
  let varon = divid + "on";
  let varoff = divid + "off";

  if (document.getElementById(varon).style.display == "block") {
    document.getElementById(varon).style.display = "none";
    document.getElementById(varoff).style.display = "block";
  } else {
    document.getElementById(varoff).style.display = "none";
    document.getElementById(varon).style.display = "block";
  }
}
