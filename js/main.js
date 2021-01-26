document.addEventListener('DOMContentLoaded', function () {

  const question = document.getElementsByClassName('question');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const progress = document.getElementsByClassName("form-progress")[0];
  const continueBtn = document.getElementsByClassName("continue")[0];
  const progressLine = document.getElementById("progress");
  const input = document.getElementsByTagName("input");
  const goFirstStep = document.getElementsByClassName("go-first-step")[0];
  let count = 0;
  let historySteps = [];

  const goToStep = (current) => {
    count = current;

    // Hide all steps
    for (let i = 0; i < question.length; i++) {
      question[i].setAttribute('style', 'display:none !important');
    }

    // Current Step
    question[count].setAttribute('style', 'display:block !important');

    progressLine.style.width = `${count / question.length * 100}%`;

  };

  // Show  Step 1 on load
  question[count].setAttribute('style', 'display:block !important');

  // Show Next Step  on click button
  nextBtn.addEventListener('click', function () {
    if (count < question.length - 1) count += 1;


  });
  // Go to First Step  on click button
  goFirstStep.addEventListener('click', function () {
    goToStep(0);
    historySteps.length = 0;

  });

  // Show Prev Step  on click button
  prevBtn.addEventListener('click', function () {
    if (historySteps.length > 0) {
      if (historySteps.length > 1) {
        count = historySteps[historySteps.length - 2];
        goToStep(count);
        historySteps.pop();
      } else {
        count = historySteps[historySteps.length - 1] - 1;
        goToStep(count);
      }
    }
  });


  // Go to next when click on input
  for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('click', function () {
      if (count < question.length - 1) count += 1;

      const inputRadio = input[i].getAttribute('type');
      if (inputRadio === 'radio') {
        setTimeout(() => {
          // Show current step
          switch (count) {
            case 2:
              if (this.getAttribute('data-name') === 'yes') {
                count += 1;
                goToStep(count);
              } else {
                goToStep(count);
              }
              break;
            case 5:
              break;
            default:
              goToStep(count);
          }

          //  Hide progress bar adn button s on last step
          if (count === question.length - 1) {
            progress.setAttribute('style', 'display:none !important');
            continueBtn.setAttribute('style', 'display:none !important');
          } else {
            progress.setAttribute('style', 'display:block !important');
            continueBtn.setAttribute('style', 'display:block !important');
          }

          historySteps.push(count);

        }, 200);
      }
    });

  }


});