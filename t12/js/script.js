function Stars() {
    let result = '';
  
    for (let stroki = 0; stroki < 8; stroki++) {
      for (let kolichestvo = 0; kolichestvo <= stroki; kolichestvo++) {
        result += '*';
      }
      result += '\n';
    }
    alert(result);

  }
  Stars();