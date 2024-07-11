/**
 * 一个带有并发限制的异步调度器，Scheduler，同时运行的任务最多有两个，链式调用
 * 总结：链式调用的执行顺序可以通过 setTimeout 去控制
 */

class Scheduler {
  excutings = 0;
  stage: any[] = [];
  
  add(task: any) {
    this.stage.push([task]);
    // 如果不要setTimeout，那么task后面接的then将无法执行
    setTimeout(() => {

      if (this.excutings < 2) {
        const fir = this.stage.shift();
        if (fir) this.taskWraper(fir);
      }
    })

    return this;
  }
  then(afterTask: any) {
    this.stage[this.stage.length - 1].push(afterTask);
  }
  taskWraper(tasks: any[]) {
    this.excutings++;
    tasks[0]().then(() => {
      tasks[1]();
      
      this.excutings--;
      if (this.excutings < 2) {

        const fir = this.stage.shift();
        if (fir) this.taskWraper(fir);
      }
    });
  }
}

const timeout  = (time: number) => new Promise(res => 
  setTimeout(res, time)
)

const scheduler = new Scheduler();
const addTask = (time: any, order: any) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order));
}
addTask(1000, '1')
addTask(5000, '2')
addTask(8000, '3')
addTask(1000, '4')
/**
 * 1000, 输出1，3进入开始执行
 * 5000，输出2，4进入开始
 * 6000, 输出4
 * 9000,  输出3
 */
export {}
