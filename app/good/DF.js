function getPinyin(chinese, splitter) {
    parseDict();
    if (!chinese || /^ +$/g.test(chinese)) return '';
    splitter = splitter === undefined ? ' ' : splitter;
    const result = [];
  
    for (let i = 0, len = chinese.length; i < len; i += 1) {
      const temp = chinese.charAt(i);
      result.push(dict.notone[temp] || temp);
    }
  
    return result.join(splitter);
  }
  