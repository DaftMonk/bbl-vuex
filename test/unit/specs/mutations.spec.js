import { mutations } from '@/store'

const { increaseAge } = mutations

describe('mutations', () => {
  it('should increase age', function () {
    const state = {
      user: {
        profile: {
          age: 5
        }
      }
    }

    increaseAge(state)
    expect(state.user.profile.age).to.equal(6)
  })
})
