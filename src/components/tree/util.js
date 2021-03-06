export function closestNode(el, selector) {
  while (el !== null && el !== undefined) {
    if (el.matches(selector)) {
      return el;
    }
    el = el && el.parentElement;
  }
  return null;
}
/*
 *  @param el{nodeElement}
 *  @param selector{string}
 *  @param root{nodeElement}
 */
export function parentNode(el, selector, root) {
  el = el && el.parentElement;
  while (el !== null && el !== undefined) {
    if(root !== undefined && !root.hasChildNodes(el) && root !== el){
      return null;
    }
    else if (el.matches(selector)) {
      return el;
    }
    el = el && el.parentElement;
  }
  return null;
}
export function prevNode(el, selector) {
  el = el.previousElementSibling;
  while (el !== null && el !== undefined) {
    if (el.matches(selector)) {
      return el;
    }
    el = el.previousElementSibling;
  }
  return null;
}
export function nextNode(el, selector) {
  el = el.nextElementSibling;
  while (el !== null && el !== undefined) {
    if (el.matches(selector)) {
      return el;
    }
    el = el.nextElementSibling;
  }
  return null;
}
/*
*  @param e{object} mouse event
* */
export function elementFromPoint(e) {
  return document.elementFromPoint(e.pageX - (document.body.scrollLeft || window.pageXOffset), e.pageY - (window.pageYOffset || document.documentElement.scrollTop));
}
