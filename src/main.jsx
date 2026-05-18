import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import posthog from 'posthog-js'
import * as amplitude from '@amplitude/unified'

amplitude.initAll('5262ec36913a7ccf47f75873b39ce925', {
  analytics: { autocapture: true },
  sessionReplay: { sampleRate: 1 },
})

posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY, {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  defaults: '2026-01-30',
  person_profiles: 'identified_only',
  enable_heatmaps: true,
  autocapture: true,
  capture_pageview: true,
  capture_pageleave: true,
  session_recording: {
    maskAllInputs: false,
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
