const collapseElements = document.querySelectorAll('[data-bs-toggle="collapse"]');
  
collapseElements.forEach((collapseElement) => {
  collapseElement.addEventListener('click', function () {
    const targetCollapse = document.querySelector(this.getAttribute('data-bs-target'));
    const allCollapseElements = document.querySelectorAll('.collapse.show');

    allCollapseElements.forEach((collapse) => {
      if (collapse !== targetCollapse) {
        bootstrap.Collapse.getInstance(collapse).hide();
      }
    });
  });
});



const dateElements = document.querySelectorAll('.date');

dateElements.forEach((element) => {
    element.addEventListener('click', () => {
        const hasCustomClass = element.classList.contains('custom');
        
        dateElements.forEach((date) => {
            date.classList.remove('custom');
        });

        if (!hasCustomClass && !element.classList.contains('current-day')) {
            element.classList.add('custom');
        }
    });
    
    const currentDate = new Date();

    const currentDay = currentDate.getDate();

    const date = parseInt(element.textContent);
    if (date === currentDay) {
        element.classList.add('current-day');
    }
});


const calendar15 = document.getElementById('calendar15');
const content15 = document.getElementById('content15');

calendar15.addEventListener('click', () => {
    if (content15.style.display === 'none' || content15.style.display === '') {
        content15.style.display = 'block';
    } else {
        content15.style.display = 'none';
    }
});


