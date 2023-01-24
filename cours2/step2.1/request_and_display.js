function getRootElement() {
  let elements = document.getElementsByClassName("sc-bdVaJa fKGgoF");
  return elements[0];
}

function getFlatNodeInfo(flatNode) {
  let elements = flatNode.getElementsByClassName('sc-dzOgQY kXzKFE');
  return elements[0];
}

function getPriceNode(flatNodeInfo) {
  let elements = flatNodeInfo.getElementsByClassName('sc-jUpvKA WrYvg');
  return elements[0];
}

function getPriceDirectly(flatNode) {
  return parseInt(flatNode.querySelector('[data-test-id="price"]').textContent.replace("€", "").trim());
}

function getPrice(priceNode) {
  return parseInt(priceNode.textContent.replace("€", "").trim());
}

function getLink(flatNode) {
  let elements = flatNode.getElementsByClassName('sc-ekulBa gMprZt');
  return elements[0].href;
}

function getPriceAndLink(flatNode) {
  return {
    price: getPriceDirectly(flatNode),
    link: getLink(flatNode)
  }
}

function getPriceAndLinkList() {
  let flatNodesAsHtmlCollection = getRootElement().children;
  return [...flatNodesAsHtmlCollection].filter(flatNode => flatNode.id != "bigPicture")
                                       .filter(flatNode => flatNode.children.length != 0)
                                       .map(flatNode => getPriceAndLink(flatNode));
}