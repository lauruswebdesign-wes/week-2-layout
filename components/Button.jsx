export default function Button({ ctaText }) {
  return (
    <button className="px-6 py-3 bg-[#010D40] text-white font-medium rounded-lg hover:bg-[#010D40]/90 transition-all cursor-pointer">
      {ctaText}
    </button>
  );
}