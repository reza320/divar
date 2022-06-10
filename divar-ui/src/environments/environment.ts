export const environment = {
  production: false,
  accessToken: 'access_token',
  expiresIn: 'expires_in',
  redirectUrl: 'http://localhost:4200',
  authenticationEndpoint: 'http://account-test.tamin.ir:9090/auth/server/authorize',
  verifyEndpoint: '',
  logoutUrl: 'http://account-test.tamin.ir:9090/auth/signout?redirect_uri=http://localhost:4200',
  responseType: 'token',
  clientId: 'portal-js',
  getUserNameUrl: 'http://account-test.tamin.ir:9093/portal/api/v2.0/users/current-user/info',
  restTimeout: 120000,
  baseurl: 'http://localhost:8089',
  baseurl_base: 'http://account-test.tamin.ir:9093',
  theme: 'theme-web'
};

