import { IUserInfoVOParams, UserInfoVO } from "../../vos"

describe("UserInfoVO", () => {
  it("should set userId and userName correctly", () => {
    const params: IUserInfoVOParams = {
      userId: "12345",
      userName: "Falsy"
    }

    const userInfo = new UserInfoVO(params)

    expect(userInfo.userId).toBe("12345")
    expect(userInfo.userName).toBe("Falsy")
  })
})