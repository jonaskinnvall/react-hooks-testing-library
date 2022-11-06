/**
 * @jest-environment node
 */
import { useState } from 'react'
import { renderHook, act } from '..'

// This verifies that renderHook can be called in
// a SSR-like environment.
describe('renderHook', () => {
  function useLoading() {
    if (typeof window !== undefined) {
      const [loading, setLoading] = useState(false)
      return { loading, setLoading }
    }
  }
  test('should not throw in SSR environment', () => {
    expect(() => renderHook(() => useLoading())).not.toThrowError('document is not defined')
  })
})
