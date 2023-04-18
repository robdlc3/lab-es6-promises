// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// .then()getInstruction("mashedPotatoes", 1, (step2) => {
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
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed Potatoes are ready.</li>`
          document.querySelector('#mashedPotatoesImg').removeAttribute('hidden')
        }), (error) => console.log(error)
      }), (error) => console.log(error)
    }), (error) => console.log(error)
  }), (error) => console.log(error)
}), (error) => console.log(error)

// ... Your code here
// ...



// Iteration 2 - using promises
// ...
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak', 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak', 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak', 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction('steak', 7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
  })
  .then(() => {
    document.querySelector('#steakImg').removeAttribute('hidden')
  })

// Iteration 3 using async/await
// ...
// ... Your code here
async function makeBroccoli() {
  let a = await obtainInstruction('broccoli', 0);
  document.querySelector("#broccoli").innerHTML += `<li>${a}</li>`
  let b = await obtainInstruction('broccoli', 1);
  document.querySelector("#broccoli").innerHTML += `<li>${b}</li>`
  let c = await obtainInstruction('broccoli', 2);
  document.querySelector("#broccoli").innerHTML += `<li>${c}</li>`
  let d = await obtainInstruction('broccoli', 3);
  document.querySelector("#broccoli").innerHTML += `<li>${d}</li>`
  let e = await obtainInstruction('broccoli', 4);
  document.querySelector("#broccoli").innerHTML += `<li>${e}</li>`
  let f = await obtainInstruction('broccoli', 5);
  document.querySelector("#broccoli").innerHTML += `<li>${f}</li>`
  let g = await obtainInstruction('broccoli', 6);
  document.querySelector("#broccoli").innerHTML += `<li>${g}</li>`
  document.querySelector('#broccoliImg').removeAttribute('hidden')

}


makeBroccoli()
// Bonus 2 - Promise all
// ...

const s0 = obtainInstruction('brusselsSprouts', 0)
const s1 = obtainInstruction('brusselsSprouts', 1)
const s2 = obtainInstruction('brusselsSprouts', 2)
const s3 = obtainInstruction('brusselsSprouts', 3)
const s4 = obtainInstruction('brusselsSprouts', 4)
const s5 = obtainInstruction('brusselsSprouts', 5)
const s6 = obtainInstruction('brusselsSprouts', 6)
const s7 = obtainInstruction('brusselsSprouts', 7)

Promise.all([s1, s2, s3, s4, s5, s6, s7]).then((steps) => {
  steps
    .forEach((e) => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${e}</li>`;
    })
})
  .then((step1) => {
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>Brussel Sprouts are ready!</li>`;
    document.querySelector('#brusselsSproutsImg').removeAttribute('hidden')
  });