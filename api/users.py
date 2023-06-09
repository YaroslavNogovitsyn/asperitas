from flask import jsonify
from flask_restful import Resource, reqparse, abort

from app.app import main_app
from tools.misc import create_jwt_for_user

parser = reqparse.RequestParser()
parser.add_argument('username', required=True)
parser.add_argument('password', required=True)


class RegisterRes(Resource):
    def post(self):
        args = parser.parse_args()
        created_user = main_app.user_repo.request_create(**args)
        if created_user is None:
            abort(400, message='duplicated username')
        return create_jwt_for_user(created_user)


class LoginRes(Resource):
    def post(self):
        args = parser.parse_args()
        user, error = main_app.user_repo.authorize(**args)
        if user is None:
            abort(400, message=error)

        return create_jwt_for_user(user)


class UserPosts(Resource):
    def get(self, username):
        return jsonify(main_app.post_repo.get_by_username(username))
