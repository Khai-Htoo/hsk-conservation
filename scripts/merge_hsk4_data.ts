import fs from 'fs';
import path from 'path';

const dataPath = path.join(__dirname, '../lib/data.ts');
let content = fs.readFileSync(dataPath, 'utf-8');

const newItems = [];
for (let i = 1; i <= 10; i++) {
  const batchPath = path.join('/tmp/hsk4_data', `hsk4_daily_batch${i}.json`);
  if (fs.existsSync(batchPath)) {
    const batchData = JSON.parse(fs.readFileSync(batchPath, 'utf-8'));
    newItems.push(...batchData);
  }
}

const newItemsStr = newItems.map(item => JSON.stringify(item, null, 4).split('\n').map((line, idx) => idx === 0 ? line : `    ${line}`).join('\n')).join(',\n    ') + ',';

const targetStr = '"4": [\n';
const pos = content.indexOf(targetStr);
if (pos !== -1) {
  const insertPos = pos + targetStr.length;
  content = content.slice(0, insertPos) + "    " + newItemsStr + "\n" + content.slice(insertPos);
  fs.writeFileSync(dataPath, content);
  console.log(`Successfully inserted ${newItems.length} items to HSK 4 data.`);
} else {
  console.error('Could not find "4": [ in lib/data.ts');
}
