import SignUpController from './signup';

describe('SignUp Controller', () => {
  let name: string;
  let email: string;
  let password: string;
  let passwordConfirmation: string;

  beforeAll(() => {
    name = 'any_name';
    email = 'any_email@email.com';
    password = 'any_password';
    passwordConfirmation = 'any_password';
  });

  test('Should return 400 if no name is provided', async () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        email,
        password,
        passwordConfirmation,
      },
    };

    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });
});
