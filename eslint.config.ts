import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'lib',

  pnpm: true,
  yaml: true,
  jsonc: true,
  antislop: true,
  stylistic: true,
})
