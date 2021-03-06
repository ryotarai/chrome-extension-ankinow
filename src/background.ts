const getSyncStorage = (key = null) => new Promise(resolve => {
    chrome.storage.sync.get(key, resolve);
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    switch (request.type) {
    case "addToAnki":
        (async () => {
            const items: any = await getSyncStorage({ deckName: "" })
            if (items.deckName === "") {
                sendResponse({
                    message: "Please set deck name in options page first",
                })
                return
            }

            const response = await fetch("http://127.0.0.1:8765", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    action: "addNote",
                    version: 6,
                    params: {
                        note: {
                            deckName: items.deckName,
                            modelName: "Basic",
                            fields: {
                                "Front": request.front,
                                "Back": request.back,
                            },
                        },
                    },
                }),
            })
            if (response.ok) {
                sendResponse({
                    message: "Successfully added a note to Anki",
                })
            } else {
                const body = await response.text
                sendResponse({
                    message: `Failed to add a note to Anki. Please make sure AnkiConnect is installed and Anki app is running. (${body})`,
                })
            }
        })().catch(err => {
            console.error(err)
            sendResponse({
                message: `Failed to add a note to Anki. Please make sure AnkiConnect is installed and Anki app is running. (${err})`,
            })
        })
        return true
    }
    console.error(`unknown request: ${request}`)
});