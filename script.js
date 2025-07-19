fetch("https://api.github.com/repos/ваш-логин/ваш-репозиторий/dispatches", {
    method: "POST",
    headers: {
        "Authorization": "token YOUR_GITHUB_TOKEN",
        "Accept": "application/vnd.github.everest-preview+json"
    },
    body: JSON.stringify({
        event_type: "new_visitor",
        client_payload: {
            ip: window.location.hostname,
            userAgent: navigator.userAgent,
            time: new Date().toISOString()
        }
    })
}).catch(e => console.error("Ошибка:", e));
