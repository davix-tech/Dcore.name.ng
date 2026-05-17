'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Systems',
    href: '/systems',
  },
  {
    label: 'REDEN',
    href: '/reden',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export function Navigation() {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <motion.nav
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500
          ${
            scrolled
              ? 'border-b border-white/10 bg-black/40 backdrop-blur-2xl'
              : 'bg-transparent'
          }
        `}
      >
        {/* Runtime Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="h-24 flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="relative flex items-center gap-4 group"
            >
              {/* Intelligence Node */}
              <motion.div
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: 'easeInOut',
                }}
                className="
                  relative
                  w-3 h-3
                  rounded-full
                  bg-blue-500
                  shadow-[0_0_25px_rgba(59,130,246,0.9)]
                "
              >
                <div className="absolute inset-0 rounded-full bg-blue-500 blur-md opacity-80" />
              </motion.div>

              <div>
                <div
                  className="
                    text-xl md:text-2xl
                    font-semibold
                    tracking-[-0.12em]
                    text-white
                  "
                >
                  DCORE
                </div>

                <div
                  className="
                    hidden md:block
                    text-[10px]
                    uppercase
                    tracking-[0.35em]
                    text-white/30
                    mt-1
                  "
                >
                  Adaptive Infrastructure
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== '/' && pathname.startsWith(item.href))

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative"
                  >
                    <motion.div
                      whileHover={{
                        y: -1,
                      }}
                      className={`
                        relative
                        px-5
                        h-11
                        rounded-2xl
                        flex items-center
                        overflow-hidden
                        border
                        transition-all duration-300
                        ${
                          active
                            ? 'border-blue-500/30 bg-blue-500/10 text-white'
                            : 'border-transparent text-white/55 hover:text-white hover:border-white/10 hover:bg-white/[0.03]'
                        }
                      `}
                    >
                      {/* Active Glow */}
                      {active && (
                        <motion.div
                          layoutId="nav-active"
                          className="
                            absolute inset-0
                            bg-blue-500/[0.08]
                            backdrop-blur-xl
                          "
                          transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}

                      <span className="relative z-10 text-sm tracking-wide">
                        {item.label}
                      </span>
                    </motion.div>
                  </Link>
                )
              })}
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Runtime Status */}
              <div
                className="
                  flex items-center gap-3
                  px-4 h-11
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                "
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />

                <span className="text-xs uppercase tracking-[0.25em] text-white/45">
                  Runtime Active
                </span>
              </div>

              {/* Access Button */}
              <Link
                href="/auth"
                className="
                  h-11 px-5
                  rounded-2xl
                  border border-blue-500/30
                  bg-blue-500/10
                  hover:bg-blue-500
                  hover:border-blue-500
                  text-white
                  transition-all duration-300
                  flex items-center
                  text-sm
                "
              >
                Access Infrastructure
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                lg:hidden
                relative
                w-12 h-12
                rounded-2xl
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                flex items-center justify-center
              "
            >
              <div className="flex flex-col gap-1.5">
                <motion.div
                  animate={isOpen ? { rotate: 45, y: 5 } : {}}
                  className="w-5 h-[1.5px] bg-white"
                />

                <motion.div
                  animate={isOpen ? { opacity: 0 } : {}}
                  className="w-5 h-[1.5px] bg-white"
                />

                <motion.div
                  animate={isOpen ? { rotate: -45, y: -5 } : {}}
                  className="w-5 h-[1.5px] bg-white"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              fixed top-24 left-4 right-4 z-40
              rounded-[32px]
              border border-white/10
              bg-black/60
              backdrop-blur-2xl
              overflow-hidden
              lg:hidden
            "
          >
            <div className="p-4">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const active =
                    pathname === item.href ||
                    (item.href !== '/' && pathname.startsWith(item.href))

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`
                        flex items-center justify-between
                        h-14 px-5
                        rounded-2xl
                        transition-all duration-300
                        border
                        ${
                          active
                            ? 'bg-blue-500/10 border-blue-500/20 text-white'
                            : 'bg-white/[0.02] border-transparent text-white/60'
                        }
                      `}
                    >
                      <span>{item.label}</span>

                      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    </Link>
                  )
                })}
              </div>

              <Link
                href="/auth"
                onClick={() => setIsOpen(false)}
                className="
                  mt-4
                  h-14
                  rounded-2xl
                  flex items-center justify-center
                  bg-blue-500
                  text-white
                "
              >
                Access Infrastructure
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
            }
