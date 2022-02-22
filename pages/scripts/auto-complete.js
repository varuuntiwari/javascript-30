const file = `data/indian-states.json`;
const states = Array();
window.onload = () => {
    // Fetches file
    fetch(file)
    // Converts file to JSON
    .then(raw => raw.json())
    // Pushes each Object into states array
    .then(parsed => parsed.forEach(state => states.push(state)))
    // Catches any error and prints it to console
    .catch(err => console.error(err));
        
    document.querySelector('#query').addEventListener('keyup', showMatches);
}

function getMatches(term) {
    return states.filter(state => {
        let regex = new RegExp(term, 'gi');
        return state.state.match(regex);
    });
}

function showMatches() {
    let term = document.querySelector('#query').value;
    let filteredStates = [];
    if (term !== '') filteredStates = getMatches(term);
    let html = filteredStates.slice(0, 5).map(state => {
        return `
            <li class="glow">
                <span class="node">${state.state}, Capital: ${state.adminCapital}</span>
                <span class="node">${state.type}</span>
            </li>
        `
    }).join('');
    document.querySelector('#dropdown').innerHTML = html;
}