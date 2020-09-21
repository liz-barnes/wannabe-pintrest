import '../styles/main.scss';

const projects = [
  {
    design: 'flowers',
    type: 'shirts',
    image: 'src/images/daisy-tshirt-1.jpg',
  },
  {
    design: 'flowers',
    type: 'shirts',
    image: 'src/images/daisy-tshirt-2.jpg',
  },
  {
    design: 'designs',
    type: 'shirts',
    image: 'src/images/face-art-shirt.jpg',
  },
  {
    design: 'designs',
    type: 'shirts',
    image: 'src/images/rainbow-design.jpg',
  },
  {
    design: 'designs',
    type: 'jeans',
    image: 'src/images/mushroom-pants.jpg',
  },
  {
    design: 'flowers',
    type: 'jeans',
    image: 'src/images/flower-pants-1.jpg',
  },
  {
    design: 'flowers',
    type: 'jeans',
    image: 'src/images/flower-pants-2.jpg',
  },
  {
    design: 'flowers',
    type: 'jeans',
    image: 'src/images/flower-pants-3.jpg',
  },
  {
    design: 'flowers',
    type: 'jeans',
    image: 'src/images/flower-pants-4.jpg',
  },
  {
    design: 'flowers',
    type: 'jeans',
    image: 'src/images/flower-pants-5.jpg',
  },
  {
    design: 'designs',
    type: 'jeans',
    image: 'src/images/design-skirt.jpg',
  },
  {
    design: 'designs',
    type: 'jeans',
    image: 'src/images/design-pants.jpg',
  },
  {
    design: 'designs',
    type: 'jeans',
    image: 'src/images/design-pants-2.jpg',
  },
  {
    design: 'flowers',
    type: 'shirts',
    image: 'src/images/flower-tshirt-3.jpg',
  },
  {
    design: 'designs',
    type: 'shirts',
    image: 'src/images/rainbow-shirt.jpg',
  },
  {
    design: 'designs',
    type: 'shirts',
    image: 'src/images/design-shirt.jpg',
  },
];

// const getProjects = () => projects;

const buildCards = (array) => {
  // for (let project = 0; project < array.length; project ++) {
  //   $('#container').append(
  //     `<div class="projectImage" style="background-image: url(${project.image})"></div>`
  //   )
  // };
  array.forEach((project) => {
    $('#container').append(
      `<div class="projectImage" style="background-image: url(${project.image})"></div>`
    );
  });
};

const init = () => {
  $('#app').html('<h1>HELLO! You are up and running!</h1>');
  console.warn('YOU ARE UP AND RUNNING!');
  buildCards(projects);
};

init();
