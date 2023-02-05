# from typing import Union
# from fastapi import FastAPI , Response
# from fastapi.staticfiles import StaticFiles


# app = FastAPI()

# @app.get("/static/{file_path:path}")
# async def static_files(file_path: str):
#     response = Response(content=app.get_file_content("static"))
#     response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
#     return response

# app.mount("/static", StaticFiles(directory="static"), name = "static")
# # app.mount("/static", app.get_static_directory(), name="static")


# main workable : 
from typing import Union
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name = "static")