export default function Loading() {
  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        {/* Outer Ring */}
        <div className="w-20 h-20 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        {/* Inner Ring */}
        <div 
          className="absolute w-14 h-14 border-4 border-gold/20 border-b-gold rounded-full animate-spin" 
          style={{ animationDirection: 'reverse', animationDuration: '1.2s' }}
        ></div>
        {/* Center Dot */}
        <div className="absolute w-3 h-3 bg-primary rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}
