import type { GlobalThemeOverrides } from 'naive-ui'

export default {
  common: {
    fontFamily:
      'Inter, v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    fontSize: '14px',
    fontSizeMedium: '14px',
    fontSizeLarge: '16px',
    fontSizeHuge: '18px'
  },
  Button: {
    borderRadiusMedium: '4px'
  },
  Card: {
    paddingSmall: '16px 20px'
  },
  Tabs: {
    tabGapSmallLine: '32px',
    tabPaddingSmallLine: '8px 0 4px',
    tabFontWeightActive: 600
  },
  Tag: {
    fontSizeTiny: '12px',
    fontSizeSmall: '14px',
    fontSizeMedium: '16px',
    fontSizeLarge: '18px'
  }
} as GlobalThemeOverrides
