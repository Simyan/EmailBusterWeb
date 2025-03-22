import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/boxes')({
  component: Boxes,
})

function Boxes() {
  return <div>Hello "/boxes"!</div>
}
