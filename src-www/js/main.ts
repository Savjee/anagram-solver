import { alphabetize } from "../../src-common/alphabetize";
import { getHashPrefix } from "../../src-common/getHashPrefix";
import { languages } from '../../src-common/languages';

var html = require("html-template-tag");

// jQuery anyone? Oldschool JS rocks!
const $ = function( id ) { return document.getElementById( id ); };

const anagramInpt = (<HTMLInputElement> $('anagram'));
const solveButton = (<HTMLButtonElement> $('solveButton'));
const languageSelect = (<HTMLSelectElement> $('language'));
const resultsDiv = (<HTMLDivElement> $('results'));

const noResultsHtml = `
    <ul>
        <li>No results</li>
    </ul>
`;

async function solve(){
    const alpha = alphabetize(anagramInpt.value);
    const prefix = getHashPrefix(alpha);
    const lang = languageSelect.value;

    const res = await fetch(`api/v1/${lang}/${prefix}.json`)
                        .catch(e => {
                            resultsDiv.innerHTML = noResultsHtml;
                        });
    const data = await res.json()
                        .catch(e => {
                            resultsDiv.innerHTML = noResultsHtml;
                        });

    const solutions = data.data.find(el => el.alpha === alpha);
    if(!solutions || !solutions.words || solutions.length === 0){
        resultsDiv.innerHTML = noResultsHtml;
        return;
    }

    resultsDiv.innerHTML = html`
        <ul>
            ${solutions.words.map((solution) => { return `
                <li>${solution}</li>
            `})}
        </ul>
    `;
}

window.addEventListener('DOMContentLoaded', () => {
    languageSelect.innerHTML = html`
        ${languages.map((lang) => `
            <option value="${lang.code}">${lang.name}</option>
        `)}
    `;
});

anagramInpt.addEventListener("keyup", function (event) {
    if (event.key === "Enter" || event.key === "13") {
        solve();
    }
});

solveButton.addEventListener('click', () => {
    solve();
});