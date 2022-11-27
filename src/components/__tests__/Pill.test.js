import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Pill from "../Pill.vue";
import { EVENT__PILL_CLICKED } from "../../commons";

describe("Pill.vue", () => {
  it("renders", () => {
    const wrapper = mount(Pill);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("emits clicked event if when clickable and clicked", async () => {
    const wrapper = mount(Pill, {
      props: {
        clickable: true,
      },
    });
    await wrapper.find("button").trigger("click");
    expect(
      wrapper.emitted(EVENT__PILL_CLICKED)
    ).toBeTruthy();
  });

  it("applies active and inactive classes according to active prop", () => {
    const active = mount(Pill, {
      props: {
        active: true,
        color: "test",
      },
    });
    expect(
      active.find("button").classes().join(" ")
    ).toContain("bg-test-active");
    expect(
      active.find("button").classes().join(" ")
    ).not.toContain("bg-test-inactive");

    const inactive = mount(Pill, {
      props: {
        active: false,
        color: "test",
      },
    });
    expect(
      inactive.find("button").classes().join(" ")
    ).not.toContain("bg-test-active");
    expect(
      inactive.find("button").classes().join(" ")
    ).toContain("bg-test-inactive");
  });
});
