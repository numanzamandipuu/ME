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


function addNotificationDot(buttonId) {
  // Find the button element by its ID
  const button = document.getElementById(buttonId);

  if (button) {
    // Create a span element for the notification dot
    const notificationDot = document.createElement('span');
    notificationDot.className = 'notification-dot';

    // Clear the existing text content of the button
    button.textContent = '';

    // Append the notification dot and the date text to the button
    button.appendChild(notificationDot);
    button.appendChild(document.createTextNode(buttonId.replace('calendar', '')));
  }
}

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
          const eeeAssignmentDates = ['16', '24', '25'];
          const MathCTDates = ['27'];
          const vacationDates = ['1', '7', '8', '14', '15', '21', '22', '28', '29'];


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
                  }
                  
                  else if (eeeAssignmentDates.includes(customDateText)) {
                    // Update the list-group-item innerHTML for EEE assignment dates
                    const listGroupItem = contentElement.querySelector('.list-group-item.text-light');
                    if (listGroupItem) {
                      listGroupItem.innerHTML = "EEE Assignment";
                    }
                  }
                  
                  else if (MathCTDates.includes(customDateText)) {
                    // Update the list-group-item innerHTML for EEE assignment dates
                    const listGroupItem = contentElement.querySelector('.list-group-item.text-light');
                    if (listGroupItem) {
                      listGroupItem.innerHTML = "Math CT";
                    }
                  }
                  
                  else {
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

const buttonIds = ['calendar15', 'calendar16', 'calendar28']; 

buttonIds.forEach((id) => {
  addNotificationDot(id);
});

















// function setupCalendarButtons() {
//     // ... existing code ...
  
//     // Define an array of dates to match
//     const eeeAssignmentDates = ['15', '20', '22'];
  
//     // ... existing code ...
  
//     dateElements.forEach((element) => {
//       // ... existing code ...
  
//       // Update the display of the content based on the presence of "custom" class
//       if (hasCustomDate) {
//         // ... existing code ...
  
//         // Check if customDateText is in the eeeAssignmentDates array
//         if (eeeAssignmentDates.includes(customDateText)) {
//           // Update the list-group-item innerHTML for EEE assignment dates
//           const listGroupItem = contentElement.querySelector('.list-group-item.text-light');
//           if (listGroupItem) {
//             listGroupItem.innerHTML = "EEE Assignment";
//           }
//         } else {
//           // ... existing code ...
//         }
//       } else {
//         // ... existing code ...
//       }
//     });
  
//     // ... existing code ...
//   }