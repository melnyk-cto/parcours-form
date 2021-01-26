document.addEventListener('DOMContentLoaded', function () {

  const question = document.getElementsByClassName('question');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const progress = document.getElementsByClassName("form-progress")[0];
  const continueBtn = document.getElementsByClassName("continue")[0];
  const progressLine = document.getElementById("progress");
  const input = document.getElementsByTagName("input");
  let count = 0;

  function nextStep() {
    if (count < question.length - 1) count += 1;
    for (let i = 0; i < question.length; i++) {
      question[i].setAttribute('style', 'display:none !important');
    }
    question[count].setAttribute('style', 'display:block !important');

    if (count === question.length - 1) {
      progress.setAttribute('style', 'display:none !important');
      continueBtn.setAttribute('style', 'display:none !important');
    } else {
      progress.setAttribute('style', 'display:block !important');
      continueBtn.setAttribute('style', 'display:block !important');
    }
    progressLine.style.width = `${count / question.length * 100}%`;

  }

  // Show  Step 1 on load
  question[count].setAttribute('style', 'display:block !important');

  // Show Next Step  on click button
  nextBtn.addEventListener('click', function () {
    nextStep();
  });

  // Show Prev Step  on click button
  prevBtn.addEventListener('click', function () {
    if (count > 0) count -= 1;

    for (let i = 0; i < question.length; i++) {
      question[i].setAttribute('style', 'display:none !important');
    }

    question[count].setAttribute('style', 'display:block !important');

  });


  // Go to next when click on input
  for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('click', function () {
      const inputRadio = input[i].getAttribute('type');
      if (inputRadio === 'radio') {
        setTimeout(()=> {
          nextStep();
        }, 400);
      }
    });

  }


});