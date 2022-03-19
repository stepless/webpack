import x from './x.js'
import jpg from './13q.jpg'

console.log(jpg);
const div1 = document.querySelector('.im');
div1.innerHTML = `
    <img width='100%' src="${jpg}">
`;