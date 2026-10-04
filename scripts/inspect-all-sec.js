const fs = require('fs');

const text = fs.readFileSync('C:/Users/aman4/.gemini/antigravity-cli/brain/4f60ac7c-2711-4005-b929-110869f1ca06/.system_generated/steps/203/content.md', 'utf8');
const m = text.match(/window\.__PABLO_EDGE_PAGE__\s*=\s*(\{[\s\S]+?\});\s*<\/script>/);
const pageData = JSON.parse(m[1]);
const editorNodes = JSON.parse(pageData.editorNodes);

const rootChildren = editorNodes["P81MvTrN8WidIIgJF1aE9"].nodes;

function dumpSection(secId, title) {
  console.log(`\n=================== ${title} (${secId}) ===================`);
  const node = editorNodes[secId];
  console.log("Bg:", node?.props?.desktop?.style?.background, "Style:", JSON.stringify(node?.props?.desktop?.style));
  
  function printChildren(id, depth = 1) {
    const n = editorNodes[id];
    if (!n) return;
    const indent = "  ".repeat(depth);
    const html = n.props?.dangerouslySetInnerHTML?.__html || n.props?.text;
    const txt = html ? html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : '';
    if (txt) console.log(`${indent}[${n.displayName || n.type.resolvedName}] ${txt.slice(0, 100)}`);
    if (n.nodes) {
      for (const c of n.nodes) printChildren(c, depth + 1);
    }
  }
  
  if (node?.nodes) {
    for (const c of node.nodes) printChildren(c, 1);
  }
}

for (let i = 5; i < rootChildren.length; i++) {
  dumpSection(rootChildren[i], `SECTION ${i+1}`);
}
