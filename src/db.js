const ACTIVITY_DONE = "ACTIVITY_DONE";

export const logActivityDone = (activity, time) => {
  console.log("would save", ACTIVITY_DONE, {
    activity,
    time,
  });
  //   localStorage.setItem(ACTIVITY_DONE, { activity, time });
};
