<script setup>
import {
  EnvelopeIcon,
  MapPinIcon,
  ArrowUpRightIcon,
  ArrowRightIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  LinkIcon
} from '@heroicons/vue/24/outline'

const logoUrl = '/venith-logo.jpg'
const profileImage = '/patrick.jpg'

const whatsapp =
  'https://wa.me/2349039021207?text=Hello%20Patrick,%20I%20found%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project.'

const phone = 'tel:+2349039021207'

// Only two nav links, both pointing at real sections on this same
// page — nothing here routes anywhere that doesn't exist.
  const navLinks = [
  { label: 'Work', to: { path: '/', hash: '#projects' } },
]

// ---- Content -------------------------------------------------------
// Everything below is plain data, so it's easy to edit later without
// touching the markup.

const experienceCards = [
  {
    icon: BriefcaseIcon,
    title: 'Timglobal Ltd',
    subtitle: 'Full Stack Software Engineer',
    meta: 'July 2025 — Present'
  },
  {
    icon: AcademicCapIcon,
    title: 'Olabisi Onabanjo University',
    subtitle: 'B.Eng. Electrical Engineering',
    meta: '2026',
    badge: 'First Class Honours'
  }
]

const projects = [
  {
    name: 'Multi-Tenant EPOS Platform',
    tag: 'timglobal · platform',
    description:
      'Architected the migration of a commerce engine into a multi-tenant SaaS platform — inventory tracking, POS operations, customer management, order flows, and payment distribution for separate business tenants.',
    stack: ['Vue.js', 'Node.js', 'TypeScript', 'MongoDB', 'Stripe', 'MinIO'],
    link: 'https://epos.timglobal.uk'
  },
  {
    name: 'ServiceConnect Marketplace',
    tag: 'timglobal · marketplace',
    description:
      'A real-time marketplace linking homeowners with service providers: job publishing, proposal matching, secure payments via Stripe, and full-duplex messaging over WebSockets.',
    stack: ['Vue.js', 'TypeScript', 'Node.js', 'Stripe', 'Socket.IO', 'Docker'],
    link: 'https://serviceconnect.uk'
  },
  {
    name: 'QR Attendance & Asset Management',
    tag: 'final year project',
    description:
      'A QR-based system built to replace manual attendance sheets — instant digital attendance verification, plus real-time asset lifecycle and borrowing logs, with automated notifications.',
    stack: ['Vue.js', 'Node.js', 'MongoDB', 'Render', 'Resend'],
    link: 'https://fyp-mb3l.onrender.com/#/'
  },
  {
    name: 'Dee Royal Diadem',
    tag: 'timglobal · epos tenant',
    description:
      'A store built on top of the EPOS platform. I extended the standard tenant feature set with late fees, deposit-based booking, and completing-balance payments.',
    stack: ['Vue.js', 'Node.js'],
    link: 'https://deeroyaldiadem.uk'
  },
  {
    name: 'Kofo',
    tag: 'timglobal · ecommerce',
    description:
      'An Afro-Caribbean ecommerce platform for buying and selling everyday goods, scaled and integrated into the multi-tenant EPOS ecosystem.',
    stack: ['Vue.js', 'Node.js'],
    link: 'https://kofo.uk'
  },
  {
    name: 'Yackiss & Venith Suites',
    tag: 'timglobal · donations & finance',
    description:
      'Donation processing platforms, custom financial expense trackers, and an automotive catalog system, where people can contribute to causes or invest and track returns.',
    stack: ['Vue.js', 'UI/UX'],
    link: 'https://yackiss.uk'
  },
  {
    name: 'Spotlight Healthcare',
    tag: 'timglobal · care management',
    description:
      'Duty management for care homes and hospitals: staff and service-user records, scheduling, clock in/out, shift-swap marketplace, incident reports, and more. I worked mainly on the staff and user management modules.',
    stack: ['Vue.js', 'Node.js'],
    link: 'https://timglobal.uk'
  },
  {
    name: 'LikenessHealth',
    tag: 'client project · health',
    description: 'A health-focused platform built for an external client.',
    stack: ['Vue.js'],
    link: 'https://likenesshealth.com'
  },
  {
    name: 'TimGlobal Agency page',
    tag: 'timglobal · marketing',
    description: 'The agency-facing page I built to represent TimGlobal.',
    stack: ['Vue.js'],
    link: 'https://agency.timglobal.uk'
  },
  {
    name: 'Afterlights NFT',
    tag: 'Client Concept · NFT / Web3',
    description: 'An interactive NFT landing page concept built around a dark fantasy experience, cinematic animations, and an immersive “Enter the Abyss” interaction.',
    stack: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'GSAP'],
    link: 'https://afterlights-twik.onrender.com'
    }
]

const contactItems = [
  {
    icon: EnvelopeIcon,
    label: 'patrickaghidi222005@gmail.com',
    href: 'mailto:patrickaghidi222005@gmail.com'
  },
  {
    icon: EnvelopeIcon,
    label: 'WhatsApp',
    href: whatsapp
  },
  {
    icon: MapPinIcon,
    label: 'Lagos, Nigeria',
    href: null
  },
  {
    icon: CodeBracketIcon,
    label: 'github.com/venith-creator',
    href: 'https://github.com/venith-creator'
  },
  {
    icon: LinkIcon,
    label: 'linkedin.com/in/patrick-aghidi-806365358',
    href: 'https://linkedin.com/in/patrick-aghidi-806365358'
  }
]
</script>

<template>
  <div class="min-h-screen bg-white text-[#0a0a0a] font-sans antialiased">
    <!-- ============================= NAVBAR ============================= -->
    <header
      class="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-[#e2e2de]"
    >
      <div class="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" class="flex items-center gap-2 shrink-0">
          <img
            v-if="logoUrl"
            :src="logoUrl"
            alt="Venith logo"
            class="h-12 w-auto"
          />
          <span v-else class="font-display font-semibold text-lg tracking-tight">
            Venith
          </span>
        </a>

        <!-- Only two real destinations, so there's nothing here to
             show a hamburger for or hide on small screens. -->
        <nav class="flex items-center gap-6 sm:gap-8">
          <router-link
            v-for="link in navLinks"
            :key="link.label"
            :to="link.to || link.href"
            class="text-sm text-[#4b4b46] hover:text-[#0a0a0a] transition-colors"
            >
            {{ link.label }}
            </router-link>
          <a
            :href="phone"
            class="text-sm font-medium border border-[#0a0a0a] px-3 py-1.5 sm:px-4 sm:py-2 hover:bg-[#0a0a0a] hover:text-white transition-colors"
          >
            Hire me
          </a>
        </nav>
      </div>
    </header>

    <main id="top" class="pt-16">
      <!-- ============================= HERO ============================= -->
      <section class="max-w-5xl mx-auto px-5 sm:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div class="grid sm:grid-cols-[1fr_auto] gap-10 items-start">
          <div>
            <p class="font-mono text-sm text-[#8a5a2b] mb-4">
              full stack software engineer
            </p>

            <h1 class="font-display text-4xl sm:text-6xl font-semibold leading-[1.05] tracking-tight">
              Aghidi Patrick Onomho
            </h1>

            <p class="mt-6 text-lg sm:text-xl text-[#3d3d38] max-w-xl leading-relaxed">
              Full Stack Software Engineer building production SaaS, healthcare,
                ecommerce and marketplace platforms with Vue.js, Node.js and TypeScript.
            </p>

            <p class="mt-4 text-sm text-[#6b6b64] max-w-xl">
              <span class="inline-block bg-[#b5541d]/10 text-[#8a5a2b] font-medium px-2 py-0.5 rounded">
                First Class Honours
              </span>
              in Electrical Engineering, 2026. Building software since 2025,
              currently a Full Stack Software Engineer at TimGlobal Ltd.
              Based in Lagos, Nigeria.
            </p>

            <div class="mt-8 flex flex-wrap items-center gap-4">
              <router-link
                :to="{ path: '/', hash: '#projects' }"
                class="inline-flex items-center gap-2 bg-[#0a0a0a] text-white text-sm font-medium px-5 py-3 hover:bg-[#2b2b28] transition-colors"
                >
                See the work
                <ArrowRightIcon class="w-4 h-4" />
                </router-link>
              <a
                :href="whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 border border-[#0a0a0a] text-sm font-medium px-5 py-3 hover:bg-[#0a0a0a] hover:text-white transition-colors"
                >
                Get in touch
                </a>
            </div>
          </div>

          <!-- small schematic mark, nods to the QR / circuit-board world he builds for -->
           
          <svg
            class="hidden sm:block w-28 h-28 shrink-0 mt-2"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.75" y="0.75" width="98.5" height="98.5" stroke="#0a0a0a" stroke-width="1.5" />
            <rect x="10" y="10" width="24" height="24" stroke="#0a0a0a" stroke-width="1.5" />
            <rect x="66" y="10" width="24" height="24" stroke="#0a0a0a" stroke-width="1.5" />
            <rect x="10" y="66" width="24" height="24" stroke="#0a0a0a" stroke-width="1.5" />
            <rect x="18" y="18" width="8" height="8" fill="#0a0a0a" />
            <rect x="74" y="18" width="8" height="8" fill="#0a0a0a" />
            <rect x="18" y="74" width="8" height="8" fill="#0a0a0a" />
            <rect x="46" y="46" width="8" height="8" fill="#b5541d" />
            <rect x="46" y="10" width="8" height="8" fill="#0a0a0a" />
            <rect x="46" y="66" width="8" height="8" fill="#0a0a0a" />
            <rect x="10" y="46" width="8" height="8" fill="#0a0a0a" />
            <rect x="66" y="46" width="8" height="8" fill="#0a0a0a" />
          </svg>
        </div>
      </section>

      <!-- ============================= WORK (experience + selected work) ============================= -->
      <section id="work" class="border-t border-[#e2e2de] scroll-mt-20">
        <div class="max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
          <h2 class="font-display text-2xl font-semibold mb-10">Experience</h2>

          <!-- clean experience cards -->
          <div class="grid sm:grid-cols-2 gap-6 mb-16">
            <div
              v-for="card in experienceCards"
              :key="card.title"
              class="border border-[#e2e2de] rounded-2xl p-6"
            >
              <div class="w-10 h-10 rounded-full bg-[#f7f7f5] flex items-center justify-center mb-5">
                <component :is="card.icon" class="w-5 h-5 text-[#0a0a0a]" />
              </div>
              <h3 class="font-display font-semibold text-lg">{{ card.title }}</h3>
              <p class="mt-1 text-sm text-[#3d3d38]">{{ card.subtitle }}</p>
              <p class="mt-3 font-mono text-xs text-[#6b6b64]">{{ card.meta }}</p>
              <span
                v-if="card.badge"
                class="inline-block mt-4 bg-[#b5541d]/10 text-[#8a5a2b] text-xs font-medium px-3 py-1 rounded-full"
              >
                {{ card.badge }}
              </span>
            </div>
          </div>

          <!-- selected work, links straight out to the live project -->
          <div id="projects" class="scroll-mt-24">
            <p class="font-mono text-xs text-[#8a5a2b] mb-6">
                Selected Work
            </p>
            </div>
          <div class="grid sm:grid-cols-2 gap-px bg-[#e2e2de] border border-[#e2e2de]">
            <a
              v-for="project in projects"
              :key="project.name"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="group bg-white p-6 flex flex-col hover:bg-[#f7f7f5] transition-colors"
            >
              <div class="flex items-start justify-between gap-3">
                <h3 class="font-display font-medium">{{ project.name }}</h3>
                <ArrowUpRightIcon
                  class="w-4 h-4 shrink-0 mt-1 text-[#6b6b64] group-hover:text-[#0a0a0a] transition-colors"
                />
              </div>
              <p class="font-mono text-xs text-[#8a5a2b] mt-1">{{ project.tag }}</p>
              <p class="mt-3 text-sm text-[#3d3d38] leading-relaxed">
                {{ project.description }}
              </p>
              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  v-for="tech in project.stack"
                  :key="tech"
                  class="font-mono text-[11px] text-[#4b4b46] border border-[#dcdcd8] px-2 py-1"
                >
                  {{ tech }}
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- ============================= CONTACT ============================= -->
      <section id="contact" class="border-t border-[#e2e2de] bg-[#f7f7f5] scroll-mt-20">
        <div class="max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <div class="border border-[#e2e2de] rounded-2xl bg-white p-8 sm:p-12 max-w-xl">
            <h2 class="font-display text-3xl sm:text-4xl font-semibold">
              Let's build something meaningful.
            </h2>
            <p class="mt-4 text-[#3d3d38]">
              I'm available for Full Stack, Vue.js, and SaaS development
              opportunities.
            </p>

            <div class="mt-8 space-y-4">
              <component
                :is="item.href ? 'a' : 'div'"
                v-for="item in contactItems"
                :key="item.label"
                :href="item.href"
                :target="item.href ? '_blank' : undefined"
                :rel="item.href ? 'noopener noreferrer' : undefined"
                class="flex items-center gap-3 text-sm text-[#2a2a26]"
                :class="item.href ? 'hover:text-[#0a0a0a] transition-colors w-fit' : ''"
              >
                <component :is="item.icon" class="w-5 h-5 text-[#8a5a2b] shrink-0" />
                {{ item.label }}
              </component>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- ============================= FOOTER ============================= -->
    <footer class="border-t border-[#e2e2de]">
      <div class="max-w-5xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p class="text-sm text-[#6b6b64]">
          © {{ new Date().getFullYear() }} Aghidi Patrick.
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

.font-display {
  font-family: 'Space Grotesk', system-ui, sans-serif;
}
.font-sans {
  font-family: 'Inter', system-ui, sans-serif;
}
.font-mono {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
}
</style>
