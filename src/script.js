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


function setupCalendarButtons() {
  const dateElements = document.querySelectorAll('.date');
  const contentElement = document.getElementById('contentName'); // Assuming you have a single content element

  dateElements.forEach((element) => {
      element.addEventListener('click', () => {
          const hasCustomClass = element.classList.contains('custom');

          dateElements.forEach((date) => {
              date.classList.remove('custom');
          });

          if (!hasCustomClass && !element.classList.contains('current-day')) {
              element.classList.add('custom');
          }

          // Check if any date has the "custom" class
          const hasCustomDate = Array.from(dateElements).some((date) => date.classList.contains('custom'));

          // Define an array of dates to match
          const vacationDates = ['6', '7', '13', '14', '20', '21', '27', '28'];

          // Update the display of the content based on the presence of "custom" class
          if (hasCustomDate) {
              contentElement.style.display = 'block';

              // Find the date with the "custom" class
              const customDateElement = Array.from(dateElements).find((date) => date.classList.contains('custom'));

              // Get the date text from the custom date element
              const customDateText = customDateElement.textContent;

              // Update the content's date with the custom date
              const contentDateElement = contentElement.querySelector('.card-header.text-light');
              if (contentDateElement) {
                  contentDateElement.textContent = customDateText + " September 2023";

                  // Check if customDateText is in the vacationDates array
                  if (vacationDates.includes(customDateText)) {
                      // Update the list-group-item innerHTML for vacation dates
                      const listGroupItem = contentElement.querySelector('.list-group-item.text-light');
                      if (listGroupItem) {
                          listGroupItem.innerHTML = "Vacation";
                      }
                  } else {
                      // Reset the list-group-item innerHTML for non-vacation dates
                      const listGroupItem = contentElement.querySelector('.list-group-item.text-light');
                      if (listGroupItem) {
                          listGroupItem.innerHTML = "Usual Class and Lab";
                      }
                  }
              }
          } else {
              contentElement.style.display = 'none';
          }
      });

      // Get the current date
      const currentDate = new Date();
      const currentDay = currentDate.getDate();

      // Get the day of the month (1-31)
      const date = parseInt(element.textContent);

      // Check if the date matches today's date and add the "current-day" class
      if (date === currentDay) {
          element.classList.add('current-day');
      }
  });
}

// Call the function to set up click listeners for all calendar buttons
setupCalendarButtons();
