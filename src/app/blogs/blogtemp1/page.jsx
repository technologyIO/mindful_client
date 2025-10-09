"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronRight, Clock, Tag, User } from "lucide-react"
import { Avatar } from "@mui/material"

export default function ArticlePage() {
  const [isTocOpen, setIsTocOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)
  const articleRef = useRef(null)

  const tableOfContents = [
    { id: "introduction", title: "Introduction", level: 1 },
    { id: "what-is-rtms", title: "What Is rTMS?", level: 1 },
    { id: "mindfulness-role", title: "The Role of Mindfulness in Mental Health", level: 1 },
    { id: "integrating-mindfulness", title: "Integrating Mindfulness with rTMS", level: 1 },
    { id: "mechanisms", title: "Mechanisms of Action", level: 1 },
    { id: "neural-plasticity", title: "Neural Plasticity", level: 2 },
    { id: "attention-regulation", title: "Attention Regulation", level: 2 },
    { id: "stress-reduction", title: "Stress Reduction Pathways", level: 2 },
    { id: "clinical-applications", title: "Clinical Applications and Benefits", level: 1 },
    { id: "protocols", title: "Protocols and Practical Considerations", level: 1 },
    { id: "session-structure", title: "rTMS Session Structure", level: 2 },
    { id: "mindfulness-exercises", title: "Incorporating Mindfulness Exercises", level: 2 },
    { id: "patient-selection", title: "Patient Selection & Contraindications", level: 2 },
    { id: "safety", title: "Safety, Side Effects, and Contraindications", level: 1 },
    { id: "patient-experience", title: "Patient Experience", level: 1 },
    { id: "future-directions", title: "Future Directions and Research Needs", level: 1 },
    { id: "conclusion", title: "Conclusion", level: 1 },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setIsTocOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      // Track active section
      const sections = tableOfContents.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tableOfContents[i].id)
          break
        }
      }

      // Calculate scroll progress
      if (articleRef.current) {
        const windowHeight = window.innerHeight
        const documentHeight = articleRef.current.scrollHeight
        const scrollTop = window.scrollY
        const progress = (scrollTop / (documentHeight - windowHeight)) * 100
        setScrollProgress(Math.min(progress, 100))
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile TOC Toggle Button - Floating */}
      <button
        onClick={() => setIsTocOpen(!isTocOpen)}
        className="lg:hidden fixed bottom-6 right-4 z-40 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-full shadow-2xl active:scale-95 transition-transform"
        aria-label="Toggle Table of Contents"
      >
        {isTocOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile TOC Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          isTocOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsTocOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl transition-transform duration-300 max-h-[80vh] flex flex-col ${
            isTocOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          {/* Drawer Handle */}
          <div className="flex justify-center pt-3 pb-2">
            <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
          </div>

          {/* Drawer Header */}
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900">Table of Contents</h3>
            <button
              onClick={() => setIsTocOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* TOC List */}
          <nav className="overflow-y-auto flex-1 px-4 py-4">
            {tableOfContents.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-3 px-4 rounded-xl transition-all mb-2 ${
                  item.level === 2 ? "ml-6 text-sm" : "text-base font-medium"
                } ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-orange-50 active:bg-orange-100"
                }`}
              >
                {item.level === 2 && <span className="text-orange-400 mr-2">→</span>}
                {item.title}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Desktop Sidebar TOC - Left Side */}
          <aside className="hidden lg:block lg:col-span-3 xl:col-span-3">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  Table of Contents
                </h3>
                <nav className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left text-sm py-2.5 px-3 rounded-lg transition-all ${
                        item.level === 2 ? "ml-4 text-xs" : "font-medium"
                      } ${
                        activeSection === item.id
                          ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-sm"
                          : "text-gray-600 hover:text-orange-600 hover:bg-orange-50"
                      }`}
                    >
                      {item.level === 2 && (
                        <span className={activeSection === item.id ? "text-white" : "text-orange-400"}>
                          → 
                        </span>
                      )}
                      {item.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9 xl:col-span-9" ref={articleRef}>
            <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Hero Image with Overlay */}
              <div className="relative aspect-[16/9] sm:aspect-[21/9]">
                <Image
                  src="https://mindfultms.in/_next/image?url=%2FclinicImages%2FDelhi6.webp&w=1920&q=75"
                  alt="Mindful rTMS - Brain stimulation with mindfulness"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex items-end">
                  <div className="p-6 sm:p-8 lg:p-12 text-white w-full">
                    <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-3 leading-tight">
                      Mindful rTMS: Integrating Mindfulness with Brain Stimulation
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg opacity-90 max-w-3xl">
                      An innovative fusion of evidence-based approaches to optimize mental health outcomes
                    </p>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6 sm:p-8 lg:p-12">
                {/* Article Meta - Mobile Optimized */}
                <div className="mb-8 pb-6 border-b border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Avatar
                        alt="Dr. Research Team"
                        src="https://images.unsplash.com/photo-1499714608240-22fc6c505253?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        className="w-12 h-12"
                      />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm sm:text-base">
                          Dr. Research Team
                        </p>
                        <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500 mt-1">
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            15 min read
                          </span>
                          <span>•</span>
                          <span>Dec 16, 2024</span>
                        </div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-medium w-fit">
                      <Tag size={14} />
                      Neuroscience
                    </span>
                  </div>
                </div>

                {/* Introduction */}
                <section id="introduction" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                      Mindful rTMS represents an innovative fusion of two evidence‑based approaches—repetitive
                      transcranial magnetic stimulation (rTMS) and mindfulness training—to optimize mental health
                      outcomes. By engaging patients in focused attention and present‑moment awareness during
                      neuromodulation, clinicians aim to amplify therapeutic effects, promote neuroplasticity, and
                      support long‑term resilience.
                    </p>
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100/50 border-l-4 border-orange-500 p-6 my-8 rounded-r-xl">
                      <p className="text-gray-800 italic text-base sm:text-lg leading-relaxed">
                      {`  "The integration of mindfulness with rTMS opens new possibilities for treating
                        treatment-resistant mental health conditions."`}
                      </p>
                    </div>
                  </div>
                </section>

                {/* What Is rTMS */}
                <section id="what-is-rtms" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What Is rTMS?</h2>
                  <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      Repetitive transcranial magnetic stimulation (rTMS) is a non‑invasive brain‑stimulation
                      technique that uses magnetic pulses to modulate neuronal activity in targeted cortical regions.
                      Widely studied for treatment‑resistant depression, rTMS has gained FDA approval and is
                      increasingly applied to other neuropsychiatric conditions.
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        "Non-invasive brain stimulation",
                        "FDA approved for depression",
                        "Targets specific brain regions",
                        "Modulates neuronal activity",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                        >
                          <ChevronRight className="text-orange-500 flex-shrink-0 mt-0.5" size={20} />
                          <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="relative aspect-video rounded-xl overflow-hidden mt-6">
                      <Image
                        src="https://mindfultms.in/_next/image?url=%2FclinicImages%2FDelhi6.webp&w=1920&q=75"
                        alt="rTMS device and brain targeting"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </section>

                {/* Mindfulness Role */}
                <section id="mindfulness-role" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    The Role of Mindfulness in Mental Health
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                   {` Mindfulness practices—rooted in Buddhist contemplative traditions—cultivate sustained, nonjudgmental
                    attention to present‑moment experiences. Extensive research highlights mindfulness's efficacy for
                    reducing stress, improving mood regulation, and enhancing attention and cognitive flexibility.`}
                  </p>
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <Image
                      src="https://mindfultms.in/_next/image?url=%2FclinicImages%2FDelhi6.webp&w=1920&q=75"
                      alt="Mindfulness meditation practice"
                      fill
                      className="object-cover"
                    />
                  </div>
                </section>

                {/* Integrating Mindfulness */}
                <section id="integrating-mindfulness" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    Integrating Mindfulness with rTMS: The Concept of Mindful rTMS
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    Mindful rTMS protocols interleave guided mindfulness exercises with magnetic stimulation. Sessions
                    typically begin with a brief breath‑awareness or body‑scan practice, followed by rTMS delivery while
                    the patient maintains mindful focus on internal sensations or the rhythm of stimulation.
                  </p>
                </section>

                {/* Mechanisms of Action */}
                <section id="mechanisms" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Mechanisms of Action</h2>

                  <div className="space-y-8">
                    <div id="neural-plasticity" className="scroll-mt-24">
                      <div className="bg-gradient-to-r from-orange-50 to-transparent p-6 rounded-xl border-l-4 border-orange-500">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Neural Plasticity</h3>
                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                     {`     Magnetic pulses induce synaptic changes in targeted networks. Mindful attention during stimulation
                          may further reinforce Hebbian learning ("cells that fire together, wire together"), strengthening
                          adaptive circuits.`}
                        </p>
                      </div>
                    </div>

                    <div id="attention-regulation" className="scroll-mt-24">
                      <div className="bg-gradient-to-r from-blue-50 to-transparent p-6 rounded-xl border-l-4 border-blue-500">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Attention Regulation</h3>
                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                          Mindfulness enhances top‑down control from prefrontal regions. Concurrent rTMS targeting these
                          areas may synergistically improve attentional networks and executive function.
                        </p>
                      </div>
                    </div>

                    <div id="stress-reduction" className="scroll-mt-24">
                      <div className="bg-gradient-to-r from-green-50 to-transparent p-6 rounded-xl border-l-4 border-green-500">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Stress Reduction Pathways</h3>
                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                          Mindful practice lowers cortisol and sympathetic arousal. Paired with rTMS‑driven modulation of
                          limbic circuits, this dual approach can more robustly attenuate stress reactivity.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative aspect-video rounded-xl overflow-hidden mt-8">
                    <Image
                      src="https://mindfultms.in/_next/image?url=%2FclinicImages%2FDelhi6.webp&w=1920&q=75"
                      alt="Brain mechanisms and neural pathways"
                      fill
                      className="object-cover"
                    />
                  </div>
                </section>

                {/* Clinical Applications */}
                <section id="clinical-applications" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                    Clinical Applications and Benefits
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {[
                      {
                        id: "depression",
                        title: "Depression",
                        content: "Mindful rTMS has shown higher remission rates versus rTMS alone in preliminary trials, potentially due to enhanced engagement of prefrontal‑limbic pathways.",
                        color: "orange"
                      },
                      {
                        id: "anxiety",
                        title: "Anxiety Disorders",
                        content: "Combining mindfulness with stimulation of dorsolateral prefrontal cortex (DLPFC) can reduce hypervigilance and rumination.",
                        color: "blue"
                      },
                      {
                        id: "ptsd",
                        title: "PTSD and Trauma",
                        content: "Pairing rTMS to the medial prefrontal cortex with grounding mindfulness practices may facilitate processing of traumatic memories.",
                        color: "purple"
                      },
                      {
                        id: "cognitive-enhancement",
                        title: "Cognitive Enhancement",
                        content: "Integrative protocols are being explored to boost working memory and processing speed in healthy individuals and those with mild cognitive impairment.",
                        color: "green"
                      },
                    ].map((item) => (
                      <div
                        key={item.id}
                        id={item.id}
                        className={`bg-${item.color}-50 p-6 rounded-xl border border-${item.color}-100 hover:shadow-md transition-shadow scroll-mt-24`}
                      >
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{item.content}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Protocols */}
                <section id="protocols" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                    Protocols and Practical Considerations
                  </h2>

                  <div className="space-y-8">
                    <div id="session-structure" className="scroll-mt-24">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">rTMS Session Structure</h3>
                      <div className="bg-blue-50 p-6 rounded-xl space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="font-semibold text-gray-900 min-w-fit">Frequency & Intensity:</span>
                          <span className="text-gray-700">Common protocols use 10 Hz at 120% motor threshold</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="font-semibold text-gray-900 min-w-fit">Duration:</span>
                          <span className="text-gray-700">20–30 minutes of stimulation per session, 5 days/week, for 4–6 weeks</span>
                        </div>
                      </div>
                    </div>

                    <div id="mindfulness-exercises" className="scroll-mt-24">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">
                        Incorporating Mindfulness Exercises
                      </h3>
                      <div className="space-y-4">
                        {[
                          { step: "1", title: "Pre‑stimulation", desc: "5 minutes of guided breathing" },
                          { step: "2", title: "During Stimulation", desc: "Focused awareness on scalp sensations" },
                          { step: "3", title: "Post‑stimulation", desc: "5 minutes of body‑scan or loving‑kindness meditation" },
                        ].map((item) => (
                          <div key={item.step} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                              {item.step}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                              <p className="text-gray-700 text-sm sm:text-base">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div id="patient-selection" className="scroll-mt-24">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Patient Selection & Contraindications
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        Evaluate for metallic implants, seizure risk, severe claustrophobia, or inability to follow
                        mindfulness instructions.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Safety */}
                <section id="safety" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    Safety, Side Effects, and Contraindications
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                    rTMS is generally well tolerated. Common mild side effects include scalp discomfort and headache.
                    Mindfulness integration poses minimal risk, though patients with severe dissociation may require
                    modified practices.
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                    <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                      <span className="text-xl">⚠️</span>
                      Important Safety Considerations
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Screen for metallic implants",
                        "Assess seizure risk",
                        "Monitor for severe dissociation",
                        "Ensure patient can follow instructions",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-red-700 text-sm sm:text-base">
                          <ChevronRight className="flex-shrink-0 mt-0.5" size={18} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                {/* Patient Experience */}
                <section id="patient-experience" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    Patient Experience: Mindfulness Practices During Sessions
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                    Encourage patients to:
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
                    {[
                      { icon: "🎯", title: "Focus", desc: 'Anchor attention on the magnetic "click" and scalp pressure' },
                      { icon: "🏷️", title: "Label", desc: 'Label thoughts nonjudgmentally ("thinking," "feeling") and let them pass' },
                      { icon: "🕉️", title: "Mantras", desc: 'Use brief, silent mantras (e.g., "calm," "release")' },
                    ].map((item, index) => (
                      <div key={index} className="text-center p-6 bg-gradient-to-b from-orange-50 to-white rounded-xl border border-orange-100">
                        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                          {item.icon}
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-700">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Future Directions */}
                <section id="future-directions" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    Future Directions and Research Needs
                  </h2>
                  <div className="space-y-4">
                    {[
                      { title: "Randomized Controlled Trials", desc: "Larger studies comparing mindful rTMS vs. standard rTMS" },
                      { title: "Neuroimaging", desc: "Clarify circuit‑specific plasticity changes with mindfulness pairing" },
                      { title: "Digital Integration", desc: "Virtual reality or biofeedback to enhance mindful engagement" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                        <ChevronRight className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-gray-700 text-sm sm:text-base">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Conclusion */}
                <section id="conclusion" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-8">
                    Mindful rTMS represents a promising frontier in neuropsychiatric care, merging the neuroplastic
                    benefits of magnetic stimulation with the self‑regulatory power of mindfulness. As research
                    advances, this integrative approach could become a standard for optimizing treatment‑resistant
                    conditions and promoting cognitive well‑being.
                  </p>
                  <div className="p-6 sm:p-8 bg-gradient-to-r from-orange-50 via-orange-100/50 to-orange-50 rounded-2xl border border-orange-200">
                    <p className="text-gray-800 font-medium text-center text-base sm:text-lg">
                      The future of mental health treatment lies in innovative integrative approaches like Mindful rTMS.
                    </p>
                  </div>
                </section>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-8 rounded-2xl text-center shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">Stay Updated on Latest Research</h3>
                  <p className="mb-6 text-sm sm:text-base opacity-95">
                    Subscribe to our newsletter for the latest developments in neuroscience and mental health.
                  </p>
                  <button className="bg-white text-orange-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 active:scale-95 transition-all shadow-md">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  )
}
