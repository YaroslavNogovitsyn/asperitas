from datetime import datetime


class InMemoryPostsRepo:
    def __init__(self):
        self.next_id = 1
        self.by_id = {}

    def get_all(self):
        return tuple(self.by_id.values())

    def get_by_id(self, id_):
        print(self.by_id)
        return self.by_id.get(id_, None)

    def get_by_username(self, username):
        result = []
        for value in self.by_id.values():
            if value.author.username == username:
                result.append(value)
        return result

    def get_by_category(self, category):
        result = []
        for value in self.by_id.values():
            if value.category == category:
                result.append(value)
        return result

    def request_create(self, post):
        post.id = self.next_id
        post.created = datetime.now()
        self.by_id[post.id] = post
        self.next_id += 1
        return post

    def request_delete(self, id_, user):
        p = self.get_by_id(id_)
        if p is None:
            return f"post does not exist for id: {id_}"

        if p.author.id != user.id:
            return f"you are not author of this post id: {id_}"

        del self.by_id[id_]
        return None
