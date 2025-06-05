// 'use client'

// import { motion } from 'framer-motion'

// export default function LoadingScreen() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9999] flex items-center justify-center"
//     >
//       <div className="relative w-16 h-16">
//         {/* Main rotating ring */}
//         <motion.div
//           className="absolute inset-0 border-2 border-purple-500/20 rounded-full"
//           animate={{
//             rotate: 360,
//           }}
//           transition={{
//             rotate: {
//               duration: 2,
//               repeat: Infinity,
//               ease: "linear"
//             }
//           }}
//         />

//         {/* Secondary rotating ring */}
//         <motion.div
//           className="absolute inset-2 border-2 border-purple-500/40 rounded-full"
//           animate={{
//             rotate: -360,
//           }}
//           transition={{
//             rotate: {
//               duration: 1.5,
//               repeat: Infinity,
//               ease: "linear"
//             }
//           }}
//         />

//         {/* Center dot with glow */}
//         <motion.div
//           className="absolute top-1/2 left-1/2 w-2 h-2 bg-purple-500 rounded-full -translate-x-1/2 -translate-y-1/2"
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.5, 1, 0.5]
//           }}
//           transition={{
//             duration: 1.5,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         >
//           <motion.div
//             className="absolute inset-0 bg-purple-500 rounded-full blur-sm"
//             animate={{
//               scale: [1, 1.5, 1],
//               opacity: [0.3, 0, 0.3]
//             }}
//             transition={{
//               duration: 1.5,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           />
//         </motion.div>
//       </div>
//     </motion.div>
//   )
// } 