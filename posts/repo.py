from datetime import datetime


class InMemoryPostsRepo:
    def __init__(self):
        self.next_id = 1
        self.by_id = {}

    def get_all(self):
        return tuple(self.by_id.values())

    def get_by_id(self, id_):
        return self.by_id[id_]

    def request_create(self, post):
        post.id = self.next_id
        post.created = datetime.now().isoformat()
        self.by_id[post.id] = post
        self.next_id += 1
        return post
