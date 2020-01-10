import fetchShare from './modules/fetch-share';
import getJsonData from './modules/get-json-data';
const postUrl = process.env.SLACK_URL;

declare var global: any;

global.main = (): void => {
  const jsonData: Object = getJsonData();
  fetchShare(jsonData, postUrl);
};

