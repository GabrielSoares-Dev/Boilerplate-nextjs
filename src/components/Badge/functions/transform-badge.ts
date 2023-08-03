import type { BadgeColor } from '@components'

export const transformBadgeColor = (color?: BadgeColor) => {
  const colors = {
    DEFAULT: 'bg-blue-900 text-blue-300',
    DARK: 'bg-gray-700 text-gray-300',
    RED: 'bg-red-900 text-red-300',
    GREEN: 'bg-green-900 text-green-300',
    YELLOW: 'bg-yellow-900 text-yellow-300',
    INDIGO: 'bg-indigo-900 text-indigo-300',
    PURPLE: 'bg-purple-900 text-purple-300',
    PINK: 'bg-pink-900 text-pink-300',
  }

  return colors[color || 'DEFAULT']
}
