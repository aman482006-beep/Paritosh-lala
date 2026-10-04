const fs = require('fs');

const text = fs.readFileSync('C:/Users/aman4/.gemini/antigravity-cli/brain/4f60ac7c-2711-4005-b929-110869f1ca06/.system_generated/steps/203/content.md', 'utf8');
const m = text.match(/window\.__PABLO_EDGE_PAGE__\s*=\s*(\{[\s\S]+?\});\s*<\/script>/);
const pageData = JSON.parse(m[1]);
const editorNodes = JSON.parse(pageData.editorNodes);

const dualCards = editorNodes["XnaHDzBWxy1EvwvG2tBmv"].nodes;
console.log("Dual cards count:", dualCards.length);

for (const id of dualCards) {
  const node = editorNodes[id];
  console.log(`\nCard ${id}:`);
  console.log("  Style:", JSON.stringify(node.props?.desktop?.style));
  if (node.nodes) {
    for (const childId of node.nodes) {
      const child = editorNodes[childId];
      const html = child.props?.dangerouslySetInnerHTML?.__html || child.props?.text;
      console.log(`    Child ${child.displayName}: ${html ? html.replace(/<[^>]+>/g, ' ').slice(0, 100) : ''}`);
    }
  }
}
