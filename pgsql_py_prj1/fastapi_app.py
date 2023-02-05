from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
import uvicorn
from py_data_access import get_marks_from_db
from fastapi.templating import Jinja2Templates

templates = Jinja2Templates(directory="template")


app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/student_marks")
def get_student_marks(request: Request):
    data = get_marks_from_db()
    return templates.TemplateResponse("student_marks_template.html", {"request": request,  "data": data})


@app.get("/student_marks_table")
def get_student_marks(request: Request):
    data = get_marks_from_db()
    return templates.TemplateResponse("student_marks_table_template.html", {"request": request,  "data": data})


if __name__ == '__main__':
    uvicorn.run(app, port=8080, host='0.0.0.0')
    # the above line starts an application server
    # application server is a combination of http server and programming run time
    # thus apache and nginx are web servers and not application servers but they can be converted to application servers by putting plugins in them
    # both application and web server speak http protocol at least

# http://0.0.0.0:8080/static/index.html
