// @flow

const getDateObj = (timestamp: number): Date => new Date(timestamp * 1000);

export const timestamp2datetime = (timestamp: number): string => {

    const date = getDateObj(timestamp);

    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();
    let w = date.getDay();

    // 曜日の表記を文字列の配列で指定
    const wNames = ['日', '月', '火', '水', '木', '金', '土'];

    // 「月」と「日」で1桁だったときに頭に 0 をつける
    if (m < 10) m = '0' + m;
    if (d < 10) d = '0' + d;

    return y + '年' + m + '月' + d + '日 (' + wNames[w] + ')';
};

