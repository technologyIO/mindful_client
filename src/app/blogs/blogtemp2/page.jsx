"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  Share2, 
  Bookmark, 
  ChevronDown,
  Home,
  TrendingUp,
  ArrowUp
} from "lucide-react"
import { Avatar } from "@mui/material"

export default function MagazineArticle() {
  const [showToc, setShowToc] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)

  const sections = [
    { id: "introduction", title: "Introduction", emoji: "🌟" },
    { id: "what-is-rtms", title: "What Is rTMS?", emoji: "🧠" },
    { id: "mindfulness-role", title: "Mindfulness in Mental Health", emoji: "🧘" },
    { id: "integrating-mindfulness", title: "Integrating Mindfulness with rTMS", emoji: "🔗" },
    { id: "mechanisms", title: "Mechanisms of Action", emoji: "⚙️" },
    { id: "clinical-applications", title: "Clinical Applications", emoji: "🏥" },
    { id: "protocols", title: "Protocols & Considerations", emoji: "📋" },
    { id: "safety", title: "Safety & Side Effects", emoji: "⚠️" },
    { id: "patient-experience", title: "Patient Experience", emoji: "💭" },
    { id: "future-directions", title: "Future Directions", emoji: "🚀" },
    { id: "conclusion", title: "Conclusion", emoji: "✨" },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
      setShowToc(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    const handleScroll = () => {
      // Reading progress
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100
      setReadingProgress(Math.min(progress, 100))

      // Show back to top
      setShowBackToTop(scrollTop > 300)

      // Active section
      const sections = document.querySelectorAll("section[id]")
      let currentSection = ""
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        if (scrollTop >= sectionTop - 200) {
          currentSection = section.getAttribute("id")
        }
      })
      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/30 to-gray-50">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <BookOpen className="text-white" size={18} />
            </div>
            <span className="font-bold text-gray-900 hidden sm:inline">Neuroscience Today</span>
          </div>
          
          <button
            onClick={() => setShowToc(!showToc)}
            className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium hover:bg-orange-600 transition-colors"
          >
            <BookOpen size={16} />
            <span className="hidden sm:inline">Contents</span>
            <ChevronDown size={16} className={`transition-transform ${showToc ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </header>

      {/* Floating TOC Dropdown */}
      {showToc && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={() => setShowToc(false)}
          />
          <div className="fixed top-16 right-4 left-4 sm:left-auto sm:w-96 z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-slideDown">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
              <h3 className="text-white font-bold text-lg">Article Contents</h3>
            </div>
            <nav className="max-h-[70vh] overflow-y-auto p-4">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left p-3 rounded-xl mb-2 transition-all flex items-center gap-3 group ${
                    activeSection === section.id
                      ? "bg-orange-100 text-orange-600"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <span className="text-2xl">{section.emoji}</span>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-0.5">Section {index + 1}</div>
                    <div className="font-medium text-sm">{section.title}</div>
                  </div>
                  {activeSection === section.id && (
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  )}
                </button>
              ))}
            </nav>
          </div>
        </>
      )}

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-30 w-12 h-12 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-all hover:scale-110 flex items-center justify-center"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Card */}
        <article className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8">
          <div className="relative h-[50vh] sm:h-[60vh]">
            <Image
              src="https://mindfultms.in/_next/image?url=%2FclinicImages%2FDelhi6.webp&w=1920&q=75"
              alt="Mindful rTMS"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            
            {/* Floating Category Badge */}
            <div className="absolute top-6 left-6 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
              <TrendingUp size={16} />
              Neuroscience
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Mindful rTMS: Integrating Mindfulness with Brain Stimulation
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-6">
                An innovative fusion of evidence-based approaches to optimize mental health outcomes
              </p>
            </div>
          </div>

          {/* Meta Information Card */}
          <div className="p-6 sm:p-8 border-b border-gray-100">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <Avatar
                  alt="Dr. Research Team"
                  src="https://images.unsplash.com/photo-1499714608240-22fc6c505253?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                  className="w-12 h-12"
                />
                <div>
                  <p className="font-semibold text-gray-900">Dr. Research Team</p>
                  <p className="text-sm text-gray-500">Neuroscience Researcher</p>
                </div>
              </div>
              
              <div className="flex-1" />
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1.5">
                  <Calendar size={16} />
                  <span>Dec 16, 2024</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={16} />
                  <span>15 min read</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                  <Bookmark size={18} className="text-gray-600" />
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                  <Share2 size={18} className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-6 sm:p-8 lg:p-12">
            {/* Introduction */}
            <section id="introduction" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🌟</span>
                <h2 className="text-3xl font-bold text-gray-900">Introduction</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Mindful rTMS represents an innovative fusion of two evidence‑based approaches—repetitive
                  transcranial magnetic stimulation (rTMS) and mindfulness training—to optimize mental health
                  outcomes. By engaging patients in focused attention and present‑moment awareness during
                  neuromodulation, clinicians aim to amplify therapeutic effects, promote neuroplasticity, and
                  support long‑term resilience.
                </p>
                <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white my-8">
                  <div className="absolute top-4 left-4 text-6xl opacity-20">{`"`}</div>
                  <p className="text-lg italic relative z-10 pl-8">
                    The integration of mindfulness with rTMS opens new possibilities for treating
                    treatment-resistant mental health conditions.
                  </p>
                </div>
              </div>
            </section>

            {/* What Is rTMS */}
            <section id="what-is-rtms" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🧠</span>
                <h2 className="text-3xl font-bold text-gray-900">What Is rTMS?</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Repetitive transcranial magnetic stimulation (rTMS) is a non‑invasive brain‑stimulation
                    technique that uses magnetic pulses to modulate neuronal activity in targeted cortical regions.
                    Widely studied for treatment‑resistant depression, rTMS has gained FDA approval and is
                    increasingly applied to other neuropsychiatric conditions.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Key Features</h3>
                  <div className="space-y-3">
                    {[
                      "Non-invasive brain stimulation",
                      "FDA approved for depression",
                      "Targets specific brain regions",
                      "Modulates neuronal activity",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">{index + 1}</span>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative h-72 rounded-2xl overflow-hidden">
                <Image
                  src="https://mindfultms.in/_next/image?url=%2FclinicImages%2FDelhi6.webp&w=1920&q=75"
                  alt="rTMS device"
                  fill
                  className="object-cover"
                />
              </div>
            </section>

            {/* Mindfulness Role */}
            <section id="mindfulness-role" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🧘</span>
                <h2 className="text-3xl font-bold text-gray-900">The Role of Mindfulness in Mental Health</h2>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {`  Mindfulness practices—rooted in Buddhist contemplative traditions—cultivate sustained, nonjudgmental
                  attention to present‑moment experiences. Extensive research highlights mindfulness's efficacy for
                  reducing stress, improving mood regulation, and enhancing attention and cognitive flexibility.`}
                </p>
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src="https://mindfultms.in/_next/image?url=%2FclinicImages%2FDelhi6.webp&w=1920&q=75"
                    alt="Mindfulness practice"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Integrating Mindfulness */}
            <section id="integrating-mindfulness" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🔗</span>
                <h2 className="text-3xl font-bold text-gray-900">Integrating Mindfulness with rTMS</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Mindful rTMS protocols interleave guided mindfulness exercises with magnetic stimulation. Sessions
                typically begin with a brief breath‑awareness or body‑scan practice, followed by rTMS delivery while
                the patient maintains mindful focus on internal sensations or the rhythm of stimulation.
              </p>
            </section>

            {/* Mechanisms */}
            <section id="mechanisms" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">⚙️</span>
                <h2 className="text-3xl font-bold text-gray-900">Mechanisms of Action</h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Neural Plasticity",
                    content: 'Magnetic pulses induce synaptic changes in targeted networks. Mindful attention during stimulation may further reinforce Hebbian learning ("cells that fire together, wire together"), strengthening adaptive circuits.',
                    color: "from-purple-500 to-purple-600",
                    icon: "🧬"
                  },
                  {
                    title: "Attention Regulation",
                    content: "Mindfulness enhances top‑down control from prefrontal regions. Concurrent rTMS targeting these areas may synergistically improve attentional networks and executive function.",
                    color: "from-blue-500 to-blue-600",
                    icon: "🎯"
                  },
                  {
                    title: "Stress Reduction Pathways",
                    content: "Mindful practice lowers cortisol and sympathetic arousal. Paired with rTMS‑driven modulation of limbic circuits, this dual approach can more robustly attenuate stress reactivity.",
                    color: "from-green-500 to-green-600",
                    icon: "🌿"
                  },
                ].map((item, index) => (
                  <div key={index} className="relative overflow-hidden rounded-2xl">
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-10`} />
                    <div className="relative p-6 sm:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">{item.icon}</span>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative h-80 rounded-2xl overflow-hidden mt-8">
                <Image
                  src="https://mindfultms.in/_next/image?url=%2FclinicImages%2FDelhi6.webp&w=1920&q=75"
                  alt="Brain mechanisms"
                  fill
                  className="object-cover"
                />
              </div>
            </section>

            {/* Clinical Applications */}
            <section id="clinical-applications" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">🏥</span>
                <h2 className="text-3xl font-bold text-gray-900">Clinical Applications and Benefits</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Depression",
                    content: "Mindful rTMS has shown higher remission rates versus rTMS alone in preliminary trials, potentially due to enhanced engagement of prefrontal‑limbic pathways.",
                    gradient: "from-orange-400 to-red-500"
                  },
                  {
                    title: "Anxiety Disorders",
                    content: "Combining mindfulness with stimulation of dorsolateral prefrontal cortex (DLPFC) can reduce hypervigilance and rumination.",
                    gradient: "from-blue-400 to-indigo-500"
                  },
                  {
                    title: "PTSD and Trauma",
                    content: "Pairing rTMS to the medial prefrontal cortex with grounding mindfulness practices may facilitate processing of traumatic memories.",
                    gradient: "from-purple-400 to-pink-500"
                  },
                  {
                    title: "Cognitive Enhancement",
                    content: "Integrative protocols are being explored to boost working memory and processing speed in healthy individuals and those with mild cognitive impairment.",
                    gradient: "from-green-400 to-teal-500"
                  },
                ].map((item, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-2xl bg-white border-2 border-gray-100 hover:border-transparent hover:shadow-xl transition-all">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                    <div className="relative p-6">
                      <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${item.gradient} text-white text-sm font-semibold mb-4`}>
                        {`0${index + 1}`}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Protocols */}
            <section id="protocols" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">📋</span>
                <h2 className="text-3xl font-bold text-gray-900">Protocols and Practical Considerations</h2>
              </div>

              <div className="space-y-8">
                {/* Session Structure */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">rTMS Session Structure</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4">
                      <div className="text-sm text-gray-500 mb-1">Frequency & Intensity</div>
                      <div className="text-gray-900 font-semibold">10 Hz at 120% motor threshold</div>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <div className="text-sm text-gray-500 mb-1">Duration</div>
                      <div className="text-gray-900 font-semibold">20–30 min, 5 days/week, 4–6 weeks</div>
                    </div>
                  </div>
                </div>

                {/* Mindfulness Exercises */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Incorporating Mindfulness Exercises</h3>
                  <div className="space-y-4">
                    {[
                      { phase: "Pre-stimulation", desc: "5 minutes of guided breathing", color: "orange" },
                      { phase: "During Stimulation", desc: "Focused awareness on scalp sensations", color: "blue" },
                      { phase: "Post-stimulation", desc: "5 minutes of body-scan or loving-kindness meditation", color: "green" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 bg-white border-2 border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-${item.color}-400 to-${item.color}-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-1">{item.phase}</h4>
                          <p className="text-gray-700">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Patient Selection */}
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Patient Selection & Contraindications</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Evaluate for metallic implants, seizure risk, severe claustrophobia, or inability to follow
                    mindfulness instructions.
                  </p>
                </div>
              </div>
            </section>

            {/* Safety */}
            <section id="safety" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">⚠️</span>
                <h2 className="text-3xl font-bold text-gray-900">Safety, Side Effects, and Contraindications</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                rTMS is generally well tolerated. Common mild side effects include scalp discomfort and headache.
                Mindfulness integration poses minimal risk, though patients with severe dissociation may require
                modified practices.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 rounded-r-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white text-xl">
                    !
                  </div>
                  <h4 className="font-bold text-red-900 text-lg">Important Safety Considerations</h4>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Screen for metallic implants",
                    "Assess seizure risk",
                    "Monitor for severe dissociation",
                    "Ensure patient can follow instructions",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-red-700">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Patient Experience */}
            <section id="patient-experience" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">💭</span>
                <h2 className="text-3xl font-bold text-gray-900">Patient Experience</h2>
              </div>
              <p className="text-gray-700 text-lg mb-6">Encourage patients to:</p>
              
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { icon: "🎯", title: "Focus", desc: 'Anchor attention on the magnetic "click" and scalp pressure' },
                  { icon: "🏷️", title: "Label", desc: 'Label thoughts nonjudgmentally and let them pass' },
                  { icon: "🕉️", title: "Mantras", desc: 'Use brief, silent mantras like "calm" or "release"' },
                ].map((item, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform" />
                    <div className="relative bg-white rounded-2xl p-6 transform -rotate-1 group-hover:rotate-0 transition-transform">
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
                      <p className="text-gray-700 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Future Directions */}
            <section id="future-directions" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">🚀</span>
                <h2 className="text-3xl font-bold text-gray-900">Future Directions and Research Needs</h2>
              </div>
              
              <div className="space-y-4">
                {[
                  { title: "Randomized Controlled Trials", desc: "Larger studies comparing mindful rTMS vs. standard rTMS", color: "from-purple-500 to-indigo-500" },
                  { title: "Neuroimaging", desc: "Clarify circuit‑specific plasticity changes with mindfulness pairing", color: "from-blue-500 to-cyan-500" },
                  { title: "Digital Integration", desc: "Virtual reality or biofeedback to enhance mindful engagement", color: "from-green-500 to-teal-500" },
                ].map((item, index) => (
                  <div key={index} className="group flex gap-4 p-6 bg-white border-2 border-gray-100 rounded-2xl hover:border-transparent hover:shadow-lg transition-all">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">✨</span>
                <h2 className="text-3xl font-bold text-gray-900">Conclusion</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Mindful rTMS represents a promising frontier in neuropsychiatric care, merging the neuroplastic
                benefits of magnetic stimulation with the self‑regulatory power of mindfulness. As research
                advances, this integrative approach could become a standard for optimizing treatment‑resistant
                conditions and promoting cognitive well‑being.
              </p>
              
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 animate-gradient" />
                <div className="relative p-8 text-center text-white">
                  <p className="text-xl font-medium leading-relaxed">
                    The future of mental health treatment lies in innovative integrative approaches like Mindful rTMS.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </article>

        {/* CTA Card */}
        <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl mb-8">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="text-white" size={32} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Stay Updated on Latest Research</h3>
            <p className="text-lg text-white/90 mb-8">
              Subscribe to our newsletter for the latest developments in neuroscience and mental health.
            </p>
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  )
}
