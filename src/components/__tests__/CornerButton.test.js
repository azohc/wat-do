import { flushPromises, mount } from "@vue/test-utils";
import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import CornerButton from "../CornerButton.vue";
import { routes } from "../../routes";
import { createRouter, createWebHistory } from "vue-router";

let router;
beforeEach(async () => {
  router = createRouter({
    history: createWebHistory(),
    routes: routes,
  });

  router.push("/");
  await router.isReady();
});

describe("CornerButton.vue", () => {
  it("should render", async () => {
    const wrapper = mount(CornerButton, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should redirect to the LogView on click", async () => {
    const wrapper = mount(CornerButton, {
      props: {
        to: "Log",
      },
      global: {
        plugins: [router],
      },
    });

    const push = vi.spyOn(router, "push");
    await wrapper.find("a").trigger("click");
    await flushPromises();
    expect(push).toHaveBeenCalledOnce();
    expect(push).toHaveBeenLastCalledWith({
      name: "Log",
    });
  });

  it("should redirect to the RollView on click", async () => {
    const wrapper = mount(CornerButton, {
      props: {
        to: "Roll",
      },
      global: {
        plugins: [router],
      },
    });

    const push = vi.spyOn(router, "push");
    await wrapper.find("a").trigger("click");
    await flushPromises();
    expect(push).toHaveBeenCalledOnce();
    expect(push).toHaveBeenLastCalledWith({
      name: "Roll",
    });
  });
});
