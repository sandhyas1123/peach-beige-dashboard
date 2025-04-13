import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        beige: {
          DEFAULT: 'hsl(35, 20%, 95%)',
          light: 'hsl(35, 20%, 98%)',
          dark: 'hsl(35, 20%, 90%)'
        },
        green: {
          DEFAULT: 'hsl(145, 60%, 10%)',
          light: 'hsl(145, 60%, 30%)',
          accent: 'hsl(145, 60%, 20%)'
        },
        primary: {
          DEFAULT: 'hsl(145 60% 10%)',
          foreground: 'hsl(35 20% 95%)'
        },
        secondary: {
          DEFAULT: 'hsl(145 10% 80%)',
          foreground: 'hsl(145 60% 10%)'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        peach: {
          light: '#FDE1D3',
          DEFAULT: '#FFB597',
          dark: '#F8A280'
        },
        purple: {
          light: '#D6BCFA',
          dark: '#1A1F2C'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out'
      },
      backgroundImage: {
        'beige-green-gradient': 'linear-gradient(135deg, #F1F0FB 0%, #F2FCE2 100%)',
        'peach-gradient': 'linear-gradient(135deg, #FDE1D3 0%, #E2D1C3 100%)',
        'beige-gradient': 'linear-gradient(109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1%)'
      },
      boxShadow: {
        '3d-hover': '0 10px 20px rgba(0, 0, 0, 0.1)',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
