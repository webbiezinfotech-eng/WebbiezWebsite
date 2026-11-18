export default function Blobs({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="animate-aurora absolute -left-24 top-[-10%] h-[20rem] w-[20rem] sm:-left-32 sm:h-[34rem] sm:w-[34rem] rounded-full bg-brand-500/25 blur-[130px]" />
      <div
        className="animate-aurora absolute -right-20 top-[22%] h-[16rem] w-[16rem] sm:-right-24 sm:h-[26rem] sm:w-[26rem] rounded-full bg-brand-400/20 blur-[120px]"
        style={{ animationDelay: '-6s' }}
      />
      <div
        className="animate-aurora absolute bottom-[-14%] left-1/3 h-[16rem] w-[16rem] sm:h-[24rem] sm:w-[24rem] rounded-full bg-amber-brand/10 blur-[130px]"
        style={{ animationDelay: '-11s' }}
      />
    </div>
  )
}
