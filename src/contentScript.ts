(() => {
  const addToAnki = (midashiElement: HTMLElement, linkElement: HTMLElement) => {
    linkElement.innerText = "Adding..."

    const bodyElement = midashiElement.parentElement.querySelectorAll("div")[1].cloneNode(true) as HTMLElement
    bodyElement.querySelectorAll("span.kana").forEach(e => e.parentNode.removeChild(e))
    chrome.runtime.sendMessage({
      type: "addToAnki",
      front: midashiElement.innerText,
      back: bodyElement.innerHTML,
    }, (resp) => {
      linkElement.innerText = resp.message
    })
  }

  const domLoaded = () => {
    document.querySelectorAll("span.midashi").forEach(e => {
      const node = document.createElement("div")
      const link = document.createElement("a")
      link.href = "#"
      link.innerText = "Add to Anki"
      link.onclick = (ev) => {
        ev.preventDefault()
        addToAnki(e as HTMLElement, link)
      }
      node.appendChild(link)
      e.parentElement.insertBefore(node, e.nextSibling)
    })
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', domLoaded);
  } else {
    domLoaded();
  }
})()
