const fs = require('fs');

const text = fs.readFileSync('C:/Users/aman4/.gemini/antigravity-cli/brain/4f60ac7c-2711-4005-b929-110869f1ca06/.system_generated/steps/203/content.md', 'utf8');
const m = text.match(/window\.__PABLO_EDGE_PAGE__\s*=\s*(\{[\s\S]+?\});\s*<\/script>/);
const pageData = JSON.parse(m[1]);
const editorNodes = JSON.parse(pageData.editorNodes);

// Let's inspect Section 2 (Hero)
console.log("=== HERO (GDh_gK6vLvgLLxGvqc9Kt) ===");
const heroNode = editorNodes["GDh_gK6vLvgLLxGvqc9Kt"];
console.log(JSON.stringify(heroNode, null, 2).slice(0, 1500));
