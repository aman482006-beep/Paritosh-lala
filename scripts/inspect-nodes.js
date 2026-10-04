const fs = require('fs');

const text = fs.readFileSync('C:/Users/aman4/.gemini/antigravity-cli/brain/4f60ac7c-2711-4005-b929-110869f1ca06/.system_generated/steps/203/content.md', 'utf8');
const m = text.match(/window\.__PABLO_EDGE_PAGE__\s*=\s*(\{[\s\S]+?\});\s*<\/script>/);
const pageData = JSON.parse(m[1]);
const editorNodes = JSON.parse(pageData.editorNodes);

function inspectNode(obj, path = '') {
  if (!obj) return;
  for (const k in obj) {
    if (typeof obj[k] === 'string' && obj[k].length > 5 && !obj[k].startsWith('http') && !obj[k].startsWith('{') && !obj[k].includes('px')) {
      console.log(`${path}.${k}: ${obj[k].replace(/\n/g, ' ')}`);
    } else if (typeof obj[k] === 'object' && path.split('.').length < 4) {
      inspectNode(obj[k], `${path}.${k}`);
    }
  }
}

// Check sample nodes
let count = 0;
for (const [id, node] of Object.entries(editorNodes)) {
  if (node.displayName === 'Text' || node.displayName === 'Heading' || node.type?.resolvedName?.includes('Text')) {
    console.log(`[${node.displayName}]`, JSON.stringify(node.props).slice(0, 200));
    count++;
    if (count > 30) break;
  }
}
