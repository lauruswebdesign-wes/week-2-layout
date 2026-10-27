import Button from "../components/Button";

export default function Home() {
  return (
    <div className="text-center max-w-2xl mx-auto flex flex-col items-center">
      {/* Black Headline */}
      <h1 className="text-5xl font-extrabold text-black tracking-tight leading-tight">
        Be Found Be First Be the Solution
      </h1>
      
      {/* Subheadline */}
      <p className="mt-4 text-lg text-gray-600 max-w-xl leading-relaxed">
        Your organizations first impression is too important to leave to chance. 
        Let us help your online brand.
      </p>
      
      {/* Reusable Button with your ctaText prop */}
      <div className="mt-8">
        <Button ctaText="Book Free Appointment" />
      </div>
    </div>
  );
}
