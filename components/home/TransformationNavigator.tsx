"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { PrimaryButton } from "../buttons";

// Steps, labels and options match the reference site's Transformation
// Navigator exactly (component `sm`, question array `am`).
const steps = [
  { key: "landscape", label: "Current Landscape", options: ["ECC", "S/4HANA", "Other"] },
  { key: "goal", label: "Transformation Goal", options: ["Migration", "Finance Transformation", "Optimization", "Revenue Transformation", "Modernization"] },
  { key: "priority", label: "Priority", options: ["Simplification", "Visibility", "Scalability", "Control"] },
] as const;

type NavigatorState = {
  answers: Record<string, string>;
  stepIndex: number;
  done: boolean;
  choose: (key: string, value: string) => void;
  reset: () => void;
};

const NavigatorContext = createContext<NavigatorState | null>(null);

function useNavigator() {
  const ctx = useContext(NavigatorContext);
  if (!ctx) throw new Error("Navigator components must be used within <TransformationNavigator.Provider>");
  return ctx;
}

/** Wraps the split layout (step indicator on one side, step content on the other) and owns the shared state. */
export function NavigatorProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const stepIndex = steps.findIndex((s) => !answers[s.key]);
  const done = stepIndex === -1;

  function choose(key: string, value: string) {
    setAnswers((a) => ({ ...a, [key]: value }));
  }

  function reset() {
    setAnswers({});
  }

  return (
    <NavigatorContext.Provider value={{ answers, stepIndex, done, choose, reset }}>
      {children}
    </NavigatorContext.Provider>
  );
}

/** Step 1‑2‑3 progress indicator — sits with the heading/copy on the left. */
export function NavigatorSteps() {
  const { answers, stepIndex } = useNavigator();
  return (
    <div className="flex items-center gap-3" aria-label="Progress">
      {steps.map((s, i) => (
        <div key={s.key} className="flex items-center gap-3">
          <span
            className={`flex h-9 w-9 items-center justify-center border-2 text-xs font-extrabold transition-all duration-300 ${
              answers[s.key]
                ? "border-belmav-red bg-belmav-red text-belmav-white"
                : i === stepIndex
                ? "border-belmav-gold bg-belmav-gold text-belmav-black"
                : "border-belmav-black/20 text-belmav-black/40"
            }`}
          >
            {i + 1}
          </span>
          {i < steps.length - 1 && (
            <span className={`h-[2px] w-8 ${answers[steps[i + 1].key] || i < stepIndex ? "bg-belmav-red" : "bg-belmav-black/15"}`} />
          )}
        </div>
      ))}
    </div>
  );
}

/** The active step's question + choices (or the closing summary) — sits on the other side from the heading/copy. */
export function NavigatorPanel() {
  const { answers, stepIndex, done, choose, reset } = useNavigator();

  return (
    <div className="min-h-[380px]">
      <AnimatePresence mode="wait">
        {done ? (
          <motion.div key="result" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-belmav-red">Here&rsquo;s what you shared</p>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {steps.map((s, i) => (
                <motion.div
                  key={s.key}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 * i }}
                  className="border-2 border-belmav-black/10 p-4"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-belmav-black/40">{s.label}</p>
                  <p className="mt-1 text-base font-extrabold text-belmav-black">{answers[s.key]}</p>
                </motion.div>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 max-w-md text-lg font-semibold leading-relaxed text-belmav-black"
            >
              Based on what you shared, this is worth a conversation —{" "}
              <span className="text-belmav-red">Talk to an SAP Expert</span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="mt-8 flex flex-wrap items-center gap-5"
            >
              <PrimaryButton href="/contact">Talk to an SAP Expert</PrimaryButton>
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 text-sm font-bold text-belmav-black/60 transition-colors hover:text-belmav-red"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" /> Start over
              </button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key={steps[stepIndex].key}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-belmav-black/45">
              Step {stepIndex + 1} of {steps.length}
            </p>
            <h3 className="mt-3 text-2xl md:text-3xl font-extrabold tracking-tight text-belmav-black">
              {steps[stepIndex].label}
            </h3>
            <div className="mt-8 flex flex-wrap gap-3" role="group" aria-label={steps[stepIndex].label}>
              {steps[stepIndex].options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => choose(steps[stepIndex].key, opt)}
                  className={`border-2 px-6 py-4 text-sm font-bold transition-all duration-300 ${
                    answers[steps[stepIndex].key] === opt
                      ? "border-belmav-red bg-belmav-red text-belmav-white"
                      : "border-belmav-black/20 text-belmav-black hover:border-belmav-black hover:bg-belmav-black hover:text-belmav-white"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

