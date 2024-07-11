/**
 * 一个带有并发限制的异步调度器，Scheduler，同时运行的任务最多有两个
 */

class Scheduler {
  excutings = 0;
  stage: any[] = [];
  
  add(task: any) {
    if (this.excutings >= 2) {
      this.stage.push(task);
    } else {
      this.excutings++;
      return this.taskWraper(task);
    }
  }

  taskWraper(task: () => Promise<any>) {
    task().then((m) => {

      this.excutings--;
      if (this.excutings < 2) {

        const popped = this.stage.splice(0, 2 - this.excutings)
        popped.forEach(t => {
          t();
        })
      }
      
      return m;
    });
  }
}

const timeout  = (time: number) => new Promise(res => 
  setTimeout(res, time)
)

const scheduler = new Scheduler();
const addTask = (time: any, order: any) => {
  scheduler.add(() => timeout(time).then(() => console.log(order)));
}
addTask(1000, '1')
addTask(1000, '2')
addTask(1000, '3')
addTask(1000, '4')

export {}
