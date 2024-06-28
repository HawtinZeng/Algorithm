// 防抖，输出最后一次
function debounce(fn: (...args: any[]) => void, time: number) {
  let timer: null | NodeJS.Timeout = null;
 
  return (s: string) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => fn(s), time);
  }
}

function input(s: string) {
  console.log(s)
}

const debounceInput = debounce(input, 1000);

debounceInput("debounceInput");
debounceInput("debounceInput");
debounceInput("debounceInput");
debounceInput("debounceInput4");

export {}
