from fastapi import *
import uvicorn

app = FastAPI()

@app.post('/user')
async def add_user():
    return '{msg : Пользоватеоь успешно добавлен}'

if __name__ == '__main__':
    uvicorn.run(app=app, host="0.0.0.0", port=8000)