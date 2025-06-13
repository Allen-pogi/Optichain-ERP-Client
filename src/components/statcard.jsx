function StatCard({ label, value, change }) {
  return (
    <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-[#cedbe8]">
      <p className="text-[#0d141c] text-base font-medium leading-normal">{label}</p>
      <p className="text-[#0d141c] tracking-light text-2xl font-bold leading-tight">{value}</p>
      <p className="text-[#078838] text-base font-medium leading-normal">{change}</p>
    </div>
  );
}

export default StatCard;