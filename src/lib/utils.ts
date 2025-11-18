import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combina classes CSS com suporte a Tailwind CSS
 * Usa clsx para condicionais e tailwind-merge para resolver conflitos
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Converte HSL para Hex (para uso com Chart.js)
 */
export function hslToHex(hsl: string): string {
  const hslValues = hsl.trim().match(/[\d.]+/g)
  if (!hslValues || hslValues.length < 3) return '#000000'

  const h = parseFloat(hslValues[0])
  const s = parseFloat(hslValues[1]) / 100
  const l = parseFloat(hslValues[2]) / 100

  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = l - c / 2

  let r = 0,
    g = 0,
    b = 0

  if (h < 60) {
    r = c
    g = x
    b = 0
  } else if (h < 120) {
    r = x
    g = c
    b = 0
  } else if (h < 180) {
    r = 0
    g = c
    b = x
  } else if (h < 240) {
    r = 0
    g = x
    b = c
  } else if (h < 300) {
    r = x
    g = 0
    b = c
  } else {
    r = c
    g = 0
    b = x
  }

  const toHex = (n: number) => {
    const hex = Math.round((n + m) * 255).toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

/**
 * Obtém cor do tema CSS para uso em Canvas (Chart.js)
 */
export function getThemeColor(variable: string): string {
  if (typeof window === 'undefined') return '#000000'

  const style = getComputedStyle(document.documentElement)
  const value = style.getPropertyValue(variable).trim()

  if (!value) return '#000000'

  // Se já está em formato hex/rgb, retorna direto
  if (value.startsWith('#') || value.startsWith('rgb')) return value

  // Se está em HSL, converte
  return hslToHex(value)
}

/**
 * Formata valor como moeda brasileira
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

/**
 * Formata número com separadores
 */
export function formatNumber(value: number, decimals = 0): string {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value)
}

/**
 * Gera ID único
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9)
}
