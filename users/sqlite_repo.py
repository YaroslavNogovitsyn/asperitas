from tools.misc import get_connection_cursor
from users.user import UserRepo, User


class SqliteUsersRepo(UserRepo):
    def __init__(self, name):
        self.name = name

    def get_all(self):
        query = """SELECT id, username, password
                    FROM users"""
        con, cur = get_connection_cursor(self.name)
        results = cur.execute(query).fetchall()
        res = list()
        for elem in results:
            res.append(User(id=elem[0], username=elem[1], password=elem[2]))
        con.close()
        return res

    def get_by_id(self, id_):
        query = """SELECT id, username, password
                    FROM users
                    WHERE id = ?"""
        con, cur = get_connection_cursor(self.name)
        result = cur.execute(query, (id_,)).fetchone()
        if result is None:
            con.close()
            return None
        con.close()
        return User(id=result[0], username=result[1], password=result[2])

    def get_by_name(self, name):
        query = """SELECT id, username, password
                                    FROM users
                                    WHERE username = ?"""
        con, cur = get_connection_cursor(self.name)
        result = cur.execute(query, (name,)).fetchone()
        if result is None:
            con.close()
            return None
        con.close()
        return User(id=result[0], username=result[1], password=result[2])

    def request_create(self, username, password):
        found = self.get_by_name(username)
        if found:
            return None  # пользователь с таким именем уже есть
        query = """INSERT INTO users(username, password)
                VALUES (?, ?)"""
        con, cur = get_connection_cursor(self.name)
        result = cur.execute(query, (username, password))
        if not result.rowcount > 0:
            con.close()
            return None
        new_user = User(id=result.lastrowid, username=username, password=password)
        con.commit()
        con.close()
        return new_user

    def request_update(self, id_, name, password):
        query = """UPDATE users
                SET username =?,
                    password=?
                WHERE id = ?"""
        con, cur = get_connection_cursor(self.name)
        cur.execute(query, (name, password, id_))
        con.commit()
        con.close()

    def request_delete(self, id_):
        query = '''DELETE
                FROM users
                WHERE id = ?'''
        con, cur = get_connection_cursor(self.name)
        cur.execute(query, (id_,))
        con.commit()
        con.close()

    def authorize(self, username, password):
        found = self.get_by_name(username)
        if found is None:
            return None, "user not found"
        if found.password != password:
            return None, "bad password"
        return found, ""
