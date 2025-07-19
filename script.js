// Отправляем данные на сервер при загрузке страницы
fetch("https://ваш-сервер.com/visit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        ip: window.location.hostname,
        userAgent: navigator.userAgent,
        time: new Date().toLocaleString()
    })
});
