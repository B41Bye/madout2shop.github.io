// Отправляем данные на сервер при загрузке страницы
fetch("https://010101.pythonanywhere.com/vist", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        ip: window.location.hostname,
        userAgent: navigator.userAgent,
        time: new Date().toLocaleString()
    })
});
