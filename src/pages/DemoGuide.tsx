import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const demoScenarios = {
  confused: {
    label: "I'm confused about my career",
    heading: "1. I feel lost about my career path",
    why:
      "Use this when you don’t know what direction to take and everything feels confusing or overwhelming.",
    steps: [
      "Start by telling Aryam where you are today (year, course, or work status).",
      "Describe what you actually enjoy doing, even outside academics.",
      "Share 1–2 things you’ve already tried (videos, courses, advice from others).",
      "Ask Aryam to help you explore 2–3 realistic paths, not infinite options.",
    ],
    prompt:
      "“I’m in 3rd year B.Com and still don’t know what career suits me. I like explaining concepts to friends and organizing events, but I’m scared of choosing the wrong path. Can you help me explore 3 realistic career directions based on this?”",
  },
  compare: {
    label: "Compare 2 career options",
    heading: "2. I’m stuck between two career paths",
    why: "Use this when you’ve already shortlisted options and need a structured comparison.",
    steps: [
      "Tell Aryam the two options you’re considering and why each one attracts you.",
      "Be honest about your fears or constraints for each option (time, money, location, skills).",
      "Ask Aryam to compare them across daily work, growth, and fit with your personality.",
      "End by asking for a 3–6 month action plan for the option you lean towards.",
    ],
    prompt:
      "“I’m torn between data analytics and product management. I enjoy solving problems and talking to people, but I’m not very confident with maths. Can you compare these two options for me and then suggest a 6‑month plan for the one that fits me better?”",
  },
  interview: {
    label: "Practice mock interview",
    heading: "3. I want to practice for an interview",
    why: "Use this when you have interviews, viva, or selection rounds coming up.",
    steps: [
      "Tell Aryam what interview you’re preparing for (role, company, or exam).",
      "Ask Aryam to become the interviewer and ask you one question at a time.",
      "Answer in your own words, then ask Aryam for concrete feedback and a better version.",
      "Repeat for 3–5 questions and save the improved answers in your notes.",
    ],
    prompt:
      "“I have an interview next week for a business analyst internship. Can you act as the interviewer and ask me one question at a time? After each answer, give me specific feedback and a stronger version I can use.”",
  },
} as const;

type ScenarioKey = keyof typeof demoScenarios;

const DemoGuide = () => {
  const scenarioKeys = Object.keys(demoScenarios) as ScenarioKey[];
  const [activeScenario, setActiveScenario] = useState<ScenarioKey>("confused");
  const current = demoScenarios[activeScenario];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <header className="mb-10 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
              How to Talk to Aryam for Career Guidance
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the situation that matches you best, then use the steps and sample prompt
              to start a powerful, honest conversation with your AI mentor.
            </p>
          </header>

          <section className="grid md:grid-cols-3 gap-4 mb-10">
            {scenarioKeys.map((key, index) => {
              const isActive = key === activeScenario;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveScenario(key)}
                  className={`text-left rounded-2xl border p-4 shadow-sm transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-md scale-[1.02]"
                      : "bg-card/70 text-foreground border-border hover:bg-card"
                  }`}
                >
                  <p className="text-xs font-semibold mb-1">
                    Option {index + 1}
                  </p>
                  <p className="font-medium">{demoScenarios[key].label}</p>
                </button>
              );
            })}
          </section>

          <section className="space-y-6">
            <div className="rounded-3xl border border-border bg-card/80 p-6 sm:p-8 shadow-elevated">
              <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                {activeScenario === "confused"
                  ? "Path 1"
                  : activeScenario === "compare"
                  ? "Path 2"
                  : "Path 3"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">
                {current.heading}
              </h2>
              <p className="text-sm text-muted-foreground mb-5">{current.why}</p>

              <ol className="list-decimal list-inside space-y-2 text-sm text-foreground mb-6">
                {current.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>

              <div className="rounded-2xl bg-muted/60 border border-border px-4 py-3 text-sm">
                <p className="text-xs font-semibold text-muted-foreground mb-1">
                  Example message you can send to Aryam
                </p>
                <p className="text-foreground leading-relaxed">{current.prompt}</p>
              </div>
            </div>
          </section>

          <p className="mt-10 text-xs text-muted-foreground text-center">
            When you&apos;re ready, go to Chat and paste or adapt one of these prompts in your own
            words. Aryam will continue the conversation Socratically, step by step.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DemoGuide;


