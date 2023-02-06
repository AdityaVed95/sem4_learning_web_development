# the code in this file is determining behaviour of app server
# it describes the functionalities performed by the app server
from fastapi import FastAPI, Request, Response
from fastapi.staticfiles import StaticFiles
import uvicorn
from py_data_access import get_marks_from_db
from fastapi.templating import Jinja2Templates
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware

import json

templates = Jinja2Templates(directory="template")

# the below code "till here" is needed only if we are
# using react framework otherwise we can skip this part
# and instead just write "this part"

app = FastAPI(
    middleware=[
        Middleware(CORSMiddleware, allow_origins=["*"])
    ]
)
app.add_middleware(CORSMiddleware,
                   allow_origins=["*"],
                   allow_credentials=True,
                   allow_methods=["*"],
                   allow_headers=["*"]

                   )
# "till here"


# "this part" : app = FastAPI()


app.mount("/static", StaticFiles(directory="static"), name="static")
# this mounts the static files so that the files in static folder in the
# app server's file system can be accessed by clients


# this creates an endpoint , at this end point if the url request comes then
#  this function gets executed
@ app.get("/student_marks")
# APP Links
# http://192.168.29.14:8080/static/index.html
# http://192.168.29.14:8080/static/client_side_building_marks_table.html
# http://192.168.29.14:8080/student_marks_json
# http://192.168.29.14:8080/student_marks_table
# here 192.168.29.14 is the ip address of the app server which is listening at
# port 8080 for incoming requests
# so if client wants student_marks_table then client will put url as :
# http://192.168.29.14:8080/student_marks_table
# now request is recieved at respective endpoint and then the
# function inside the method of that endpoint gets executed to
# respond accordingly
def get_student_marks(request: Request):
    data = get_marks_from_db()
    return templates.TemplateResponse("student_marks_template.html", {"request": request,  "data": data})
# the above line returns the html file as a response to the client request
# this html file is generated dynamically using ninja template


@ app.get("/student_marks_table")
def get_student_marks_table(request: Request):
    data = get_marks_from_db()
    return templates.TemplateResponse("student_marks_table_template.html", {"request": request,  "data": data})


@ app.get("/student_marks_json")
def get_student_marks_as_json():
    data = get_marks_from_db()
    json_data = json.dumps(data)
    return Response(content=json_data, media_type="application/json")


if __name__ == '__main__':
    uvicorn.run(app, port=8080, host='0.0.0.0')
    # the above line starts an application server
    # application server is a combination of http server and programming run time
    # thus apache and nginx are web servers and not application servers but they can be converted to application servers by putting plugins in them
    # both application and web server speak http protocol at least

# http://0.0.0.0:8080/static/index.html
