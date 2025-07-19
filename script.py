from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.post("/visit")
async def visit(request: Request):
    data = await request.json()
    print("Новый посетитель:", data["ip"])  # Логируем в консоль Python
    return {"status": "OK"}
