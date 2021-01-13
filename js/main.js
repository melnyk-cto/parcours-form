document.addEventListener('DOMContentLoaded', function () {

    const question = document.getElementsByClassName('question');
    const nextBtn = document.getElementById('next-btn');
    let count = 0;

    // Show  Step 1 on load
    question[count].setAttribute('style', 'display:block !important');

    // Show Next Step  on click button
    nextBtn.addEventListener('click', function () {
        if (count < 24) count += 1;

        for (let i = 0; i < question.length; i++) {
            question[i].setAttribute('style', 'display:none !important');
        }

        question[count].setAttribute('style', 'display:block !important');

    })
});