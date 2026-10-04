const fs = require('fs');

const text = fs.readFileSync('C:/Users/aman4/.gemini/antigravity-cli/brain/4f60ac7c-2711-4005-b929-110869f1ca06/.system_generated/steps/203/content.md', 'utf8');
const m = text.match(/window\.__PABLO_EDGE_PAGE__\s*=\s*(\{[\s\S]+?\});\s*<\/script>/);
const pageData = JSON.parse(m[1]);
const editorNodes = JSON.parse(pageData.editorNodes);

const headings = [];
for (const [id, node] of Object.entries(editorNodes)) {
  const html = node.props?.dangerouslySetInnerHTML?.__html;
  if (html) {
    const clean = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const variant = node.props?.desktop?.variant || '';
    if (clean.length > 5 && (variant.includes('heading') || node.displayName?.includes('Head') || clean.length < 120)) {
      headings.push(`[${variant || 'text'}] ${clean}`);
    }
  }
}
console.log(headings.join('\n'));
