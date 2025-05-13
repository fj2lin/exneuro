// Handle all custom selects
document.querySelectorAll('.custom-select').forEach(select => {
  const options = select.querySelectorAll('.option');
  const selectName = select.dataset.selectName;

  options.forEach(option => {
    option.addEventListener('click', () => {
      // Check if the clicked option is already selected
      if (option.classList.contains('selected')) {
        // Unselect it
        option.classList.remove('selected');

        // Clear the visible output
        document.getElementById(`selected${capitalize(selectName)}`).textContent = '';
      } else {
        // Deselect all in this group
        options.forEach(opt => opt.classList.remove('selected'));

        // Select the clicked one
        option.classList.add('selected');

        // Update visible output
        const value = option.dataset.value;
        document.getElementById(`selected${capitalize(selectName)}`).textContent = value;
      }
    });
  });
});

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

document.querySelectorAll('.gcs').forEach(response=>{
  response.querySelectorAll('.option').forEach(option=>{
    //document.getElementById('gcs-result').textContent = 'got to optsion';
    option.addEventListener('click', ()=>{
      //document.getElementById('gcs-result').textContent = 'event listener added';
      recalculateGCS();
    })
  })
})

function recalculateGCS(){
  let gcs = 0;
  let nonTestable = false;
  document.querySelectorAll('.option.selected').forEach(selectedOption=>{
    if (selectedOption.dataset.value === 'NT'){
      nonTestable = true;
    } else{
      gcs += parseInt(selectedOption.dataset.value, 10);
    }
  });
  if(nonTestable){
    document.getElementById('gcs-result').textContent = gcs.toString() + 'NT';
  } else {
    document.getElementById('gcs-result').textContent = gcs;
  }
}

// RASS - Display value
const selectRass = document.getElementById('rass-select');
const output = document.getElementById('rass-result');

selectRass.addEventListener('change', function () {
  const selectedValue = this.value;
  output.textContent = `RASS: ${selectedValue}`;
});