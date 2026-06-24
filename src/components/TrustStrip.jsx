import { BadgeCheck, HandHeart, ShieldCheck, Truck } from 'lucide-react'

const features = [
  { icon: BadgeCheck, label: 'Authentic Banarasi weaves' },
  { icon: HandHeart, label: 'Boutique curation' },
  { icon: Truck, label: 'India-wide delivery support' },
  { icon: ShieldCheck, label: 'Secure WhatsApp enquiry' },
]

function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="PaaN promises">
      {features.map(({ icon: Icon, label }) => (
        <div key={label}>
          <Icon size={18} aria-hidden="true" />
          <span>{label}</span>
        </div>
      ))}
    </section>
  )
}

export default TrustStrip
