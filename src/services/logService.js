// import Raven from "raven-js";

function init() {
  // Raven.config(
  //   "https://a1ff868b11a2438e9712d8b051452081@sentry.io/1283766"
  // ).install();
}

function log(error) {
  console.error(error);
  // Raven.captureException(error);
}

export default {
  init,
  log
};
