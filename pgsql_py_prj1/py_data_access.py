import psycopg2


def get_marks_from_db():
    conn = psycopg2.connect(
        host="192.168.29.198",
        port="5432",
        dbname="studentdb",
        user="adb",
        password="adbpass"
    )
    cur = conn.cursor()

    print(cur)

    cur.execute("select * from exam_marks")
    data = cur.fetchall()
    print(type(data))
    print(data)

    return data


tuple_ds = get_marks_from_db()
for item in tuple_ds:
    print(item)
