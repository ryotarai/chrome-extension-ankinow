(() => {
  const addToAnki = (div: HTMLElement, linkElement: HTMLElement) => {
    linkElement.innerText = "Adding..."

    const front = (div.querySelector("div.word") as HTMLElement).innerText
    const backElement = (div.querySelector("div.desc") as HTMLElement).cloneNode(true) as HTMLElement
    backElement.querySelectorAll("div.sound_f").forEach(e => e.parentNode.removeChild(e))
    const back = backElement.innerHTML

    chrome.runtime.sendMessage({
      type: "addToAnki",
      front: front,
      back: back,
    }, (resp) => {
      linkElement.innerText = resp.message
    })
  }

  const domLoaded = () => {
    document.querySelectorAll("div.list").forEach(e => {
      const node = document.createElement("div")
      const link = document.createElement("a")
      link.href = "#"
      link.innerText = "Add to Anki"
      link.onclick = (ev) => {
        ev.preventDefault()
        addToAnki(e as HTMLElement, link)
      }
      node.appendChild(link)
      node.style.cssText = "padding-left: 5%; clear: both;"
      e.insertBefore(node, e.querySelector("div.desc"))
    })
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', domLoaded);
  } else {
    domLoaded();
  }
})()
