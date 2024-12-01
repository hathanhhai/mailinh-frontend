import type { RendererNode } from 'vue'
import type { EllipsisProps } from 'naive-ui'
import type { IconifyIconProps } from '@iconify/vue'
import { NEllipsis, NImage, NTooltip } from 'naive-ui'
import { Icon } from '@iconify/vue'

export const useRender = () => {
  function renderIndex(currentPage: number, perPage: number, index: number) {
    const page = currentPage > 1 ? currentPage - 1 : 0
    return page * perPage + index + 1
  }

  function renderIcon(props: IconifyIconProps) {
    return () => h(Icon, props)
  }

  function renderEllipsis(label: string | RendererNode, props?: EllipsisProps) {
    return () =>
      h(NEllipsis, { tooltip: { keepAliveOnHover: false }, ...props }, { default: () => label })
  }

  function renderTooltipThumbnail(imagePath: string | null | undefined, node: VNode) {
    return h(
      NTooltip,
      { trigger: 'hover', keepAliveOnHover: false, style: { padding: '6px' } },
      {
        default: () =>
          h(NImage, {
            src: imagePath || '/no-image.svg',
            fallbackSrc: '/no-image.svg',
            fit: 'cover',
            width: 300,
            height: 180,
            class: 'cursor-pointer',
            previewDisabled: true
          }),
        trigger: () => node
      }
    )
  }

  return {
    renderIndex,
    renderIcon,
    renderEllipsis,
    renderTooltipThumbnail
  }
}
