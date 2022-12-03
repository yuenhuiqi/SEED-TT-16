import Request, Response, ResponseStream

class AuthMiddleware():

    def __call__(self, environ, start_response):
        request = Request(environ)
        userName = request.authorization['username']
        password = request.authorization['password']