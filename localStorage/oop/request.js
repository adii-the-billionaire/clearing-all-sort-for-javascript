const greeting =(name)=>{
    console.log('Hello ' + name);
  }
  
  function processUserInput(callback) {
     var name = 'Please enter your name.'
    callback(name);
  }
  
  processUserInput(greeting);

  console.log(greeting)

function greeting(name) {
     console.log('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = `Please enter your name. ${callback('mia')}`
    setTimeout(()=>{
        callback(name)
    },2000)
  }
  
  processUserInput(greeting)

function greeting(name) {
    console.log('Hello ' + name);
  }
  
  function processUserInput() {
    var name = 'Please enter your name.'
    return greeting(name);
  }
  
  processUserInput()

