'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { Sparkles, ArrowRight, Terminal, Cpu, ShieldCheck, Zap, Code } from 'lucide-react'

export function PromptSpecialClass() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.15,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  const features = [
    {
      icon: Cpu,
      title: 'Advanced Reasoning & CoT',
      desc: 'Master Chain-of-Thought, Tree-of-Thoughts, and Few-Shot priming.',
    },
    {
      icon: ShieldCheck,
      title: 'System Prompts & Security',
      desc: 'Formulate bulletproof boundaries to prevent injections and jailbreaks.',
    },
    {
      icon: Zap,
      title: 'Caching & Cost Audits',
      desc: 'Optimized contextual inputs to slash token consumption by up to 80%.',
    },
    {
      icon: Code,
      title: 'Agentic Tool Calling',
      desc: 'Synthesize XML/JSON interfaces for autonomous function executors.',
    },
  ]

  return (
    <section
      id="prompt-special-class"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden border-t border-border"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-[10%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="p-8 sm:p-12 md:p-16 rounded-3xl bg-card border border-border/80 relative overflow-hidden shadow-2xl hover:border-amber-500/30 transition-colors duration-500"
        >
          {/* Subtle glow border at top */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-80" />

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Context */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold tracking-wide uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                <Sparkles className="w-3.5 h-3.5" />
                <span>Special Live cohort</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground leading-tight tracking-tight">
                Prompt Engineering{' '}
                <span className="bg-gradient-to-r from-amber-500 via-orange-400 to-amber-600 bg-clip-text text-transparent block sm:inline">
                  Special Class
                </span>{' '}
                is Here
              </h2>

              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
                A highly-specialized 4-week live curriculum engineered to take you from basic questions to structured system prompts, token optimization protocols, and agentic workflows.
              </p>

              {/* Grid of features */}
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                {features.map((feat, index) => {
                  const Icon = feat.icon
                  return (
                    <motion.div
                      key={index}
                      variants={childVariants}
                      className="flex gap-3 items-start"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-amber-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground mb-1">{feat.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{feat.desc}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link href="/courses/prompt-engineering" passHref legacyBehavior>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer text-sm sm:text-base"
                  >
                    Explore Class Details
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </Link>
                <Link href="/contact" passHref legacyBehavior>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 py-3.5 border border-border bg-background hover:bg-muted text-foreground font-bold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer text-sm sm:text-base"
                  >
                    Inquire Timings
                  </motion.a>
                </Link>
              </div>
            </div>

            {/* Right Column: Code/Playground Mockup */}
            <div className="lg:col-span-5 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full rounded-2xl border border-border/80 bg-slate-950 text-slate-300 font-mono text-xs overflow-hidden shadow-2xl"
              >
                {/* Header bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-border/30">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-amber-500" />
                    <span className="font-bold text-[10px] text-slate-400 uppercase tracking-widest">prompt_engineer_sandbox.py</span>
                  </div>
                  {/* window actions mock */}
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                </div>

                {/* Code viewport */}
                <div className="p-5 space-y-4 leading-relaxed overflow-x-auto">
                  <div>
                    <span className="text-amber-500">SYSTEM_INSTRUCTIONS</span> = <span className="text-emerald-400">"""</span>
                    <br />
                    <span className="text-slate-500"># Role: Senior Reasoning Agent</span>
                    <br />
                    <span className="text-blue-400">&lt;thinking&gt;</span>
                    <br />
                    &nbsp;&nbsp;Always analyze constraints step-by-step
                    <br />
                    &nbsp;&nbsp;before formulating the final JSON output.
                    <br />
                    <span className="text-blue-400">&lt;/thinking&gt;</span>
                    <br />
                    <span className="text-slate-500"># Output format: strict JSON as specified</span>
                    <br />
                    <span className="text-emerald-400">"""</span>
                  </div>

                  <div>
                    <span className="text-purple-400">def</span> <span className="text-blue-400">execute_agent_loop</span>(prompt, tools):
                    <br />
                    &nbsp;&nbsp;<span className="text-slate-500"># Leverage dynamic cache &amp; function calls</span>
                    <br />
                    &nbsp;&nbsp;response = openai.chat.completions.create(
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;model=<span className="text-emerald-400">"gpt-4o-2026"</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;messages=[
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}<span className="text-amber-400">"role"</span>: <span className="text-emerald-400">"system"</span>, <span className="text-amber-400">"content"</span>: SYSTEM_INSTRUCTIONS{"}"},
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}<span className="text-amber-400">"role"</span>: <span className="text-emerald-400">"user"</span>, <span className="text-amber-400">"content"</span>: prompt{"}"}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;],
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;tools=tools,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;parallel_tool_calls=<span className="text-amber-500">True</span>
                    <br />
                    &nbsp;&nbsp;)
                    <br />
                    &nbsp;&nbsp;<span className="text-purple-400">return</span> response.choices[<span className="text-amber-500">0</span>]
                  </div>

                  <div className="border-t border-border/30 pt-3 flex items-center justify-between text-[10px] text-slate-500 font-sans">
                    <span>Tokens: 142 input (cached)</span>
                    <span className="text-emerald-400 font-mono">Status: 200 OK</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
