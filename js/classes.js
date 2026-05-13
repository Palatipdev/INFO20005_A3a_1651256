const classes = [
  {
    id: 1,
    type: 'puppy',
    name: 'Basic Manners',
    location: 'Spotswood',
    classSize: 'Group or 1:1',
    classLevel: 'Foundation Class',
    price: 275,
    image: 'images/basic-manners.png',
    dates: ['Sat 4 Apr', 'Sun 5 Apr', 'Sat 11 Apr', 'Sun 12 Apr', 'Sat 18 Apr'],
    included: [
      '5 weekly group sessions',
      'Qualified certified trainers',
      'Whole family are welcomed',
      'One make-up class available',
      'Suitable for puppies 12 weeks or older'
    ]
  },
  {
    id: 2,
    type: 'puppy',
    name: 'Level 1 Obedience',
    location: 'Spotswood',
    classSize: 'Group',
    classLevel: 'Graduate Class',
    price: 300,
    image: 'images/level1obedience.png',
    dates: ['Sat 4 Apr', 'Sun 5 Apr', 'Sat 11 Apr', 'Sun 12 Apr', 'Sat 18 Apr'],
    included: [
      '5 weekly group sessions',
      'Qualified certified trainers',
      'Whole family are welcomed',
      'One make-up class available',
      'Prerequisite: <a href="class-detail.html?id=1">Basic Manners</a> course required'
    ]
  },
  {
    id: 3,
    type: 'puppy',
    name: 'Level 2 Obedience',
    location: 'Spotswood',
    classSize: 'Group',
    classLevel: 'Graduate Class',
    price: 335,
    image: 'images/level2obedience.png',
    dates: ['Sat 4 Apr', 'Sun 5 Apr', 'Sat 11 Apr', 'Sun 12 Apr', 'Sat 18 Apr'],
    included: [
      '5 weekly group sessions',
      'Qualified certified trainers',
      'Whole family are welcomed',
      'One make-up class available',
      'Prerequisite: <a href="class-detail.html?id=2">Level 1 Obedience</a> course required'
    ]
  },
  {
    id: 4,
    type: 'dog',
    name: 'K9 Allsports',
    location: 'Spotswood',
    classSize: 'Group or 1:1',
    classLevel: 'Foundation Class',
    price: 330,
    image: 'images/k9allsports.png',
    dates: ['Sat 4 Apr', 'Sun 5 Apr', 'Sat 11 Apr', 'Sun 12 Apr', 'Sat 18 Apr'],
    included: [
      '5 weekly group sessions',
      'Qualified certified trainers',
      'Whole family are welcomed',
      'One make-up class available',
      'Prerequisite: <a href="class-detail.html?id=1">Basic Manners</a> course required'
    ]
  },
  {
    id: 5,
    type: 'dog',
    name: 'Level 1 Agility',
    location: 'Spotswood',
    classSize: 'Group',
    classLevel: 'Graduate Class',
    price: 345,
    image: 'images/level1agility.png',
    dates: ['Sat 4 Apr', 'Sun 5 Apr', 'Sat 11 Apr', 'Sun 12 Apr', 'Sat 18 Apr'],
    included: [
      '5 weekly group sessions',
      'Qualified certified trainers',
      'Whole family are welcomed',
      'One make-up class available',
      'Prerequisite: <a href="class-detail.html?id=4">K9 Allsports</a> course required'
    ]
  },
  {
    id: 6,
    type: 'dog',
    name: 'Level 2 Agility',
    location: 'Spotswood',
    classSize: 'Group',
    classLevel: 'Graduate Class',
    price: 360,
    image: 'images/level2agility.png',
    dates: ['Sat 4 Apr', 'Sun 5 Apr', 'Sat 11 Apr', 'Sun 12 Apr', 'Sat 18 Apr'],
    included: [
      '5 weekly group sessions',
      'Qualified certified trainers',
      'Whole family are welcomed',
      'One make-up class available',
      'Prerequisite: <a href="class-detail.html?id=5">Level 1 Agility</a> course required'
    ]
  },
  {
    id: 7,
    type: 'dog',
    name: 'Level 3 Agility',
    location: 'Spotswood',
    classSize: 'Group',
    classLevel: 'Graduate Class',
    price: 399,
    image: 'images/level3agility.png',
    dates: ['Sat 4 Apr', 'Sun 5 Apr', 'Sat 11 Apr', 'Sun 12 Apr', 'Sat 18 Apr'],
    included: [
      '5 weekly group sessions',
      'Qualified certified trainers',
      'Whole family are welcomed',
      'One make-up class available',
      'Prerequisite: <a href="class-detail.html?id=6">Level 2 Agility</a> course required'
    ]
  }
];

// Function to print each card

function renderClasses(type, containerID){
    // container is dog or puppy area
    const container = document.getElementById(containerID);
    // filtering all classes to get classes that are the type of parameter type
    const filteredCard = classes.filter(c => c.type === type);

    // add following to the container
    filteredCard.forEach(c => {
        container.innerHTML += `
        <div class="class-card">
            <div class="class-card-top">
                <img src="${c.image}" alt="${c.name}">
                <div class="card-content">
                    <p class="level">${c.classLevel}</p>
                    <h3>${c.name}</h3>
                    <p>Location: ${c.location}</p>
                    <p>Class Size: ${c.classSize}</p>
                </div>
            </div>
            <button onclick="viewProgram(${c.id})">VIEW PROGRAM</button>
        </div>
        `;
    })
}

renderClasses("puppy", "puppy-cards");
renderClasses("dog","dog-cards");

function viewProgram(id) {
  window.location.href = `class-detail.html?id=${id}`;
}