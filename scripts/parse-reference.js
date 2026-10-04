const fs = require('fs');

const text = fs.readFileSync('C:/Users/aman4/.gemini/antigravity-cli/brain/4f60ac7c-2711-4005-b929-110869f1ca06/.system_generated/steps/203/content.md', 'utf8');

// Find editorNodes JSON
const m = text.match(/window\.__PABLO_EDGE_PAGE__\s*=\s*(\{[\s\S]+?\});\s*<\/script>/);
if (m) {
  try {
    const pageData = JSON.parse(m[1]);
    const editorNodes = JSON.parse(pageData.editorNodes);
    console.log("Total Nodes:", Object.keys(editorNodes).length);
    
    // Find text elements and section layouts
    for (const [key, node] of Object.entries(editorNodes)) {
      if (node.props && node.props.text) {
        console.log(`[${node.displayName || node.type.resolvedName}] ${node.props.text.slice(0, 100)}`);
      } else if (node.props && node.props.desktop && node.props.desktop.style) {
        const s = node.props.desktop.style;
        if (s.fontSize || s.backgroundColor || s.color) {
          // print some styles
        }
      }
    }
  } catch (err) {
    console.error("Parse error:", err.message);
  }
} else {
  console.log("No match");
}
