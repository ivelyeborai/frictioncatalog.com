"use client";

import { useState, useRef } from "react";
import { generateContractPdf } from "@/lib/generate-contract-pdf";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

interface ContractData {
  familyName: string;
  parents: string[];
  children: string[];
  weekdayLimit: string;
  weekendLimit: string;
  deviceFreeZones: string[];
  customZone: string;
  deviceFreeTimes: string[];
  customTime: string;
  allowedDevices: string[];
  customDevice: string;
  parentRules: string[];
  customParentRule: string;
  consequences: string[];
  customConsequence: string;
  rewards: string[];
  customReward: string;
  startDate: string;
  reviewDate: string;
  signatures: Record<string, string>;
}

const initialData: ContractData = {
  familyName: "",
  parents: [""],
  children: [""],
  weekdayLimit: "2 hours",
  weekendLimit: "3 hours",
  deviceFreeZones: [],
  customZone: "",
  deviceFreeTimes: [],
  customTime: "",
  allowedDevices: [],
  customDevice: "",
  parentRules: [],
  customParentRule: "",
  consequences: [],
  customConsequence: "",
  rewards: [],
  customReward: "",
  startDate: "",
  reviewDate: "",
  signatures: {},
};

const ZONE_OPTIONS = [
  "Dinner table",
  "Bedrooms",
  "Car rides under 30 min",
  "Bathroom",
  "Kitchen",
];

const TIME_OPTIONS = [
  "During meals",
  "1 hour before bed",
  "First hour after waking",
  "During homework",
  "During family activities",
];

const DEVICE_OPTIONS = [
  "Flip phone",
  "Walkie-talkies",
  "Film camera",
  "Paper notebook",
  "Desktop computer (shared)",
  "Tablet (supervised)",
];

const PARENT_RULE_OPTIONS = [
  "No phone during meals",
  "No phone in bedroom after 9pm",
  "No checking phone during conversations",
  "No doomscrolling in front of kids",
  "Same screen time limits as children",
];

const CONSEQUENCE_OPTIONS = [
  "24-hour device pause",
  "Extra chore for each violation",
  "Family discussion about what happened",
  "Loss of weekend bonus screen time",
  "Write a reflection about the violation",
];

const REWARD_OPTIONS = [
  "Bonus screen time on weekends",
  "Choose a family activity",
  "New book or creative supply",
  "Extra allowance",
  "Special outing of their choice",
];

export default function ContractCreator() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<ContractData>(initialData);
  const contractRef = useRef<HTMLDivElement>(null);

  const steps = [
    { title: "Welcome", subtitle: "Let's create your family's technology contract" },
    { title: "Family Members", subtitle: "Who's signing this contract?" },
    { title: "Screen Time", subtitle: "Set daily screen time limits" },
    { title: "Device-Free Zones", subtitle: "Spaces where devices aren't allowed" },
    { title: "Device-Free Times", subtitle: "When devices get put away" },
    { title: "Allowed Devices", subtitle: "Intentional tools your family uses" },
    { title: "Parent Rules", subtitle: "Parents follow the same rules" },
    { title: "Consequences & Rewards", subtitle: "What happens when rules are kept — or broken" },
    { title: "Review & Sign", subtitle: "Review your contract and sign it" },
  ];

  const totalSteps = steps.length;

  function toggleItem(
    field: "deviceFreeZones" | "deviceFreeTimes" | "allowedDevices" | "parentRules" | "consequences" | "rewards",
    item: string
  ) {
    setData((prev) => ({
      ...prev,
      [field]: prev[field].includes(item)
        ? prev[field].filter((i) => i !== item)
        : [...prev[field], item],
    }));
  }

  function addCustomItem(
    field: "deviceFreeZones" | "deviceFreeTimes" | "allowedDevices" | "parentRules" | "consequences" | "rewards",
    customField: "customZone" | "customTime" | "customDevice" | "customParentRule" | "customConsequence" | "customReward"
  ) {
    const value = data[customField].trim();
    if (value && !data[field].includes(value)) {
      setData((prev) => ({
        ...prev,
        [field]: [...prev[field], value],
        [customField]: "",
      }));
    }
  }

  function addPerson(field: "parents" | "children") {
    setData((prev) => ({ ...prev, [field]: [...prev[field], ""] }));
  }

  function updatePerson(field: "parents" | "children", index: number, value: string) {
    setData((prev) => {
      const updated = [...prev[field]];
      updated[index] = value;
      return { ...prev, [field]: updated };
    });
  }

  function removePerson(field: "parents" | "children", index: number) {
    setData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  }

  function updateSignature(name: string, value: string) {
    setData((prev) => ({
      ...prev,
      signatures: { ...prev.signatures, [name]: value },
    }));
  }

  const allMembers = [
    ...data.parents.filter(Boolean),
    ...data.children.filter(Boolean),
  ];

  function handlePrint() {
    window.print();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="mx-auto max-w-3xl px-6 py-12">
        {/* Progress */}
        <div className="mb-2 text-sm text-[var(--muted)]">
          Step {step + 1} of {totalSteps}
        </div>
        <div className="mb-8 h-1.5 w-full rounded-full bg-neutral-100">
          <div
            className="h-1.5 rounded-full bg-[var(--accent)] transition-all duration-300"
            style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
          />
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight">
          {steps[step].title}
        </h1>
        <p className="mt-2 text-[var(--muted)]">{steps[step].subtitle}</p>

        <div className="mt-8">
          {/* Step 0: Welcome */}
          {step === 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">
                Create Your Family&apos;s Technology Contract
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                A mutual agreement to protect attention, agency, and presence.
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                This isn&apos;t about punishment. It&apos;s about protecting your
                family&apos;s ability to think clearly, feel fully, and be present
                with each other.
              </p>
              <p className="font-semibold">
                Most importantly: Parents follow the same rules as kids. This is a
                mutual commitment.
              </p>
              <div className="rounded-lg border border-[var(--border)] p-5 text-sm text-[var(--muted)] space-y-2">
                <p className="font-semibold text-[var(--foreground)]">
                  This wizard will guide you through:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Who&apos;s signing (parents and kids)</li>
                  <li>Screen time limits (enforced equally)</li>
                  <li>Device-free zones and times</li>
                  <li>Allowed intentional devices</li>
                  <li>What happens when someone breaks the rules</li>
                </ul>
                <p className="pt-2">
                  Takes about 10 minutes. You&apos;ll get a printable contract to
                  sign and post on your fridge.
                </p>
              </div>
            </div>
          )}

          {/* Step 1: Family Members */}
          {step === 1 && (
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Family Name
                </label>
                <input
                  type="text"
                  placeholder="The Johnson Family"
                  value={data.familyName}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, familyName: e.target.value }))
                  }
                  className="w-full rounded-lg border border-[var(--border)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3">
                  Parents / Guardians
                </label>
                {data.parents.map((parent, i) => (
                  <div key={i} className="mb-2 flex gap-2">
                    <input
                      type="text"
                      placeholder={`Parent ${i + 1} name`}
                      value={parent}
                      onChange={(e) => updatePerson("parents", i, e.target.value)}
                      className="flex-1 rounded-lg border border-[var(--border)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    />
                    {data.parents.length > 1 && (
                      <button
                        onClick={() => removePerson("parents", i)}
                        className="px-3 text-[var(--muted)] hover:text-red-500"
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
                <button
                  onClick={() => addPerson("parents")}
                  className="mt-1 text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
                >
                  + Add parent
                </button>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3">
                  Children
                </label>
                {data.children.map((child, i) => (
                  <div key={i} className="mb-2 flex gap-2">
                    <input
                      type="text"
                      placeholder={`Child ${i + 1} name`}
                      value={child}
                      onChange={(e) =>
                        updatePerson("children", i, e.target.value)
                      }
                      className="flex-1 rounded-lg border border-[var(--border)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    />
                    {data.children.length > 1 && (
                      <button
                        onClick={() => removePerson("children", i)}
                        className="px-3 text-[var(--muted)] hover:text-red-500"
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
                <button
                  onClick={() => addPerson("children")}
                  className="mt-1 text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
                >
                  + Add child
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Screen Time */}
          {step === 2 && (
            <div className="space-y-6">
              <p className="text-[var(--muted)] text-sm">
                These limits apply equally to everyone — parents included.
              </p>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Weekday limit (per person)
                </label>
                <select
                  value={data.weekdayLimit}
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      weekdayLimit: e.target.value,
                    }))
                  }
                  className="w-full rounded-lg border border-[var(--border)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                >
                  <option>30 minutes</option>
                  <option>1 hour</option>
                  <option>1.5 hours</option>
                  <option>2 hours</option>
                  <option>3 hours</option>
                  <option>No limit</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Weekend limit (per person)
                </label>
                <select
                  value={data.weekendLimit}
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      weekendLimit: e.target.value,
                    }))
                  }
                  className="w-full rounded-lg border border-[var(--border)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                >
                  <option>1 hour</option>
                  <option>2 hours</option>
                  <option>3 hours</option>
                  <option>4 hours</option>
                  <option>No limit</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 3: Device-Free Zones */}
          {step === 3 && (
            <div className="space-y-4">
              <p className="text-[var(--muted)] text-sm">
                Select spaces where no devices are allowed. These apply to
                everyone.
              </p>
              <div className="space-y-2">
                {ZONE_OPTIONS.map((zone) => (
                  <label
                    key={zone}
                    className="flex cursor-pointer items-center gap-3 rounded-lg border border-[var(--border)] p-4 transition-colors hover:bg-neutral-50"
                  >
                    <input
                      type="checkbox"
                      checked={data.deviceFreeZones.includes(zone)}
                      onChange={() => toggleItem("deviceFreeZones", zone)}
                      className="h-4 w-4 accent-[var(--accent)]"
                    />
                    <span className="text-sm">{zone}</span>
                  </label>
                ))}
              </div>
              <div className="flex gap-2 pt-2">
                <input
                  type="text"
                  placeholder="Add a custom zone..."
                  value={data.customZone}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, customZone: e.target.value }))
                  }
                  onKeyDown={(e) =>
                    e.key === "Enter" &&
                    addCustomItem("deviceFreeZones", "customZone")
                  }
                  className="flex-1 rounded-lg border border-[var(--border)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
                <button
                  onClick={() =>
                    addCustomItem("deviceFreeZones", "customZone")
                  }
                  className="rounded-lg bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white"
                >
                  Add
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Device-Free Times */}
          {step === 4 && (
            <div className="space-y-4">
              <p className="text-[var(--muted)] text-sm">
                Select times when devices get put away. For everyone.
              </p>
              <div className="space-y-2">
                {TIME_OPTIONS.map((time) => (
                  <label
                    key={time}
                    className="flex cursor-pointer items-center gap-3 rounded-lg border border-[var(--border)] p-4 transition-colors hover:bg-neutral-50"
                  >
                    <input
                      type="checkbox"
                      checked={data.deviceFreeTimes.includes(time)}
                      onChange={() => toggleItem("deviceFreeTimes", time)}
                      className="h-4 w-4 accent-[var(--accent)]"
                    />
                    <span className="text-sm">{time}</span>
                  </label>
                ))}
              </div>
              <div className="flex gap-2 pt-2">
                <input
                  type="text"
                  placeholder="Add a custom time..."
                  value={data.customTime}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, customTime: e.target.value }))
                  }
                  onKeyDown={(e) =>
                    e.key === "Enter" &&
                    addCustomItem("deviceFreeTimes", "customTime")
                  }
                  className="flex-1 rounded-lg border border-[var(--border)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
                <button
                  onClick={() =>
                    addCustomItem("deviceFreeTimes", "customTime")
                  }
                  className="rounded-lg bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white"
                >
                  Add
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Allowed Devices */}
          {step === 5 && (
            <div className="space-y-4">
              <p className="text-[var(--muted)] text-sm">
                Which intentional tools does your family use?
              </p>
              <div className="space-y-2">
                {DEVICE_OPTIONS.map((device) => (
                  <label
                    key={device}
                    className="flex cursor-pointer items-center gap-3 rounded-lg border border-[var(--border)] p-4 transition-colors hover:bg-neutral-50"
                  >
                    <input
                      type="checkbox"
                      checked={data.allowedDevices.includes(device)}
                      onChange={() => toggleItem("allowedDevices", device)}
                      className="h-4 w-4 accent-[var(--accent)]"
                    />
                    <span className="text-sm">{device}</span>
                  </label>
                ))}
              </div>
              <div className="flex gap-2 pt-2">
                <input
                  type="text"
                  placeholder="Add a custom device..."
                  value={data.customDevice}
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      customDevice: e.target.value,
                    }))
                  }
                  onKeyDown={(e) =>
                    e.key === "Enter" &&
                    addCustomItem("allowedDevices", "customDevice")
                  }
                  className="flex-1 rounded-lg border border-[var(--border)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
                <button
                  onClick={() =>
                    addCustomItem("allowedDevices", "customDevice")
                  }
                  className="rounded-lg bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white"
                >
                  Add
                </button>
              </div>
            </div>
          )}

          {/* Step 6: Parent Rules */}
          {step === 6 && (
            <div className="space-y-4">
              <p className="text-[var(--muted)] text-sm">
                Parents commit to these rules too. Lead by example.
              </p>
              <div className="space-y-2">
                {PARENT_RULE_OPTIONS.map((rule) => (
                  <label
                    key={rule}
                    className="flex cursor-pointer items-center gap-3 rounded-lg border border-[var(--border)] p-4 transition-colors hover:bg-neutral-50"
                  >
                    <input
                      type="checkbox"
                      checked={data.parentRules.includes(rule)}
                      onChange={() => toggleItem("parentRules", rule)}
                      className="h-4 w-4 accent-[var(--accent)]"
                    />
                    <span className="text-sm">{rule}</span>
                  </label>
                ))}
              </div>
              <div className="flex gap-2 pt-2">
                <input
                  type="text"
                  placeholder="Add a custom rule..."
                  value={data.customParentRule}
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      customParentRule: e.target.value,
                    }))
                  }
                  onKeyDown={(e) =>
                    e.key === "Enter" &&
                    addCustomItem("parentRules", "customParentRule")
                  }
                  className="flex-1 rounded-lg border border-[var(--border)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                />
                <button
                  onClick={() =>
                    addCustomItem("parentRules", "customParentRule")
                  }
                  className="rounded-lg bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white"
                >
                  Add
                </button>
              </div>
            </div>
          )}

          {/* Step 7: Consequences & Rewards */}
          {step === 7 && (
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="font-semibold">
                  When someone breaks the contract:
                </h3>
                <div className="space-y-2">
                  {CONSEQUENCE_OPTIONS.map((item) => (
                    <label
                      key={item}
                      className="flex cursor-pointer items-center gap-3 rounded-lg border border-[var(--border)] p-4 transition-colors hover:bg-neutral-50"
                    >
                      <input
                        type="checkbox"
                        checked={data.consequences.includes(item)}
                        onChange={() => toggleItem("consequences", item)}
                        className="h-4 w-4 accent-[var(--accent)]"
                      />
                      <span className="text-sm">{item}</span>
                    </label>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Add a custom consequence..."
                    value={data.customConsequence}
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        customConsequence: e.target.value,
                      }))
                    }
                    onKeyDown={(e) =>
                      e.key === "Enter" &&
                      addCustomItem("consequences", "customConsequence")
                    }
                    className="flex-1 rounded-lg border border-[var(--border)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  />
                  <button
                    onClick={() =>
                      addCustomItem("consequences", "customConsequence")
                    }
                    className="rounded-lg bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white"
                  >
                    Add
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">
                  When someone honors the contract:
                </h3>
                <div className="space-y-2">
                  {REWARD_OPTIONS.map((item) => (
                    <label
                      key={item}
                      className="flex cursor-pointer items-center gap-3 rounded-lg border border-[var(--border)] p-4 transition-colors hover:bg-neutral-50"
                    >
                      <input
                        type="checkbox"
                        checked={data.rewards.includes(item)}
                        onChange={() => toggleItem("rewards", item)}
                        className="h-4 w-4 accent-[var(--accent)]"
                      />
                      <span className="text-sm">{item}</span>
                    </label>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Add a custom reward..."
                    value={data.customReward}
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        customReward: e.target.value,
                      }))
                    }
                    onKeyDown={(e) =>
                      e.key === "Enter" &&
                      addCustomItem("rewards", "customReward")
                    }
                    className="flex-1 rounded-lg border border-[var(--border)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  />
                  <button
                    onClick={() =>
                      addCustomItem("rewards", "customReward")
                    }
                    className="rounded-lg bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 8: Review & Sign */}
          {step === 8 && (
            <div className="space-y-8">
              <div
                ref={contractRef}
                className="rounded-lg border border-[var(--border)] p-8 print:border-none print:p-0"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-extrabold">
                    {data.familyName
                      ? `${data.familyName} Technology Contract`
                      : "Family Technology Contract"}
                  </h2>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    A mutual agreement to protect attention, agency, and presence
                  </p>
                </div>

                {/* Screen Time */}
                <div className="mb-6">
                  <h3 className="font-bold border-b border-[var(--border)] pb-2 mb-3">
                    Screen Time Limits
                  </h3>
                  <p className="text-sm">
                    Weekdays: <strong>{data.weekdayLimit}</strong> per person
                  </p>
                  <p className="text-sm">
                    Weekends: <strong>{data.weekendLimit}</strong> per person
                  </p>
                </div>

                {/* Device-Free Zones */}
                {data.deviceFreeZones.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-bold border-b border-[var(--border)] pb-2 mb-3">
                      Device-Free Zones
                    </h3>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      {data.deviceFreeZones.map((z) => (
                        <li key={z}>{z}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Device-Free Times */}
                {data.deviceFreeTimes.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-bold border-b border-[var(--border)] pb-2 mb-3">
                      Device-Free Times
                    </h3>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      {data.deviceFreeTimes.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Allowed Devices */}
                {data.allowedDevices.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-bold border-b border-[var(--border)] pb-2 mb-3">
                      Allowed Intentional Devices
                    </h3>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      {data.allowedDevices.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Parent Rules */}
                {data.parentRules.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-bold border-b border-[var(--border)] pb-2 mb-3">
                      Parent Commitments
                    </h3>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      {data.parentRules.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Consequences */}
                {data.consequences.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-bold border-b border-[var(--border)] pb-2 mb-3">
                      Consequences
                    </h3>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      {data.consequences.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Rewards */}
                {data.rewards.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-bold border-b border-[var(--border)] pb-2 mb-3">
                      Rewards
                    </h3>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      {data.rewards.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Dates */}
                <div className="mb-8">
                  <h3 className="font-bold border-b border-[var(--border)] pb-2 mb-3">
                    Timeline
                  </h3>
                  <div className="flex gap-6">
                    <div>
                      <label className="block text-xs text-[var(--muted)] mb-1">
                        Start Date
                      </label>
                      <input
                        type="date"
                        value={data.startDate}
                        onChange={(e) =>
                          setData((prev) => ({
                            ...prev,
                            startDate: e.target.value,
                          }))
                        }
                        className="rounded border border-[var(--border)] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[var(--muted)] mb-1">
                        Review Date
                      </label>
                      <input
                        type="date"
                        value={data.reviewDate}
                        onChange={(e) =>
                          setData((prev) => ({
                            ...prev,
                            reviewDate: e.target.value,
                          }))
                        }
                        className="rounded border border-[var(--border)] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                      />
                    </div>
                  </div>
                </div>

                {/* Signatures */}
                <div>
                  <h3 className="font-bold border-b border-[var(--border)] pb-2 mb-4">
                    Signatures
                  </h3>
                  <div className="space-y-4">
                    {allMembers.map((member) => (
                      <div key={member}>
                        <label className="block text-xs text-[var(--muted)] mb-1">
                          {member}
                        </label>
                        <input
                          type="text"
                          placeholder={`Type "${member}" to sign`}
                          value={data.signatures[member] || ""}
                          onChange={(e) =>
                            updateSignature(member, e.target.value)
                          }
                          className="w-full rounded border-b-2 border-[var(--border)] px-2 py-2 font-mono text-lg italic focus:outline-none focus:border-[var(--accent)]"
                        />
                      </div>
                    ))}
                    {allMembers.length === 0 && (
                      <p className="text-sm text-[var(--muted)]">
                        Go back to Step 2 to add family members.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Print / Download */}
              <div className="flex gap-4 print:hidden">
                <button
                  onClick={() => generateContractPdf(data)}
                  className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-80"
                >
                  Download PDF
                </button>
                <button
                  onClick={handlePrint}
                  className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold transition-colors hover:bg-neutral-50"
                >
                  Print Contract
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="mt-10 flex justify-between print:hidden">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold transition-colors hover:bg-neutral-50 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Back
          </button>
          <button
            onClick={() => setStep((s) => Math.min(totalSteps - 1, s + 1))}
            disabled={step === totalSteps - 1}
            className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-80 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
