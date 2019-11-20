const postUrl = process.env.SLACK_URL;
const username = 'browser-share'; // 通知時に表示されるユーザー名
const lastMonth = getLastMonth();
const jsonData = {
  attachments: [
    {
      color: '#36a64f',
      title: 'Desktop Browser',
      text:
        'https://gs.statcounter.com/browser-market-share/desktop/japan/#monthly-' +
        lastMonth +
        '-' +
        lastMonth +
        '-bar'
    },
    {
      color: '#36a64f',
      title: 'Android Version',
      text:
        'https://gs.statcounter.com/android-version-market-share/mobile/japan/#monthly-' +
        lastMonth +
        '-' +
        lastMonth +
        '-bar'
    },
    {
      color: '#36a64f',
      title: 'iOS Version',
      text:
        'https://gs.statcounter.com/ios-version-market-share/mobile/japan/#monthly-' +
        lastMonth +
        '-' +
        lastMonth +
        '-bar'
    }
  ]
};

declare var global: any;

global.main = (): void => {
  const payload = JSON.stringify(jsonData);
  fetchShare(payload);
};

function fetchShare(payload: string) {
  const options: Object = {
    contentType: 'application/json',
    method: 'post',
    payload: payload
  };

  UrlFetchApp.fetch(postUrl, options);
}

function getLastMonth() {
  const date: Date = new Date();
  const lastMonth: Date = new Date(date.setMonth(date.getMonth() - 1));
  return Utilities.formatDate(lastMonth, 'Asia/Tokyo', 'yyyyMM');
}
