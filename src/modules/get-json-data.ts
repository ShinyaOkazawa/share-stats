import getLastMonth from './get-last-month';

export default function getJsonData() {
  const lastMonth = getLastMonth();
  return {
    attachments: [
      {
        color: '#36a64f',
        title: 'Desktop Browser',
        text: `https://gs.statcounter.com/browser-market-share/desktop/japan/#monthly-${lastMonth}-${lastMonth}-bar`
      },
      {
        color: '#36a64f',
        title: 'Android Version',
        text: `https://gs.statcounter.com/android-version-market-share/mobile/japan/#monthly-${lastMonth}-${lastMonth}-bar`
      },
      {
        color: '#36a64f',
        title: 'iOS Version',
        text: `https://gs.statcounter.com/ios-version-market-share/mobile/japan/#monthly-${lastMonth}-${lastMonth}-bar`
      }
    ]
  };
}
