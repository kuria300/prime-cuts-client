import { Clock3, Truck } from "lucide-react"

export function AnnouncementBanner() {
  return (
    <div className="bg-primary text-white">
      <div className="mx-auto flex min-h-9 max-w-7xl items-center justify-between gap-4 px-4 text-[10px] sm:px-6 lg:px-8">
        <p className="flex min-w-0 items-center gap-1.5">
          <Clock3 aria-hidden="true" className="size-4.5 shrink-0" />
          <span className="truncate">Open Mon–Fri 09:00–20:00 · Sat 11:00–15:00</span>
        </p>

        <p className="flex min-w-0 items-center gap-1.5 text-right">
          <Truck aria-hidden="true" className="size-4.5 shrink-0" />
          <span className="truncate">Free delivery in Nairobi CBD over KES 3,000</span>
        </p>
      </div>
    </div>
  )
}