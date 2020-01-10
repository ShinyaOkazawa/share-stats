export default function fetchShare(jsonData: Object, postUrl: string) {
  const payload = JSON.stringify(jsonData);
  const options: Object = {
    contentType: 'application/json',
    method: 'post',
    payload: payload
  };

  UrlFetchApp.fetch(postUrl, options);
}
