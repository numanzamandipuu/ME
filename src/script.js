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