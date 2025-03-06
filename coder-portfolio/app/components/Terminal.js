export default function Terminal({ children }) {
  return (
    <div className="terminal-window bg-black/40 backdrop-blur-cyber border-2 border-cyber-purple p-6 shadow-glow">
      <div className="terminal-header flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <div className="font-terminal text-cyber-purple">
        {children}
      </div>
    </div>
  )
}