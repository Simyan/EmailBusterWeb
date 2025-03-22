import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/box')({
  component: Box,
})

function Box() {
  return <div>Hello "/box"!</div>
}
