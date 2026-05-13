
// Rendering the URL from class, into key and val pair
const params = new URLSearchParams(window.location.search)
const classID = parseInt(params.get('id'))
const selectedClass = classes.find(c => c.id === classID)


function selectDate(element){
    document.querySelector("datepill").forEach(pill => {
        pill.classList.remove('selected');
    });
    element.classList.add('selected')
}

function renderClassDetail() {
    // connecting each properties to html elems
    document.getElementById('class-image').src = selectedClass.image;
    document.getElementById('class-name').textContent = selectedClass.name;
    document.getElementById('class-level').textContent = selectedClass.classLevel;
    document.getElementById('class-location').textContent = `Location: ${selectedClass.location}`;
    document.getElementById('class-price').textContent = `$${selectedClass.price}`;

    // rendering date and highlighting selected date
    const dateContainer = document.getElementById('date-pills');
    selectedClass.dates.forEach((date, index) => {
        dateContainer.innerHTML += `
        <div class="date-pill ${index === 0? 'selected' : ''}" onclick ="selectDate(this)">
            ${date}
        </div>
        `;
    })

    // What's included list rendering
    const includedList = document.getElementById('included-list');
    selectedClass.included.forEach(item => {
        includedList.innerHTML +=`
        <p>✅ ${item}</p>
        `;
    })
}

renderClassDetail();