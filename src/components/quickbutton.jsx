// Quick access button
function QuickButton({ label, active }) {
  return (
    <button
      className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 ${
        active
          ? "bg-[#0c7ff2] text-slate-50"
          : "bg-[#e7edf4] text-[#0d141c]"
      } text-sm font-bold leading-normal tracking-[0.015em]`}
    >
      <span className="truncate">{label}</span>
    </button>
  );
}

export default QuickButton; 