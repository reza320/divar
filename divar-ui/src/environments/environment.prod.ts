export const environment = {
  production: true,
  accessToken: 'access_token',
  expiresIn: 'expires_in',
  authenticationEndpoint: 'https://account.tamin.ir/auth/server/authorize',
  verifyEndpoint: '',
  logoutUrl: 'https://account.tamin.ir/auth/signout?redirect_uri=https://me-report.tamin.ir/view/index.html',
  responseType: 'assertion',
  redirectUrl: 'https://me-report.tamin.ir/auth/access',
  clientId: 'portal-js',
  getUserNameUrl: 'https://me.tamin.ir/portal/api/v2.0/users/current-user/info',
  restTimeout: 60000,
  theme: 'theme-web',
  // baseurl: 'http://account-test.tamin.ir:9091'
  baseurl: 'https://me-report.tamin.ir'
};
