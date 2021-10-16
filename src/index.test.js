const index = require("./index")
it('should jest works', () => {
  expect(1 + 1).toEqual(2)
})

// @ponicode
describe("index.babelWorksWithExports", () => {
    test("0", () => {
        let callFunction = () => {
            index.babelWorksWithExports()
        }
    
        expect(callFunction).not.toThrow()
    })
})
