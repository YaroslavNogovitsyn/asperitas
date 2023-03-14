from users.user import User


class InMemoryUserRepo:
    def __init__(self):
        self.next_id = 1
        self.by_id = {}

    def get_by_name(self, username):
        for _, value in self.by_id.items():
            if value.username == username:
                return value
        return None

    def request_create(self, username, password):
        found = self.get_by_name(username)
        if found:
            return None  # пользователь уже есть

        new_user = User(id=self.next_id, username=username, password=password)
        self.by_id[new_user.id] = new_user
        self.next_id += 1
        return new_user

    def authorize(self, username, password):
        found = self.get_by_name(username)
        if found is None:
            return None, 'user not found'  # пользователь уже есть

        if found.password != password:
            return None, 'bad password'

        return found, ''
