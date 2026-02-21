import { jsPDF } from "jspdf";

interface ContractData {
  familyName: string;
  parents: string[];
  children: string[];
  weekdayLimit: string;
  weekendLimit: string;
  deviceFreeZones: string[];
  deviceFreeTimes: string[];
  allowedDevices: string[];
  parentRules: string[];
  consequences: string[];
  rewards: string[];
  startDate: string;
  reviewDate: string;
  signatures: Record<string, string>;
}

export function generateContractPdf(data: ContractData) {
  const doc = new jsPDF({ unit: "pt", format: "letter" });
  const W = doc.internal.pageSize.getWidth();
  const H = doc.internal.pageSize.getHeight();
  const margin = 50;
  let y = 50;

  function checkPage(needed = 60) {
    if (y + needed > H - 50) {
      doc.addPage();
      y = 50;
    }
  }

  function sectionTitle(text: string) {
    checkPage(40);
    y += 14;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(0);
    doc.text(text, margin, y);
    y += 6;
    doc.setLineWidth(0.5);
    doc.setDrawColor(200);
    doc.line(margin, y, W - margin, y);
    doc.setDrawColor(0);
    y += 16;
  }

  function bulletList(items: string[]) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(60);
    for (const item of items) {
      checkPage(18);
      doc.text(`•  ${item}`, margin + 10, y);
      y += 18;
    }
  }

  function labelValue(label: string, value: string) {
    checkPage(18);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(label, margin + 10, y);
    doc.setTextColor(0);
    doc.setFont("helvetica", "bold");
    doc.text(value, margin + 10 + doc.getTextWidth(label + "  "), y);
    doc.setFont("helvetica", "normal");
    y += 18;
  }

  // Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(0);
  const title = data.familyName
    ? `${data.familyName} Technology Contract`
    : "Family Technology Contract";
  doc.text(title, W / 2, y, { align: "center" });
  y += 14;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(120);
  doc.text(
    "A mutual agreement to protect attention, agency, and presence",
    W / 2,
    y,
    { align: "center" }
  );
  y += 10;
  doc.text("frictioncatalog.com", W / 2, y, { align: "center" });
  doc.setTextColor(0);
  y += 10;

  // Screen Time
  sectionTitle("Screen Time Limits");
  labelValue("Weekdays:", `${data.weekdayLimit} per person`);
  labelValue("Weekends:", `${data.weekendLimit} per person`);

  // Device-Free Zones
  if (data.deviceFreeZones.length > 0) {
    sectionTitle("Device-Free Zones");
    bulletList(data.deviceFreeZones);
  }

  // Device-Free Times
  if (data.deviceFreeTimes.length > 0) {
    sectionTitle("Device-Free Times");
    bulletList(data.deviceFreeTimes);
  }

  // Allowed Devices
  if (data.allowedDevices.length > 0) {
    sectionTitle("Allowed Intentional Devices");
    bulletList(data.allowedDevices);
  }

  // Parent Commitments
  if (data.parentRules.length > 0) {
    sectionTitle("Parent Commitments");
    bulletList(data.parentRules);
  }

  // Consequences
  if (data.consequences.length > 0) {
    sectionTitle("When Someone Breaks the Contract");
    bulletList(data.consequences);
  }

  // Rewards
  if (data.rewards.length > 0) {
    sectionTitle("When Someone Honors the Contract");
    bulletList(data.rewards);
  }

  // Timeline
  sectionTitle("Timeline");
  labelValue("Contract starts:", data.startDate || "_______________");
  labelValue("First review date:", data.reviewDate || "_______________");

  // Signatures
  const allMembers = [
    ...data.parents.filter(Boolean),
    ...data.children.filter(Boolean),
  ];

  sectionTitle("Signatures");
  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  doc.setTextColor(120);
  doc.text(
    "By signing, each person agrees to follow this contract and hold each other accountable with love.",
    margin,
    y
  );
  doc.setTextColor(0);
  y += 20;

  for (const member of allMembers) {
    checkPage(60);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(member, margin, y);
    y += 8;

    // Signature line
    if (data.signatures[member]) {
      doc.setFont("courier", "italic");
      doc.setFontSize(14);
      doc.setTextColor(0);
      doc.text(data.signatures[member], margin, y + 16);
    }
    doc.setLineWidth(0.3);
    doc.setDrawColor(180);
    doc.line(margin, y + 22, margin + 240, y + 22);
    doc.line(margin + 280, y + 22, W - margin, y + 22);
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(150);
    doc.text("Signature", margin, y + 34);
    doc.text("Date", margin + 280, y + 34);
    doc.setDrawColor(0);
    doc.setTextColor(0);
    y += 50;
  }

  // Footer
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  doc.setTextColor(150);
  doc.text(
    "\u00A9 2026 Friction Catalog \u00B7 frictioncatalog.com \u00B7 For The People, Always",
    W / 2,
    H - 30,
    { align: "center" }
  );

  doc.save(
    `${data.familyName ? data.familyName.replace(/\s+/g, "-").toLowerCase() + "-" : ""}technology-contract.pdf`
  );
}
