let maListeAnnones = document.getElementsByClassName("sc-bdVaJa fKGgoF")[0];

let flatNode = maListeAnnones.firstChild
let price = parseInt(flatNode.querySelector('[data-test-id="price"]').textContent.replace("€", "").trim());
let link = flatNode.querySelector('[data-qa-id="aditem_container"]').href
