from typing import Dict

import uvicorn
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root() -> Dict[str, str]:
    return {"message": "hello :)"}

@app.post("/prompt")
async def post_prompt(prompt: str) -> Dict[str, str]:
    return {"message": f"The following prompt was submitted: {prompt}"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8080, log_level="info")
