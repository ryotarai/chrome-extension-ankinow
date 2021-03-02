(() => {
  const addToAnki = (headerElement: HTMLElement, linkElement: HTMLElement) => {
    linkElement.innerText = "Adding..."

    const bodyElement = headerElement.parentElement.querySelector("div.pos-body")

    chrome.runtime.sendMessage({
      type: "addToAnki",
      front: headerElement.innerHTML,
      back: bodyElement.innerHTML,
    }, (resp) => {
      linkElement.innerText = resp.message
    })
  }

  const domLoaded = () => {
    document.querySelectorAll("div.pos-header").forEach(e => {
      const node = document.createElement("div")
      node.style.cssText = "padding-left: 10px;"
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
