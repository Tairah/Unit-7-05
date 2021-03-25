let userinput = 0
let day = 'saturday'

document.getElementById('submit').addEventListener('click', input)
function input () {
  userinput = document.getElementById('Age').value
  day = document.getElementById('Day').value
  if (userinput < 18 && (day !== 'monday' || day !== 'wednesday')) {
    alert('Have a great day at school')
  } else if (userinput > 18 && (day !== 'Tuesday' || day !== 'Friday')) {
    alert('Have a great day at work')
  }
}
