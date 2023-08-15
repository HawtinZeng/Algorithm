// JSX call problem
// This is an IMPORTANT example!!!
function test1() {
  function test2() {
    const test3 = () => {
      console.log(this)
    }
    test3()
  }
  test2()
}
test1()