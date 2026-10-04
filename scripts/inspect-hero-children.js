const fs = require('fs');

const text = fs.readFileSync('C:/Users/aman4/.gemini/antigravity-cli/brain/4f60ac7c-2711-4005-b929-110869f1ca06/.system_generated/steps/203/content.md', 'utf8');
const m = text.match(/window\.__PABLO_EDGE_PAGE__\s*=\s*(\{[\s\S]+?\});\s*<\/script>/);
const pageData = JSON.parse(m[1]);
const editorNodes = JSON.parse(pageData.editorNodes);

const heroChildren = [
  "fWPsimIWH68TG-yusgFoo",
  "EuS4W-k4H68TZLgL8BTS8",
  "CSy3b8uUHCvolFh_hvzWm",
  "ZjZlDkJlbRtz7Jin-epOH",
  "GTJwOykyrLkBH0MdhtaIo",
  "XnaHDzBWxy1EvwvG2tBmv"
];

for (const id of heroChildren) {
  const node = editorNodes[id];
  console.log(`Node ${id} (${node.displayName || node.type.resolvedName}):`);
  const html = node.props?.dangerouslySetInnerHTML?.__html || node.props?.text;
  if (html) console.log("  Text:", html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
  if (node.props?.desktop?.style) {
    console.log("  Desktop Style:", JSON.stringify(node.props.desktop.style));
  }
  if (node.nodes) {
    console.log("  Children:", node.nodes.length);
  }
}
