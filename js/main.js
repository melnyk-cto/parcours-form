document.addEventListener('DOMContentLoaded', function () {

  const question = document.getElementsByClassName('question');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const progress = document.getElementsByClassName("form-progress")[0];
  const continueBtn = document.getElementsByClassName("continue")[0];
  const progressLine = document.getElementById("progress");
  const input = document.getElementsByTagName("input");
  const goFirstStep = document.getElementsByClassName("go-first-step")[0];
  const sidebarStatus = document.getElementsByClassName("sidebar-status")[0];
  let count = 0;
  let preCount = 9;
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
    if (count !== 25 && count !== 2) showButtons();
  };

  const hideButtons = () => {
    progress.setAttribute('style', 'display:none !important');
    continueBtn.setAttribute('style', 'display:none !important');
  };
  const showButtons = () => {
    progress.setAttribute('style', 'display:block !important');
    continueBtn.setAttribute('style', 'display:block !important');
  };

  // Show  Step 1 on load
  question[count].setAttribute('style', 'display:block !important');

  // Show Next Step  on click button
  nextBtn.addEventListener('click', function () {
    console.log(count, 'count');
    if (count === 5) {
      count += 3;
    } else if (count === 1) {
      count += 2;
      hideButtons();
    } else if (count === 8) {
      // Progress Bar (Status)
      sidebarStatus.children[0].classList.add('active');
      sidebarStatus.children[0].classList.remove('first-step');
      sidebarStatus.children[1].classList.add('first-step');
      count = preCount;
    } else if (count === 9) {
      count += 4;
    } else if (count === 11) {
      count += 2;
    } else if (count === 13) {
      count += 2;
    } else if (count === 15) {
      count += 3;
    } else if (count === 17) {
      count -= 2;
    } else if (count === 19) {
      // Progress Bar (Status)
      sidebarStatus.children[0].classList.add('active');
      sidebarStatus.children[0].classList.remove('first-step');
      sidebarStatus.children[1].classList.add('active');
      sidebarStatus.children[1].classList.remove('first-step');
      sidebarStatus.children[2].classList.add('first-step');
      count += 2;
    } else if (count === 24) {
      count += 1;
      // Progress Bar (Status)
      sidebarStatus.children[0].classList.add('active');
      sidebarStatus.children[0].classList.remove('first-step');
      sidebarStatus.children[1].classList.add('active');
      sidebarStatus.children[1].classList.remove('first-step');
      sidebarStatus.children[2].classList.add('active');
      sidebarStatus.children[2].classList.remove('first-step');
      sidebarStatus.children[3].classList.add('first-step');
      hideButtons();
    } else {
      if (count < question.length - 1) count += 1;
    }
    goToStep(count);
    historySteps.push(count);
    preCount = 9;
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
        goToStep(historySteps[historySteps.length - 2]);
        historySteps.pop();
      } else {
        goToStep(historySteps[historySteps.length - 1] - 1);
      }
    }

  });


  // Go to next when click on input
  for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('click', function () {
      // if (count < question.length - 1) count += 1;

      setTimeout(() => {
        // Show current step
        switch (count) {
          case 0:
            count += 1;
            goToStep(count);
            break;
          case 1:
            if (this.getAttribute('data-name') === 'yes') {
              count += 2;
              goToStep(count);
            } else {
              count += 1;
              goToStep(count);
              hideButtons();
            }
            break;
          case 2:
            // not need
            break;
          case 3:
            // not need
            break;
          case 4:
            if (this.getAttribute('data-name') === 'Chauffage Électrique') {
              // go to step 7
              count += 2;
              goToStep(count);
            } else if (this.getAttribute('data-name') === 'Chauffage au Gaz') {
              // go to step 8
              count += 3;
              goToStep(count);
            } else if (this.getAttribute('data-name') === 'Chauffage au Bois') {
              // go to step 9
              count += 4;
              goToStep(count);
            } else {
              count += 1;
              goToStep(count);
            }
            break;
          case 5:
            // go to step 9
            count += 3;
            goToStep(count);
            break;
          case 6:
            // go to step 9
            count += 2;
            goToStep(count);
            break;
          case 7:
            // go to step 9
            count += 1;
            goToStep(count);
            break;
          case 8:
            // Progress Bar (Status)
            sidebarStatus.children[0].classList.add('active');
            sidebarStatus.children[0].classList.remove('first-step');
            sidebarStatus.children[1].classList.add('first-step');

            if (this.getAttribute('data-name') === 'Isolation des Combles') {
              // go to step 10
              preCount = 9;
            } else if (this.getAttribute('data-name') === 'Isolations des Murs') {
              // go to step 11
              preCount = 10;
            } else if (this.getAttribute('data-name') === 'Isolation du Sol') {
              // go to step 12
              preCount = 11;
            } else if (this.getAttribute('data-name') === 'Fenêtres') {
              // go to step 13
              preCount = 12;
            } else if (this.getAttribute('data-name') === 'Isolation d’une Toiture-Terrasse') {
              // go to step 14
              preCount = 13;
            } else if (this.getAttribute('data-name') === 'Pompe à Chaleur Air/Eaus') {
              // go to step 15
              preCount = 14;
            } else if (this.getAttribute('data-name') === 'Pompe à Chaleur Air/Air') {
              // go to step 16
              preCount = 15;
            } else if (this.getAttribute('data-name') === 'Radiateur électrique à régulation électronique') {
              // go to step 17
              preCount = 16;
            } else if (this.getAttribute('data-name') === 'Chauffe-eau Solaire Individuel') {
              // go to step 18
              preCount = 17;
            }
            break;
          case 9:
            // go to step 14
            count += 4;
            goToStep(count);
            break;
          case 10:
            break;
          case 11:
            // go to step 14
            count += 2;
            goToStep(count);
            break;
          case 12:
            break;
          case 13:
            break;
          case 14:
            break;
          case 15:
            // go to step 19
            count += 3;
            goToStep(count);
            break;
          case 16:
            // go to step 19
            count += 2;
            break;
          case 17:
            // not need
            break;
          case 18:
            break;
          case 19:
            // Progress Bar (Status)
            sidebarStatus.children[0].classList.add('active');
            sidebarStatus.children[0].classList.remove('first-step');
            sidebarStatus.children[1].classList.add('active');
            sidebarStatus.children[1].classList.remove('first-step');
            sidebarStatus.children[2].classList.add('first-step');
            if (this.getAttribute('data-name') === 'yes') {
              // go to step 22
              count += 2;
              goToStep(count);
            } else {
              // go to step 21
              count += 1;
              goToStep(count);
            }
            break;
          case 20:
            // go to step 21
            count += 1;
            goToStep(count);
            break;
          case 21:
            // not need
            break;
          case 22:
            // go to step 23
            count += 1;
            goToStep(count);
            break;
          case 23:
            // not need
            break;
          case 24:
            // not need
            break;
          case 25:
            // not need
            break;
        }

        console.log(count, count);
        historySteps.push(count);
      }, 300);
    });

  }

});