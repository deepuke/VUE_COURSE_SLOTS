import { mount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld test", () => {
  it("should show message on button click", async () => {
    const wrapper = mount(HelloWorld);
    const { vm } = wrapper;
    wrapper.setData({
      name: "Adam",
    });
    const button = wrapper.find("button");
    await button.trigger("click");
    const p = wrapper.find("p");
    expect(p.text()).toBe("Hello Adam");
  });
});
