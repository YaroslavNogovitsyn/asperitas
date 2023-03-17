from datetime import timedelta

from flask import Flask, jsonify
from flask_jwt_simple import JWTManager
from flask_restful import Api

from posts.repo import InMemoryPostsRepo
from tools.misc import make_resp
from tools.my_json_encoder import MyJSONEncoder
from users.sqlite_repo import SqliteUsersRepo


class MyApp(Flask):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.json_encoder = MyJSONEncoder
        self.user_repo = SqliteUsersRepo('./db/reddit_clone.db')
        # self.user_repo = InMemoryUserRepo()
        self.post_repo = InMemoryPostsRepo()
        self.config['JWT_SECRET_KEY'] = 'super-secret'
        self.config['JWT_EXPIRES'] = timedelta(hours=24)
        self.config['JWT_IDENTITY_CLAIM'] = 'user'
        self.config['JWT_HEADER_NAME'] = 'authorization'
        self.jwt = JWTManager(self)
        self.api = Api(self)


main_app = MyApp(__name__, static_folder='./../static')


@main_app.jwt.expired_token_loader
def my_expired_token_callback():
    err_json = {'message': 'expired_token'}
    return make_resp(err_json, 401)


@main_app.jwt.invalid_token_loader
@main_app.jwt.unauthorized_loader
def my_inv_unauth_token_callback(reason):
    err_json = {"message": reason}
    return jsonify(err_json), 401
