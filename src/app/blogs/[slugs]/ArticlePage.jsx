"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { MousePointerClick, X, ChevronRight } from "lucide-react"
import { Avatar } from "@mui/material"


export default function ArticlePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

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
    // { id: "depression", title: "Depression", level: 2 },
    // { id: "anxiety", title: "Anxiety Disorders", level: 2 },
    // { id: "ptsd", title: "PTSD and Trauma", level: 2 },
    // { id: "cognitive-enhancement", title: "Cognitive Enhancement", level: 2 },
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
    setActiveSection(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = tableOfContents.map((item) => document.getElementById(item.id))
//       const scrollPosition = window.scrollY + 100

//       for (let i = sections.length - 1; i >= 0; i--) {
//         const section = sections[i]
//         if (section && section.offsetTop <= scrollPosition) {
//           setActiveSection(tableOfContents[i].id)
//           break
//         }
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

  return (
    <div className="min-h-screen" >


      <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Main Content */}
          <main className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Hero Image */}
              <div className="aspect-video relative">
                <Image
                  src="https://mindfultms.in/_next/image?url=%2FclinicImages%2FDelhi6.webp&w=1920&q=75"
                  alt="Mindful rTMS - Brain stimulation with mindfulness"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <div className="p-6 sm:p-8 text-white">
                    <h1 className="text-2xl sm:text-2xl lg:text-4xl font-bold mb-2">
                      Mindful rTMS: Integrating Mindfulness with Brain Stimulation
                    </h1>
                    <p className="text-base opacity-90">
                      An innovative fusion of evidence-based approaches to optimize mental health outcomes
                    </p>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-3 sm:p-3 lg:p-12">
                {/* Article Meta */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b">
                  <div className="flex items-center space-x-4">
                    
                    <Avatar
                      alt="Dr.Research Team"
                      size="md"
                      src="https://images.unsplash.com/photo-1499714608240-22fc6c505253?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                      className="bg-orange-500 text-base font-semibold"
                    />
                    <div>
                      <p className="font-medium text-gray-900">Dr. Research Team</p>
                      <p className="text-sm text-gray-500">December 16, 2024 • 15 min read</p>
                    </div>
                  </div>
                  <span className="bg-orange-100 text-[#F97316] px-3 py-1 rounded-full text-sm font-medium">
                    Neuroscience
                  </span>
                </div>

                {/* Introduction */}
                <section id="introduction" className="mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Mindful rTMS represents an innovative fusion of two evidence‑based approaches—repetitive
                      transcranial magnetic stimulation (rTMS) and mindfulness training—to optimize mental health
                      outcomes. By engaging patients in focused attention and present‑moment awareness during
                      neuromodulation, clinicians aim to amplify therapeutic effects, promote neuroplasticity, and
                      support long‑term resilience.
                    </p>
                    <div className="bg-orange-50 border-l-4 border-[#F97316] p-6 my-8">
                      <p className="text-gray-800 italic">
                      {`  "The integration of mindfulness with rTMS opens new possibilities for treating
                        treatment-resistant mental health conditions."`}
                      </p>
                    </div>
                  </div>
                </section>

                {/* What Is rTMS */}
                <section id="what-is-rtms" className="mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What Is rTMS?</h2>
                  <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                    <div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Repetitive transcranial magnetic stimulation (rTMS) is a non‑invasive brain‑stimulation
                        technique that uses magnetic pulses to modulate neuronal activity in targeted cortical regions.
                        Widely studied for treatment‑resistant depression, rTMS has gained FDA approval and is
                        increasingly applied to other neuropsychiatric conditions.
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Non-invasive brain stimulation</li>
                        <li>FDA approved for depression</li>
                        <li>Targets specific brain regions</li>
                        <li>Modulates neuronal activity</li>
                      </ul>
                    </div>
                    <div className="aspect-square relative">
                      <Image
                        src="https://mindfultms.in/_next/image?url=%2FclinicImages%2FDelhi6.webp&w=1920&q=75"
                        alt="rTMS device and brain targeting"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </section>

                {/* Mindfulness Role */}
                <section id="mindfulness-role" className="mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    The Role of Mindfulness in Mental Health
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
               {`     Mindfulness practices—rooted in Buddhist contemplative traditions—cultivate sustained, nonjudgmental
                    attention to present‑moment experiences. Extensive research highlights mindfulness's efficacy for
                    reducing stress, improving mood regulation, and enhancing attention and cognitive flexibility.`}
                  </p>
                  <div className="aspect-video relative mb-8">
                    <Image
                      src="https://mindfultms.in/_next/image?url=%2FclinicImages%2FDelhi6.webp&w=1920&q=75"
                      alt="Mindfulness meditation practice"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </section>

                {/* Integrating Mindfulness */}
                <section id="integrating-mindfulness" className="mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    Integrating Mindfulness with rTMS: The Concept of Mindful rTMS
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    Mindful rTMS protocols interleave guided mindfulness exercises with magnetic stimulation. Sessions
                    typically begin with a brief breath‑awareness or body‑scan practice, followed by rTMS delivery while
                    the patient maintains mindful focus on internal sensations or the rhythm of stimulation.
                  </p>
                </section>

                {/* Mechanisms of Action */}
                <section id="mechanisms" className="mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Mechanisms of Action</h2>

                  <div id="neural-plasticity" className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">5.1 Neural Plasticity</h3>
                    <p className="text-gray-700 leading-relaxed">
                 {`     Magnetic pulses induce synaptic changes in targeted networks. Mindful attention during stimulation
                      may further reinforce Hebbian learning ("cells that fire together, wire together"), strengthening
                      adaptive circuits.`}
                    </p>
                  </div>

                  <div id="attention-regulation" className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">5.2 Attention Regulation</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Mindfulness enhances top‑down control from prefrontal regions. Concurrent rTMS targeting these
                      areas may synergistically improve attentional networks and executive function.
                    </p>
                  </div>

                  <div id="stress-reduction" className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">5.3 Stress Reduction Pathways</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Mindful practice lowers cortisol and sympathetic arousal. Paired with rTMS‑driven modulation of
                      limbic circuits, this dual approach can more robustly attenuate stress reactivity.
                    </p>
                  </div>

                  <div className="aspect-video relative">
                    <Image
                      src="https://mindfultms.in/_next/image?url=%2FclinicImages%2FDelhi6.webp&w=1920&q=75"
                      alt="Brain mechanisms and neural pathways"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </section>

                {/* Clinical Applications */}
                <section id="clinical-applications" className="mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                    Clinical Applications and Benefits
                  </h2>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div id="depression" className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">6.1 Depression</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Mindful rTMS has shown higher remission rates versus rTMS alone in preliminary trials,
                        potentially due to enhanced engagement of prefrontal‑limbic pathways.
                      </p>
                    </div>

                    <div id="anxiety" className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">6.2 Anxiety Disorders</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Combining mindfulness with stimulation of dorsolateral prefrontal cortex (DLPFC) can reduce
                        hypervigilance and rumination.
                      </p>
                    </div>

                    <div id="ptsd" className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">6.3 PTSD and Trauma</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Pairing rTMS to the medial prefrontal cortex with grounding mindfulness practices may facilitate
                        processing of traumatic memories.
                      </p>
                    </div>

                    <div id="cognitive-enhancement" className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">6.4 Cognitive Enhancement</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Integrative protocols are being explored to boost working memory and processing speed in healthy
                        individuals and those with mild cognitive impairment.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Protocols */}
                <section id="protocols" className="mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                    Protocols and Practical Considerations
                  </h2>

                  <div id="session-structure" className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">7.1 rTMS Session Structure</h3>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <ul className="space-y-2 text-gray-700">
                        <li>
                          <strong>Frequency & Intensity:</strong> Common protocols use 10 Hz at 120% motor threshold
                        </li>
                        <li>
                          <strong>Duration:</strong> 20–30 minutes of stimulation per session, 5 days/week, for 4–6
                          weeks
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div id="mindfulness-exercises" className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      7.2 Incorporating Mindfulness Exercises
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#F97316] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                          1
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Pre‑stimulation</h4>
                          <p className="text-gray-700">5 minutes of guided breathing</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#F97316] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                          2
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">During Stimulation</h4>
                          <p className="text-gray-700">Focused awareness on scalp sensations</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#F97316] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                          3
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Post‑stimulation</h4>
                          <p className="text-gray-700">5 minutes of body‑scan or loving‑kindness meditation</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="patient-selection" className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      7.3 Patient Selection & Contraindications
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Evaluate for metallic implants, seizure risk, severe claustrophobia, or inability to follow
                      mindfulness instructions.
                    </p>
                  </div>
                </section>

                {/* Safety */}
                <section id="safety" className="mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    Safety, Side Effects, and Contraindications
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    rTMS is generally well tolerated. Common mild side effects include scalp discomfort and headache.
                    Mindfulness integration poses minimal risk, though patients with severe dissociation may require
                    modified practices.
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-400 p-6">
                    <h4 className="font-medium text-red-800 mb-2">Important Safety Considerations</h4>
                    <ul className="list-disc list-inside text-red-700 space-y-1">
                      <li>Screen for metallic implants</li>
                      <li>Assess seizure risk</li>
                      <li>Monitor for severe dissociation</li>
                      <li>Ensure patient can follow instructions</li>
                    </ul>
                  </div>
                </section>

                {/* Patient Experience */}
                <section id="patient-experience" className="mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    Patient Experience: Mindfulness Practices During Sessions
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">Encourage patients to:</p>
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-orange-50 rounded-lg">
                      <div className="w-16 h-16 bg-[#F97316] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-2xl">🎯</span>
                      </div>
                      <h4 className="font-medium text-gray-900 mb-2">Focus</h4>
                      <p className="text-sm text-gray-700">
                      {`  Anchor attention on the magnetic "click" and scalp pressure`}
                      </p>
                    </div>
                    <div className="text-center p-6 bg-orange-50 rounded-lg">
                      <div className="w-16 h-16 bg-[#F97316] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-2xl">🏷️</span>
                      </div>
                      <h4 className="font-medium text-gray-900 mb-2">Label</h4>
                      <p className="text-sm text-gray-700">
                {`        Label thoughts nonjudgmentally ("thinking," "feeling") and let them pass`}
                      </p>
                    </div>
                    <div className="text-center p-6 bg-orange-50 rounded-lg">
                      <div className="w-16 h-16 bg-[#F97316] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-2xl">🕉️</span>
                      </div>
                      <h4 className="font-medium text-gray-900 mb-2">Mantras</h4>
                      <p className="text-sm text-gray-700">{`Use brief, silent mantras (e.g., "calm," "release")`}</p>
                    </div>
                  </div>
                </section>

                {/* Future Directions */}
                <section id="future-directions" className="mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    Future Directions and Research Needs
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <ChevronRight className="text-[#F97316] mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-medium text-gray-900">Randomized Controlled Trials</h4>
                        <p className="text-gray-700">Larger studies comparing mindful rTMS vs. standard rTMS</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <ChevronRight className="text-[#F97316] mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-medium text-gray-900">Neuroimaging</h4>
                        <p className="text-gray-700">
                          Clarify circuit‑specific plasticity changes with mindfulness pairing
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <ChevronRight className="text-[#F97316] mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-medium text-gray-900">Digital Integration</h4>
                        <p className="text-gray-700">Virtual reality or biofeedback to enhance mindful engagement</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Conclusion */}
                <section id="conclusion" className="mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Mindful rTMS represents a promising frontier in neuropsychiatric care, merging the neuroplastic
                    benefits of magnetic stimulation with the self‑regulatory power of mindfulness. As research
                    advances, this integrative approach could become a standard for optimizing treatment‑resistant
                    conditions and promoting cognitive well‑being.
                  </p>
                  <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                    <p className="text-gray-800 font-medium text-center">
                      The future of mental health treatment lies in innovative integrative approaches like Mindful rTMS.
                    </p>
                  </div>
                </section>

                {/* Call to Action */}
                <div className="bg-orange-400 text-white p-8 rounded-lg text-center">
                  <h3 className="text-xl font-bold mb-4">Stay Updated on Latest Research</h3>
                  <p className="mb-6">
                    Subscribe to our newsletter for the latest developments in neuroscience and mental health.
                  </p>
                  <button className="bg-white text-[#F97316] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </article>
          </main>

          {/* Desktop Table of Contents */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg shadow-lg px-6 ">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2 max-h-[75vh] overflow-y-auto">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left text-sm py-2 px-3 rounded transition-colors ${
                        item.level === 2 ? "ml-4" : ""
                      } ${
                        activeSection === item.id
                          ? "bg-[#F97316] text-white"
                          : "text-gray-700 hover:bg-orange-50 hover:text-[#F97316]"
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile Table of Contents Modal */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 w-80 max-w-full bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-bold text-gray-900">Table of Contents</h3>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>
            <nav className="p-4 overflow-y-auto h-full">
              <div className="space-y-2">
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left text-sm py-3 px-3 rounded transition-colors ${
                      item.level === 2 ? "ml-4" : ""
                    } ${
                      activeSection === item.id
                        ? "bg-[#F97316] text-white font-semibold"
                        : "text-gray-700 font-semibold hover:bg-orange-50 hover:text-[#F97316]"
                    }`}
                  >
                   { item.level === 2 ? '  --' : ''} {item.title}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}

       {/* Fixed TOC Button */}
        <div
          onClick={() => setIsMobileMenuOpen(true)}
          className="fixed md:hidden bottom-6 right-6 z-40 px-3 rounded-xl py-3 text-sm font-semibold bg-[#F97316] text-white shadow-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
          aria-label="Table of Contents"
        >
          <span className="mr-2">Table of Contents </span><MousePointerClick />
        </div>
    </div>
  )
}
