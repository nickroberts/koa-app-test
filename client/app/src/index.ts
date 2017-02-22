class AppController implements ng.IController {
  static $inject = ['$http'];

  public response;
  public error;

  constructor(private $http) {}

  public reset() {
    this.response = null;
    this.error = null;
  }

  public makeApiCall(hasError = false) {
    let url = hasError ? '/api/error' : '/api/test';
    this.reset();
    this.$http.get(url)
    .then((response) => {
      this.response = response;
    })
    .catch((reason) => {
      this.error = reason;
    });
  }
}

const app = angular
  .module('app', ['ui.bootstrap'])
  .controller('appController', AppController);
