const circle = document.getElementById('circle');
const taskList = document.getElementById('taskList');

function updateCounter() {
  const allBoxes = document.querySelectorAll('#taskList input');
  let checked = 0;
  allBoxes.forEach(box => {
    if (box.checked) {
      checked++;
      box.parentElement.classList.add('done');
    } else {
      box.parentElement.classList.remove('done');
    }
  });
  circle.textContent = checked + '/8';
  console.log("Updated to: " + checked + "/8"); // you will see this in console
}

// This makes checkbox and circle correspond
taskList.addEventListener('change', updateCounter);
document.addEventListener('click', updateCounter);

// Run at start
updateCounter();
