from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()

# informações da rota para pagar dados daqui
app.add_middleware(
       CORSMiddleware,
       allow_methods=["*"],
       allow_headers=["*"],
       allow_credentials=True,
       allow_origins=["http://localhost:5173"]
)

# rota para rodar o front
@app.get('/get_data')
async def get_data():
        return {'body' : 'Player Tauz'}
        
# configuração de servidor        
if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=7777)