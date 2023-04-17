// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));



// Iteration 1 - using callbacks
// ...
// Iteration 1 - using nested callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

// Iteration 2 - using promises
// ...

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`

    obtainInstruction('steak', 1)
      .then((step1) => {
        document.querySelector("#steak").innerHTML += `<li>${step1}</li>`

        obtainInstruction('steak', 2)
          .then((step2) => {
            document.querySelector("#steak").innerHTML += `<li>${step2}</li>`

            obtainInstruction('steak', 3)
              .then((step3) => {
                document.querySelector("#steak").innerHTML += `<li>${step3}</li>`


                obtainInstruction('steak', 4)
                  .then((step4) => {
                    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`

                    obtainInstruction('steak', 5)
                      .then((step5) => {
                        document.querySelector("#steak").innerHTML += `<li>${step5}</li>`

                        obtainInstruction('steak', 6)
                          .then((step6) => {
                            document.querySelector("#steak").innerHTML += `<li>${step6}</li>`

                            obtainInstruction('steak', 7)
                              .then((step7) => {
                                document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
                                document.querySelector("#steakImg").removeAttribute('hidden');
                                document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
                                //  ... Your code here
                              })
                            //  ... Your code here
                          })

                        //  ... Your code here
                      })

                    //  ... Your code here
                  })
                //  ... Your code here
              })

            //  ... Your code here
          })

        //  ... Your code here
      })
    //  ... Your code here
  })
// Iteration 3 using async/await
// ...
// Iteration 3 using async/await

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  // ... Your code here
  try {
    document.querySelector(
      '#broccoli'
    ).innerHTML += `<li>${await obtainInstruction('broccoli', 0)}</li>`;
    document.querySelector(
      '#broccoli'
    ).innerHTML += `<li>${await obtainInstruction('broccoli', 1)}</li>`;
    document.querySelector(
      '#broccoli'
    ).innerHTML += `<li>${await obtainInstruction('broccoli', 2)}</li>`;
    document.querySelector(
      '#broccoli'
    ).innerHTML += `<li>${await obtainInstruction('broccoli', 3)}</li>`;

    document.querySelector(
      '#broccoli'
    ).innerHTML += `<li>${await obtainInstruction('broccoli', 4)}</li>`;
    document.querySelector(
      '#broccoli'
    ).innerHTML += `<li>${await obtainInstruction('broccoli', 5)}</li>`;
    document.querySelector(
      '#broccoli'
    ).innerHTML += `<li>${await obtainInstruction('broccoli', 6)}</li>`;
  } catch (err) {
    console.log(err);
  }
}
makeBroccoli();


// Bonus 2 - Promise all
let p1 = obtainInstruction('brusselsSprouts', 0)
let p2 = obtainInstruction('brusselsSprouts', 1)
let p3 = obtainInstruction('brusselsSprouts', 2)
let p4 = obtainInstruction('brusselsSprouts', 3)
let p5 = obtainInstruction('brusselsSprouts', 4)
let p6 = obtainInstruction('brusselsSprouts', 5)
let p7 = obtainInstruction('brusselsSprouts', 6)


Promise.all([p1, p2, p3, p4, p5, p6, p7]).then((values) => {
  values.forEach((elem) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${elem}</li>`
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
  });
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
});
