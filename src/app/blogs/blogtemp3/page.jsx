"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { 
  Sparkles, 
  X, 
  Share2, 
  Bookmark,
  ChevronRight,
  Calendar,
  Clock,
  Eye,
  Menu
} from "lucide-react"
import { Avatar } from "@mui/material"

export default function SexyArticle() {
  const [showTocModal, setShowTocModal] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [readProgress, setReadProgress] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  const sections = [
    { id: "introduction", title: "Introduction", number: "01" },
    { id: "what-is-rtms", title: "What Is rTMS?", number: "02" },
    { id: "mindfulness-role", title: "The Role of Mindfulness", number: "03" },
    { id: "integrating-mindfulness", title: "Integrating Mindfulness with rTMS", number: "04" },
    { id: "mechanisms", title: "Mechanisms of Action", number: "05" },
    { id: "clinical-applications", title: "Clinical Applications", number: "06" },
    { id: "protocols", title: "Protocols & Considerations", number: "07" },
    { id: "safety", title: "Safety & Contraindications", number: "08" },
    { id: "patient-experience", title: "Patient Experience", number: "09" },
    { id: "future-directions", title: "Future Directions", number: "10" },
    { id: "conclusion", title: "Conclusion", number: "11" },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
      setShowTocModal(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setReadProgress(progress)
      setIsScrolled(scrollTop > 100)

      // Active section
      const sectionElements = sections.map(s => document.getElementById(s.id))
      let current = ""
      sectionElements.forEach((el, index) => {
        if (el && el.getBoundingClientRect().top < 300) {
          current = sections[index].id
        }
      })
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50/30">
      {/* Animated Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-orange-100 z-50">
        <div
          className="h-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/50"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      {/* Floating Header with Glassmorphism */}
      <header
        className={`fixed top-1 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ${
          isScrolled
            ? "w-[95%] lg:w-auto lg:min-w-[600px]"
            : "w-[95%] lg:w-auto lg:min-w-[600px] lg:top-8"
        }`}
      >
        <div
          className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/60 shadow-2xl shadow-orange-500/10 px-6 py-4"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
          }}
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                <Sparkles className="text-white" size={20} />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-sm font-bold text-gray-900">Mindful rTMS</h1>
                <p className="text-xs text-gray-500">Neuroscience Research</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-orange-500/10 hover:bg-orange-500/20 text-orange-600 rounded-xl transition-all">
                <Share2 size={16} />
                <span className="text-sm font-medium">Share</span>
              </button>
              <button
                onClick={() => setShowTocModal(true)}
                className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-medium shadow-lg shadow-orange-500/30 transition-all hover:scale-105"
              >
                <Menu size={18} />
                <span className="text-sm">Contents</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Glassmorphic TOC Modal */}
      {showTocModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 animate-fadeIn">
          {/* Backdrop with blur */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-orange-600/10 to-orange-500/20 backdrop-blur-md"
            onClick={() => setShowTocModal(false)}
          />

          {/* Modal Content */}
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-3xl animate-slideUp"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 25px 50px -12px rgba(251, 146, 60, 0.3), 0 0 0 1px rgba(255,255,255,0.5)",
            }}
          >
            {/* Modal Header */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 opacity-10" />
              <div className="relative px-8 py-6 border-b border-orange-200/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Table of Contents</h3>
                    <p className="text-sm text-gray-600">Navigate through the article</p>
                  </div>
                  <button
                    onClick={() => setShowTocModal(false)}
                    className="w-10 h-10 rounded-full bg-orange-500/10 hover:bg-orange-500/20 flex items-center justify-center transition-all hover:rotate-90 duration-300"
                  >
                    <X className="text-orange-600" size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto max-h-[calc(85vh-120px)] p-6">
              <div className="grid gap-3">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`group relative overflow-hidden rounded-2xl p-5 text-left transition-all duration-300 ${
                      activeSection === section.id
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30 scale-[1.02]"
                        : "bg-white/60 hover:bg-white/80 text-gray-700 hover:text-orange-600 border border-orange-100/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg transition-all ${
                          activeSection === section.id
                            ? "bg-white/20 text-white"
                            : "bg-orange-500/10 text-orange-600 group-hover:bg-orange-500/20"
                        }`}
                      >
                        {section.number}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-base mb-1 truncate">
                          {section.title}
                        </h4>
                        <p
                          className={`text-xs ${
                            activeSection === section.id
                              ? "text-white/70"
                              : "text-gray-500"
                          }`}
                        >
                          Section {index + 1} of {sections.length}
                        </p>
                      </div>
                      <ChevronRight
                        className={`flex-shrink-0 transition-transform group-hover:translate-x-1 ${
                          activeSection === section.id ? "text-white" : "text-orange-500"
                        }`}
                        size={20}
                      />
                    </div>

                    {activeSection === section.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 pt-24 sm:pt-32 pb-16">
        {/* Hero Section with Glassmorphism */}
        <div className="relative mb-16 overflow-hidden rounded-3xl">
          <div className="relative h-[70vh] lg:h-[80vh]">
            <Image
              src="https://mindfultms.in/_next/image?url=%2FclinicImages%2FDelhi6.webp&w=1920&q=75"
              alt="Mindful rTMS"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            {/* Floating Info Card */}
            <div className="absolute bottom-8 left-8 right-8">
              <div
                className="backdrop-blur-xl rounded-3xl p-8 border border-white/30"
                style={{
                  background: "linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%)",
                }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 rounded-full text-white text-sm font-bold mb-4 shadow-lg shadow-orange-500/50">
                  <Sparkles size={16} />
                  NEUROSCIENCE
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  Mindful rTMS: Integrating Mindfulness with Brain Stimulation
                </h1>
                <p className="text-lg sm:text-xl text-white/90 mb-6 max-w-3xl">
                  An innovative fusion of evidence-based approaches to optimize mental health outcomes
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>Dec 16, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>15 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye size={16} />
                    <span>2.4K views</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Author Card with Glassmorphism */}
        <div
          className="mb-12 rounded-3xl p-6 border border-orange-200/50"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <Avatar
                alt="Dr. Research Team"
                src="https://images.unsplash.com/photo-1499714608240-22fc6c505253?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                className="w-16 h-16 border-4 border-orange-200"
              />
              <div>
                <p className="font-bold text-gray-900 text-lg">Dr. Research Team</p>
                <p className="text-gray-600">Neuroscience Researcher • Medical Professional</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-medium shadow-lg shadow-orange-500/30 transition-all hover:scale-105">
                Follow
              </button>
              <button className="w-11 h-11 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 flex items-center justify-center transition-all">
                <Bookmark className="text-orange-600" size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="space-y-16">
          {/* Introduction */}
          <section id="introduction" className="scroll-mt-32">
            <div
              className="rounded-3xl p-8 lg:p-12 border border-orange-200/50 mb-8"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,237,213,0.3) 100%)",
              }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full text-orange-600 text-sm font-bold mb-6">
                <span>01</span>
                <span>•</span>
                <span>INTRODUCTION</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                A New Frontier in Mental Health
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Mindful rTMS represents an innovative fusion of two evidence‑based approaches—repetitive
                  transcranial magnetic stimulation (rTMS) and mindfulness training—to optimize mental health
                  outcomes. By engaging patients in focused attention and present‑moment awareness during
                  neuromodulation, clinicians aim to amplify therapeutic effects, promote neuroplasticity, and
                  support long‑term resilience.
                </p>

                <div
                  className="relative overflow-hidden rounded-2xl p-8 my-8 border border-orange-300/50"
                  style={{
                    background: "linear-gradient(135deg, rgba(251, 146, 60, 0.1) 0%, rgba(251, 146, 60, 0.05) 100%)",
                  }}
                >
                  <div className="absolute top-4 left-4 text-orange-500 opacity-20">
                    <Sparkles size={48} />
                  </div>
                  <p className="text-2xl text-gray-800 italic leading-relaxed relative z-10 pl-12">
                  {`"The integration of mindfulness with rTMS opens new possibilities for treating
                    treatment-resistant mental health conditions."`}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What Is rTMS */}
          <section id="what-is-rtms" className="scroll-mt-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full text-orange-600 text-sm font-bold mb-6">
              <span>02</span>
              <span>•</span>
              <span>UNDERSTANDING rTMS</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
              What Is rTMS?
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Repetitive transcranial magnetic stimulation (rTMS) is a non‑invasive brain‑stimulation
                  technique that uses magnetic pulses to modulate neuronal activity in targeted cortical regions.
                  Widely studied for treatment‑resistant depression, rTMS has gained FDA approval and is
                  increasingly applied to other neuropsychiatric conditions.
                </p>
              </div>

              <div
                className="rounded-2xl p-6 border border-orange-200/50"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,237,213,0.4) 100%)",
                }}
              >
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Key Features</h3>
                <div className="space-y-3">
                  {[
                    "Non-invasive brain stimulation",
                    "FDA approved for depression",
                    "Targets specific brain regions",
                    "Modulates neuronal activity",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://mindfultms.in/_next/image?url=%2FclinicImages%2FDelhi6.webp&w=1920&q=75"
                alt="rTMS device"
                fill
                className="object-cover"
              />
            </div>
          </section>

          {/* Mindfulness Role */}
          <section id="mindfulness-role" className="scroll-mt-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full text-orange-600 text-sm font-bold mb-6">
              <span>03</span>
              <span>•</span>
              <span>MINDFULNESS</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
              The Role of Mindfulness in Mental Health
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
           {`   Mindfulness practices—rooted in Buddhist contemplative traditions—cultivate sustained, nonjudgmental
              attention to present‑moment experiences. Extensive research highlights mindfulness's efficacy for
              reducing stress, improving mood regulation, and enhancing attention and cognitive flexibility.`}
            </p>

            <div className="relative h-80 rounded-2xl overflow-hidden">
              <Image
                src="https://mindfultms.in/_next/image?url=%2FclinicImages%2FDelhi6.webp&w=1920&q=75"
                alt="Mindfulness"
                fill
                className="object-cover"
              />
            </div>
          </section>

          {/* Integration */}
          <section id="integrating-mindfulness" className="scroll-mt-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full text-orange-600 text-sm font-bold mb-6">
              <span>04</span>
              <span>•</span>
              <span>INTEGRATION</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
              Integrating Mindfulness with rTMS
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Mindful rTMS protocols interleave guided mindfulness exercises with magnetic stimulation. Sessions
              typically begin with a brief breath‑awareness or body‑scan practice, followed by rTMS delivery while
              the patient maintains mindful focus on internal sensations or the rhythm of stimulation.
            </p>
          </section>

          {/* Mechanisms */}
          <section id="mechanisms" className="scroll-mt-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full text-orange-600 text-sm font-bold mb-6">
              <span>05</span>
              <span>•</span>
              <span>MECHANISMS</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-12">
              Mechanisms of Action
            </h2>

            <div className="space-y-8">
              {[
                {
                  title: "Neural Plasticity",
                  content: 'Magnetic pulses induce synaptic changes in targeted networks. Mindful attention during stimulation may further reinforce Hebbian learning ("cells that fire together, wire together"), strengthening adaptive circuits.',
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  title: "Attention Regulation",
                  content: "Mindfulness enhances top‑down control from prefrontal regions. Concurrent rTMS targeting these areas may synergistically improve attentional networks and executive function.",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Stress Reduction Pathways",
                  content: "Mindful practice lowers cortisol and sympathetic arousal. Paired with rTMS‑driven modulation of limbic circuits, this dual approach can more robustly attenuate stress reactivity.",
                  gradient: "from-green-500 to-emerald-500"
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl p-8 border border-orange-200/50"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,237,213,0.2) 100%)",
                  }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-bold shadow-lg`}>
                      {index + 1}
                    </span>
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed pl-15">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Clinical Applications */}
          <section id="clinical-applications" className="scroll-mt-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full text-orange-600 text-sm font-bold mb-6">
              <span>06</span>
              <span>•</span>
              <span>CLINICAL APPLICATIONS</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-12">
              Clinical Applications and Benefits
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Depression",
                  content: "Mindful rTMS has shown higher remission rates versus rTMS alone in preliminary trials, potentially due to enhanced engagement of prefrontal‑limbic pathways.",
                  color: "orange"
                },
                {
                  title: "Anxiety Disorders",
                  content: "Combining mindfulness with stimulation of dorsolateral prefrontal cortex (DLPFC) can reduce hypervigilance and rumination.",
                  color: "blue"
                },
                {
                  title: "PTSD and Trauma",
                  content: "Pairing rTMS to the medial prefrontal cortex with grounding mindfulness practices may facilitate processing of traumatic memories.",
                  color: "purple"
                },
                {
                  title: "Cognitive Enhancement",
                  content: "Integrative protocols are being explored to boost working memory and processing speed in healthy individuals and those with mild cognitive impairment.",
                  color: "green"
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl p-6 border border-orange-200/50 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:scale-[1.02]`}
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",
                  }}
                >
                  <div className="absolute top-4 right-4 text-6xl opacity-5 font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed relative z-10">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Protocols */}
          <section id="protocols" className="scroll-mt-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full text-orange-600 text-sm font-bold mb-6">
              <span>07</span>
              <span>•</span>
              <span>PROTOCOLS</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-12">
              Protocols and Practical Considerations
            </h2>

            <div className="space-y-8">
              <div
                className="rounded-2xl p-8 border border-orange-200/50"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,237,213,0.3) 100%)",
                }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Session Structure</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white/60 rounded-xl p-4 border border-orange-100">
                    <div className="text-sm text-orange-600 font-medium mb-1">Frequency & Intensity</div>
                    <div className="text-gray-900 font-semibold">10 Hz at 120% motor threshold</div>
                  </div>
                  <div className="bg-white/60 rounded-xl p-4 border border-orange-100">
                    <div className="text-sm text-orange-600 font-medium mb-1">Duration</div>
                    <div className="text-gray-900 font-semibold">20–30 min • 5 days/week • 4–6 weeks</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Mindfulness Exercises</h3>
                <div className="space-y-4">
                  {[
                    { phase: "Pre-stimulation", desc: "5 minutes of guided breathing" },
                    { phase: "During Stimulation", desc: "Focused awareness on scalp sensations" },
                    { phase: "Post-stimulation", desc: "5 minutes of body-scan or loving-kindness meditation" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-6 rounded-2xl border border-orange-200/50"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,237,213,0.2) 100%)",
                      }}
                    >
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-500/30">
                        {index + 1}
                      </div>
                      <div className="flex-1 pt-2">
                        <h4 className="font-bold text-gray-900 mb-1 text-lg">{item.phase}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-2xl p-6 border border-orange-200/50"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,237,213,0.2) 100%)",
                }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">Patient Selection & Contraindications</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Evaluate for metallic implants, seizure risk, severe claustrophobia, or inability to follow
                  mindfulness instructions.
                </p>
              </div>
            </div>
          </section>

          {/* Safety */}
          <section id="safety" className="scroll-mt-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full text-orange-600 text-sm font-bold mb-6">
              <span>08</span>
              <span>•</span>
              <span>SAFETY</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
              Safety, Side Effects, and Contraindications
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              rTMS is generally well tolerated. Common mild side effects include scalp discomfort and headache.
              Mindfulness integration poses minimal risk, though patients with severe dissociation may require
              modified practices.
            </p>

            <div
              className="rounded-2xl p-8 border-l-4 border-red-500"
              style={{
                background: "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)",
              }}
            >
              <h4 className="font-bold text-red-900 mb-4 text-lg flex items-center gap-2">
                <span className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center text-white">!</span>
                Important Safety Considerations
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Screen for metallic implants",
                  "Assess seizure risk",
                  "Monitor for severe dissociation",
                  "Ensure patient can follow instructions",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-red-700">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Patient Experience */}
          <section id="patient-experience" className="scroll-mt-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full text-orange-600 text-sm font-bold mb-6">
              <span>09</span>
              <span>•</span>
              <span>PATIENT EXPERIENCE</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
              Patient Experience
            </h2>

            <p className="text-lg text-gray-700 mb-8">Encourage patients to:</p>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: "Focus", desc: 'Anchor attention on the magnetic "click" and scalp pressure', emoji: "🎯" },
                { title: "Label", desc: 'Label thoughts nonjudgmentally and let them pass', emoji: "🏷️" },
                { title: "Mantras", desc: 'Use brief, silent mantras like "calm" or "release"', emoji: "🕉️" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group text-center p-8 rounded-2xl border border-orange-200/50 hover:shadow-2xl hover:shadow-orange-500/20 transition-all hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,237,213,0.3) 100%)",
                  }}
                >
                  <div className="text-5xl mb-4">{item.emoji}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Future Directions */}
          <section id="future-directions" className="scroll-mt-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full text-orange-600 text-sm font-bold mb-6">
              <span>10</span>
              <span>•</span>
              <span>FUTURE DIRECTIONS</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-12">
              Future Directions and Research Needs
            </h2>

            <div className="space-y-6">
              {[
                { title: "Randomized Controlled Trials", desc: "Larger studies comparing mindful rTMS vs. standard rTMS" },
                { title: "Neuroimaging", desc: "Clarify circuit‑specific plasticity changes with mindfulness pairing" },
                { title: "Digital Integration", desc: "Virtual reality or biofeedback to enhance mindful engagement" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 p-6 rounded-2xl border border-orange-200/50 hover:shadow-lg transition-all"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,237,213,0.2) 100%)",
                  }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-orange-500/30">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="scroll-mt-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full text-orange-600 text-sm font-bold mb-6">
              <span>11</span>
              <span>•</span>
              <span>CONCLUSION</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
              Conclusion
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              Mindful rTMS represents a promising frontier in neuropsychiatric care, merging the neuroplastic
              benefits of magnetic stimulation with the self‑regulatory power of mindfulness. As research
              advances, this integrative approach could become a standard for optimizing treatment‑resistant
              conditions and promoting cognitive well‑being.
            </p>

            <div
              className="rounded-2xl p-12 text-center border border-orange-300/50"
              style={{
                background: "linear-gradient(135deg, rgba(251, 146, 60, 0.15) 0%, rgba(251, 146, 60, 0.05) 100%)",
              }}
            >
              <Sparkles className="mx-auto text-orange-500 mb-4" size={40} />
              <p className="text-2xl font-semibold text-gray-900 leading-relaxed">
                The future of mental health treatment lies in innovative integrative approaches like Mindful rTMS.
              </p>
            </div>
          </section>
        </article>

        {/* CTA Section */}
        <div className="mt-16 relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          <div className="relative p-12 text-center text-white">
            <Sparkles className="mx-auto mb-4" size={40} />
            <h3 className="text-3xl font-bold mb-4">Stay Updated on Latest Research</h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest developments in neuroscience and mental health.
            </p>
            <button className="px-8 py-4 bg-white text-orange-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl">
              Subscribe Now
            </button>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
