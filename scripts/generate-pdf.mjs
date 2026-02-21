import { jsPDF } from "jspdf";
import { writeFileSync } from "fs";

const doc = new jsPDF({ unit: "pt", format: "letter" });
const W = doc.internal.pageSize.getWidth();
const margin = 50;
const contentW = W - margin * 2;
let y = 50;

function heading(text, size = 22) {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(size);
  doc.text(text, W / 2, y, { align: "center" });
  y += size + 8;
}

function subheading(text) {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(text, W / 2, y, { align: "center" });
  y += 16;
}

function sectionTitle(text) {
  y += 12;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text(text, margin, y);
  y += 6;
  doc.setLineWidth(0.5);
  doc.line(margin, y, W - margin, y);
  y += 16;
}

function blankLine(label) {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(label, margin, y);
  const labelW = doc.getTextWidth(label + "  ");
  doc.setLineWidth(0.3);
  doc.setDrawColor(180);
  doc.line(margin + labelW, y, W - margin, y);
  doc.setDrawColor(0);
  y += 22;
}

function blankLines(count) {
  for (let i = 0; i < count; i++) {
    doc.setLineWidth(0.3);
    doc.setDrawColor(180);
    doc.line(margin, y, W - margin, y);
    doc.setDrawColor(0);
    y += 22;
  }
}

function bulletBlank(count) {
  for (let i = 0; i < count; i++) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text("•", margin, y);
    doc.setLineWidth(0.3);
    doc.setDrawColor(180);
    doc.line(margin + 14, y, W - margin, y);
    doc.setDrawColor(0);
    y += 22;
  }
}

function note(text) {
  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  doc.setTextColor(120);
  doc.text(text, margin, y);
  doc.setTextColor(0);
  y += 14;
}

function signatureBlock(label) {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(label, margin, y);
  y += 8;
  doc.setLineWidth(0.3);
  doc.setDrawColor(180);
  doc.line(margin, y + 20, margin + 240, y + 20);
  doc.line(margin + 280, y + 20, W - margin, y + 20);
  doc.setFontSize(8);
  doc.text("Signature", margin, y + 32);
  doc.text("Date", margin + 280, y + 32);
  doc.setDrawColor(0);
  y += 48;
}

function checkPage(needed = 80) {
  if (y + needed > doc.internal.pageSize.getHeight() - 50) {
    doc.addPage();
    y = 50;
  }
}

// === PAGE 1 ===

heading("Family Technology Contract");
subheading("A mutual agreement to protect attention, agency, and presence");
y += 6;
subheading("frictioncatalog.com");
y += 10;

// Family name
blankLine("Family Name:");
y += 4;

// Family members
sectionTitle("Family Members");
note("Everyone who signs follows the same rules.");
y += 4;
blankLine("Parent / Guardian 1:");
blankLine("Parent / Guardian 2:");
blankLine("Child 1:");
blankLine("Child 2:");
blankLine("Child 3:");

// Screen time
sectionTitle("Screen Time Limits");
note("These limits apply equally to every family member.");
y += 4;
blankLine("Weekday limit (per person):");
blankLine("Weekend limit (per person):");

// Device-free zones
sectionTitle("Device-Free Zones");
note("Spaces where no devices are allowed.");
y += 4;
bulletBlank(5);

checkPage();

// Device-free times
sectionTitle("Device-Free Times");
note("Times when all devices get put away.");
y += 4;
bulletBlank(5);

// Allowed devices
sectionTitle("Allowed Intentional Devices");
note("Tools your family chooses to use with intention.");
y += 4;
bulletBlank(5);

checkPage();

// Parent commitments
sectionTitle("Parent Commitments");
note("Parents lead by example. These rules apply to you too.");
y += 4;
bulletBlank(5);

// Consequences
sectionTitle("When Someone Breaks the Contract");
note("Applied equally — parents and kids.");
y += 4;
bulletBlank(4);

checkPage();

// Rewards
sectionTitle("When Someone Honors the Contract");
note("Positive reinforcement for following through.");
y += 4;
bulletBlank(4);

// Timeline
sectionTitle("Timeline");
blankLine("Contract starts:");
blankLine("First review date:");

checkPage(200);

// Signatures
sectionTitle("Signatures");
note("By signing, each person agrees to follow this contract and hold each other accountable with love.");
y += 8;
signatureBlock("Parent / Guardian 1");
signatureBlock("Parent / Guardian 2");

checkPage(200);
signatureBlock("Child 1");
signatureBlock("Child 2");
signatureBlock("Child 3");

// Footer
y += 10;
doc.setFont("helvetica", "italic");
doc.setFontSize(8);
doc.setTextColor(150);
doc.text(
  "© 2026 Friction Catalog · frictioncatalog.com · For The People, Always",
  W / 2,
  doc.internal.pageSize.getHeight() - 30,
  { align: "center" }
);

const buffer = Buffer.from(doc.output("arraybuffer"));
writeFileSync("public/blank-contract.pdf", buffer);
console.log("Generated public/blank-contract.pdf");
