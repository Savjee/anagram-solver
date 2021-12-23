import fs from 'fs';
import path from 'path';
import readline from 'readline';
const { writeFile, mkdir } = require('fs').promises;
const util = require('util');
const exec = util.promisify(require('child_process').exec);

import { alphabetize } from '../src-common/alphabetize';
import { getHashPrefix } from '../src-common/getHashPrefix';
import { languages } from '../src-common/languages';

const OUTPUT_DIR = path.join(__dirname, '../src-www/api/v1/');

// ---- MAIN
async function generateAPIData(language){
    const map = {};
    const output_folder = path.join(OUTPUT_DIR, language);

    const rl = readline.createInterface({
        input: fs.createReadStream(
            path.join(__dirname, 'dictionaries', language + '.txt')
        ),
        crlfDelay: Infinity,
    });

    for await (const word of rl) {
        const alpha = alphabetize(word);
        const prefix = getHashPrefix(alpha);
        
        if(!map[prefix]){
            map[prefix] = [];
        }

       const el = map[prefix].find(el => el.alpha === alpha);
       if(!el){
           map[prefix].push({
               alpha: alpha,
               words: [],
           })
       }

       map[prefix].find(el => el.alpha === alpha)
                    .words.push(word);
    }

    for(const prefix in map){
        await mkdir(output_folder, { recursive: true });
        await writeFile(
            `${output_folder}/${prefix}.json`, 
            JSON.stringify({
                generated_on: Date.now(),
                data: map[prefix],
            })
        );
    }
}

(async () => {
    for(const lang of languages){
        console.log('Language:', lang.name);
        console.log('Dumping aspell dictionary');
        await exec(`aspell -d ${lang.code} dump master | aspell -l ${lang.code} expand | awk '{for (i=1;i<=NF;i++) print $i}' | awk '{ print tolower($0) }' | uniq > scripts/dictionaries/${lang.code}.txt`);
        
        console.log('Generating API data');
        await generateAPIData(lang.code);

        console.log('');
    }
})();
