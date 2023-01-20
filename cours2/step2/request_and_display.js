function getRootElement() {
  let elements = document.getElementsByClassName("sc-bdVaJa fKGgoF");
  return elements[0];
}

let maListeAnnones = getRootElement()
let flatNode = maListeAnnones.firstChild
let price = parseInt(flatNode.querySelector('[data-test-id="price"]').textContent.replace("€", "").trim());
let link = flatNode.querySelector('[data-qa-id="aditem_container"]').href
