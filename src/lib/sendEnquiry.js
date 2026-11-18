// Sends a form submission to webbiezinfotech@gmail.com using Web3Forms (free, no backend needed).
// The access key comes from .env -> VITE_WEB3FORMS_KEY  (see README-mail-fix.md)
const KEY = import.meta.env.VITE_WEB3FORMS_KEY

export async function sendEnquiry({ subject, replyTo, name, fields }) {
  if (!KEY) {
    console.error('VITE_WEB3FORMS_KEY is missing. Add it to .env and restart the dev server / rebuild.')
    throw new Error('missing-key')
  }
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: KEY,
      subject,
      from_name: 'Webbiez Infotech Website',
      name,
      email: replyTo, // so you can hit "Reply" in Gmail and answer the customer directly
      botcheck: '',
      ...fields
    })
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok || !data.success) throw new Error(data.message || 'send-failed')
  return data
}
