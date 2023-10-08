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


  // Create a span element for the notification dot
  const notificationDot = document.createElement('span');
  notificationDot.className = 'notification-dot';

  // Clear the existing text content of the button
  button.textContent = '';

  // Append the notification dot and the date text to the button
  button.appendChild(notificationDot);
  button.appendChild(document.createTextNode(buttonId.replace('calendar', '')));

}


function addNotificationDotYellow(buttonIdYellow) {
  // Find the button element by its ID
  const buttonYellow = document.getElementById(buttonIdYellow);


  // Create a span element for the notification dot
  const notificationDotYellow = document.createElement('span');
  notificationDotYellow.className = 'notification-dot-yellow';

  // Clear the existing text content of the button
  buttonYellow.textContent = '';

  // Append the notification dot and the date text to the button
  buttonYellow.appendChild(notificationDotYellow);
  buttonYellow.appendChild(document.createTextNode(buttonIdYellow.replace('calendar', '')));

}

function addNotificationDotSecond(buttonIdSec) {
  // Find the button element by its ID
  const buttonSec = document.getElementById(buttonIdSec);

  // Create a span element for the notification dot
  const notificationDotSec = document.createElement('span');
  notificationDotSec.className = 'notification-dot-sec';

  // Create a span element for the notification dot (original)
  const notificationDot = document.createElement('span');
  notificationDot.className = 'notification-dot';

  // Create a text node for the date
  const dateText = document.createTextNode(buttonIdSec.replace('calendar', ''));

  // Clear the existing text content of the button
  buttonSec.textContent = '';

  // Append the elements to the button in the desired order
  buttonSec.appendChild(notificationDot);
  buttonSec.appendChild(dateText);
  buttonSec.appendChild(notificationDotSec);
}


function setupCalendarButtons() {
  const dateElements = document.querySelectorAll('.date');
  const contentElement = document.getElementById('contentName');

  dateElements.forEach((element) => {
    element.addEventListener('click', () => {
      const hasCustomClass = element.classList.contains('custom');

      dateElements.forEach((date) => {
        date.classList.remove('custom');
      });

      if (!hasCustomClass) {
        element.classList.add('custom');
      }

      // Check if any date has the "custom" class
      const hasCustomDate = Array.from(dateElements).some((date) => date.classList.contains('custom'));

      // Define an array of dates to match
      const vacationDates = ['5', '6', '12', '13', '19', '20', '21', '22', '23', '24', '25', '26', '27'];
      const EEELabReport1st30 = ['1'];
      const EnglishCT = ['2', '4'];
      const EnglishAssignment = ['3'];
      const MathCSE = ['7'];
      const EEELabFinal2nd30 = ['8'];
      const MELabViva = ['9'];
      const MathCTAssignment = ['10'];
      const CSELabFinal = ['11'];
      const EEELabFinal1st30 = ['15'];
      const BoardViva = ['17'];
      

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

          else if (EEELabReport1st30.includes(customDateText)) {
            const listGroup = contentElement.querySelector('.list-group');
            if (listGroup) {
              listGroup.innerHTML = `<li class="list-group-item text-light red-list">1st 30 EEE Lab Report Submission</li>`;
            }
          } 
          
          else if (EnglishCT.includes(customDateText)) {
            const listGroup = contentElement.querySelector('.list-group');
            if (listGroup) {
              listGroup.innerHTML = `<li class="list-group-item text-light red-list">English CT</li>`;
            }
          } 
          
          else if (EnglishAssignment.includes(customDateText)) {
            const listGroup = contentElement.querySelector('.list-group');
            if (listGroup) {
              listGroup.innerHTML = `<li class="list-group-item text-light red-list">English Assignment Submission</li>`;
            }
          } 
          
          else if (MathCSE.includes(customDateText)) {
            const listGroup = contentElement.querySelector('.list-group');
            if (listGroup) {
              listGroup.innerHTML = `<li class="list-group-item text-light red-list">Math Assignment Submission (Zahangir Sir)</li>`;
            }
          }

        else if (EEELabFinal2nd30.includes(customDateText)) {
          const listGroup = contentElement.querySelector('.list-group');
          if (listGroup) {
            listGroup.innerHTML = `<li class="list-group-item text-light red-list">EEE Lab Final for 2nd 30</li>`;
          }
        } 

        else if (MELabViva.includes(customDateText)) {
          const listGroup = contentElement.querySelector('.list-group');
          if (listGroup) {
            listGroup.innerHTML = `<li class="list-group-item text-light red-list">ME Lab Viva and Lab Quiz</li>`;
          }
        } 

        else if (MathCTAssignment.includes(customDateText)) {
          const listGroup = contentElement.querySelector('.list-group');
          if (listGroup) {
            listGroup.innerHTML = `<li class="list-group-item text-light red-list">Math CT</li>
            <li class="list-group-item text-light red-list">Math Assignment Submission (Helal Sir)</li>`;
          }
        }

        else if (CSELabFinal.includes(customDateText)) {
          const listGroup = contentElement.querySelector('.list-group');
          if (listGroup) {
            listGroup.innerHTML = `<li class="list-group-item text-light red-list">CSE Lab Final </li>
            <li class="list-group-item text-light red-list">CSE CT</li>
            <li class="list-group-item text-light red-list">English Assignment Submission (Sayeed Sir)</li>
            <li class="list-group-item text-light red-list">EEE Assignment Submission (Shamim Sir)</li>`;
          }
        } 

        else if (EEELabFinal1st30.includes(customDateText)) {
          const listGroup = contentElement.querySelector('.list-group');
          if (listGroup) {
            listGroup.innerHTML = `<li class="list-group-item text-light red-list">EEE Lab Final for 1st 30</li>`;
          }
        } 

        else if (BoardViva.includes(customDateText)) {
          const listGroup = contentElement.querySelector('.list-group');
          if (listGroup) {
            listGroup.innerHTML = `<li class="list-group-item text-light red-list">Board Viva</li>`;
          }
        } 
          
          else {
            // Reset the list-group innerHTML for non-special dates
            const listGroup = contentElement.querySelector('.list-group');
            if (listGroup) {
              listGroup.innerHTML = `<li class="list-group-item text-light red-list">Usual Class and Lab</li>`;
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

    // Get the day from the ID attribute
    const date = parseInt(element.id.replace('calendar', ''));

    // Check if the date matches today's date and add the "current-day" class
    if (date === currentDay) {
      element.classList.add('current-day');
    }
  });
}

// Call the function to set up click listeners for all calendar buttons
setupCalendarButtons();


const buttonIds = ['calendar2', 'calendar4', 'calendar3', 'calendar7']; 
buttonIds.forEach((id) => {
  addNotificationDot(id);
});

const buttonIdsSecond = ['calendar10', 'calendar11']; 
buttonIdsSecond.forEach((id) => {
  addNotificationDotSecond(id);
});

const buttonIdsYellow = ['calendar1', 'calendar8', 'calendar9',  'calendar15', 'calendar17']; 
buttonIdsYellow.forEach((id) => {
  addNotificationDotYellow(id);
});




































// else if (MathCTAssignment.includes(customDateText)) {
//   const listGroup = contentElement.querySelector('.list-group');
//   if (listGroup) {
//     listGroup.innerHTML = `<li class="list-group-item text-light red-list">Math CT</li>
//     <li class="list-group-item text-light red-list">Math Assignment</li>`;
//   }
// }


// else if (MELabViva.includes(customDateText)) {
//   const listGroup = contentElement.querySelector('.list-group');
//   if (listGroup) {
//     listGroup.innerHTML = `<li class="list-group-item text-light red-list">Math CT</li>`;
//   }
// } 



