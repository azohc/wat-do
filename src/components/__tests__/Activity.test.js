import { createTestingPinia } from "@pinia/testing";
import { flushPromises, mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import Activity from "../Activity.vue";

describe("Activity.vue", () => {
  it("gets mounted", () => {
    const wrapper = mount(Activity);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("fetches when rolling prop is true", async () => {
    const fetchSpy = vi.fn();
    vi.stubGlobal("fetch", fetchSpy);

    mount(Activity, {
      props: {
        rolling: true,
      },
      global: {
        plugins: [createTestingPinia()],
      },
    });

    await flushPromises();
    // IDK why this fails
    expect(fetchSpy).toHaveBeenCalledOnce();
  });
});
