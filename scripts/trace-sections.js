const fs = require('fs');

const text = fs.readFileSync('C:/Users/aman4/.gemini/antigravity-cli/brain/4f60ac7c-2711-4005-b929-110869f1ca06/.system_generated/steps/203/content.md', 'utf8');
const m = text.match(/window\.__PABLO_EDGE_PAGE__\s*=\s*(\{[\s\S]+?\});\s*<\/script>/);
const pageData = JSON.parse(m[1]);
const editorNodes = JSON.parse(pageData.editorNodes);

// Get root children
const rootChildren = editorNodes["P81MvTrN8WidIIgJF1aE9"].nodes;

console.log(`Found ${rootChildren.length} top-level sections in Creator College:\n`);

function getText(nodeId) {
  const node = editorNodes[nodeId];
  if (!node) return '';
  let res = '';
  if (node.props?.dangerouslySetInnerHTML?.__html) {
    res += node.props.dangerouslySetInnerHTML.__html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() + ' ';
  }
  if (node.props?.text) {
    res += node.props.text.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() + ' ';
  }
  if (node.nodes) {
    for (const childId of node.nodes) {
      res += getText(childId) + ' ';
    }
  }
  return res.replace(/\s+/g, ' ').trim();
}

function summarizeSection(nodeId, index) {
  const node = editorNodes[nodeId];
  const allText = getText(nodeId);
  console.log(`=== SECTION ${index + 1} (${nodeId}) ===`);
  console.log(`Type: ${node?.type?.resolvedName || node?.displayName}`);
  console.log(`Summary: ${allText.slice(0, 300)}...`);
  console.log('--------------------------------------------------\n');
}

rootChildren.forEach((id, idx) => summarizeSection(id, idx));
